// src/data/stays/rates/index.ts
import jadranskaRate from "./Jadranska.ts";
import jasmineRate from "./Jasmine.ts";

export const rateRules = {
  jadranskaRate,
  jasmineRate,
} as const;

export type RateRuleKey = keyof typeof rateRules;

export interface RateConfig {
  rateRule: RateRuleKey;
  base: number; // Base rate per night
  nightsOffset?: number, // Minimum nights offset for this unit (e.g., +2 nights for residence)
  extraGuestFee?: number, // Override extra guest fee
};

export const unitRates = {
  Studio: {
    rateRule: "jadranskaRate",
    base: 125,
  },
  Apartment: {
    rateRule: "jadranskaRate",
    base: 175,
  },
  Suite: {
    rateRule: "jadranskaRate",
    base: 250,
    extraGuestFee: 25, // Lower extra guest fee for Wellness Suite and above (can be waived)
  },
  // Grand Suite = 1 Suite + 1 (Studio || Apt BR)
  GrandSuite: {
    rateRule: "jadranskaRate",
    //base: 325, // Priced between Suite & Residence (once Residence is available)
    base: 350, // 25€ off combined rate (Intro until Residence is available)
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 25, // Lower extra guest fee (can be waived)
  },
  // Residence = 1 Suite + 1 Apartment
  Residence: {
    rateRule: "jadranskaRate",
    base: 400, // 25€ off combined rate
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 25, // Lower extra guest fee (can be waived)
  },
  // Grand Residence = 1 Suite + 2 Studios
  GrandResidence: {
    rateRule: "jadranskaRate",
    //base: 500, // 0€ off combined rate - premium and unique (sleeps 12)
    base: 450, // Intro pricing until Residence is available
    nightsOffset: 2, // Higher minimum nights (+2) for combination units
    extraGuestFee: 0, // Eliminated extra guest fee
  },
} satisfies Record<string, RateConfig>;

export type UnitRateKey = keyof typeof unitRates;
