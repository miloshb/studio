import type { UnitConfig } from "../unitType.ts";

const GardenResidence: UnitConfig = {
  id: "GardenResidence",
  name: "Garden Residence",
  title: "Sun & Sea Wellness Residence • Private Steam Spa",
  location: "Jadranska",
  available: new Date("2028-06-01"),
  market: false,

  internal: {
    wifiPassword: "0234a12?52Jk",
    lockboxCode: 2214,
  },

  rate: {
    rateRule: "Jadranska",
    base: 400,
    nightsOffset: 2, // Higher minimum nights (+2) for Residence
    extraGuestFee: 25, // Lower extra guest fee for Residence
  },

  address: {
    street: "Jadranska ulica 33",
    apt: 131,
    city: "Supetar",
    postalCode: "21400",
    country: "Croatia",
  },

  descriptions: {
    en: {
      short: `Experience the ultimate island retreat in this luxurious 3-bedroom wellness residence, featuring a private steam spa, oversized king bed, and radiant floor heating. Enjoy complimentary espresso at Sun & Sea Café and take advantage of the garden access for a serene escape.`,
      long: `This luxurious residence offers the perfect blend of relaxation and comfort, featuring a private steam spa, oversized king bed, and radiant floor heating. Enjoy complimentary espresso at Sun & Sea Café and take advantage of the garden access for a serene escape. Ideal for families, wellness travelers, and those seeking a unique island experience.
      Private sleeping spaces
Luxury:
Bedroom 1
Standard:
Bedroom 2
Living room configured as Bedroom 3
So:
6 guests in dedicated sleeping rooms
plus
up to 2 on sofa beds
Result:
Market as:
Sleeps 6 comfortably
Maximum occupancy 8
      `,
    },
    de: {
      short: "",
      long: "",
    }
  },

  details: {
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    guestMax: 9,
    size: 88,
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
      name: "Master Bedroom with Balcony",
      type: "bedroom",
      beds: [{ type: "king", sleeps: 2 }],
    },
    {
      name: "Bedroom with private Bathroom",
      type: "bedroom",
      beds: [{ type: "queen", sleeps: 2 }],
    },
    {
      name: "Bedroom with Kitchenette",
      type: "bedroom",
      beds: [{ type: "pullout", sleeps: 2 }],
    },
    {
      name: "Full Kitchen",
      type: "kitchen",
    },
    {
      name: "Wet Spa Steam Bathroom",
      type: "bathroom",
    },
    {
      name: "Shower Bathroom",
      type: "bathroom",
    },
    {
      name: "Balcony with garden access",
      type: "balcony",
    },
    {
      name: "Balcony with sea view",
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

export default GardenResidence;
