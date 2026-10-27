// src/data/config.ts
export const LANG_STORE_KEY = "preferredLanguage";
export const TZ_STORE_KEY = "preferredTimezone";

// Supported lanugages (first listed is primary/default)
export const LANGS = ["en", "de"] as const;
export type Language = typeof LANGS[number];

export const debug = false; // Set to true to show debug logs
export const info = true; // Set to true to show info logs

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


// ADDRESS TYPES and FUNCTIONS
export const MAP_URL_BASE =
  "https://www.google.com/maps/search/?api=1&query=";

export function getMapUrl(location: GeoLocation): string | undefined {
  if (location.coordinates) {
    const { latitude, longitude } = location.coordinates;

    return `${MAP_URL_BASE}${latitude},${longitude}`;
  }

  const parts = [
    location.street,
    location.unit,
    location.city,
    location.province,
    location.postalCode,
    location.country,
  ]
    .filter(Boolean)
    .join(", ");

  if (!parts) {
    return undefined;
  }

  return `${MAP_URL_BASE}${encodeURIComponent(parts)}`;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface GeoLocation {
  street?: string;
  unit?: number;
  postalCode?: string;
  city?: string;
  province: string;
  country: string;

  coordinates?: GeoCoordinates;
};

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


/**
 * This interface defines the structure of the products offered (studio classes, workshops, memberships, yoga retreats, retreat upgrade options, etc.).
 * Upgrades can be used to offer additional nights or special packages for guests who want to continue or enhance their experience.
 */
export interface ProductInfo {
  label?: string; // Optional label (e.g., "Single Class", "Unlimited Month", "Yoga Retreat", "Integration Stay", etc.)
  category?: "class" | "retreat" | "stay"; // Optional category for the product
  description?: string; // Description of the product
  note?: string; // Optional note for the product (e.g. availability, restrictions, clarifications)
  inventory?: number; // Optional actual number of units available for sale
  capacity?: number; // target capacity (people) for this class option (+2 for hard limit) (optional, default: unlimited)
  duration?: number; // Duration in minutes for values >=60;  (optional, default: 60)
  validity?: number; // Validity in months (optional, default: 18)
  minCommit?: number; // Minimum commitment in months (optional, default: 1)
  rollover?: boolean; // Whether unused classes roll over to the next month (optional, default: false)
  unpublished?: boolean; // Whether this class option is unpublished (not displayed on website) (optional, default: false)
  recurring?: boolean; // Whether this class option is recurring (optional, default: false)
  discounts?: DiscountInfo; // Discounting rules
  standalone?: boolean; // Whether this product can be purchased as a standalone product (optional, default: false)
  upgrade?: boolean; // Whether this product is an upgrade option for a retreat (optional, default: false)
  billingUnit?: string; // "/ person" | "/ unit" | "/ booking" | "/ day" Billing unit for the product (optional, default: none)
  eur: number; // Price in EUR
  usd?: number; // Price in USD (optional, default: ~1.15 * EUR)
  gbp?: number; // Price in GBP (optional, default: ~0.90 * EUR)
};

/**
 * Structure used to define discounting rules for Studio Sun & Sea.
 */
export interface DiscountInfo {
  maxDiscount?: number; // Maximum stacked discount percentage
  weekly?: number; // Weekly discount percentage (0%)
  monthly?: number; // Monthly discount percentage (stays limited to 21 nights)
  prepayment: number; // Prepayment discount percentage (10%)
  earlyBird: number; // Early bird discount percentage (5% - 6 months in advance)
  journey?: JourneyDiscounts; // Sun & Sea Journey member discounts
  nonstackable?: boolean; // Whether discounts can be stacked (default: false == can be stacked)
};

/**
 * This interface defines the structure of the Journey member information for guests who are part of the Sun & Sea Journey program.
 * It includes the date when the guest became a Journey member, the total number of bookings and retreats attended, and the Journey level of the guest.
 * The Journey level can be one of the following:
 * "Journey Member" = Known Potential Customer
 * "Stay Member" = Stay Member (Guest who has booked a stay or regular yoga class)
 * "Yoga Member" = Active Yoga Studio Recurring Membership
 * "Yoga Alumni" = Yoga Retreat or Advanced Immersion Alumni
 * "Blue Heron Alumni" = Blue Heron Retreat Alumni
 */
export interface JourneyInfo {
  memberSince: Date; // Date when the guest became a Journey member
  totalBookings: number; // Total number of bookings made by the Journey member
  totalRetreats: number; // Total number of retreats attended by the Journey member
  journeyLevel: JourneyLevel; // Journey level of the guest
};

export const journeyLevel = {
  JourneyMember: "Journey Member",
  StayGuest: "Stay Member",
  YogaMember: "Yoga Member",
  YogaAlumni: "Yoga Alumni",
  BlueHeronAlumni: "Blue Heron Alumni",
} as const;

export type JourneyLevel = typeof journeyLevel[keyof typeof journeyLevel];

export type JourneyDiscounts = Partial<
  Record<JourneyLevel, number>
>;
