// src/data/stays/guides/index.ts
import jadranskaGuide from "./Jadranska.ts";
import jasmineGuide from "./Jasmine.ts";

export const guides = {
  jadranskaGuide,
  jasmineGuide,
} as const;

export type GuideKey = keyof typeof guides;
