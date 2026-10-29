// src/data/i18n.ts
/**
 * Detects the correct layout locale given an Astro URL pathname.
 * Localization functions and type definitions.
 */

// Supported website lanugages (first listed is primary/default)
export const LANGS = ["en", "de"] as const;
export type Language = typeof LANGS[number];
export const defaultLocale = LANGS[0];
type DefaultLocale = typeof defaultLocale;
// Must be a simple string or have the default locale string specified with other locales optional
export type LocalizedString = string | (Record<DefaultLocale, string> & Partial<Record<Exclude<Language, DefaultLocale>, string>>);
// Unlike LocalizedString, LangString requires all supported languages to be defined
export type LangString = Record<Language, string>;

// Helper to resolve localized text with fallback to default locale
export function localeString(
    text: LocalizedString | LangString | undefined,
    locale: Language
  ): string
{
  if (!text) return "";
  if (typeof text === "string") return text;
  return text[locale] || text[defaultLocale] || "";
};

export type SupportedLocale = "de-DE" | "en-US" | "en-GB" | "hr-HR";

export function getLocaleFromUrl(url: URL): SupportedLocale {
  const pathname = url.pathname;

  if (pathname.startsWith("/de")) {
    return "de-DE";
  }
  if (pathname.startsWith("/en")) {
    return "en-US";
  }
  if (pathname.startsWith("/hr")) {
    return "hr-HR";
  }
  if (pathname.startsWith("/gb")) {
    return "en-GB";
  }

  return "en-US"; // Default fallback
}
