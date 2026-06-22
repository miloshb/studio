// src/data/pricing.ts
// Pricing data for service offerings
export const pricing = {
  intro: {
    trialClass: 10,
    trialWeek: 55,
    trialTwoWeek: 95,
  },

  monthly: {
    unlimited: 120,
  },

  class: {
    single: {
      eur: 20,
      usd: 25,
      gbp: 18,
    },
    tenPack: {
      eur: 180,
      validityMonths: 18,
    },
  },

  // Private yoga classes (one-to-one, duet, and small-group)
  private: [
    { duration: 60, eur: 70, usd: 80, gbp: 65 },
    { duration: 75, eur: 85, usd: 95, gbp: 75 },
    { duration: 90, eur: 100, usd: 115, gbp: 90 },
    { duration: 120, eur: 130, usd: 150, gbp: 115 },
  ],
  duet: [
    { duration: 60, eur: 100, usd: 115, gbp: 90 },
    { duration: 75, eur: 120, usd: 135, gbp: 105 },
    { duration: 90, eur: 140, usd: 160, gbp: 125 },
    { duration: 120, eur: 180, usd: 205, gbp: 160 },
  ],
  group: [
    { duration: 60, eur: 140, usd: 160, gbp: 125 },
    { duration: 75, eur: 165, usd: 190, gbp: 150 },
    { duration: 90, eur: 190, usd: 220, gbp: 175 },
    { duration: 120, eur: 240, usd: 275, gbp: 220 },
  ],

  // Workshops
  workshop: [
    { duration: 2, eur: 55, usd: 65, gbp: 50 },
    { duration: 3, eur: 75, usd: 85, gbp: 65 },
    { duration: 4, eur: 95, usd: 110, gbp: 85 },
  ],
};
