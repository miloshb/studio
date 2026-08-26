import type { UnitConfig } from "../unitType.ts";

const OliveGrove: UnitConfig = {
  id: "OliveGrove",
  name: "Olive Grove",
  title: "Cozy Studio Apartment near Supetar Harbor",
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
    type: "studio",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 3,
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
        { type: "queen", sleeps: 2 },
        { type: "couch", sleeps: 1 },
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

export default OliveGrove;
