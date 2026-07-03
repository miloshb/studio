// src/data/pricing.ts
// Pricing data for service offerings
// Note: These do NOT display on the website unless you choose to surface them.
export const pricing = {
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
};
