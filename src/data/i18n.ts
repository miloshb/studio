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

const LocaleToLang: Record<SupportedLocale, Language> = {
  "en-US": "en",
  "de-DE": "de",
  "en-GB": "en",
  "hr-HR": "hr",
};
// Convert SupportedLocale (e.g. 'de-DE') to Language ('de') if needed
function toLang(l: Language | SupportedLocale): Language {
  return (l in LocaleToLang)
    ? LocaleToLang[l as SupportedLocale]
    : (l as Language);
};

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
  return text[toLang(locale)] || text[defaultLang] || "";
};

/**
 * Detects the supported locale from an Astro URL pathname.
 * @param url URL to inspect
 * @returns Supported locale for the URL
 */
export function getLocaleFromUrl(url: URL): SupportedLocale {
  const lang = url.pathname.split("/")[1];
  switch (lang) {
    case "de":
      return "de-DE";
    case "en":
      return "en-US";
    case "hr":
      return "hr-HR";
    case "gb":
      return "en-GB";
    default:
      return "en-US"; // Default fallback
  }
};

// Duration helper
// < 45 → treat as hours
// >= 45 → treat as minutes
/**
 * Format duration as hours or minutes based on the value and locale.
 * @param value Duration in hours for values below 45, otherwise in minutes
 * @param locale Supported locale to use for formatting
 * @returns Formatted duration string (empty string if value <=0)
 */
export function formatDuration(value: number = 0, locale: Language | SupportedLocale) {
  if (value <= 0) return "";
  const isHours = value < 45;
  const label = DurationLabel[toLang(locale)];
  return `${value} ${isHours ? label.h : label.m}`;
};

const DurationLabel: Record<Language, { h: string; m: string }> = {
  en: {
    h: " hours",
    m: " minutes",
  },
  de: {
    h: " Stunden",
    m: " Minuten",
  },
  hr: {
    h: "h",
    m: " min",
  },
};
