// src/data/stays/unitType.ts
/**
 * This file defines the structure of a unit configuration for stays.
 * Each unit has an ID, name, title, booking information, email, internal details (like WiFi), descriptions in multiple languages, details about the unit (type, bedrooms, bathrooms, etc.), bed configurations, directions, and a guide with recommendations for restaurants, beaches, cafes, groceries, transport, and hidden gems.
 * The following data elements are constructed automatically using the unit ID (lowercase) and naming conventions:
 * - Airbnb URL ("https://airbnb.com/h/<unitid>")
 * - Booking.com URL ("https://booking.com/h/<unitid>")
 * - Email alias ("<unitid>@StudioSunAndSea.com")
 * - WiFi SSID ("<unitid>")
 *
 * The unit configuration is used to generate the unit's page, including descriptions, details, and guides for guests.
 */

import type { UnitKey } from "./units/index.ts";
import type { GuideKey } from "./guides/index.ts";

export interface UnitConfig {
  id: UnitKey;                 // "JasmineSound", "OliveGrove", "SunsetSuite"
  name: string;               // Human-readable name
  title: string;              // Marketing title for listing pages
  location: GuideKey;

  internal: {
    wifiPassword: string;
    lockboxCode?: string;     // Optional lockbox code for self-check-in
    internalNotes?: string;   // Optional internal notes for staff
    accessNotes?: string;     // Optional access notes for guests
    cleaningNotes?: string;   // Optional cleaning notes for staff
  };

  descriptions: {
    en: {
      short: string;
      long: string;
    };
    de: {
      short: string;
      long: string;
    };
  };

  details: {
    type: "studio" | "apartment" | "house";
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;

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
        | "king"
        | "queen"
        | "double"
        | "single"
        | "toddler"
        | "crib"
        | "bunk"
        | "couch"
        | "pullout";
      sleeps: number;       // number of people this bed accommodates
    }>;
  }>;

  directions: {
    en: string;
    de: string;
  };
}
