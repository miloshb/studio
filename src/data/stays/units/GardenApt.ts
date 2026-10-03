import type { UnitConfig } from "../unitType.ts";
import { unitRates } from "../rates";
import { jadranska33 } from "../../config.ts";

const GardenApt: UnitConfig = {
  id: "SunSeaGardenApartment",
  name: "Garden Standard Apartment",
  title: "Sun & Sea Apartment • Separate Bedroom",
  available: new Date("2028-06-01"),
  market: false,
  rate: unitRates.Apartment,

  location: {
    guide: "jadranskaGuide",
    address: {...jadranska33, unit: 133},
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
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    guestMax: 4,
    size: 36,
    kitchen: true,
    workspace: true,
    parking: true,
    petsAllowed: false,
    smokingAllowed: false,
  },

  rooms: [
    {
      name: "Living Room",
      type: "living",
      beds: [{ type: "pullout", sleeps: 2 }],
    },
    {
      name: "Bedroom",
      type: "bedroom",
      beds: [{ type: "queen", sleeps: 2 }],
    },
    {
      name: "Kitchenette",
      type: "kitchen",
    },
    {
      name: "Bathroom",
      type: "bathroom",
    },
    {
      name: "Balcony",
      type: "balcony",
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

export default GardenApt;
