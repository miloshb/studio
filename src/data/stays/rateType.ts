// src/data/stays/rateType.ts
import type { SupportedCurrency } from "../../utils/currency.ts";
import type { DiscountInfo } from "../config.ts";

/**
 * This file defines the structure of the rate rules for stays at a particular location.
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
  discounts?: DiscountInfo; // Optional discounting rules
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
};
