import type { RateInfo } from "../rateType.ts";

/**
 * Jadranska base rate definition to be tested for Airbnb, Booking.com, and Vrbo.
 * - Luxury wellness residence = 400 EUR
 * - Luxury wellness suites = 250 EUR
 * - Standard suites = 175 EUR
 * - Studio = 125 EUR
 *
 * Seasonal rates are defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate.
 */

const Jadranska: RateInfo = {
  currency: "EUR",
  extraGuestFee: 50,
  nightMin: 3,
  nightMax: 21,
  discounts: {
    weekly: 5,
    prepayment: 10,
    earlyBird: 5,
    clubMember: 10,
  },
  seasons: [
    {
      name: "Summer",
      start: "15-06",
      end: "15-09",
      nightMin: 5,
      relative: 20,
    },
    {
      name: "Winter",
      start: "01-11",
      end: "31-03",
      relative: -20,
    },
  ]
};

export default Jadranska;
