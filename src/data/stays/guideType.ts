// src/data/stays/guideType.ts
import type { LocalizedString } from "../i18n.ts";
import type { GeoLocation } from "../location.ts";

// TODO: evolve to use references for this consolidated location-based guide to information in specific guides rather than text descriptions.
export interface GuideInfoAirbnb {
  restaurants: string[];
  beaches: string[];
  cafes: string[];
  groceries: string[];
  transport: string[];
  hiddenGems: string[];
  activities: string[];
}

/**
 * Data specific to experiences - these are not guides which are physical places.
 */
export interface ExperienceInfo {
  name: string;

  categories: (
    | "sea"
    | "nature"
    | "wellness"
    | "food-drink"
    | "culture"
    | "adventure"
  )[];

  locations?: string[];

  notes?: LocalizedString;
}

/**
 * Common data elements for all guides.
 */
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

  notes?: LocalizedString;
}

/**
 * Data specific to beaches.
 */
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

/**
 * Data specific to sustenance (restaurants/cafes/groceries/etc.).
 */
export interface SustenanceInfo extends GuideInfo {
  category:
    | "cafe"
    | "restaurant"
    | "konoba"
    | "winery"
    | "olive-oil"
    | "market"
    | "grocery";

  food?: boolean;
  coffee?: boolean;
  wine?: boolean;
  oliveOil?: boolean;

  reservationsRecommended?: boolean;
}
