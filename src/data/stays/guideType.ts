// src/data/stays/guideType.ts

// TODO: evolve to use references to information in specific guides rather than descriptions. 
export interface GuideInfo {
  restaurants: string[];
  beaches: string[];
  cafes: string[];
  groceries: string[];
  transport: string[];
  hiddenGems: string[];
  activities: string[];
}
