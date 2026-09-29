// src/data/stays/rates/index.ts
import Jadranska from "./Jadranska";
import Jasmine from "./Jasmine";

export const rates = {
  Jadranska,
  Jasmine,
} as const;

export type RateKey = keyof typeof rates;
