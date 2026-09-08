// src/data/config.ts
export const LANG_STORE_KEY = "preferredLanguage";
export const TZ_STORE_KEY = "preferredTimezone";

export interface SiteConfig {
  siteName: string;
  isCorporate: boolean;
  canonical: string;
  description: string;
  contactEmail: string;
}

export function getSiteConfig(): SiteConfig {
  // Read environment variable set in Cloudflare Pages dashboard
  const mode = import.meta.env.SITE_MODE || "brand";

  if (mode === "corporate") {
    return {
      siteName: "Eirene Intentio Citta d.o.o.",
      isCorporate: true,
      canonical: "https://eireneintentiocitta.hr",
      description: "Eirene Intentio Citta d.o.o. – Peace · Intention · Mind",
      contactEmail: "info@eireneintentiocitta.hr",
    };
  }

  // Default build for Studio Sun & Sea
  return {
    siteName: "Studio Sun & Sea",
    isCorporate: false,
    canonical: "https://studiosunandsea.com",
    description: "Yoga classes, private sessions, and workshops with Studio Sun & Sea.",
    contactEmail: "privacy@studiosunandsea.com",
  };
}
