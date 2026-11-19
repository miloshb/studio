// src/data/stays/rates/index.ts
import jadranskaRate from "./JadranskaRate.ts";
import jasmineRate from "./JasmineRate.ts";

export const rateRules = {
  jadranskaRate,
  jasmineRate,
} as const;

export type RateRuleKey = keyof typeof rateRules;
