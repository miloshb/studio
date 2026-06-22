// src/utils/currency.ts

// Format a number into a localized currency string
export function formatCurrency(
  value: number,
  currency: "EUR" | "USD" | "GBP",
  locale: "de-DE" | "en-US" | "en-GB" = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Currency trio helpers
export interface PriceData {
  eur: number;
  usd: number;
  gbp: number;
}

// Overload 1: accept a row object
export function formatTrio(
  row: PriceData,
  locale: "de-DE" | "en-US" | "en-GB"
): { eur: string; usd: string; gbp: string };

// Overload 2: accept individual numbers
export function formatTrio(
  eur: number,
  usd: number,
  gbp: number,
  locale: "de-DE" | "en-US" | "en-GB"
): { eur: string; usd: string; gbp: string };

// Implementation
export function formatTrio(
  a: PriceData | number,
  b: number | "de-DE" | "en-US" | "en-GB",
  c?: number,
  d?: "de-DE" | "en-US" | "en-GB"
) {
  // Case 1: formatTrio(row, locale)
  if (typeof a === "object") {
    const row = a as PriceData;
    const locale = b as "de-DE" | "en-US" | "en-GB";
    return {
      eur: formatCurrency(row.eur, "EUR", locale),
      usd: formatCurrency(row.usd, "USD", locale),
      gbp: formatCurrency(row.gbp, "GBP", locale),
    };
  }

  // Case 2: formatTrio(eur, usd, gbp, locale)
  const eur = a as number;
  const usd = b as number;
  const gbp = c as number;
  const locale = d as "de-DE" | "en-US" | "en-GB";

  return {
    eur: formatCurrency(eur, "EUR", locale),
    usd: formatCurrency(usd, "USD", locale),
    gbp: formatCurrency(gbp, "GBP", locale),
  };
}
