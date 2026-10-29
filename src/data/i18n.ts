// src/data/i18n.ts
/**
 * Detects the correct layout locale given an Astro URL pathname.
 * Localization functions and type definitions.
 */

// Supported website lanugages (first listed is primary/default)
export const LANGS = ["en", "de"] as const;
export type Language = typeof LANGS[number];
export const defaultLang = LANGS[0];
type DefaultLang = typeof defaultLang;
// Supported locales for content formatting
export type SupportedLocale = "en-US" | "de-DE" | "en-GB" | "hr-HR";

// Must be a simple string or have the default locale string specified with other locales optional
export type LocalizedString = string | (Record<DefaultLang, string> & Partial<Record<Exclude<Language, DefaultLang>, string>>);
// Unlike LocalizedString, LangString requires all supported languages to be defined
export type LangString = Record<Language, string>;

export const LocaleToLang: Record<SupportedLocale, Language> = {
  "en-US": "en",
  "de-DE": "de",
  "en-GB": "en",
  "hr-HR": defaultLang, // defaultLang until 'hr' is implemented
}

// Helper to resolve localized text with fallback to default locale
export function localeString(
    text: LocalizedString | LangString | undefined,
    locale: Language | SupportedLocale
  ): string
{
  if (!text) return "";
  if (typeof text === "string") return text;
  // Convert SupportedLocale (e.g. 'de-DE') to Language ('de') if needed
  const lang: Language = (locale in LocaleToLang)
    ? LocaleToLang[locale as SupportedLocale]
    : (locale as Language);
  return text[lang] || text[defaultLang] || "";
};

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
