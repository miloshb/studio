import type { UnitConfig } from "../unitType.ts";

const SunsetSuite: UnitConfig = {
  id: "SunsetSuite",
  name: "Sunset Suite",
  title: "1-Bedroom Apartment with Coastal Charm",
  location: "Jadranska",

  internal: {
    wifiPassword: "0234a12?52Jk"
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
    maxGuests: 4,
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
      beds: [{ type: "couch", sleeps: 2 }],
    },
    {
      name: "Bedroom",
      type: "bedroom",
      beds: [{ type: "king", sleeps: 2 }],
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
};

export default SunsetSuite;
