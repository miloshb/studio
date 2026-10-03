// src/data/stays/rateType.ts
/**
 * This file defines the structure of the rate rules for stays at a particular location.
 * Seasonal rates can be defined with start and end dates, and can either override the base rate or be a percentage increase/decrease of the base rate.
 *
 * Club Member (Account holder) ≠ Marketing subscriber : Explicit opt-in required for marketing, while membership is automatic (right to delete/forget is available).
 */

export interface RateInfo {
  currency: "EUR" | "USD" | "GBP"; // Currency code
  cleaningFee?: number; // Optional cleaning fee
  serviceFee?: number; // Optional service fee
  extraGuestFee?: number; // Optional extra guest fee (can be waived for certain units)
  nightMin?: number; // Minimum nights for booking
  nightMax?: number; // Maximum nights for booking
  discounts?: {
    maxDiscount?: number; // Maximum stacked discount percentage
    weekly?: number; // Weekly discount percentage (0%)
    monthly?: number; // Monthly discount percentage (stays limited to 21 nights)
    prepayment: number; // Prepayment discount percentage (10%)
    earlyBird: number; // Early bird discount percentage (5% - 6 months in advance)
    journey?: JourneyDiscounts; // Sun & Sea Journey member discounts
    nonstackable?: boolean; // Whether discounts can be stacked (default: false == can be stacked)
  };
  seasons?: Array<{
    name: string; // Name of the seasonal rate (e.g., "Summer", "Winter")
    start: string; // Start date of the seasonal rate (DD-MM)
    end: string; // End date of the seasonal rate (DD-MM)
    year?: number; // If omitted, season recurs annually
    nightMin?: number; // Minimum nights for the seasonal rate
    nightMax?: number; // Maximum nights for the seasonal rate
    rate?: number; // Seasonal rate per night (optional, overrides base rate)
    adjustmentPercent?: number; // Seasonal rate as a percentage increase/decrease of the base rate (optional, adjusts base rate)
    unavailable?: boolean; // Whether the unit is unavailable for booking during this season (used to block off dates for retreats, maintenance, or other reasons)
  }>;
}

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
}

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
