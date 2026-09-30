import type { RateInfo } from "../rateType.ts";

/**
 * Jadranska base rate definition to be tested for Airbnb, Booking.com, and Vrbo.
 * - Luxury wellness residence = 400 EUR
 * - Luxury wellness suite = 250 EUR
 * - Standard apartment = 175 EUR
 * - Studio = 125 EUR
 *
 * Base season == Shoulder season (01 Apr - 14 Jun, 16 Sep - 31 Oct)
 *
 * Base rates assume:
 * - 0 cleaning fee
 * - 5 night minimum stay
 * - 21 night maximum stay
 * - selective booking model
 * - retreat-first utilization
 *
 * Seasonal rates are defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate.
 */

const Jadranska: RateInfo = {
  currency: "EUR",
  extraGuestFee: 50, // Can be waived for wellness suites and residences
  nightMin: 5,
  nightMax: 21,
  discounts: {
    maxDiscount: 20,
    prepayment: 5,
    earlyBird: 5,
    clubMember: 5,
    returnGuest: 5, // Increment after base price increase to provide loyalty offsets (e.g. swimming pool, market conditions, etc.)
  },
  seasons: [
    {
      name: "Summer",
      start: "15-06",
      end: "15-09",
      adjustmentPercent: 20,
    },
    {
      name: "Winter",
      start: "01-11",
      end: "31-03",
      adjustmentPercent: -20,
    },
  ]
};

export default Jadranska;
