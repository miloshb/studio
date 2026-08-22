// src/data/stays/guides/index.ts
import Jadranska from "./Jadranska";
import Jasmine from "./Jasmine";

export const guides = {
  Jadranska,
  Jasmine,
} as const;

export type GuideKey = keyof typeof guides;
