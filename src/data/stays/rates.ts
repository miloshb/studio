// src/data/stays/rates/index.ts
import type { RateConfig } from "./unitTypes.ts";

/**
 * Jadranska base rate definition to be tested for Airbnb, Booking.com, and Vrbo.
 * - Luxury Grand Residence = 500 EUR
 * - Luxury Residence = 400 EUR
 * - Luxury Grand Suite = 325 EUR
 * - Luxury Wellness Suite = 250 EUR
 * - Standard Apartment = 175 EUR
 * - Studio = 125 EUR
 */
export const unitRates = {
  Studio: {
    rateRule: "jadranskaRate",
    base: 125,
  },
  Apartment: {
    rateRule: "jadranskaRate",
    base: 175,
  },
  Suite: {
    rateRule: "jadranskaRate",
    base: 250,
    extraGuestFee: 25, // Lower extra guest fee for Wellness Suite and above (can be waived)
  },
  // Grand Suite = 1 Suite + 1 (Studio || Apt BR)
  GrandSuite: {
    rateRule: "jadranskaRate",
    //base: 325, // Priced between Suite & Residence (once Residence is available)
    base: 350, // 25€ off combined rate (Intro until Residence is available)
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 25, // Lower extra guest fee (can be waived)
  },
  // Residence = 1 Suite + 1 Apartment
  Residence: {
    rateRule: "jadranskaRate",
    base: 400, // 25€ off combined rate
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 25, // Lower extra guest fee (can be waived)
  },
  // Grand Residence = 1 Suite + 2 Studios
  GrandResidence: {
    rateRule: "jadranskaRate",
    //base: 500, // 0€ off combined rate - premium and unique
    base: 450, // Intro pricing until Residence is available
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 0, // Eliminated extra guest fee
  },
} satisfies Record<string, RateConfig>;
