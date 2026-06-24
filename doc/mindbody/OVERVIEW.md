# 📋 Mindbody Integration Portfolio Directory

This directory serves as the centralized reference architecture for all official, custom, and third-party **Mindbody API and Widget integration avenues** within the studio's digital ecosystem.

## 🗺️ Integration Architecture At-A-Glance

| 🌐 Branded Web Tools | ⚡ Public REST API | 🛒 Marketplace Hub |
| :--- | :--- | :--- |
| - Async JS Widgets | - Webhooks (JSON) | - ClassPass / GA4 |
| - Astro Embeds | - Custom Web Stack | - Bookkeep / QuickBooks |

## 1. Native Client Interface: Branded Web Tools (Widgets)

These out-of-the-box, asynchronous JavaScript code snippets are embedded directly into frontend frameworks like Astro. They dynamically render client-side interfaces using real-time data from the Studio Account ID.

* **Schedule Widget (v2)**
  * **Description:** Renders a responsive booking calendar directly on web layouts.
  * **Capabilities:** Allows clients to filter by class type or instructor, view descriptions, and purchase passes natively.
* **Appointment Widget (v2)**
  * **Description:** Self-service appointment scheduling engine.
  * **Capabilities:** Maps real-time staff availability matrices and custom session durations.
* **Enrollments / Workshops Widget**
  * **Description:** Promotional container for date-locked events.
  * **Capabilities:** Displays specialized multi-day courses, workshops, and intensive events on dedicated landing paths.
* **Prospect / Registration Widget**
  * **Description:** Secure new user intake capture module.
  * **Capabilities:** Collects customer name, contact fields, and liability agreements. Pushes new profiles directly into the Mindbody CRM. Includes direct API hooks for automated **MailChimp** subscriber injection.
* **Staff / Bio Widget**
  * **Description:** Dynamic staff roster synchronizer.
  * **Capabilities:** Pulls active instructor profiles, custom bios, and avatars into layout templates, eliminating manual roster synchronization.

---

## 2. Web Analytics, Performance, & Tracking Pixels

These integrations run directly inside checkout pipelines and consumer booking flows to track user behavior and marketing performance:

* **Meta (Facebook) Pixel**
  * **Method:** Injected via the Mindbody Branded Web Manager using a verified Pixel ID.
  * **Events Tracked:** Fires standard pixel payloads (`InitiateCheckout`, `Purchase`, `CompleteRegistration`) to measure paid social conversions.
* **Google Analytics 4 (GA4)**
  * **Method:** Cross-domain measurement protocol tracking.
  * **Events Tracked:** Links your main marketing domain seamlessly with the secure booking domain (`://mindbodyonline.com`) to track full checkout funnel behavior.

---

## 3. Platform Native Enterprise Connections

Standard, dashboard-level synchronization modules managed within the native **Apps & Integrations** screen of the Mindbody Core Software:

* **Google Calendar Integration**
  * **Direction:** Bi-directional sync.
  * **Utility:** Maps staff appointments and class assignments from Mindbody directly into employee Google Calendar accounts.
* **ADP Payroll Link**
  * **Direction:** Outbound export.
  * **Utility:** Automatically packages hours worked, check-ins, and class commission metrics into structured payloads ready for processing in **ADP RUN**.
* **Messenger[ai] / Bow Tie**
  * **Direction:** Dynamic Automated Chatbot.
  * **Utility:** Uses artificial intelligence to capture missed-call SMS channels, answer basic studio questions, and process off-hours bookings via text messages.

---

## 4. Public API Network (REST & Webhooks)

For custom software engineering (such as dynamic multi-timezone scheduling components or localized app architectures).

### 🔐 Authentication Protocol
* **Standard:** OAuth 2.0 via the secure Mindbody Identity Service (`://mindbodyonline.com`).

### ⚡ Webhooks (Real-Time Asynchronous JSON)
Pushes instant event payloads to custom serverless functions or endpoint controllers on actions like:
* `ClassBooked` / `ClassCancelled`
* `ClientCreated` / `ClientUpdated`
* `SaleComplete`
* `MembershipDeactivated`

### 🛠️ Core Endpoint Groups (REST)

| Endpoint Group | Description | Typical Use Case |
| :--- | :--- | :--- |
| **`Client Service`** | Direct read/write to user records. | Custom user profile dashboards. |
| **`Sale Service`** | Processes orders, contracts, and gift cards. | Bespoke e-commerce flows. |
| **`Site Service`** | Pulls location data, programs, and session tiers. | Structural layout building. |
| **`Staff Service`** | Instructors, permission groups, and schedules. | Dynamic team pages. |

---

## 5. Mainstream Third-Party Marketplace Partners

Vetted middleware integrations available on the official **Mindbody Integrations Marketplace** to automate typical business tasks.

### 📈 Marketing, Retention & Automation
* **ClassPass:** Native inventory integration that fills open mats or empty class spots by syncing spots to the global ClassPass Aggregator network.
* **Referrizer:** Automatically triggers feedback loops, reputation management requests, and text/email referral tracking pipelines.
* **ActiveCampaign:** Automatically syncs client profile tags and purchase histories hourly for advanced marketing automation segmentation.

### 🧾 Financials, POS, & Operations
* **Bookkeep Sync:** Automatically maps daily sales logs, taxonomies, and merchant payouts directly into accounting software (**QuickBooks, Xero, or NetSuite**), replacing manual spreadsheet entries.
* **ShopifyConnect:** Establishes cross-platform inventory tracking, syncing stock counts between your digital Shopify storefront and the physical point-of-sale retail area inside the studio.

### 📋 Legal & Medical Documentation
* **WaiverKing:** Automates digital liability document signature workflows, attaching signed PDFs straight to the corresponding client file in Mindbody.
* **QuickerNotes:** Provides HIPAA-compliant SOAP charting, customer intake forms, and clinical notes management designed for massage, bodywork, and physical therapy settings.

---
*Last Checked: June 2026*
