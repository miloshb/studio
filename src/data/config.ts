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
};

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
    name: "Studio Sun & Sea",
    mode: mode,
    canonical: "https://studiosunandsea.com",
    description: "Yoga classes, private sessions, and workshops with Studio Sun & Sea.",
    email: "privacy@studiosunandsea.com",
  };
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
 * "Stay Guest" = Stay Guest
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

export const journeyLevels = {
  JourneyMember: "Journey Member",
  StayGuest: "Stay Guest",
  YogaMember: "Yoga Member",
  YogaAlumni: "Yoga Alumni",
  BlueHeronAlumni: "Blue Heron Alumni",
} as const;

export type JourneyLevel = typeof journeyLevels[keyof typeof journeyLevels];

export type JourneyDiscounts = Partial<
  Record<JourneyLevel, number>
>;
