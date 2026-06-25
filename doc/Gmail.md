# Studio Sun & Sea — Gmail Label & Folder Architecture

This document outlines the authoritative nested label structure inside Gmail. It serves as a visual and technical map explaining where incoming communications route based on the master automated filter rules.

---

## Top-Level Architecture Overview

All incoming system emails bypass the Primary Inbox and map cleanly into one of five functional parent directories. Sub-directories are intentionally isolated by source to separate automated machine logs from manual human interactions.

```text
📁 Studio Sun & Sea Workspace Root
├── 📁 01-Bookings
│   ├── 📥 01-Bookings/Clients              [MANUAL - STAYS IN INBOX]
│   └── 🤖 01-Bookings/Mindbody-System      [AUTOMATED - ARCHIVED]
├── 📁 02-Operations
│   ├── 👥 02-Operations/Mindbody-Corporate [HUMAN STAFF / ONBOARDING / SUPPORT]
│   ├── 🤖 02-Operations/Waivers-Audits     [AUTOMATED - ARCHIVED]
│   └── 🧘 02-Operations/Internal-Studio    [Team logistics, shift swaps, Instructors]
├── 📁 03-Finance
│   ├── 📥 03-Finance/Invoices              [MANUAL/VENDOR/INWX/GODADDY/CLOUDFLARE/GOOGLE - ARCHIVED + STARRED]
│   ├── 🤖 03-Finance/Mindbody-Payouts      [AUTOMATED - ARCHIVED + STARRED]
│   └── 🏦 03-Finance/Banking               [Zelle, Venmo, Wise Automated Logs]
├── 📁 04-Sales
│   ├── 🤖 04-Sales/Onboarding         [AUTOMATED WELCOME / REGISTRATION]
│   ├── 📈 04-Sales/Retention          [AUTOMATED BIRTHDAYS / ANNIVERSARIES]
│   ├── 🤝 04-Sales/Partnerships       [Joint Ventures, B2B contracts, revenue-share]
│   ├── 🔍 04-Sales/Market-Research    [Competitor Promos & Memberships Intel]
│   ├── 🗣️ 04-Sales/Collaboration      [Informal cross-promo, networking, casual co-marketing]
│   ├── 📥 04-Sales/Inbound-Offers     [Cold pitches, vendor promos, tool deals]
│   ├── 📣 04-Sales/Marketing          [Outbound campaigns, newsletters, branding assets]
│   └── 🎯 04-Sales/Advertising        [Paid ads, Meta/Google campaign receipts, ad metrics]
├── 📁 05-IT-Security
│   ├── 🤖 05-IT-Security/System-Logs       [AUTOMATED MINDBODY/INWX/GODADDY/CLOUDFLARE - ARCHIVED + NO SPAM]
│   └── ⚙️ 05-IT-Security/Platform-Admin    [HUMAN/PLATFORM SETUPS & ACCOUNTS TRACK]
└── 📁 06-Legal
    ├── 📥 06-Legal/Privacy    [MANUAL - STAYS IN INBOX - GDPR/Datenschutz]
    ├── ⚖️ 06-Legal/Legal      [AUTOMATED/MANUAL ARCHIVE - Exali, lawyers]
    └── 📜 06-Legal/Compliance [AUTOMATED ARCHIVE - Audits, Policy changes]
```

---

## Detailed Directory Specifications

### 🟢 01-Bookings
Handles all client scheduling, reservations, and immediate class capacity logistics.
* **`01-Bookings/Clients`**
  * **Source:** Real humans emailing any booking-related track.
  * **Behavior:** Appends label; **does not archive**. Stays in primary inbox for immediate manual processing.
* **`01-Bookings/Mindbody-System`**
  * **Source:** Mindbody automated engine (`Business5754454@mindbodyonline.com`).
  * **Contents:** Appointment/Class confirmations, waitlist notifications, cancellations, rescheduling, and no-show receipts.
  * **Behavior:** Appends label; skips the inbox (archives instantly).

### 🔵 02-Operations
Manages internal administration, facilities coordination, and legal liability tracking.
* **`02-Operations`**
  * **Source:** Real humans, vendors, or staff coordinating studio management tasks.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
* **`02-Operations/Waivers-Audits`**
  * **Source:** Mindbody automated engine (`Business5754454@mindbodyonline.com`).
  * **Contents:** Carbon copies of completed Client Intake Forms and digital Liability Waivers.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
* **`02-Operations/Mindbody-Corporate`**
  * **Source:** Real human Mindbody staff (Onboarding managers, corporate sales, executive tech support).
  * **Contents:** Manual project launch emails, platform settings discussions, account tier modifications.
  * **Behavior:** No auto-archive rule. Stays in the main inbox for immediate action, then manually archived here for ledger tracking.
* **`02-Operations/Internal-Studio`**
  * **Source:** Internal communication between Milos, studio instructors, and core staff members.
  * **Contents:** Schedule adjustments, team coordination updates, shift swaps, teacher workshop logistics, and internal studio announcements.
  * **Behavior:** No auto-archive rule. Stays in the primary inbox for active team coordination, then manually filed here.

### 🟡 03-Finance
Secures all revenue tracking, credit card processing states, and business expenditures.
* **`03-Finance/Invoices`**
  * **Source:** Direct third-party vendors, suppliers, and external accounts payable communication. INWX billing, and professional insurance statements from **exali AG**.
  * **Behavior:** Appends label; skips the inbox; **adds a Gmail Star** for urgent visual priority.
* **`03-Finance/Mindbody-Payouts`**
  * **Source:** Mindbody automated engine (`Business5754454@mindbodyonline.com`).
  * **Contents:** Merchant processing statements, AutoPay success logs, AutoPay failure notices, expiring credit card alerts, and automated customer invoices.
  * **Behavior:** Appends label; skips the inbox; **adds a Gmail Star** for collection review.
* **`03-Finance/Banking`**
  * **Source:** Automated merchant transaction confirmations, transfers, and notifications from **Zelle, Venmo, and Wise**.
  * **Behavior:** Appends label; skips the inbox; **adds a Gmail Star** for balance reconciling.

### 🟠 04-Sales
Houses outbound communication streams, promotions, and brand relationship milestones.
* **`04-Sales`**
  * **Source:** Direct business-to-business requests, promo updates, or partner sales tracking.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
* **`04-Sales/Onboarding`**
  * **Source:** Mindbody automated engine (`Business5754454@mindbodyonline.com`).
  * **Contents:** New Client / Welcome Emails (Business & Consumer modes), registration links.
  * **Behavior:** Appends label; skips the inbox (archives instantly for look-back auditing).
* **`04-Sales/Retention`**
  * **Source:** Mindbody automated engine (`Business5754454@mindbodyonline.com`).
  * **Contents:** Birthday Emails, First Visit Anniversaries, First Visit Follow-ups (Class & Appointment), and Gift Card Delivery receipts.
  * **Behavior:** Appends label; skips the inbox (archives instantly for active engagement tracking).
* **`04-Sales/Partnerships`**
  * **Source:** Correspondence, schedules, and agreements with external **yoga instructors** and collaborating **studios**.
  * **Behavior:** No auto-archive rule. Stays in the main inbox for active negotiations, then filed here.
* **`04-Sales/Market-Research`**
  * **Source:** Newsletter signups, membership frameworks, promotional flyers, and tier metrics from **competing yoga studios**.
  * **Behavior:** Manually filed here to curate local market intelligence.
* **`04-Sales/Collaboration`**
  * **Source:** External instructors, local micro-influencers, wellness brands, or community groups seeking informal mutual support.
  * **Contents:** Informal guest-teacher requests, community event coordination, social media cross-promotions, and casual co-marketing ideas.
  * **Behavior:** No auto-archive rule. Passes through the inbox for organic review, then manually archived here for relationship tracking.
* **`04-Sales/Inbound-Offers`**
  * **Source:** Vendor pitches, cold emails from software services, B2B marketing lists, and non-partner promotions.
  * **Contents:** Software tool discount offers, equipment vendor catalogs, cold outreach marketing materials.
  * **Behavior:** Appends label; skips the inbox (archives instantly). This clears cold corporate clutter from your primary workspace while keeping it fully searchable for later reference.
* **`04-Sales/Marketing`**
  * **Source:** Internal design drafts, newsletter copy reviews, public relations coordination, and brand asset management.
  * **Contents:** Outbound marketing strategies, newsletter templates, social media content calendars, and brand guides.
  * **Behavior:** No auto-archive rule. Stays in the main inbox for active creative collaboration, then manually filed here.
* **`04-Sales/Advertising`**
  * **Source:** Paid ad accounts (Meta Ads, Google Ads) and marketing agency data reports.
  * **Contents:** Paid campaign tracking receipts, monthly ad spend invoices, pixel tracking updates, and audience performance metrics.
  * **Behavior:** Appends label; skips the inbox (archives instantly). This handles repetitive ad platform traffic silently in the background while building an organized billing ledger.

### 🔴 05-IT-Security
Protects digital real estate, platform configurations, infrastructure states, and tech support.
* **`05-IT-Security`**
  * **Source:** Direct manual IT questions to `it@...` or tech support queries to `support@...` and `hilfe@...`.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
* **`05-IT-Security/System-Logs`**
  * **Source:** Automated engines (`Business5754454@mindbodyonline.com`, `inwx.de`, `godaddy.com`, `cloudflare.com`).
  * **Contents:** Server log notifications, sub reminders, domain alerts, API telemetry.
  * **Behavior:** Appends label; skips the inbox; **never forces mail to Spam**.
* **`05-IT-Security/Platform-Admin`**
  * **Source:** Google Workspace Admin Team, INWX platform setup, registrar account creations.
  * **Contents:** Platform onboarding records, master account tokens, new user creation notices.
  * **Behavior:** No auto-archive rule for third-party human signups. Stays in the inbox for immediate configuration visibility, then manually archived here for long-term look-back.

### ⚖️ 06-Legal
Defends the legal framework, corporate liability, insurance standing, and consumer data rights.
* **`06-Legal`**
  * **Source:** Real humans submitting GDPR/Datenschutz requests, corporate compliance audits, or critical legal issues. Includes policy documents, renewals, and legal updates from insurance broker **exali AG**.
  * **Behavior:** Appends label; skips the inbox; **never forces mail to Spam**.
* **`06-Legal/Privacy`**
  * **Source:** Direct incoming requests to `privacy@studiosunandsea.com` or `datenschutz@studiosunandsea.com`.
  * **Contents:** GDPR requests, data erasure demands, right-to-know audits.
  * **Behavior:** Appends label; **does not archive**. Stays directly in the primary inbox so you never miss a legally mandated data window.
* **`06-Legal/Legal`**
  * **Source:** Incoming requests to `legal@studiosunandsea.com` and all non-billing policy/insurance documents from **exali AG**.
  * **Contents:** Liability insurance certificates, policy modifications, legal agreements.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
* **`06-Legal/Compliance`**
  * **Source:** Direct incoming requests to `compliance@studiosunandsea.com`.
  * **Contents:** Audit trails, regulatory policy changes, corporate compliance logging.
  * **Behavior:** Appends label; skips the inbox (archives instantly).
