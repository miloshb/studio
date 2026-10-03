// src/data/stays/rates/index.ts
import jadranskaRate from "./Jadranska";
import jasmineRate from "./Jasmine";

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
    extraGuestFee: 25, // Lower extra guest fee for Wellness Suite (can be waived)
  },
  Residence: {
    rateRule: "jadranskaRate",
    base: 400,
    nightsOffset: 2, // Higher nights (+2) for Residence
    extraGuestFee: 25, // Lower extra guest fee for Residence (can be waived)
  },
} satisfies Record<string, RateConfig>;

export type UnitRateKey = keyof typeof unitRates;
