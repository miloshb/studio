# Studio Sun & Sea — Email Aliases

This document tracks all email aliases and email groups configured for the domain.
It serves as the authoritative reference for routing, support flows, billing, security, and external integrations.

---

## Primary Domain
`StudioSunAndSea.com`

---

## Email Aliases

| Category   | Alias                              | Target                        | Purpose                                          |
|------------|------------------------------------|-------------------------------|--------------------------------------------------|
| general    | hello@StudioSunAndSea.com          |   `milos@StudioSunAndSea.com` | Primary public contact address                   |
| general    | info@StudioSunAndSea.com           |   `milos@StudioSunAndSea.com` | General inquiries                                |
| general    | contact@StudioSunAndSea.com        |   `milos@StudioSunAndSea.com` | General public contact                           |
| general    | hallo@StudioSunAndSea.com          |   `milos@StudioSunAndSea.com` | **German***language general inquiries            |
| bookings   | booking@StudioSunAndSea.com        | `booking@StudioSunAndSea.com` | English booking inquiries                        |
| bookings   | buchung@StudioSunAndSea.com        | `booking@StudioSunAndSea.com` | **German***language booking inquiries            |
| bookings   | yoga@StudioSunAndSea.com           | `booking@StudioSunAndSea.com` | Class-related questions, schedule, attendance    |
| bookings   | classes@StudioSunAndSea.com        | `booking@StudioSunAndSea.com` | Class-related questions, schedule, attendance    |
| bookings   | reservations@StudioSunAndSea.com   | `booking@StudioSunAndSea.com` | Workshop-related questions, schedule, attendance |
| operations | studio@StudioSunAndSea.com         |   `milos@StudioSunAndSea.com` | Studio operations and internal coordination      |
| operations | studioleitung@StudioSunAndSea.com  |   `milos@StudioSunAndSea.com` | **German***language studio management            |
| operations | operations@StudioSunAndSea.com     |   `milos@StudioSunAndSea.com` | Backend operations and logistics                 |
| finance    | billing@StudioSunAndSea.com        |   `milos@StudioSunAndSea.com` | Invoices, payments, receipts                     |
| finance    | abrechnung@StudioSunAndSea.com     |   `milos@StudioSunAndSea.com` | **German***language billing                      |
| finance    | ap@StudioSunAndSea.com             |   `milos@StudioSunAndSea.com` | Accounts payable and vendor communication        |
| marketing  | newsletter@StudioSunAndSea.com     |   `sales@StudioSunAndSea.com` | Newsletter system and mailing list management    |
| sales      | sales@StudioSunAndSea.com          |   `sales@StudioSunAndSea.com` | Sales inquiries, offers, and B2B communication   |
| sales      | offers@StudioSunAndSea.com         |   `sales@StudioSunAndSea.com` | Promotions and offers                            |
| sales      | vertrieb@StudioSunAndSea.com       |   `sales@StudioSunAndSea.com` | **German***language Sales and B2B communication  |
| legal      | privacy@StudioSunAndSea.com        | `infosec@StudioSunAndSea.com` | GDPR requests, privacy, and related inquiries    |
| legal      | datenschutz@StudioSunAndSea.com    | `infosec@StudioSunAndSea.com` | **German***language GDPR requests, privacy, etc. |
| legal      | legal@StudioSunAndSea.com          | `infosec@StudioSunAndSea.com` | General legal inquiries                          |
| legal      | compliance@StudioSunAndSea.com     | `infosec@StudioSunAndSea.com` | Compliance, policy, audit, and regulatory        |
| security   | infosec@StudioSunAndSea.com        | `infosec@StudioSunAndSea.com` | Security & vulnerability reports / notifications |
| security   | security@StudioSunAndSea.com       | `infosec@StudioSunAndSea.com` | General security contact                         |
| support    | it@StudioSunAndSea.com             | `infosec@StudioSunAndSea.com` | General IT support and operations                |
| support    | support@StudioSunAndSea.com        | `infosec@StudioSunAndSea.com` | Technical issues, account help                   |
| support    | hilfe@StudioSunAndSea.com          | `infosec@StudioSunAndSea.com` | **German***language support                      |

---

## Email Groups

These addresses are **groups** rather than simple aliases and may have different access or membership semantics.

| Group name | Email address | Members | Aliases | Type | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Booking | `booking@StudioSunAndSea.com` | 1 | 5 | Mailing | Booking, classes, workshops, etc. |
| Sales/Marketing | `sales@StudioSunAndSea.com` | 1 | 4 | Mailing | Sales inquiries, offers, and B2B communication |
| Cyber Security | `infosec@StudioSunAndSea.com` | 1 | 9 | Mailing & Security | Security / Compliance / Legal / IT |

---

## Notes
- All aliases route to the configured mailbox or group unless otherwise specified.
- Aliases and groups should be added to Cloudflare Email Routing (or equivalent) and verified.
- When adding new aliases or groups, update this document to maintain a single source of truth.

---

## External Infrastructure: Mindbody Integration

Read the additional [technical integration details for Mindbody](mindbody).

### 1. Purpose & Scope
This document outlines the routing, authentication, and architectural standards for all email communication sent via the Mindbody platform on behalf of Studio Sun & Sea. It ensures a clear separation between client interactions, automated booking systems, and internal administration.

### 2. Mindbody Email Architecture
These mappings dictate how automated client notifications, liability assets, financial tracking, marketing flows, corporate statements, and transactional emails route out of our Mindbody business management suite. For the Mindbody Starter subscription, clients receive emails from the generic address: `Business5754454@mindbodyonline.com`, but reply to the emails below.

The [Mindbody reservation email template](mindbody/reservation.eml) has been modified to specify CET timezone and US contact number. This can be updated in the [Notification Settings](https://clients.mindbodyonline.com/app/settings/notifications).

| Mindbody Configuration Parameter | Target Routing Alias | Functional Delivery Intent |
| :--- | :--- | :--- |
| **Client Forms Notification** | `studio@StudioSunAndSea.com` | Automated copies of sent intake waivers and health registration forms. |
| **Contract Agreement** | `studio@StudioSunAndSea.com` | Automated copies of membership terms and unsigned customer contracts. |
| **Contract Lifecycle Tracking** | `studio@StudioSunAndSea.com` | Mindbody contract renewals, reminders, unsuspensions, and presale updates. |
| **Internal Employee Mappings** | `studio@StudioSunAndSea.com` | Teacher substitution reminders and staff contact logs. |
| **Business Contact Email** | `hello@StudioSunAndSea.com` | Primary client-facing directory listing email. |
| **Auto-Email Reply-To Address** | `booking@StudioSunAndSea.com` | Target for automated client cancellation/booking responses. |
| **Auto-Email BCC Copy Field** | `booking@StudioSunAndSea.com` | Live auditing stream for standard system-generated client emails. |
| **Merchant/Financial Contact** | `billing@StudioSunAndSea.com` | Credit card processing statements, failed autopays, and invoices. |
| **Transactional Receipts & Invoices** | `billing@StudioSunAndSea.com` | Copies of all Business Mode and Consumer Mode POS receipts and invoices. |
| **Client Retention & Onboarding** | `sales@StudioSunAndSea.com` | Welcome emails, first-visit follow-ups, birthdays, and anniversaries. |
| **Support Mappings** | `it@StudioSunAndSea.com` | Password reset logs. |
| **Account Owner / Admin Login** | `milos@StudioSunAndSea.com` | Account ownership notifications and system-wide admin privileges. |

Mindbody configuration fields match this structure, and [contact info can be updated](https://clients.mindbodyonline.com/app/business/businessinfo/ContactInfo) through the Mindbody dashboard.

| Mindbody Field | Value | Strategic Purpose |
| :--- | :--- | :--- |
| Business Name | Studio Sun & Sea | Clear, recognizable brand name. |
| Contact Email | `hello@studiosunandsea.com` | The public-facing general address for footer links, website text, and initial inquiries. |
| Reply-to Address | `booking@studiosunandsea.com` | Dedicated exclusively to automated transactional traffic (waitlists, cancellations, dynamic booking adjustments). |
| Software Updates | `it@studiosunandsea.com` | Isolates vendor notifications and tech logs away from clients. |
| Privacy Requests | `privacy@studiosunandsea.com` | Handling regulatory GDPR requests cleanly. |

### 3. Core Email Routing Standards
#### A. General Client Correspondence (`hello@studiosunandsea.com`)
- Role: The primary public email address displayed across the Astro website interface and footer links.
- Usage: Used for the global mailto: footer configuration with the formatted string: mailto:hello@://studiosunandsea.com.
- Handling: Monitored daily for custom studio inquiries, partnerships, and general support.

#### B. Automated Booking & Transactional Traffic (`booking@studiosunandsea.com`)
- Role: Assigned as the Mindbody Reply-to address for all system-generated notifications.
- Usage: Handles automated reservation receipts, waitlist triggers, and auto-reminders.
- Handling: Separating this from the general hello@ inbox ensures that sudden spikes in system notifications (e.g., class cancellations) do not clog primary client communication pipelines.

#### C. Technical & System Infrastructure (`it@studiosunandsea.com`)
- Role: The secure administrative channel for backend operations.
- Usage: Receives Mindbody vendor software notifications, system alerts, and internal infrastructure warnings.
- Handling: Filter rules are applied here to route routine system logs (such as automated daily DMARC XML reports) silently into a dedicated System Logs archive folder, keeping the primary view clear.

#### D. Compliance & Data Protection (`privacy@studiosunandsea.com`)
- Role: Legal point of contact for compliance protocols.
- Usage: Handles formal user requests regarding data processing, storage, and GDPR compliance.
- Handling: Direct interface for data privacy concerns, eliminating compliance data mixing with daily operations.

### 4. Authentication & Security Baseline
To guarantee high deliverability into user inboxes and maintain brand trust, all outbound mail servers must strictly adhere to the following authentication policies managed in the domain registry:

- SPF (Sender Policy Framework): Must explicitly include authorized Mindbody and Google Workspace sending IP boundaries.
- DKIM (DomainKeys Identified Mail): Every outgoing transactional email must be cryptographically signed using the designated studio selector keys.
- DMARC Policy: Set strictly to p=quarantine at pct=100. This ensures spoofed or malicious emails trying to mimic Studio Sun & Sea are caught instantly and redirected to spam folders globally.

---

## External Infrastructure & Registrar Routing (INWX Settings)

These active aliases map our internal workflows to automated system notices, compliance verifications, and financial invoicing generated by our domain registrar (**INWX**).

| INWX Field Parameter | Target Routing Alias | Functional Delivery Intent |
| :--- | :--- | :--- |
| **Primary Account Email** | `operations@studiosunandsea.com` | Standard system notices, account updates, and general core platform communications. |
| **Billing E-Mail** | `billing@studiosunandsea.com` | Automated registrar invoices, payment success confirmations, and financial renewal reports. |
| **Automated E-Mail (Robot)** | `infosec@studiosunandsea.com` | System log telemetry, API execution alerts, and background domain robot status reports. |
| **Renewal Report E-Mail** | `it@studiosunandsea.com` | Explicit advance notices regarding asset expirations and domain maintenance calendars. |
| **Contact Verification E-Mail** | `contact@studiosunandsea.com` | Mandatory ICANN/DENIC registrant data audits and physical address validation checks. |

---
*Last Checked: June 2026*
