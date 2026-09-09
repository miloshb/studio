import type { UnitConfig } from "../unitType.ts";

const JasmineSound: UnitConfig = {
  id: "JasmineSound",
  name: "Jasmine Sound",
  title: "Convenient 4BR house w/ balcony view",
  location: "Jasmine",

  internal: {
    wifiPassword: "0234a12?52Jk"
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
    maxGuests: 7,
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
      name: "Bedroom 1",
      type: "bedroom",
      beds: [{ type: "king", sleeps: 2 }],
    },
    {
      name: "Bedroom 2",
      type: "bedroom",
      beds: [{ type: "king", sleeps: 2 }],
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
      name: "Bedroom 4",
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
    en: ""
  },
};

export default JasmineSound;
