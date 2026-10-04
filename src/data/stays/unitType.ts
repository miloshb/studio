// src/data/stays/unitType.ts
/**
 * This file defines the structure of a unit configuration for stays.
 * Each unit has an ID, name, title, booking information, email, internal details (like WiFi), descriptions in multiple languages, details about the unit (type, bedrooms, bathrooms, etc.), bed configurations, directions, and a guide with recommendations for restaurants, beaches, cafes, groceries, transport, and hidden gems.
 * The following data elements are constructed automatically using the unit ID (lowercase) and naming conventions:
 * Airbnb links can only contain lowercase letters, numbers, and dashes. Dashes are not allowed in TypeScript identifiers.
 * - Airbnb URL ("https://airbnb.com/h/<unitid>")
 * - Booking.com URL ("https://booking.com/h/<unitid>")
 * - Vrbo URL ("https://vrbo.com/h/<unitid>")
 * - Email alias ("<unitid>@StudioSunAndSea.com")
 * - WiFi SSID ("<unitid>")
 *
 * The unit configuration is used to generate the unit's page, including descriptions, details, and guides for guests.
 */

import type { UnitKey } from "./units";
import type { GuideKey } from "./guides";
import type { RateConfig } from "./rates";
import type { Address } from "../config.ts";

export interface UnitConfig {
  id: UnitKey;                // "JasmineSound", "OliveGrove", "SunsetSuite"
  name: string;               // Internal name
  title: string;              // Marketing title for listing pages
  market: boolean;            // Whether the unit is currently being marketed for booking
  available?: Date;           // When the unit is available for booking
  location: {
    guide: GuideKey;
    address?: Address;
  };

  internal: {
    wifiPassword: string;
    lockboxCode?: number;     // Optional lockbox code for self-check-in
    internalNotes?: string;   // Optional internal notes for staff
    accessNotes?: string;     // Optional access notes for guests
    cleaningNotes?: string;   // Optional cleaning notes for staff
  };

  rate: RateConfig;

  description: {
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
    guestMax: number;
    size: number; // Size in square meters
    description?: {
      en: string;
      de: string;
    };

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
    description?: string;    // Optional description of the room
  }>;

  directions: {
    en: string;
    de?: string;
  };

  arrival: {
    lockbox: {
      en: string;
      de?: string;
    };
    checkin: {
      en: string;
      de?: string;
    };
  };

  manual: {
    en: string;
    de?: string;
  };
}
