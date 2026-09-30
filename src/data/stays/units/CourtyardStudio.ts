import { unitRates } from "../rates/index.ts";
import type { UnitConfig } from "../unitType.ts";

const CourtyardStudio: UnitConfig = {
  id: "SunSeaCourtyardStudio",
  name: "Courtyard Studio Apartment • Café Lifestyle",
  title: "Sun & Sea Studio Apartment • Café Lifestyle",
  location: "Jadranska",
  available: new Date("2027-06-01"),
  market: true,

  internal: {
    wifiPassword: "0234a12?52Jk",
    lockboxCode: 2214,
  },

  rate: unitRates.Studio,

  address: {
    street: "Jadranska ulica 35",
    apt: 154,
    city: "Supetar",
    postalCode: "21400",
    country: "Croatia",
  },

  descriptions: {
    en: {
      short: "Lorem ipsum dolorem set amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      long: "",
    },
    de: {
      short: "",
      long: "",
    }
  },

  details: {
    type: "studio",
    bedrooms: 0,
    bathrooms: 1,
    guestMax: 4,
    size: 30,
    kitchen: true,
    workspace: true,
    parking: true,
    petsAllowed: false,
    smokingAllowed: false,
  },

  rooms: [
    {
      name: "Living",
      type: "studio",
      beds: [
        { type: "double", sleeps: 2 },
        { type: "pullout", sleeps: 2 },
      ]
    },
    {
      name: "Kitchenette",
      type: "kitchen",
    },
    {
      name: "Bathroom",
      type: "bathroom",
    },
  ],

  directions: {
    en: "",
    de: "",
  },

  arrival: {
    lockbox: {
      en: "",
      de: "",
    },
    checkin: {
      en: "",
      de: "",
    },
  },

  manual: {
    en: "",
    de: "",
  },
};

export default CourtyardStudio;
