// src/utils/currency.ts

// Format a number into a localized currency string
export function formatCurrency(
  value: number | undefined,
  currency: "EUR" | "USD" | "GBP",
  locale: "de-DE" | "en-US" | "en-GB" = "en-US"
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
  locale: "de-DE" | "en-US" | "en-GB"
): string[];

// Overload 2: accept individual numbers
export function formatMultiCurrency(
  eur: number,
  usd: number,
  gbp: number,
  locale: "de-DE" | "en-US" | "en-GB"
): string[];

// Implementation
export function formatMultiCurrency(
  a: PriceData | number,
  b: number | "de-DE" | "en-US" | "en-GB",
  c?: number,
  d?: "de-DE" | "en-US" | "en-GB"
) {
  let eur: number | undefined;
  let usd: number | undefined;
  let gbp: number | undefined;
  let locale: "de-DE" | "en-US" | "en-GB";

  if (typeof a === "object" && a !== null) {
    // Case 1: (row, locale)
    const row = a as PriceData;
    eur = row.eur;
    usd = row.usd;
    gbp = row.gbp;
    locale = b as "de-DE" | "en-US" | "en-GB";
  } else {
    // Case 2: (eur, usd, gbp, locale)
    eur = a as number;
    usd = b as number;
    gbp = c as number;
    locale = d as "de-DE" | "en-US" | "en-GB";
  }

  return [
    formatCurrency(eur, "EUR", locale),
    formatCurrency(usd, "USD", locale),
    formatCurrency(gbp, "GBP", locale),
  ].filter(Boolean);
}
