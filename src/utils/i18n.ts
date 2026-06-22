// src/utils/i18n.ts
/**
 * Detects the correct layout locale given an Astro URL pathname.
 */
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
