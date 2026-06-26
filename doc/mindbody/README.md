# Mindbody Integration Architecture — Studio Sun & Sea

## Overview
Studio Sun & Sea integrates **Mindbody Starter 2.0** using:

- Branded Web v2 widgets
- Healcode login widget
- Astro components for encapsulation
- Language‑aware routing (`/en/*` and `/de/*`)
- Static site generation on Cloudflare Pages
- Mindbody always emails clients from the generic system address: `Business5754454@mindbodyonline.com`
- https://clients.mindbodyonline.com/app/business/businessinfo/ContactInfo

The goal is a seamless booking and account experience while keeping the website fully custom‑coded, fast, and accessible.

---

## 1. Mindbody Account Details

- **Site ID:** 135581
- **MB Site ID:** 5754454
- **Product:** Mindbody Starter 2.0
- **Features:** Branded Web, Mindbody App Listing, Business App, Standard Support

---

## 2. Branded Web v2 Widgets

Widgets implemented:

- Login / Account Link
- Registration
- Schedule
- Pricing
- Account Management

All widgets are wrapped in dedicated Astro components.

---

## 3. Healcode Script Loader

Mindbody widgets require:

```html
<script src="https://widgets.mindbodyonline.com/javascripts/healcode.js"></script>
```

This script is loaded **once** in `BaseLayout.astro`.

---

## 4. Login Widget Integration

```html
<healcode-widget
  data-version="0.2"
  data-type="account-link"
  data-site-id="135581"
  data-mb-site-id="5754454"
  data-inner-html="<img alt='Login' src='https://brandedweb-assets.mindbodyonline.com/images/icons/my_account.png' />">
</healcode-widget>
```

Wrapped in a header component and styled with `inline-flex`.

---

## 5. Astro Component Architecture

### Widget Components
- MindbodyLogin.astro
- MindbodySchedule.astro
- MindbodyRegistration.astro
- MindbodyPricing.astro
- MindbodyAccount.astro

### Pricing Components
- PriceTable.astro
- PriceRow.astro

---

## 6. Pricing Integration

Pricing is manually defined in:

```text
src/data/pricing.ts
```

Structure:

```ts
intro: { ... }
monthly: { ... }
class: { single, tenPack }
private: [ ... ]
duet: [ ... ]
group: [ ... ]
workshop: [ ... ]
```

`<PriceTable />` handles:

- Duration formatting
- Currency trio formatting
- Locale‑aware labels

---

## 7. Language‑Aware Routing

Routing:

```text
/en/* → English
/de/* → German
```

Language switching uses:

- Header language selector
- `localStorage.preferredLanguage`
- `BaseLayout` passing `lang`

---

## 8. Deployment Notes

- Deployed on **Cloudflare Pages**
- Mindbody widgets load client‑side
- CSP allows Mindbody scripts
- No server‑side code required

---

## 9. Known Limitations

- Widgets cannot be deeply styled (iframe)
- Load times depend on Mindbody servers
- Widgets inject inline styles
- No dark mode support

---

## 10. File Structure Summary

```text
src/
  components/
    MindbodyLogin.astro
    MindbodySchedule.astro
    MindbodyRegistration.astro
    MindbodyPricing.astro
    MindbodyAccount.astro
    PriceTable.astro
    PriceRow.astro

  data/
    pricing.ts

  layouts/
    BaseLayout.astro

  pages/
    en/
    de/
```

---

## 11. Reference
- [Invoice and Mindbody app fees FAQ](https://support.mindbodyonline.com/s/article/217038307-What-are-Marketing-Platform-fees?language=en_US)
- [Promoted intro offers FAQ](https://support.mindbodyonline.com/s/article/213753468-Promote-in-the-MINDBODY-app-FAQ?language=en_US)

---
*Last Checked: June 2026*
