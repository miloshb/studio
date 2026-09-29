import type { UnitConfig } from "../unitType.ts";

const JasmineSound: UnitConfig = {
  id: "JasmineSound",
  name: "Jasmine Sound",
  title: "Convenient 4BR house w/ balcony view",
  location: "Jasmine",

  internal: {
    wifiPassword: "0234a12?52Jk",
    lockboxCode: 2214,
  },

  rate: {
    rateRule: "Jasmine",
    base: 188,
  },

  address: {
    street: "9215 Jasmine Lane",
    city: "Irving",
    postalCode: "75063",
    country: "USA",
  },

  descriptions: {
    en: {
      short: "Enjoy the simple things in life with this comfortable and spacious house centrally located in the DFW metroplex close to The Sound and DFW Airport. A quick drive to (easy access to multiple highways: I635, I35E, 114, 121, 161/PGBT) Las Colinas, Addison, Dallas Uptown, Park Cities, Plano Legacy, Grapevine, Richardson, Love Field Airport, etc.",
      long: "This beautiful one-and-a-half story Valley Ranch home is light and bright, featuring 4 bedrooms and 3 baths and soaring ceilings. Recently upgraded kitchen opens to family room, and formal living. Game room, study area, balcony, and one bed/one bath are located upstairs. The home is located in a quiet neighborhood with easy access to highways, shopping, and dining. Enjoy the nearby walking trails and parks, or take a short drive to the lake for some outdoor fun.",
    },
    de: {
      short: "Genieße das einfache und gemütliche Leben in dieser ruhigen und zentral gelegenen Unterkunft. In der Nähe von The Sound, DFW Airport. Kurze Distanz und einfacher Zugang nach Las Colinas, Addison, Dallas Uptown, Park Cities, Plano Legacy, Grapevine, Richardson, Love Field Airport, usw.",
      long: "Dieses schöne, ein-und-a-half-stöckige Valley Ranch-Haus ist hell und hell, mit 4 Schlafzimmern und 3 Bädern und erhabenen Decken. Das kürzlich renovierte Küchen öffnet sich in den Familienraum und den formellen Wohnbereich. Spielzimmer, Studiobereich, Balkon und ein Bett/ein Bad befinden sich im Obergeschoss. Das Haus befindet sich in einem ruhigen Viertel mit leichtem Zugang zu Autobahnen, Einkaufszentren und Restaurants. Genießen Sie die nahegelegenen Wanderwege und Parks oder fahren Sie mit einer kurzen Fahrt zum See für etwas Outdoor-Freude.",
    }
  },

  details: {
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    guestMax: 7,
    size: 300,
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
      beds: [
        { type: "couch", sleeps: 1 },
        { type: "couch", sleeps: 1 },
      ]
    },
    {
      name: "Bedroom 1 (master)",
      type: "bedroom",
      beds: [{ type: "king", sleeps: 2 }],
    },
    {
      name: "Bedroom 2",
      type: "bedroom",
      beds: [
        { type: "single", sleeps: 1 },
        { type: "single", sleeps: 1 },
      ],
    },
    {
      name: "Bedroom 3",
      type: "bedroom",
      beds: [
        { type: "bunk", sleeps: 1 },
        { type: "crib", sleeps: 1 },
      ]
    },
    {
      name: "Bedroom 4 (upstairs)",
      type: "bedroom",
      beds: [{ type: "queen", sleeps: 2 }],
    },
    {
      name: "Kitchen",
      type: "kitchen",
    },
    {
      name: "Dining Area",
      type: "dining",
    },
    {
      name: "Bathroom 1",
      type: "bathroom",
    },
    {
      name: "Bathroom 2",
      type: "bathroom",
    },
    {
      name: "Bathroom 3",
      type: "bathroom",
    },
    {
      name: "Balcony",
      type: "balcony",
    },
  ],

  directions: {
    en: "Access the house from Ranchview Drive. It is the house with the red front door on the right side of Jasmine Lane just before the semi-cul-de-sac. Street and driveway parking are available without restriction.",
    de: "Greifen Sie auf das Haus über Ranchview Drive zu. Es ist das Haus mit der roten Vordertür auf der rechten Seite von Jasmine Lane, direkt vor dem Halbkreis. Straßen- und Einfahrt-Parkplätze sind ohne Beschränkung verfügbar.",
  },

  arrival: {
    lockbox: {
      en: "Lockbox Access: The lockbox is located in the recessed entry alcove, mounted on the brick wall directly opposite the front door (not visible from the street).\n Lockbox code: 2214 \n Inside the lockbox you'll find two keys, each on its own keyring. The keys open both exterior doors. The second key is a backup. After unlocking, close the door firmly. Please return both keys to the lockbox at checkout.",
    },
    checkin: {
      en: "🚗 Parking: You may park in the driveway directly in front of the house. Street parking is available and unrestricted. Please do not block neighboring driveways. \n 📍 Finding the Entrance: The property is located at 9215 Jasmine Lane, Irving, TX 75063. The entrance is the front RED door facing Jasmine Lane.",
    }
  },

  manual: {
    en: `
    ** Kitchen
      - The kitchen is fully equipped with cookware, utensils, plates, glasses, and staples.
      - You are welcome to use all appliances: stove, oven, microwave, dishwasher, refrigerator, toaster, and espresso maker.
      - Please clean up after cooking and run the dishwasher before checkout.
      - Locked: The kitchen pantry is not available for guest use.

    ** Welcome Gift
      - A chilled bottle of white wine is waiting for you in the refrigerator.
      - Please enjoy it as a welcome gesture from the host.

    ** Hot Water
      - The hot water is very slow to arrive from the water heater in the garage. Be prepared for 1-2 minutes of water flow before it warms up.

    ** Laundry
      - Washer and dryer are available in the laundry room.
      - Detergent and dryer sheets are provided.
      - Please clean the lint trap after each use.

    ** Wi‑Fi
      - Network: JasmineSound
      - Password: 0234a12?52Jk

    ** Utilities
      - The garage contains the hot water heater and electrical panel.
      - You may access these if needed, but garage parking is not permitted.
      - The owner’s vehicle is stored inside and is not available for use.

    ** Off‑Limits Areas
      - 5th bedroom (locked; not part of the listing)
      - Master closet (locked)
      - Kitchen pantry (locked)
      - Upstairs work area (open but off‑limits; please do not enter or use this space)

    ** Trash
      - Trash bin is under the kitchen sink (along with a few extra trash bags). Please take out the trash and leave on the curbside before checkout.

    ** Security
      - Please lock all doors when leaving the home.
      - Do not share your lockbox code or keys with anyone outside your reservation.

    ** Security Cameras
      For safety and property protection, the home is equipped with several cameras:
      A. Outdoor Cameras
      1. Driveway camera
      2. Front yard camera
      B. Indoor Cameras
      Indoor cameras are only active when the home is unoccupied.
      3. Downstairs common area camera
      4. Upstairs common area camera
      C. Doorbell Camera
      5. Integrated camera at the front door

      Important:
      - None of the cameras record video.
      - Cameras are located only in common areas.
      - There are no cameras in any private or sleeping areas.

    ** Contact
      - If anything comes up during your stay, message me through Airbnb.
      - For urgent issues (power, water, lock access), reach out immediately.
    `
  },
};

export default JasmineSound;
