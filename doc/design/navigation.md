# Studio Sun & Sea — Navigation & Information Architecture
A calm, clear, minimal navigation system designed for effortless user experience.
Supports English primary, with German secondary content where appropriate.

---

# 🧭 Top-Level Navigation (Primary IA)

The Studio Sun & Sea navigation is intentionally simple and serene.
No dropdowns. No animations. No clutter.

**Primary Navigation Items:**

1. **Home**
2. **Classes & Schedule**
3. **Private Sessions**
4. **Teach With Us**
5. **About**
6. **Contact**

These six items form the entire top-level structure.

---

# 🗺️ Information Architecture (Full Map)
```
Home
├── Hero (poster-style)
├── Mini schedule preview
├── Offerings overview
├── Studio philosophy
└── CTA: View Schedule

Classes & Schedule
├── Weekly class schedule (Mindbody embed)
├── Class descriptions
└── Pricing overview (optional)

Private Sessions
├── 1:1 sessions
├── Small group sessions
└── Booking CTA

Teach With Us
├── Platform model explanation
├── Benefits for teachers
├── Fee structure
└── Application form (future)

About
├── Studio Sun & Sea philosophy
├── Milosh bio (non-ego-centric)
└── Teaching approach (English + German + Sanskrit)

Contact
├── Contact form
├── Email links
└── Studio location (optional)

Footer
├── Payment Options
├── Impressum
├── Datenschutz
└── Social links (minimal)
```

---

# 🌿 Navigation Bar Specification

## **Style**
- Background: **Seashell Warm (#F7EFEA)**
- Text: **Deep Slate (#3A3A3C)**
- Typeface: **Inter Medium**
- Height: **64–72px**
- Alignment: **Right-aligned links**, left-aligned logo
- Spacing: generous, airy, calm

## **Behavior**
- No animations
- No dropdown menus
- Hover: subtle color shift only
- Active page: underline or soft color shift

## **Logo**
- Left side
- Minimal line-art or wordmark
- Height: 32–40px

---

# 📱 Mobile Navigation

## **Mobile Menu Type**
- Simple hamburger menu
- Slide-down panel (no slide-in from side)
- No animations beyond instant open/close

## **Mobile Menu Items**
Same order as desktop:

- Home
- Classes & Schedule
- Private Sessions
- Teach With Us
- About
- Contact

## **Mobile Styling**
- Background: Seashell Warm
- Text: Deep Slate
- Padding: 20–24px
- Line height: 1.6

---

# 🧘‍♂️ UX Principles

### **1. Clarity First**
Users should know exactly where to go within 1 second.

### **2. No Redundancy**
Only one CTA in the nav: **View Schedule** (optional).
Avoid repeating “Book Now” everywhere.

### **3. Calm Rhythm**
Generous spacing between nav items.
No tight clusters.

### **4. No Movement**
No animations, fades, slides, or transitions.
Navigation should feel still and grounded.

### **5. Accessibility**
- Minimum 16px text
- High contrast (Deep Slate on Seashell Warm)
- Keyboard navigable
- ARIA labels for mobile menu

---

# 🧩 Component Specification

## **Desktop Nav Component**
```
NavBar
├── Logo (left)
└── NavLinks (right)
├── Home
├── Classes & Schedule
├── Private Sessions
├── Teach With Us
├── About
└── Contact
```

## **Mobile Nav Component**
```
MobileNav
├── Logo (left)
├── Hamburger (right)
└── MenuPanel (hidden by default)
├── Home
├── Classes & Schedule
├── Private Sessions
├── Teach With Us
├── About
└── Contact
```

---

# 🔗 Related Documentation

- **[Color palette](ca://s?q=Define_warm_minimalism_palette)**
- **[Typography system](ca://s?q=Generate_typography_system)**
- **[Homepage hero layout](ca://s?q=Generate_homepage_hero_spec)**
- **[Design system index](ca://s?q=Generate_design_system_index)**
- **[Component library spec](ca://s?q=Generate_component_library_spec)**
