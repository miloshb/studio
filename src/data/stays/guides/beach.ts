// src/data/stays/guides/beach.ts
import type { BeachInfo } from "../guideType";

export const beaches: BeachInfo[] = [
  {
    name: "Acapulco Beach",

    location: {
      city: "Supetar",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "walking",
      walking: "recommended",
      bicycle: "possible",
      motorVehicle: "not-recommended",
    },

    surfaces: ["pebbles", "concrete-terraces"],

    waterEntry: "mixed",

    activities: {
      swimming: true,
      waterPolo: true,
      paddleboarding: true,
    },

    amenities: {
      shade: true,
      foodNearby: true,
      toilets: true,
      showers: true,
    },

    experiences: {
      familyFriendly: true,
      sunset: true,
    },

    notes: {
      en: "Popular town beach immediately west of the Supetar harbor. Good swimming, water polo facilities, and easy access to cafés and restaurants.",
      de: "Populäre Stadtstrand unmittelbar westlich des Supetar-Hafens. Gutes Schwimmen, Wasserball-Anlagen und einfacher Zugang zu Cafés und Restaurants.",
    },
  },

  {
    name: "Vlačica Beach",

    location: {
      city: "Supetar",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "walking",
      walking: "recommended",
      bicycle: "possible",
      motorVehicle: "not-recommended",
    },

    surfaces: ["pebbles"],

    waterEntry: "shallow",

    activities: {
      swimming: true,
      paddleboarding: true,
      waterPolo: true,
    },

    amenities: {
      shade: true,
      foodNearby: true,
      toilets: true,
    },

    experiences: {
      familyFriendly: true,
    },

    notes: {
      en: "Classic family-oriented Supetar beach near the town center.",
      de: "Klassischer familienorientierter Supetar-Strand in der Stadtmitte.",
    },
  },

  {
    name: "Banj Beach??? - location??? - maybe this is Supetar beach???",

    location: {
      city: "Supetar",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "walking",
      walking: "recommended",
      bicycle: "recommended",
      motorVehicle: "possible",
    },

    surfaces: ["pebbles", "concrete-terraces"],

    waterEntry: "mixed",

    activities: {
      aquaPark: true,
      swimming: true,
      paddleboarding: true,
      snorkeling: true,
    },

    amenities: {
      foodNearby: true,
      showers: true,
    },

    experiences: {
      sunset: true,
    },

    notes: {
      en: "Good sunset views and easy access from Studio Sun & Sea.",
      de: "Gute Sonnenuntergangs-Blicke und einfacher Zugang von Studio Sun & Sea.",
    },
  },

  {
    name: "Lovrečina Bay",

    location: {
      city: "Postira",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "local",
      walking: "not-recommended",
      bicycle: "recommended",
      motorVehicle: "recommended",
    },

    surfaces: ["sand"],

    waterEntry: "shallow",

    activities: {
      swimming: true,
      paddleboarding: true,
      kayaking: true,
    },

    amenities: {
      shade: true,
      foodNearby: true,
      toilets: true,
    },

    experiences: {
      familyFriendly: true,
    },

    notes: {
      en: "One of the few genuine sandy beaches on Brač and particularly suitable for families and relaxed swimming.",
      de: "Eine der wenigen echten Sandstrände auf Brač und besonders geeignet für Familien und entspanntes Schwimmen.",
    },
  },

  {
    name: "Splitska Cove",

    location: {
      city: "Splitska",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "local",
      walking: "not-recommended",
      bicycle: "recommended",
      motorVehicle: "recommended",
    },

    surfaces: ["stone-shelves", "pebbles"],

    waterEntry: "deep",

    activities: {
      swimming: true,
      snorkeling: true,
    },

    amenities: {
      shade: true,
    },

    experiences: {
      secluded: true,
    },

    notes: {
      en: "Quiet coves with clear water, excellent for swimming and snorkeling.",
      de: "Ruhevolle Buchten mit klarer Wasser, ausgezeichnet für Schwimmen und Schnorcheln.",
    },
  },

  {
    name: "Zlatni Rat",

    location: {
      city: "Bol",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "day-trip",
      walking: "not-recommended",
      bicycle: "possible",
      motorVehicle: "recommended",
    },

    surfaces: ["pebbles"],

    waterEntry: "deep",

    activities: {
      swimming: true,
      windsurfing: true,
      kitesurfing: true,
      paddleboarding: true,
    },

    amenities: {
      shade: true,
      foodNearby: true,
      toilets: true,
      showers: true,
    },

    experiences: {
      familyFriendly: true,
    },

    notes: {
      en: "The most famous beach on Brač. A destination for wind, water sports, and iconic scenery.",
      de: "Die bekannteste Strand auf Brač. Eine Destination für Wind- und Wassersport sowie ikonische Landschaft.",
    },
  },

  {
    name: "Murvica",

    location: {
      city: "Murvica",
      province: "Brač, Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "day-trip",
      walking: "possible",
      bicycle: "possible",
      motorVehicle: "recommended",
    },

    surfaces: ["pebbles", "jagged-rocks"],

    waterEntry: "deep",

    activities: {
      swimming: true,
      snorkeling: true,
      diving: true,
    },

    amenities: {},

    experiences: {
      secluded: true,
      naturistFriendly: true,
    },

    notes: {
      en: "A quieter alternative to Zlatni Rat with excellent water clarity and nearby naturist-friendly areas.",
      de: "Eine ruhigere Alternative zu Zlatni Rat mit ausgezeichneter Wasserklarheit und nahegelegenen naturistischen Gebieten.",
    },
  },

  {
    name: "Žnjan Beach",

    location: {
      city: "Split",
      province: "Split-Dalmacija",
      country: "Croatia",
    },

    access: {
      category: "day-trip",
      walking: "not-recommended",
      bicycle: "not-recommended",
      motorVehicle: "recommended",
      ferryRequired: true,
    },

    surfaces: ["pebbles", "concrete-terraces"],

    waterEntry: "mixed",

    activities: {
      swimming: true,
      paddleboarding: true,
    },

    amenities: {
      foodNearby: true,
      toilets: true,
      showers: true,
    },

    experiences: {
      familyFriendly: true,
    },

    notes: {
      en: "Often as accessible from Supetar as many distant Brač beaches. Large urban waterfront with extensive facilities.",
      de: "Oft genauso erreichbar von Supetar wie viele entfernte Brač-Strände. Große städtische Wasserfront mit umfangreichen Einrichtungen.",
    },
  },
];
