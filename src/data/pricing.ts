// src/data/pricing.ts
import { journeyLevel } from "./types.ts"
import type { DiscountInfo, ProductInfo } from "./types.ts";


const products: Record<string, ProductInfo> = {
  "suite": {
    label: "Wellness Suite",
    category: "stay",
    description: {
      en: "Upgrade to the Wellness Suite for a more spacious and luxurious stay. The Wellness Suite features a private steam spa, soaking tub, comfortable living area, spacious king bedroom, and enhanced amenities designed for deep rest and relaxation.",
      de: "Upgrade auf die Wellness Suite für einen besonders großzügigen und komfortablen Aufenthalt. Die Wellness Suite bietet ein privates Dampfbad, eine Badewanne, einen gemütlichen Wohnbereich, ein großzügiges Schlafzimmer sowie zusätzliche Annehmlichkeiten für tiefe Erholung und Entspannung.",
//      hr: "Nadogradite svoj boravak uz Wellness Suite za više prostora, udobnosti i privatnosti. Wellness Suite uključuje privatnu parnu kupelj, kadu za opuštanje, udoban dnevni boravak, prostranu spavaću sobu te dodatne sadržaje osmišljene za duboki odmor i opuštanje.",
    },
    note: "Subject to availability and retreat occupancy.",
    inventory: 1, // Only one Wellness Suite available in Phase 1 (then 3 total after Phase 2)
    eur: 400,
    usd: 500,
    gbp: 350,
    billingUnit: "per booking",
    standalone: false,
    upgrade: true,
  },
  "residence": {
    label: "Wellness Residence",
    category: "stay",
    description: {
      en: "Upgrade to the luxurious Wellness Residence featuring three private sleeping areas and a private steam spa. Designed for three participants traveling together who wish to share a premium retreat stay experience while enjoying their own private space.",
      de: "Upgrade auf die luxuriöse Wellness Residence mit drei privaten Schlafbereichen. Ideal für drei gemeinsam reisende Teilnehmer, die ein hochwertiges Retreat-Erlebnis teilen und gleichzeitig ihren eigenen Rückzugsraum genießen möchten.",
//      hr: "Nadogradite svoj boravak uz luksuznu Wellness Residence s tri privatna prostora za spavanje. Idealno za troje sudionika koji putuju zajedno i žele dijeliti vrhunsko retreat iskustvo uz vlastiti prostor za odmor i privatnost.",
    },
    note: "Per person; 3 participants required.",
    inventory: 2, // Wellness Residences only in Jadranska 33; Grand Residence (Suite+2×Studio = 6 double occ.) not available for retreats
    eur: 400,
    usd: 500,
    gbp: 350,
    billingUnit: "×3 participants (each)",
    standalone: false,
    upgrade: false, // Wellness Residence only available after Phase 2 (change to true when available)
  },
  "singleOccupancy": {
    label: "Single Occupancy",
    category: "stay",
      description: {
      en: "Enhance your stay with private occupancy for a more spacious, comfortable, and personalized retreat experience.",
      de: "Gestalte deinen Aufenthalt mit einer Einzelbelegung noch persönlicher und genieße mehr Raum, Komfort und Privatsphäre.",
//      hr: "Učinite svoj boravak još ugodnijim uz jednokrevetni smještaj te uživajte u više prostora, privatnosti i osobne udobnosti.",
    },
    note: "Subject to availability and retreat occupancy. Assign Studios first, then Apartments.",
    capacity: 4, // Soft limit (additional upgrades may require spillover bookings)
    inventory: 8, // Actual number of stays units available for upgrades if only 8 participants are attending the retreat
    eur: 800,
    usd: 1000,
    gbp: 700,
    billingUnit: "per participant",
    standalone: false,
    upgrade: true,
  },
  "arrivalStay": {
    label: "Arrival Stay",
    category: "retreat",
    description: {
      en: "Arrive early, settle into the island rhythm, and begin your retreat fully relaxed. Arrival Stay participants enjoy unlimited access to regular studio classes, beach walks, and unstructured space before beginning the retreat.",
      de: "Reise einige Tage früher an, finde deinen Platz im Rhythmus der Insel und beginne dein Retreat vollkommen entspannt. Teilnehmer des Arrival Stay genießen unbegrenzten Zugang zu den regulären Studiokursen, Spaziergängen am Meer und freier Zeit, bevor das Retreat beginnt.",
//      hr: "Dođite nekoliko dana ranije, prepustite se ritmu otoka i započnite svoj retreat potpuno opušteni. Sudionici programa Arrival Stay imaju neograničen pristup redovitim studijskim satovima, šetnjama uz more i slobodnom vremenu prije početka retreata.",
    },
    note: "Per person per night (no retreat programming)",
    eur: 100,
    usd: 125,
    gbp: 90,
    billingUnit: "per day",
    standalone: false,
    upgrade: true,
  },
  "integrationStay": {
    label: "Integration Stay",
    category: "retreat",
    description: {
      en: "Continue your time on Brač with additional nights after the retreat concludes. Integration Stay participants enjoy unlimited access to regular studio classes, open practice time, beach walks, journaling, reflection, and unstructured space to integrate their experience before returning home.",
      de: "Verlängere deinen Aufenthalt auf Brač um einige zusätzliche Nächte nach dem Ende des Retreats. Teilnehmer des Integration Stay genießen unbegrenzten Zugang zu regulären Studiokursen, freier Übungszeit, Spaziergängen am Meer, Journaling, Reflexion und ausreichend Raum, um ihre Erfahrungen zu integrieren, bevor sie nach Hause zurückkehren.",
//      hr: "Produžite svoj boravak na Braču dodatnim noćenjima nakon završetka retreata. Sudionici programa Integration Stay imaju neograničen pristup redovitim studijskim satovima, vremenu za samostalnu praksu, šetnjama uz more, vođenju dnevnika, refleksiji i slobodnom prostoru za integraciju iskustva prije povratka kući.",
    },
    note: "Per person per night",
    eur: 100,
    usd: 125,
    gbp: 90,
    billingUnit: "per day",
    standalone: false,
    upgrade: true,
  },
  "earlyDeparture": {
    label: "Early Departure",
    category: "retreat",
    description: {
      en: "Provides schedule flexibility if attendance for the full week is not feasible.",
      de: "Bietet zeitliche Flexibilität, falls die Teilnahme an der gesamten Woche nicht möglich ist.",
//      hr: "Pruža fleksibilnost u rasporedu ako sudjelovanje tijekom cijelog tjedna nije moguće.",
    },
    note: "Available for participants unable to commit to the full retreat week.",
    eur: -100,
    usd: -125,
    gbp: -90,
    billingUnit: "per day",
    standalone: false,
    upgrade: true,
  },
  "bringFriend": {
    label: "Bring a Friend",
    category: "retreat",
    description: {
      en: "When two or more friends book a retreat together, each participant receives a complimentary Integration Stay night.",
      de: "Wenn zwei oder mehr Freunde gemeinsam ein Retreat buchen, erhält jede teilnehmende Person eine kostenlose Integration Stay Nacht.",
//      hr: "Kada dvoje ili više prijatelja zajedno rezerviraju retreat, svaki sudionik dobiva besplatnu noć u programu Integration Stay.",
    },
    note: "Integration Stay can also be swapped for Arrival Stay.",
    eur: 0,
    billingUnit: "2+ participants · Integration Stay",
    standalone: false,
    upgrade: true,
  },
  "advancedImmersion": {
    label: "Advanced Immersion",
    category: "retreat",
    description: {
      en: "An intensive 5-day small-group experience intended for dedicated practitioners who wish to go deeper into the practice. Designed as a standalone retreat or as an extension to the 7-day retreat, Advanced Immersion is a more focused and intimate experience with additional time for practice, reflection, and personalized guidance.",
      de: "Ein intensives fünftägiges Kleingruppenprogramm für Fortgeschrittene, die ihre Praxis vertiefen möchten. Advanced Immersion kann eigenständig gebucht oder als Erweiterung des 7-Tage-Retreat ergänzt werden und bietet zusätzliche Zeit für Praxis, Reflexion und individuelle Begleitung in einem besonders fokussierten Rahmen.",
//      hr: "Intenzivan petodnevni program u maloj grupi namijenjen posvećenim praktičarima koji žele produbiti svoju praksu. Advanced Immersion može se pohađati kao samostalni retreat ili kao produžetak 7-dnevnog retreata te pruža dodatno vrijeme za praksu, refleksiju i individualno vodstvo u usmjerenijem i intimnijem okruženju.",
    },
    note: "Maximum 8 students",
    duration: 5,
    capacity: 6, // Target participants 4-6
    inventory: 8, // Capped at 8 students
    discountApply: 25, // 25% discount for those already attending the 7-day retreat
    eur: 2000,
    calculate: true,
    billingUnit: "5-day program + 6-day stay · small-group intensive",
    standalone: true,
    upgrade: true,
  },
  "coreRetreat": {
    label: "7-Day Yoga Retreat",
    category: "retreat",
    description: "The Studio Sun & Sea Yoga Retreat is designed to create space away from the pace and distractions of everyday life. Through daily yoga, guided practice, time for rest, community meals, and personal reflection, participants are invited to reconnect with themselves and deepen their relationship with practice.",
    note: "Maximum 16 students",
    duration: 7,
    capacity: 14, // Target participants 12-14
    inventory: 16, // Capped at 16 participants
    eur: 2000,
    calculate: true,
    billingUnit: "7-day program + 8-day stay",
    standalone: true,
    upgrade: false,
  },
};

export type ProductKey = keyof typeof products;

// Pricing data for service offerings
// Note: These do NOT display on the website unless you choose to surface them.
export const pricing: {
  intro: {
    trialClass: number;
    trialWeek: number;
    trialTwoWeek: number;
  };
  membership: {
    unlimitedMonthly: ProductInfo;
    fiveClassMonthly: ProductInfo;
    tenClassMonthly: ProductInfo;
  };
  class: {
    single: ProductInfo;
    tenPack: ProductInfo;
    unlimitedMonth: ProductInfo;
  };
  private: ProductInfo[];
  duet: ProductInfo[];
  group: ProductInfo[];
  workshop: ProductInfo[];
  retreats: {
    retreats: ProductInfo[];
    discounts: DiscountInfo;
    upgrades: Record<ProductKey, ProductInfo>;
  }
} = {
  intro: {
    trialClass: 10,
    trialWeek: 55,
    trialTwoWeek: 95,
  },

  membership: {
    unlimitedMonthly: {
      eur: 120,
    },
    // Mindbody-only memberships (not displayed on website)
    fiveClassMonthly: {
      eur: 75,
      minCommit: 3,
      rollover: false,
      unpublished: true,
    },
    tenClassMonthly: {
      eur: 95,
      minCommit: 3,
      rollover: false,
      unpublished: true,
    },
  },

  class: {
    single: {
      eur: 20,
      usd: 25,
      gbp: 18,
    },
    tenPack: {
      eur: 180,
      usd: 220,
      gbp: 160,
      validity: 18, // months
    },
    // Mindbody-only (not displayed on website)
    unlimitedMonth: {
      eur: 150,
      unpublished: true,
    },
  },

  // Private yoga classes (one-to-one, duet, and small-group)
  private: [
    { duration: 60, eur: 70, usd: 90, gbp: 65 },
    { duration: 75, eur: 85, usd: 105, gbp: 75 },
    { duration: 90, eur: 100, usd: 120, gbp: 90 },
    { duration: 120, eur: 130, usd: 155, gbp: 115 },
  ],
  duet: [
    { duration: 60, eur: 100, usd: 120, gbp: 90 },
    { duration: 75, eur: 120, usd: 145, gbp: 105 },
    { duration: 90, eur: 140, usd: 170, gbp: 125 },
    { duration: 120, eur: 180, usd: 220, gbp: 160 },
  ],
  group: [
    { duration: 60, eur: 140, usd: 170, gbp: 125 },
    { duration: 75, eur: 165, usd: 200, gbp: 145 },
    { duration: 90, eur: 190, usd: 230, gbp: 170 },
    { duration: 120, eur: 240, usd: 290, gbp: 215 },
  ],

  // Workshops
  workshop: [
    { duration: 2, eur: 55, usd: 70, gbp: 50 },
    { duration: 3, eur: 75, usd: 95, gbp: 70 },
    { duration: 4, eur: 95, usd: 115, gbp: 85 },
  ],

  // Retreats
  retreats: {
    retreats: [
      products.coreRetreat,
      {
        ...products.advancedImmersion,
        discountApply: 0,
      },
    ],
    discounts: {
      prepayment: 5,
      earlyBird: 5,
      journey: {
        [journeyLevel.JourneyMember]: 0,
        [journeyLevel.StayGuest]: 5,
        [journeyLevel.YogaMember]: 10,
        [journeyLevel.YogaAlumni]: 15,
        [journeyLevel.BlueHeronAlumni]: 20,
      },
    },
    upgrades: products,
  },
};
