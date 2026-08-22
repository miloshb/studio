// src/data/stays/guides/index.ts
import jadranska from "./Jadranska";
import jasmine from "./Jasmine";

export const guides = {
  jadranska,
  jasmine,
} as const;

export type GuideKey = keyof typeof guides;
