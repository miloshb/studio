// src/data/stays/guides/index.ts
import jadranskaGuide from "./Jadranska";
import jasmineGuide from "./Jasmine";

export const guides = {
  jadranskaGuide,
  jasmineGuide,
} as const;

export type GuideKey = keyof typeof guides;
