// src/data/pricing.ts
import { journeyLevel } from "./config.ts"
import type { DiscountInfo, ProductInfo } from "./config.ts";

const products: Record<string, ProductInfo> = {
  "suite": {
    label: "Wellness Suite",
    description: "Upgrade to the Wellness Suite for a more spacious and luxurious stay. The Wellness Suite offers a private steam spa, soaking tub, a comfortable living area, a spacious king bedroom, and enhanced amenities for a truly relaxing experience.",
    inventory: 1, // Only one Wellness Suite available in Phase 1 (then 3 total in Phase 2)
    eur: 400,
  },
  "residence": {
    label: "Wellness Residence",
    description: "Upgrade to the luxurious 3-bedroom Wellness Residence with three private sleeping areas. Designed for three participants traveling together who wish to share a premium accommodation experience.",
    note: "Per person; 3 participants required.",
    inventory: 0, // Wellness Residence only available after Phase 2
    eur: 400,
  },
  "singleOccupancy": {
    label: "Single Occupancy",
    description: "Upgrade shared accommodations to private occupancy for a more spacious and private retreat experience.",
    note: "Subject to accommodation availability and retreat occupancy.",
    capacity: 4, // Soft limit (additional upgrades may require spillover lodging)
    inventory: 8, // Actual number of stays units available for upgrades if only 8 participants are attending the retreat
    eur: 800,
  },
  "arrivalStay": {
    label: "Arrival Stay",
    description: "Arrive early, settle into the island rhythm, and begin your retreat fully relaxed. Arrival Stay participants enjoy unlimited access to regular studio classes, beach walks, and unstructured space before beginning the retreat.",
    note: "Per person per night (no retreat programming)",
    eur: 100,
  },
  "integrationStay": {
    label: "Integration Stay",
    description: "Continue your time on Brač with additional nights after the retreat concludes. Integration Stay participants enjoy unlimited access to regular studio classes, open practice time, beach walks, journaling, reflection, and unstructured space to integrate their experience before returning home.",
    note: "Per person per night",
    eur: 100,
  },
  "earlyDeparture": {
    label: "Early Departure",
    description: "Provides schedule flexibility if attendance for the full week is not feasible.",
    note: "Available for participants unable to commit to the full retreat week.",
    eur: -100,
  },
  "advancedImmersion": {
    label: "Advanced Immersion",
    description: "An intensive 5-day small-group experience intended for dedicated practitioners who wish to go deeper into the practice. Designed as a standalone retreat or as an extension to the 7-day retreat, Advanced Immersion is a more focused and intimate experience with additional time for practice, reflection, and personalized guidance.",
    note: "Capped at 8 students",
    duration: 5,
    capacity: 6, // Target participants 4-6
    inventory: 8, // Capped at 8 students
    eur: 1500, // 25% discount for those attending the 7-day retreat
  },
  "coreRetreat": {
    label: "7-Day Yoga Retreat",
    duration: 7,
    capacity: 14, // Target participants 12-14
    inventory: 0, // Capped at 16 participants (set to 0 here to hide from upgrade options)
    eur: 2000,
  },
};

export type ProductKey = keyof typeof products;

// Pricing data for service offerings
// Note: These do NOT display on the website unless you choose to surface them.
export const pricing: {
  intro: {
    trialClass: number;
    trialWeek: number;
    trialTwoWeek: number;
  };
  membership: {
    unlimitedMonthly: ProductInfo;
    fiveClassMonthly: ProductInfo;
    tenClassMonthly: ProductInfo;
  };
  class: {
    single: ProductInfo;
    tenPack: ProductInfo;
    unlimitedMonth: ProductInfo;
  };
  private: ProductInfo[];
  duet: ProductInfo[];
  group: ProductInfo[];
  workshop: ProductInfo[];
  retreats: {
    retreat: ProductInfo[];
    discounts: DiscountInfo;
    upgrades: Record<ProductKey, ProductInfo>;
  }
} = {
  intro: {
    trialClass: 10,
    trialWeek: 55,
    trialTwoWeek: 95,
  },

  membership: {
    unlimitedMonthly: {
      eur: 120,
    },
    // Mindbody-only memberships (not displayed on website)
    fiveClassMonthly: {
      eur: 75,
      minCommit: 3,
      rollover: false,
      unpublished: true,
    },
    tenClassMonthly: {
      eur: 95,
      minCommit: 3,
      rollover: false,
      unpublished: true,
    },
  },

  class: {
    single: {
      eur: 20,
      usd: 25,
      gbp: 18,
    },
    tenPack: {
      eur: 180,
      usd: 220,
      gbp: 160,
      validity: 18, // months
    },
    // Mindbody-only (not displayed on website)
    unlimitedMonth: {
      eur: 150,
      unpublished: true,
    },
  },

  // Private yoga classes (one-to-one, duet, and small-group)
  private: [
    { duration: 60, eur: 70, usd: 90, gbp: 65 },
    { duration: 75, eur: 85, usd: 105, gbp: 75 },
    { duration: 90, eur: 100, usd: 120, gbp: 90 },
    { duration: 120, eur: 130, usd: 155, gbp: 115 },
  ],
  duet: [
    { duration: 60, eur: 100, usd: 120, gbp: 90 },
    { duration: 75, eur: 120, usd: 145, gbp: 105 },
    { duration: 90, eur: 140, usd: 170, gbp: 125 },
    { duration: 120, eur: 180, usd: 220, gbp: 160 },
  ],
  group: [
    { duration: 60, eur: 140, usd: 170, gbp: 125 },
    { duration: 75, eur: 165, usd: 200, gbp: 145 },
    { duration: 90, eur: 190, usd: 230, gbp: 170 },
    { duration: 120, eur: 240, usd: 290, gbp: 215 },
  ],

  // Workshops
  workshop: [
    { duration: 2, eur: 55, usd: 70, gbp: 50 },
    { duration: 3, eur: 75, usd: 95, gbp: 70 },
    { duration: 4, eur: 95, usd: 115, gbp: 85 },
  ],

  // Retreats
  retreats: {
    retreat: [
      {
        ...products.coreRetreat,
        inventory: 16, // Capped at 16 participants
      },
      {
        ...products.advancedImmersion,
        eur: 2000,
      },
    ],
    discounts: {
      prepayment: 5,
      earlyBird: 5,
      journey: {
        [journeyLevel.JourneyMember]: 0,
        [journeyLevel.StayGuest]: 5,
        [journeyLevel.YogaMember]: 10,
        [journeyLevel.YogaAlumni]: 15,
        [journeyLevel.BlueHeronAlumni]: 20,
      },
    },
    upgrades: products,
  },
};
