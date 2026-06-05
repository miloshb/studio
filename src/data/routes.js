// src/data/routes.js

// Mapping EN ↔ DE equivalents
export const ROUTES = {
  classes: {
    en: { label: "Classes", href: "/en/classes" },
    de: { label: "Kurse", href: "/de/classes" }
  },
  schedule: {
    en: { label: "Schedule", href: "/en/schedule" },
    de: { label: "Stundenplan", href: "/de/schedule" }
  },
  private: {
    en: { label: "Private Sessions", href: "/en/private" },
    de: { label: "Private Sessions", href: "/de/private" }
  },
  teach: {
    en: { label: "Teach with Us", href: "/en/teach" },
    de: { label: "Unterrichten", href: "/de/teach" }
  },
  about: {
    en: { label: "About", href: "/en/about" },
    de: { label: "Über uns", href: "/de/about" }
  },

  pricing: {
    en: { label: "Pricing", href: "/en/pricing" },
    de: { label: "Preise", href: "/de/preise" }
  },
  payment: {
    en: { label: "Payment", href: "/en/payment" },
    de: { label: "Zahlung", href: "/de/zahlung" }
  },
  imprint: {
    en: { label: "Imprint", href: "/en/imprint" },
    de: { label: "Impressum", href: "/de/impressum" }
  },
  privacy: {
    en: { label: "Privacy", href: "/en/privacy" },
    de: { label: "Datenschutz", href: "/de/datenschutz" }
  },
  terms: {
    en: { label: "Terms of Service", href: "/en/terms" },
    de: { label: "AGB", href: "/de/agb" }
  },
  waiver: {
    en: { label: "Waiver", href: "/en/waiver" },
    de: { label: "Haftungsausschluss", href: "/de/haftungsausschluss" }
  },
  contact: {
    en: { label: "Contact", href: "/en/contact" },
    de: { label: "Kontakt", href: "/de/kontakt" }
  }
};

export const TOP_NAV = {
  en: [
    ROUTES.classes.en,
    ROUTES.schedule.en,
    ROUTES.private.en,
    ROUTES.teach.en,
    ROUTES.about.en
  ],
  de: [
    ROUTES.classes.de,
    ROUTES.schedule.de,
    ROUTES.private.de,
    ROUTES.teach.de,
    ROUTES.about.de
  ]
};

export const FOOTER_NAV = {
  en: [
    ROUTES.pricing.en,
    ROUTES.payment.en,
    ROUTES.imprint.en,
    ROUTES.privacy.en,
    ROUTES.terms.en,
    ROUTES.waiver.en,
    ROUTES.contact.en
  ],
  de: [
    ROUTES.pricing.de,
    ROUTES.payment.de,
    ROUTES.imprint.de,
    ROUTES.privacy.de,
    ROUTES.terms.de,
    ROUTES.waiver.de,
    ROUTES.contact.de
  ]
};

export const HREFLANG = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => [
    key,
    { en: value.en.href, de: value.de.href }
  ])
);

export function getAlternateUrl(pageKey, currentLang) {
  const route = ROUTES[pageKey];
  if (!route) {
    // fallback: go to language root instead of crashing
    return currentLang === "en" ? "/de/" : "/en/";
  }
  return currentLang === "en" ? route.de.href : route.en.href;
}
