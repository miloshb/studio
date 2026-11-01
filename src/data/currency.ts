// src/data/currency.ts
/**
 * Multi-Currency utilities and data types.
 */
import type { SupportedLocale, LocalizedString } from "./i18n.ts";
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

// Format a number into a localized currency string
export function formatCurrency(
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

// Overload 1: accept a row object
export function formatMultiCurrency(
  row: PriceData,
  locale: SupportedLocale
): string[];

// Overload 2: accept individual numbers
export function formatMultiCurrency(
  eur: number,
  usd: number,
  gbp: number,
  locale: SupportedLocale
): string[];

// Implementation for multicurrency formatting
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

  if (typeof a === "object" && a !== null) {
    // Case 1: (row, locale)
    const row = a as PriceData;
    let factor = 1 - (row.discountApply || 0)/100;
    if (row.calculate) {
      ({eur, usd, gbp} = currencyCalc(row.eur * factor));
    } else {
      const scale = (val?: number) => (val === undefined ? undefined : val * factor);
      eur = row.eur * factor;
      usd = scale(row.usd);
      gbp = scale(row.gbp);
    }
    locale = b as SupportedLocale;
  } else {
    // Case 2: (eur, usd, gbp, locale)
    eur = a as number;
    usd = b as number;
    gbp = c as number;
    locale = d as SupportedLocale;
  }

  return [
    formatCurrency(eur, "EUR", locale),
    formatCurrency(usd, "USD", locale),
    formatCurrency(gbp, "GBP", locale),
  ].filter(Boolean) as string[];
}
