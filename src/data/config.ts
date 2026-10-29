// src/data/config.ts
/**
 * Site configuration and addresses.
 */
import type { GeoLocation } from "./location.ts";
export const LANG_STORE_KEY = "preferredLanguage";
export const TZ_STORE_KEY = "preferredTimezone";

export const debug = false; // Set to true to show debug logs
export const info = true; // Set to true to show info logs


export const jadranska33: GeoLocation = {
  street: "Jadranska 33",
  postalCode: "21400",
  city: "Supetar",
  province: "Brač, Split-Dalmacija",
  country: "Hrvatska",
};
// Sun & Sea Yoga Studio
export const jadranska35: GeoLocation = {
  ...jadranska33,
  street: "Jadranska 35", // Updated street number for the address
  unit: 200,
};

export interface SiteConfig {
  name: string;
  mode: "brand" | "corp";
  canonical: string;
  description: string;
  email: string;
  tel?: {
    us?: string;
    de?: string;
    hr?: string;
  }
};

// OPERATOR COMPANY DATA
export const company = {
  brand: "Studio Sun & Sea",
  legal: "Eirene Intentio Citta d.o.o.",

  // HR Legal Identifiers
  oib: "79177761868",                     // OIB (Personal Identification Number)
  vat: "HR79177761868",                   // PDV (VAT) ID
  mbs: "060519793",                       // Court Registry Number (MBS)
  euid: "HRSR.060519793",                 // European Unique Identifier (EUID)
  dzsmb: "6316409",                       // Matični Broj - DZS (Državni Zavod za Statistiku)
  court: "Trgovački sud u Splitu",
  registryUrl: "https://sudreg.pravosudje.hr/ords/r/esudreg/public/podaci-o-poslovnom-subjektu?p28_sbt_mbs=060519793",
  capital: "2.500,00 EUR (u cijelosti uplaćen)",
  director: "Miloš Borojević",

  // Registered Head Office (Split)
  adminAddress1: "Varaždinska 2B",
  adminAddress2: "21000 Split, Hrvatska",

  // Future Studio Location (Supetar, Brač)
  studioAddress1: jadranska35.street + " #" + jadranska35.unit,
  studioAddress2: jadranska35.postalCode + " " + jadranska35.city + ", " + jadranska35.province + ", " + jadranska35.country,

  // Secondary Offices
  germanyAddress1: "Pfarrtannen 7",
  germanyAddress2: "49808 Lingen, Deutschland",
  usaAddress1: "9215 Jasmine Lane",
  usaAddress2: "Irving, TX 75063, USA",

  email: "privacy@studiosunandsea.com",
  telUS: "+1-214-496-9559",
  telDE: "+49 (0) 176 2775 3360",
}


// SITE CONFIGURATION
export function getSiteConfig(): SiteConfig {
  // Read environment variable set in Cloudflare Pages dashboard
  const mode = import.meta.env.SITE_MODE || "brand";

  if (mode === "corp") {
    return {
      name: "Eirene Intentio Citta",
      mode: mode,
      canonical: "https://eireneintentiocitta.hr",
      description: "Eirene Intentio Citta – Peace · Intention · Consciousness",
      email: "privacy@eireneintentiocitta.hr",
    };
  }

  // Default build for Studio Sun & Sea
  return {
    name: company.brand,
    mode: mode,
    canonical: "https://studiosunandsea.com",
    description: "Yoga classes, private sessions, and workshops with Studio Sun & Sea.",
    email: company.email,
    tel: {
      us: company.telUS,
      de: company.telDE,
    }
  };
};
