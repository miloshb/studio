// src/data/currency.ts
/**
 * Multi-Currency utilities and data types.
 */
import type { SupportedLocale, LocalizedString } from "./i18n.ts";
import { debug, info } from "./config.ts"

export type SupportedCurrency = "EUR" | "USD" | "GBP";

// Multi-Currency Pricing
export interface PriceData {
  eur: number;  // Price in EUR
  usd?: number; // Price in USD (optional, default: ~1.20 * EUR)
  gbp?: number; // Price in GBP (optional, default: ~0.90 * EUR)
  calculate?: boolean; // Calculate USD and GBP values from EUR when set to true
  billingUnit?: LocalizedString; // Billing unit for price (default: none)
  discountApply?: number; // Discount (as %) to apply before displaying the price
}

/**
 * Calculate USD and GBP dynamically from EUR with psychological rounding and an FX risk buffer to protect EUR accounting.
 * @param eurAmount EUR amount to convert
 * @returns EUR, USD, and GBP amounts
 */
export function currencyCalc(eurAmount: number): { eur: number; usd: number; gbp: number } {
  if (eurAmount === 0) return { eur: 0, usd: 0, gbp: 0 };
  const absEur = Math.abs(eurAmount);
  const sign = Math.sign(eurAmount);

  const usdRaw = absEur * 1.20;
  const gbpRaw = absEur * 0.875;

  let usd: number;
  let gbp: number;

  if (absEur < 50) {
    usd = Math.ceil(usdRaw / 5) * 5;
    gbp = Math.ceil(gbpRaw / 2) * 2;
  } else if (absEur < 400) {
    usd = Math.ceil(usdRaw / 5) * 5;
    gbp = Math.ceil(gbpRaw / 5) * 5;
  } else if (absEur < 1600) {
    usd = Math.ceil(usdRaw / 100) * 100;
    gbp = Math.ceil(gbpRaw / 50) * 50;
  } else {
    usd = Math.ceil(usdRaw / 100) * 100;
    gbp = Math.ceil(gbpRaw / 100) * 100;
  }

  return {
    eur: eurAmount,
    usd: sign * usd,
    gbp: sign * gbp,
  };
};

// Overload 1: accept a price data object
/**
 * Format a price data object for multicurrency display.
 * @param priceData Price data to format
 * @param locale Locale to use for formatting
 */
export function formatMultiCurrency(
  priceData: PriceData,
  locale: SupportedLocale
): string[];

// Overload 2: accept individual numbers
/**
 * Format individual currency amounts for multicurrency display.
 * @param eur EUR amount to format
 * @param usd USD amount to format
 * @param gbp GBP amount to format
 * @param locale Locale to use for formatting
 */
export function formatMultiCurrency(
  eur: number,
  usd: number,
  gbp: number,
  locale: SupportedLocale
): string[];

// Overload 3: accept eur and locale only, with usd and gbp undefined
/**
 * Format EUR amount for multicurrency display.
 * @param eur EUR amount to format
 * @param locale Locale to use for formatting
 */
export function formatMultiCurrency(
  eur: number,
  locale: SupportedLocale
): string[];

// Implementation for multicurrency formatting
/**
 * Format currency amounts for multicurrency display. Locale is required (either 2nd or 4th argument).
 * @param a Price data or EUR amount
 * @param b Locale or USD amount
 * @param c GBP amount
 * @param d Locale
 * @returns Formatted currency strings
 */
export function formatMultiCurrency(
  a: PriceData | number,
  b: number | SupportedLocale,
  c?: number,
  d?: SupportedLocale
) {
  let eur: number;
  let usd: number | undefined;
  let gbp: number | undefined;
  let locale: SupportedLocale;

  if(debug) {
    console.log("DEBUG: a =", a);
    console.log("DEBUG: b =", b);
    console.log("DEBUG: c =", c);
    console.log("DEBUG: d =", d);
  }
  if (typeof b !== "number" && a !== null) {
    if (typeof a === "number") {
      // Case 3: (eur, locale)
      console.log("DEBUG: Case 3: (eur, locale)");
      eur = a as number;
    } else { // a is PriceData
      // Case 1: (p, locale)
      console.log("DEBUG: Case 1: (p, locale)");
      const p = a as PriceData;
      ({ eur, usd, gbp } = discountedPrice(p));
    }
    locale = b as SupportedLocale;
  } else {
    // Case 2: (eur, usd, gbp, locale)
    console.log("DEBUG: Case 2: (eur, usd, gbp, locale)");
    eur = a as number;
    usd = b as number;
    gbp = c as number;
    locale = d as SupportedLocale;
  }

  if(info) {
    console.log("INFO: eur =", eur);
    console.log("INFO: usd =", usd);
    console.log("INFO: gbp =", gbp);
    console.log("INFO: locale =", locale);
  }
  return [
    formatCurrency(eur, "EUR", locale),
    formatCurrency(usd, "USD", locale),
    formatCurrency(gbp, "GBP", locale),
  ].filter(Boolean) as string[];
}

/**
 * Calculate the discounted EUR price for PriceData if discountApply is set, otherwise calculate the EUR price.
 * @param p Price data for which to calculate the discounted price
 * @returns Discounted price(s)
 */
export function discountedPrice(p: PriceData): { eur: number; usd?: number; gbp?: number } {
  let eur: number;
  let usd: number | undefined;
  let gbp: number | undefined;
  const factor = 1 - (p.discountApply || 0) / 100;
  if (p.calculate) {
    return currencyCalc(p.eur * factor);
  }
  const scale = (val?: number) => (val === undefined ? undefined : val * factor);
  eur = p.eur * factor;
  usd = scale(p.usd);
  gbp = scale(p.gbp);
  return { eur, usd, gbp };
}

// Format a number into a localized currency string
function formatCurrency(
  value: number | undefined,
  currency: SupportedCurrency,
  locale: SupportedLocale = "en-US",
) {
  if (value === undefined || isNaN(value)) {
    return undefined;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
