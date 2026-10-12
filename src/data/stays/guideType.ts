// src/data/stays/guideType.ts

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
