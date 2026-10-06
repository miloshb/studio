import { type StayRateInfo } from "../rateType.ts";
import { journeyLevel } from "../../config.ts"

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
 * - 0€ fees (cleaning, etc.)
 * - 50€ extra guest (reduced to 25€ and waiveable for wellness suites and residences)
 * - 5 night minimum stay
 * - 24 night maximum stay
 * - selective booking model
 * - retreat-first utilization
 *
 * Seasonal rates are defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate. These rates are annually recurring unless a year is specified. Seasonal rates can also be used to block off dates for retreats, maintenance, or other reasons using the unavailability flag.
 */

const jadranskaRate: StayRateInfo = {
  currency: "EUR",
  extraGuestFee: 50, // Can be waived for wellness suites and residences
  nightMin: 5,
  nightMax: 24, // 3 weeks + extra weekend
  discounts: {
    prepayment: 5,
    earlyBird: 5,
    journey: {
      [journeyLevel.JourneyMember]: 5,
      [journeyLevel.StayGuest]: 10,
      [journeyLevel.YogaMember]: 15,
      [journeyLevel.YogaAlumni]: 20,
      [journeyLevel.BlueHeronAlumni]: 25,
    },
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
      nightMax: 89, // Allow longer stays in winter
    },
  ]
};

export default jadranskaRate;
