// src/data/tax.ts
import type { SupportedCurrency } from "./currency.ts";
import type { LocalizedString } from "./i18n.ts";
import type { Category } from "./types.ts";

export interface TaxInfo {
  label: LocalizedString; // Tax label (e.g. PDV, turistička pristojba)
  currency: SupportedCurrency; // Primary currency for tax calculations (default: EUR)
  tax: number; // Tax (either as a percentage or fixed amount)
  fixed?: boolean; // Whether the tax is a fixed amount or percentage (default: false)
  included?: boolean; // Whether the tax is included in the displayed rate (default: true)
  start?: string; // Start date of the tax (DD-MM), if seasonal
  end?: string; // End date of the tax (DD-MM), if seasonal
  billingUnit?: LocalizedString; // Billing unit for tax
  note?: string; // Optional note for the tax - internal use (e.g. availability, restrictions, clarifications)
};

// VAT definitions
export const VAT_ACCOMMODATION: TaxInfo = {
  tax: 13,
  label: {
    en: "VAT - Reduced (Accommodation)",
    de: "MwSt. - Ermäßigt (Unterkunft)",
    hr: "PDV - Snižena stopa (Smještaj)",
  },
  currency: "EUR",
  included: true,
} as const;
export const VAT_STANDARD: TaxInfo = {
  tax: 25,
  label: {
    en: "VAT - Standard",
    de: "MwSt. - Standard",
    hr: "PDV - Opća stopa",
  },
  currency: "EUR",
  included: true,
} as const;

// Tourist tax definitions
const TOURIST_TAX: TaxInfo = {
  tax: 2.5,
  label: "Tourist tax",
  currency: "EUR",
  fixed: true,
  included: true,
  billingUnit: {
    en: "per person per night (youth: 50%; child: 0)",
    de: "pro Person pro Nacht (Jugendliche: 50%; Kinder: 0)",
    hr: "po osobi po noći (mladi: 50%; dijete: 0)",
  },
} as const;
export const TOURIST_TAX_SUMMER: TaxInfo = {
  ...TOURIST_TAX,
  label: {
    en: "Tourist tax - Summer",
    de: "Kurtaxe - in der Saison",
    hr: "Turistička pristojba - u sezoni",
  },
  start: "01-04",
  end: "30-09",
} as const;
export const TOURIST_TAX_WINTER: TaxInfo = {
  ...TOURIST_TAX,
  tax: 1.8,
  label: {
    en: "Tourist tax - Winter",
    de: "Kurtaxe - außerhalb der Saison",
    hr: "Turistička pristojba - van sezone",
  },
  start: "01-10",
  end: "31-03",
} as const;
// Flat rate tourist tax per registered person capacity
export const TOURIST_TAX_FLAT: TaxInfo = {
  ...TOURIST_TAX,
  tax: 70,
  label: {
    en: "Tourist tax - Flat rate per bed",
    de: "Kurtaxe - Pauschale pro Bett",
    hr: "Turistička pristojba - paušal po krevetu",
  },
} as const;

/**
 * Applicable taxes by product category.
 */
export const categoryTax: Record<Category, TaxInfo[]> = {
  class: [ VAT_STANDARD ],
  retreat: [ VAT_STANDARD ],
  stay: [
    VAT_ACCOMMODATION,
    TOURIST_TAX_SUMMER,
    TOURIST_TAX_WINTER,
  ],
  reservation: [ VAT_STANDARD ],
} as const;
