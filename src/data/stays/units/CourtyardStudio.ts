import type { UnitConfig } from "../unitType.ts";
import { unitRates } from "../rates";
import { jadranska35 } from "../../config.ts";

const CourtyardStudio: UnitConfig = {
  id: "SunSeaCourtyardStudio",
  name: "Courtyard Studio Apartment • Café Lifestyle",
  title: "Sun & Sea Studio Apartment • Café Lifestyle",
  available: new Date("2027-06-01"),
  market: true,
  rate: unitRates.Studio,

  location: {
    guide: "jadranskaGuide",
    address: {...jadranska35, unit: 156},
  },

  internal: {
    wifiPassword: "0234a12?52Jk",
    lockboxCode: 2214,
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
