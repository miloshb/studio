# Contributing — Studio Sun & Sea

Thank you for contributing to Studio Sun & Sea.
This project is a multilingual Astro site with Mindbody integrations and a custom design system.
Please follow the guidelines below to maintain consistency and quality.

---

## 1. Project Structure

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
```

### Key Directories

- `components/` — Reusable UI components
- `data/` — Structured data (pricing, schedules)
- `layouts/` — Page‑level wrappers
- `pages/` — English + German routes
- `styles/` — Global and component CSS

---

## 2. Coding Standards

### Astro Components
- Keep components pure (no client JS unless required)
- Use `Astro.props` for inputs
- Avoid inline styles
- Use global CSS variables

### TypeScript
- All data structures must be typed
- Use interfaces for shared structures
- Avoid `any`

### CSS
- Use global variables for spacing, colors, typography
- Prefer `inline-flex` for small UI elements
- Maintain consistent layout patterns

---

## 3. Mindbody Integration Guidelines

### Script Loading
Load the Healcode script **once** in `BaseLayout.astro`:

```html
<script src="https://widgets.mindbodyonline.com/javascripts/healcode.js"></script>
```

### Widget Components
Wrap all widgets in components:

- `MindbodyLogin.astro`
- `MindbodySchedule.astro`
- `MindbodyRegistration.astro`
- `MindbodyPricing.astro`
- `MindbodyAccount.astro`

Never embed raw `<healcode-widget>` tags directly in pages.

---

## 4. Pricing System

### Data Structure
Pricing lives in:

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

### Components
Use:

- `<PriceTable />` for arrays
- `<PriceRow />` for single entries

Never hardcode currency formatting in pages.

---

## 5. Multilingual Routing

### Folder Structure

```text
/en/... → English
/de/... → German
```

### Language Switcher
- Updates `localStorage.preferredLanguage`
- Must link to correct localized route
- Must not break layout

### Content Parity
Every English page must have a German counterpart.

---

## 6. Commit Standards

### Commit Message Format
Use conventional commits:

```text
feat: add new pricing table component
fix: correct Mindbody login widget alignment
docs: update README for pricing structure
refactor: clean up BaseLayout header logic
style: adjust spacing in footer
```

### Branching
- `main` — production
- `dev` — staging
- `feature/<name>`
- `fix/<name>`

---

## 7. Pull Request Guidelines

### Required
- Description of changes
- Screenshots for UI changes
- English + German parity
- No console errors
- No broken Mindbody widgets
- Typed data structures

### Review Checklist
- Follows design system
- Does not break widgets
- Maintains multilingual routing
- Preserves accessibility
- Avoids inline styles

---

## 8. Deployment

### Cloudflare Pages
Production deployment is automatic on push to `main`.

### Build Requirements
- Node 18+
- Astro 4+
- No server‑side code

### Common Issues
- Missing Healcode script → widgets fail
- Wrong pricing keys → tables break
- Missing `data-lang` → language switcher fails

---
*Last Checked: June 2026*
