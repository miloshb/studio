// src/data/stays/rates/Jadranska.ts
import { type StayRateInfo } from "../unitTypes.ts";
import { categoryDiscount } from "../../types.ts"

/**
 * Jadranska base rate definition to be tested for Airbnb, Booking.com, and Vrbo.
 *
 * Base season == Shoulder season (01 Apr - 14 Jun, 16 Sep - 31 Oct)
 *
 * Base rates assume:
 * - 0€ fees (cleaning, etc.)
 * - 50€ extra guest (reduced to 25€ and waiveable for wellness suites and residences)
 * - 5 night minimum stay
 * - 24 night maximum stay
 * - selective booking model
 * - retreat-first utilization
 *
 * Seasonal rates are defined with start and end dates, and are a percentage increase/decrease of the base rate. Seasonal rates are annually recurring unless a year is specified. "Seasonal rates" can be used to block off dates for retreats, maintenance, or other reasons using the unavailability flag.
 */
const jadranskaRate: StayRateInfo = {
  currency: "EUR",
  extraGuestFee: 50, // Can be waived for wellness suites and residences
  nightMin: 5,
  nightMax: 24, // 3 weeks + extra weekend
  discounts: categoryDiscount.stay,
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
      nightMax: 89, // Allow longer stays in winter
    },
  ]
};

export default jadranskaRate;
