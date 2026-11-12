// src/data/stays/unitType.ts
import type { UnitKey } from "./units/";
import type { GuideKey } from "./guides/";
import type { GeoLocation } from "../location.ts";
import type { LocalizedString } from "../i18n.ts";
import type { RateRuleKey } from "./rates/";
import type { SupportedCurrency } from "../currency.ts";
import type { DiscountInfo } from "../types.ts";

export interface RateConfig {
  rateRule: RateRuleKey;
  base: number; // Base rate per night
  nightsOffset?: number, // Minimum nights offset for this unit (e.g., +2 nights for residence)
  extraGuestFee?: number, // Override extra guest fee
};

/**
 * Rate rules for stays at a particular location.
 * Seasonal rates can be defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate.
 *
 * Club Member (Account holder) ≠ Marketing subscriber : Explicit opt-in required for marketing, while membership is automatic (right to delete/forget is available).
 */
export interface StayRateInfo {
  currency: SupportedCurrency, // Primary currency
  cleaningFee?: number; // Optional cleaning fee
  serviceFee?: number; // Optional service fee
  extraGuestFee?: number; // Optional extra guest fee (can be waived for certain units)
  nightMin?: number; // Minimum nights for booking
  nightMax?: number; // Maximum nights for booking
  discounts?: DiscountInfo; // Discounting rules
  seasons?: SeasonInfo[];
};

export interface SeasonInfo {
  name: string; // Name of the seasonal rate (e.g., "Summer", "Winter")
  start: string; // Start date of the seasonal rate (DD-MM)
  end: string; // End date of the seasonal rate (DD-MM)
  year?: number; // If omitted, season recurs annually
  nightMin?: number; // Minimum nights for the seasonal rate
  nightMax?: number; // Maximum nights for the seasonal rate
  adjustmentPercent?: number; // Seasonal rate as a percentage increase/decrease of the base rate (optional, adjusts base rate)
  unavailable?: boolean; // Whether the unit is unavailable for booking during this season (used to block off dates for retreats, maintenance, or other reasons)
};


/**
 * Unit configuration structure for stays.
 * Each unit has an ID, name, title, booking information, email, internal details (like WiFi), descriptions in multiple languages, details about the unit (type, bedrooms, bathrooms, etc.), bed configurations, directions, and a guide with recommendations for restaurants, beaches, cafes, groceries, transport, and hidden gems.
 * The following data elements are constructed automatically using the unit ID (lowercase) and naming conventions:
 * Airbnb links can only contain lowercase letters, numbers, and dashes. Dashes are not allowed in TypeScript identifiers.
 * - Airbnb URL ("https://airbnb.com/h/studiosunandsea<unitid>")
 * - Booking.com URL ("https://booking.com/h/studiosunandsea<unitid>")
 * - Vrbo URL ("https://vrbo.com/h/studiosunandsea<unitid>")
 * - Email alias ("<unitid>@StudioSunAndSea.com")
 * - WiFi SSID ("<unitid>") // Or a single comprehensive SSID "StudioSunAndSea" with repeaters all over the property - probably logistically easier to manage and more reliable for guests.
 *
 * The unit configuration is used to generate the unit's page, including descriptions, details, and guides for guests.
 */
export interface UnitConfig {
  id: UnitKey;                // Internal: "jasmineSound", "gardenStudio", "sunsetSuite"
  name: string;               // Unit name
  label: string;              // Marketing title for listing pages
  publish: boolean;           // Whether the unit is currently being marketed for booking (published)
  available?: Date;           // When the unit is available for booking (list the unit prior to becoming available)
  location: {
    guide: GuideKey;
    address?: GeoLocation;
  };

  internal: {
    wifiPassword: string;
    lockboxCode?: number;     // Optional lockbox code for self-check-in
    internalNotes?: string;   // Optional internal notes for staff
    cleaningNotes?: string;   // Optional cleaning notes for staff
  };

  rate: RateConfig;

  summary: LocalizedString;
  description: LocalizedString;
  note?: string; // Note for guests (e.g. access, restrictions, clarifications)

  details: {
    type: "studio" | "apartment" | "house";
    bedrooms: number;
    bathrooms: number;
    guestMax: number;
    size: number; // Size in square meters
    description?: LocalizedString;

    kitchen: boolean;
    workspace: boolean;
    parking: boolean;
    petsAllowed: boolean;
    smokingAllowed: boolean;
  };

  rooms: Array<{
    name: string;           // "Bedroom 1", "Living Room", "Studio Space"
    type: "bedroom" | "living" | "studio" | "kitchen" | "bathroom" | "dining" | "balcony";
    beds?: Array<{
      type:
        | "king"    // 200×200 cm
        | "queen"   // 180×200 cm
        | "double"  // 160×200 cm
        | "single"  // 100×200 cm
        | "toddler" // 80×160 cm
        | "crib"
        | "bunk"
        | "couch"
        | "pullout" // 160×200 cm
        ;
      sleeps: number;       // number of people supported by this bed
    }>;
    description?: LocalizedString;    // Optional description of the room
  }>;

  directions: LocalizedString;

  arrival: {
    lockbox: LocalizedString;
    checkin: LocalizedString;
  };

  manual: LocalizedString;
};
