// src/data/i18n.ts
/**
 * Detects the correct layout locale given an Astro URL pathname.
 * Localization functions and type definitions.
 */

// Supported website lanugages (first listed is primary/default)
export const LANGS = ["en", "de"] as const;
export const defaultLang = LANGS[0];
type DefaultLang = typeof defaultLang;
export type PublicLanguage = typeof LANGS[number];
type Language = PublicLanguage | "hr"; // Additional languages can be added here for internal use without publishing
// Supported locales for content formatting
export type SupportedLocale = "en-US" | "de-DE" | "en-GB" | "hr-HR";

// Must be a simple string or have the default locale string specified with other locales optional
export type LocalizedString = string |
  (Record<DefaultLang, string>
    & Partial<Record<Exclude<Language, DefaultLang>, string>>);
// Unlike LocalizedString, LangString requires all supported languages to be defined
export type LangString = Record<PublicLanguage, string>;

export const LocaleToLang: Record<SupportedLocale, Language> = {
  "en-US": "en",
  "de-DE": "de",
  "en-GB": "en",
  "hr-HR": "hr",
}

// Helper to resolve localized text with fallback to default locale
/**
 * Resolves localized text with fallback to the default locale.
 * @param text Localized text or string to resolve
 * @param locale Language or supported locale to use
 * @returns Localized string, or an empty string if no text is provided.
 */
export function localeString(
    text: LocalizedString | undefined,
    locale: PublicLanguage | SupportedLocale
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

/**
 * Detects the supported locale from an Astro URL pathname.
 * @param url URL to inspect
 * @returns Supported locale for the URL
 */
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

// Duration helper
// < 45 → treat as hours
// >= 45 → treat as minutes
/**
 * Format duration as hours or minutes based on the value and locale.
 * @param value Duration in hours for values below 45, otherwise in minutes
 * @param locale Supported locale to use for formatting
 * @returns Formatted duration string
 */
export function formatDuration(value: number, locale: SupportedLocale) {
  const isHours = value < 45;

  if (locale === "de-DE") {
    return isHours
      ? `${value} Stunden`
      : `${value} Minuten`;
  }

  return isHours
    ? `${value} hours`
    : `${value} minutes`;
}
