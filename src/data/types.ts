// src/data/types.ts
/**
 * Common data type definitions: Products, Journey Program, Discounts, etc.
 */
import type { PriceData, SupportedCurrency } from "./currency.ts";
import type { LocalizedString } from "./i18n.ts";

export type Category = "class" | "retreat" | "stay" | "reservation";
/**
 * ProductInfo interface defines the structure of the products offered (studio classes, workshops, memberships, yoga retreats, retreat upgrade options, etc.).
 * Upgrades can be used to offer additional nights or special packages for guests who want to continue or enhance their experience.
 * Inherited from currency/PriceData:
 *   billingUnit: "per person" | "per unit" | "per booking" | "per day" Billing unit for the product (optional, default: none)
 */
export interface ProductInfo extends PriceData {
  name?: string; // Product Name (always English: "Single Class", "Unlimited Month", "Yoga Retreat", "Integration Stay", etc.)
  label?: LocalizedString; // Product Label or Marketing title for listing pages
  category?: Category; // Product Category
  description?: LocalizedString; // Product Description
  note?: string; // Product Note - internal use (e.g. availability, restrictions, clarifications)
  inventory?: number; // Optional Inventory count (actual number of units available for sale)
  capacity?: number; // Target capacity (people) for this class option (+2 for hard limit) (optional, default: unlimited)
  duration?: number; // Duration: hours when <45; minutes when >=45 (optional, default: 60)
  validity?: number; // Validity in months (optional, default: 18)
  minCommit?: number; // Minimum commitment in months (optional, default: 1)
  rollover?: boolean; // Whether unused classes roll over to the next month (optional, default: false)
  unpublished?: boolean; // Whether this class option is unpublished (not displayed on website) (optional, default: false)
  recurring?: boolean; // Whether this class option is recurring (optional, default: false)
  discounts?: DiscountInfo; // Discounting rules
  standalone?: boolean; // Whether this product can be purchased as a standalone product (optional, default: false)
  upgrade?: boolean; // Whether this product is an upgrade option for a retreat (optional, default: false)
};

/**
 * Discounting rules structure for Studio Sun & Sea.
 */
export interface DiscountInfo {
  maxDiscount?: number; // Maximum stacked discount percentage
  weekly?: number; // Weekly discount percentage (0%)
  monthly?: number; // Monthly discount percentage (stays limited to 21 nights)
  prepayment: number; // Prepayment discount percentage (5%)
  earlyBird: number; // Early bird discount percentage (5% - 6 months in advance)
  journey?: JourneyDiscounts; // Sun & Sea Journey member discounts
  nonstackable?: boolean; // Whether discounts can be stacked (default: false == can be stacked)
};

/**
 * This interface defines the structure of the Journey member information for guests who are part of the Sun & Sea Journey program.
 * It includes the date when the guest became a Journey member, the total number of bookings and retreats attended, and the Journey level of the guest.
 * The Journey level can be one of the following:
 * "Journey Member" = Known Potential Customer
 * "Stay Member" = Stay Member (Guest who has booked a stay or regular yoga class)
 * "Yoga Member" = Active Yoga Studio Recurring Membership
 * "Yoga Alumni" = Yoga Retreat or Advanced Immersion Alumni
 * "Blue Heron Alumni" = Blue Heron Retreat Alumni
 */
export interface JourneyInfo {
  memberId: number; // Unique identifier for the Journey member
  memberSince: Date; // Date when the guest became a Journey member
  totalBookings: number; // Total number of bookings made by the Journey member
  totalRetreats: number; // Total number of retreats attended by the Journey member
  journeyLevel: JourneyLevel; // Journey level of the guest
};

export const journeyLevel = {
  JourneyMember: "Journey Member",
  StayGuest: "Stay Member",
  YogaMember: "Yoga Member",
  YogaAlumni: "Yoga Alumni",
  BlueHeronAlumni: "Blue Heron Alumni",
} as const;

export type JourneyLevel = typeof journeyLevel[keyof typeof journeyLevel];

export type JourneyDiscounts = Record<JourneyLevel, number>;

const staysLoyaltyDiscounts: JourneyDiscounts = {
  [journeyLevel.JourneyMember]: 5,
  [journeyLevel.StayGuest]: 10,
  [journeyLevel.YogaMember]: 15,
  [journeyLevel.YogaAlumni]: 20,
  [journeyLevel.BlueHeronAlumni]: 25,
} as const;

const yogaLoyaltyDiscounts: JourneyDiscounts = {
  [journeyLevel.JourneyMember]: 0,
  [journeyLevel.StayGuest]: 5,
  [journeyLevel.YogaMember]: 10,
  [journeyLevel.YogaAlumni]: 15,
  [journeyLevel.BlueHeronAlumni]: 20,
} as const;

/**
 * Applicable discounts by product category.
 */
export const categoryDiscount: Record<Category, DiscountInfo> = {
  // Discounted (monthly/weekly/intro) class options are separate products.
  class: {
    prepayment: 0,
    earlyBird: 0,
    journey: yogaLoyaltyDiscounts,
  },
  // Retreats and Workshops
  retreat: {
    prepayment: 5,
    earlyBird: 5,
    journey: yogaLoyaltyDiscounts,
  },
  // Accommodations and upgrades
  stay: {
    prepayment: 5,
    earlyBird: 5,
    journey: staysLoyaltyDiscounts,
  },
  // Reservation products are not eligible for discounts.
  reservation: {
    prepayment: 0,
    earlyBird: 0,
  },
} as const;
