// src/data/stays/rateType.ts
/**
 * This file defines the structure of a unit configuration for stays.
 * Each unit has an ID, name, title, booking information, email, internal details (like WiFi), descriptions in multiple languages, details about the unit (type, bedrooms, bathrooms, etc.), bed configurations, directions, and a guide with recommendations for restaurants, beaches, cafes, groceries, transport, and hidden gems.
 * The following data elements are constructed automatically using the unit ID (lowercase) and naming conventions:
 * - Airbnb URL ("https://airbnb.com/h/<unitid>")
 * - Booking.com URL ("https://booking.com/h/<unitid>")
 * - Vrbo URL ("https://vrbo.com/h/<unitid>")
 * - Email alias ("<unitid>@StudioSunAndSea.com")
 * - WiFi SSID ("<unitid>")
 *
 * The unit configuration is used to generate the unit's page, including descriptions, details, and guides for guests.
 */

  /**
   * Base rates to be tested for Airbnb, Booking.com, and Vrbo.
   * - Luxury wellness residence = 400 EUR
   * - Luxury wellness suites = 250 EUR
   * - Standard suites = 175 EUR
   * - Studio = 125 EUR
   *
   * Seasonal rates can be defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate.
   */

export interface RateInfo {
  currency: "EUR" | "USD" | "GBP"; // Currency code
  cleaningFee?: number; // Optional cleaning fee
  serviceFee?: number; // Optional service fee
  extraGuestFee?: number; // Optional extra guest fee
  nightMin?: number; // Minimum nights for booking
  nightMax?: number; // Maximum nights for booking
  discounts?: {
    weekly?: number; // Weekly discount percentage (5% - outside peak season)
    monthly?: number; // Monthly discount percentage (stays limited to 21 nights)
    prepayment: number; // Prepayment discount percentage (10%)
    earlyBird: number; // Early bird discount percentage (5% - 6 months in advance)
    clubMember: number; // Sun & Sea Club member discount percentage (10% - new guests must opt out - membership automatic after first booking)
  };
  seasons?: Array<{
    name: string; // Name of the seasonal rate (e.g., "Summer", "Winter")
    start: string; // Start date of the seasonal rate (DD-MM)
    end: string; // End date of the seasonal rate (DD-MM)
    nightMin?: number; // Minimum nights for the seasonal rate
    rate?: number; // Seasonal rate per night (optional, overrides base rate)
    relative?: number; // Seasonal rate as a percentage increase/decrease of the base rate (optional, overrides base rate)
  }>;
}
