// src/data/stays/guides/index.ts
import jadranskaGuide from "./Jadranska";
import jasmineGuide from "./Jasmine";
import type { GeoLocation } from "../../config";

export const guides = {
  jadranskaGuide,
  jasmineGuide,
} as const;

export type GuideKey = keyof typeof guides;

interface GuideInfo {
  name: string;
  location: GeoLocation;

  access: {
    category: "walking" | "local" | "day-trip";
    walking: "required" | "recommended" | "possible" | "not-recommended";
    bicycle: "required" |"recommended" | "possible" | "not-recommended";
    motorVehicle: "required" | "recommended" | "possible" | "not-recommended";
    ferryRequired?: boolean;
  };

  notes?: {
    en: string;
    de?: string;
  };
}

export interface BeachInfo extends GuideInfo {
  surfaces: (
    | "sand"
    | "pebbles"
    | "stone-shelves"
    | "jagged-rocks"
    | "concrete-terraces"
  )[];

  waterEntry: "shallow" | "mixed" | "deep";

  // Activity indicators describe destination-worthy experiences.
  // true      = reason to visit
  // false     = generally poor for this activity
  // undefined = possible, but not a significant draw
  activities: {
    aquaPark?: boolean;
    cliffJumping?: boolean;
    diving?: boolean;
    kayaking?: boolean;
    kitesurfing?: boolean;
    paddleboarding?: boolean;
    sailing?: boolean;
    snorkeling?: boolean;
    swimming?: boolean;
    waterPolo?: boolean;
    windsurfing?: boolean;
  };

  amenities: {
    shade?: boolean;
    foodNearby?: boolean;
    toilets?: boolean;
    showers?: boolean;
  };

  experiences: {
    familyFriendly?: boolean;
    naturistFriendly?: boolean;
    sunset?: boolean;
    secluded?: boolean;
  };
}
