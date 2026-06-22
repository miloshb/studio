// src/utils/currency.ts
import type { SupportedLocale } from "./i18n";
export type SupportedCurrency = "EUR" | "USD" | "GBP";

// Format a number into a localized currency string
export function formatCurrency(
  value: number | undefined,
  currency: SupportedCurrency,
  locale: SupportedLocale = "en-US"
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

// Multi-Currency helpers
export interface PriceData {
  eur: number;
  usd?: number;
  gbp?: number;
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

// Implementation
export function formatMultiCurrency(
  a: PriceData | number,
  b: number | SupportedLocale,
  c?: number,
  d?: SupportedLocale
) {
  let eur: number | undefined;
  let usd: number | undefined;
  let gbp: number | undefined;
  let locale: SupportedLocale;

  if (typeof a === "object" && a !== null) {
    // Case 1: (row, locale)
    const row = a as PriceData;
    eur = row.eur;
    usd = row.usd;
    gbp = row.gbp;
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
