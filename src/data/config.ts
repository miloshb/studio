// src/data/config.ts
export const LANG_STORE_KEY = "preferredLanguage";
export const TZ_STORE_KEY = "preferredTimezone";

// Supported lanugages (first listed is primary/default)
export const LANGS = ["en", "de"];

export const debug = false; // Set to true to show debug logs
export const info = true; // Set to true to show info logs

export interface SiteConfig {
  name: string;
  mode: "brand" | "corp";
  canonical: string;
  description: string;
  email: string;
}

export function getSiteConfig(): SiteConfig {
  // Read environment variable set in Cloudflare Pages dashboard
  const mode = import.meta.env.SITE_MODE || "brand";

  if (mode === "corp") {
    return {
      name: "Eirene Intentio Citta d.o.o.",
      mode: mode,
      canonical: "https://eireneintentiocitta.hr",
      description: "Eirene Intentio Citta d.o.o. – Peace · Intention · Consciousness",
      email: "privacy@eireneintentiocitta.hr",
    };
  }

  // Default build for Studio Sun & Sea
  return {
    name: "Studio Sun & Sea",
    mode: mode,
    canonical: "https://studiosunandsea.com",
    description: "Yoga classes, private sessions, and workshops with Studio Sun & Sea.",
    email: "privacy@studiosunandsea.com",
  };
}
