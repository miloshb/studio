// src/data/routes.js

// Supported lanugages (first listed is primary/default)
export const LANGS = ["en", "de"];

// Mapping EN ↔ DE equivalents
export const ROUTES = {
  //////////////////////
  // HEADER NAV PAGES //
  //////////////////////
  index: {
    href: { en: "/en/", de: "/de/" },
    nav: { en: "Home", de: "Start" },
    label: { en: "Home", de: "Startseite" },
    desc: {
      en: "Welcome to Studio Sun & Sea.",
      de: "Willkommen bei Studio Sun & Sea."
    }
  },
  classes: {
    href: { en: "/en/classes", de: "/de/classes" },
    nav: { en: "Classes", de: "Kurse" },
    label: { en: "Group Classes", de: "Gruppenstunden" },
    desc: {
      en: "Explore our group classes and weekly schedule.",
      de: "Entdecken Sie unsere Gruppenstunden und den Wochenplan."
    }
  },
  schedule: {
    href: { en: "/en/schedule", de: "/de/schedule" },
    nav: { en: "Schedule", de: "Stundenplan" },
    label: { en: "Schedule", de: "Stundenplan" },
    desc: {
      en: "Weekly class schedule.",
      de: "Wöchentlicher Stundenplan."
    }
  },
  private: {
    href: { en: "/en/private", de: "/de/private" },
    nav: { en: "Private", de: "Privat" },
    label: { en: "Private Sessions", de: "Private Sessions" },
    desc: {
      en: "One-to-one and small-group private sessions.",
      de: "Einzelunterricht und Kleingruppen-Sessions."
    }
  },
  workshops: {
    href: { en: "/en/workshops", de: "/de/workshops" },
    nav: { en: "Workshops", de: "Workshops" },
    label: { en: "Yoga Workshops", de: "Yoga Workshops" },
    desc: {
      en: "Deepen your practice with our specialized workshops.",
      de: "Vertiefen Sie Ihre Praxis mit unseren spezialisierten Workshops."
    }
  },
  teach: {
    href: { en: "/en/teach", de: "/de/teach" },
    nav: { en: "Teach", de: "Unterrichten" },
    label: { en: "Teach With Us", de: "Mit uns unterrichten" },
    desc: {
      en: "Opportunities to teach at Studio Sun & Sea.",
      de: "Möglichkeiten, bei Studio Sun & Sea zu unterrichten."
    }
  },
  about: {
    href: { en: "/en/about", de: "/de/about" },
    nav: { en: "About", de: "Über uns" },
    label: { en: "About Us", de: "Über uns" },
    desc: {
      en: "Learn more about Studio Sun & Sea.",
      de: "Erfahren Sie mehr über Studio Sun & Sea."
    }
  },
  account: {
    href: { en: "/en/account", de: "/de/account" },
    nav: { en: "Account", de: "Konto" },
    label: { en: "Account", de: "Konto" },
    desc: {
      en: "Manage your account.",
      de: "Verwalten Sie Ihr Konto."
    }
  },

  //////////////////////
  // SYSTEM PAGES     //
  //////////////////////
  thankYou: {
    href: { en: "/en/thankyou", de: "/de/danke" },
    nav: { en: "Thank You", de: "Danke" },
    label: { en: "Thank You", de: "Danke" },
    desc: {
      en: "Confirmation page for bookings, messages, and submissions.",
      de: "Bestätigungsseite für Buchungen, Nachrichten und Anfragen."
    }
  },
  register: {
    href: { en: "/en/register", de: "/de/registrieren" },
    nav: { en: "Register", de: "Registrieren" },
    label: { en: "Register", de: "Registrieren" },
    desc: {
      en: "Create your account.",
      de: "Erstellen Sie Ihr Konto."
    }
  },
  login: {
    href: { en: "/en/login", de: "/de/anmelden" },
    nav: { en: "Login", de: "Anmelden" },
    label: { en: "Login", de: "Anmelden" },
    desc: {
      en: "Access your account.",
      de: "Melden Sie sich in Ihrem Konto an."
    }
  },
  checkout: {
    href: { en: "/en/checkout", de: "/de/kasse" },
    nav: { en: "Checkout", de: "Kasse" },
    label: { en: "Checkout", de: "Kasse" },
    desc: {
      en: "Complete your purchase.",
      de: "Schließen Sie Ihren Kauf ab."
    }
  },

  //////////////////////
  // FOOTER PAGES     //
  //////////////////////
  scheduleOverview: {
    href: { en: "/en/schedule-overview", de: "/de/schedule-overview" },
    nav: { en: "Weekly Rhythm", de: "Wochenrhythmus" },
    label: { en: "Weekly Rhythm", de: "Wochenrhythmus" },
    desc: {
      en: "Overview of the weekly practice rhythm.",
      de: "Überblick über den Wochenrhythmus."
    }
  },
  pricing: {
    href: { en: "/en/pricing", de: "/de/preise" },
    nav: { en: "Pricing", de: "Preise" },
    label: { en: "Pricing", de: "Preise" },
    desc: {
      en: "Class and session pricing.",
      de: "Preise für Kurse und Sessions."
    }
  },
  payment: {
    href: { en: "/en/payment", de: "/de/zahlung" },
    nav: { en: "Payment", de: "Zahlung" },
    label: { en: "Payment Options", de: "Zahlungsoptionen" },
    desc: {
      en: "How to pay for classes and sessions.",
      de: "Zahlungsmöglichkeiten für Kurse und Sessions."
    }
  },
  kunga: {
    href: { en: "/en/kunga", de: "/de/kunga" },
    nav: { en: "Kunga Yoga", de: "Kunga Yoga" },
    label: { en: "Kunga Yoga – Service & Community", de: "Kunga Yoga – Dienst & Gemeinschaft" },
    desc: {
      en: "Learn about the service-based Kunga Yoga tradition and our support for charitable initiatives.",
      de: "Erfahre mehr über die dienstorientierte Kunga-Yoga-Tradition und wie wir gemeinnützige Projekte unterstützen."
    }
  },
  imprint: {
    href: { en: "/en/imprint", de: "/de/impressum" },
    nav: { en: "Imprint", de: "Impressum" },
    label: { en: "Imprint", de: "Impressum" },
    desc: {
      en: "Legal information.",
      de: "Gesetzliche Informationen."
    }
  },
  privacy: {
    href: { en: "/en/privacy", de: "/de/datenschutz" },
    nav: { en: "Privacy", de: "Datenschutz" },
    label: { en: "Privacy Policy", de: "Datenschutz" },
    desc: {
      en: "How we handle your data.",
      de: "Wie wir Ihre Daten verarbeiten."
    }
  },
  terms: {
    href: { en: "/en/terms", de: "/de/agb" },
    nav: { en: "Terms", de: "AGB" },
    label: { en: "Terms of Service", de: "AGB" },
    desc: {
      en: "Terms and conditions.",
      de: "Allgemeine Geschäftsbedingungen."
    }
  },
  waiver: {
    href: { en: "/en/waiver", de: "/de/haftungsausschluss" },
    nav: { en: "Waiver", de: "Haftungsausschluss" },
    label: { en: "Waiver", de: "Haftungsausschluss" },
    desc: {
      en: "Liability waiver.",
      de: "Haftungsausschluss."
    }
  },
  contact: {
    href: { en: "/en/contact", de: "/de/kontakt" },
    nav: { en: "Contact", de: "Kontakt" },
    label: { en: "Contact", de: "Kontakt" },
    desc: {
      en: "Get in touch with us.",
      de: "Kontaktieren Sie uns."
    }
  }
};


// NAV GROUPS (keys only)
export const HEADER_ROUTE_KEYS = ["classes", "schedule", "private", "workshops", "teach", "about"];
export const FOOTER_ROUTE_KEYS = [
  "scheduleOverview",
  "pricing",
  "payment",
  "kunga",
  "imprint",
  "privacy",
  "terms",
  "waiver",
  "contact"
];
export const NEXT_STEPS_ROUTE_KEYS = ["classes", "private", "workshops", "schedule", "teach", "contact"];

// HREFLANG MAP
export const HREFLANG = Object.fromEntries(
  Object.entries(ROUTES).map(([key, value]) => [
    key,
    Object.fromEntries(
      LANGS.map(lang => [lang, value.href[lang] || `/${lang}/`])
    )
  ])
);

export function getLangRoot(lang) {
  const safeLang = LANGS.includes(lang) ? lang : LANGS[0];
  return `/${safeLang}/`;
}

// Language switcher URL helper
export function getLangUrl(pageKey, targetLang) {
  const route = ROUTES[pageKey];

  // If the page doesn't exist in ROUTES, fall back to language root
  if (!route) return `/${targetLang}/`;

  // If the target language doesn't exist for this page, fall back to root
  if (!route.href[targetLang]) return `/${targetLang}/`;

  return route.href[targetLang];
}
