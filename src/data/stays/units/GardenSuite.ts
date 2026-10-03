import type { UnitConfig } from "../unitType.ts";
import { unitRates } from "../rates";
import { jadranska33 } from "../../config.ts";

const GardenSuite: UnitConfig = {
  id: "SunSeaGardenSuite",
  name: "Garden Wellness Suite",
  title: "Sun & Sea Wellness Suite • Private Steam Spa",
  available: new Date("2028-06-01"),
  market: false,
  rate: unitRates.Suite,

  location: {
    guide: "jadranskaGuide",
    address: {...jadranska33, unit: 131},
  },

  internal: {
    wifiPassword: "0234a12?52Jk",
    lockboxCode: 2214,
  },

  descriptions: {
    en: {
      short: "Wake to the morning sun over Brač and begin your day with a complimentary espresso from Sun & Sea Café.  This wellness-focused suite combines a private steam spa, soaking tub, radiant floor heating, and a spacious king bedroom to create a relaxing retreat just minutes from the waterfront.",
      long: `
        Discover a wellness-focused retreat in the heart of Supetar.
        This Wellness Suite is a newly renovated luxury one-bedroom apartment designed around relaxation, comfort, and the simple pleasures of island life. Enjoy a private steam spa, oversized king bed, radiant floor heating, and complimentary espresso at Sun & Sea Café.
        Ideal for couples, wellness travelers, remote workers, or small families looking for something beyond a typical holiday rental.
      `,
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
    guestMax: 5,
    size: 50,
    kitchen: true,
    workspace: true,
    parking: true,
    petsAllowed: false,
    smokingAllowed: false,
    descriptions: {
      en: `The apartment offers approximately 50 m² of thoughtfully designed living space.
        Features include:
        - Oversized 200 × 200 cm king bed
        - Private wellness bathroom with steam room
        - Deep soaking tub
        - Walk-in rain shower
        - Radiant floor heating
        - Fully equipped kitchen
          - Oven, cooktop, dishwasher, microwave, and refrigerator
          - Espresso at Sun & Sea Café
        - Washer/dryer combo
        - High-speed Wi-Fi
        - Smart TV
        - Comfortable sofa bed (160 × 200 cm)
        - Comfortably accommodates up to 4 guests.
      `,
      de: ``,
    },
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
      beds: [{ type: "king", sleeps: 2 }],
    },
    {
      name: "Full Kitchen",
      type: "kitchen",
    },
    {
      name: "Wet Spa Steam Bathroom",
      type: "bathroom",
      description: "The signature feature of the apartment is the private wellness spa. Enjoy a custom-designed wet-spa experience including steam room capability, built-in relaxation bench, rain shower, deep soaking tub, premium fixtures, and stone finishes. Designed to feel more like a boutique spa than a traditional apartment bathroom.",
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

export default GardenSuite;
