# Studio Sun & Sea — Email Aliases

This document tracks all email aliases and email groups configured for the domain.
It serves as the authoritative reference for routing, support flows, billing, security, and external integrations.

---

## Primary Domain
`StudioSunAndSea.com`

---

## Email Aliases

| Category   | Alias                              | Target                      | Purpose                                          |
|------------|------------------------------------|-----------------------------|--------------------------------------------------|
| general    | hello@StudioSunAndSea.com          |   milos@StudioSunAndSea.com | Primary public contact address                   |
| general    | info@StudioSunAndSea.com           |   milos@StudioSunAndSea.com | General inquiries                                |
| general    | contact@StudioSunAndSea.com        |   milos@StudioSunAndSea.com | General public contact                           |
| general    | hallo@StudioSunAndSea.com          |   milos@StudioSunAndSea.com | **German**-language general inquiries            |
| bookings   | booking@StudioSunAndSea.com        | booking@StudioSunAndSea.com | English booking inquiries                        |
| bookings   | buchung@StudioSunAndSea.com        | booking@StudioSunAndSea.com | **German**-language booking inquiries            |
| bookings   | yoga@StudioSunAndSea.com           | booking@StudioSunAndSea.com | Class-related questions, schedule, attendance    |
| bookings   | classes@StudioSunAndSea.com        | booking@StudioSunAndSea.com | Class-related questions, schedule, attendance    |
| bookings   | reservations@StudioSunAndSea.com   | booking@StudioSunAndSea.com | Workshop-related questions, schedule, attendance |
| operations | studio@StudioSunAndSea.com         |   milos@StudioSunAndSea.com | Studio operations and internal coordination      |
| operations | studioleitung@StudioSunAndSea.com  |   milos@StudioSunAndSea.com | **German**-language studio management            |
| operations | operations@StudioSunAndSea.com     |   milos@StudioSunAndSea.com | Backend operations and logistics                 |
| finance    | billing@StudioSunAndSea.com        |   milos@StudioSunAndSea.com | Invoices, payments, receipts                     |
| finance    | abrechnung@StudioSunAndSea.com     |   milos@StudioSunAndSea.com | **German**-language billing                      |
| finance    | ap@StudioSunAndSea.com             |   milos@StudioSunAndSea.com | Accounts payable and vendor communication        |
| marketing  | newsletter@StudioSunAndSea.com     |   sales@StudioSunAndSea.com | Newsletter system and mailing list management    |
| sales      | sales@StudioSunAndSea.com          |   sales@StudioSunAndSea.com | Sales inquiries, offers, and B2B communication   |
| sales      | offers@StudioSunAndSea.com         |   sales@StudioSunAndSea.com | Promotions and offers                            |
| sales      | vertrieb@StudioSunAndSea.com       |   sales@StudioSunAndSea.com | **German**-language Sales and B2B communication  |
| legal      | privacy@StudioSunAndSea.com        | infosec@StudioSunAndSea.com | GDPR requests, privacy, and related inquiries    |
| legal      | datenschutz@StudioSunAndSea.com    | infosec@StudioSunAndSea.com | **German**-language GDPR requests, privacy, etc. |
| legal      | legal@StudioSunAndSea.com          | infosec@StudioSunAndSea.com | General legal inquiries                          |
| legal      | compliance@StudioSunAndSea.com     | infosec@StudioSunAndSea.com | Compliance, policy, audit, and regulatory        |
| security   | infosec@StudioSunAndSea.com        | infosec@StudioSunAndSea.com | Security & vulnerability reports / notifications |
| security   | security@StudioSunAndSea.com       | infosec@StudioSunAndSea.com | General security contact                         |
| support    | it@StudioSunAndSea.com             | infosec@StudioSunAndSea.com | General IT support and operations                |
| support    | support@StudioSunAndSea.com        | infosec@StudioSunAndSea.com | Technical issues, account help                   |
| support    | hilfe@StudioSunAndSea.com          | infosec@StudioSunAndSea.com | **German**-language support                      |

---

## Email Groups

These addresses are **groups** rather than simple aliases and may have different access or membership semantics.

| Group name      | Email address               | Members | Aliases | Type               | Description                                    |
|-----------------|-----------------------------|---------|---------|--------------------|------------------------------------------------|
| Booking         | booking@StudioSunAndSea.com | 1       | 5       | Mailing            | Booking, classes, workshops, etc.              |
| Sales/Marketing |   sales@StudioSunAndSea.com | 1       | 4       | Mailing            | Sales inquiries, offers, and B2B communication |
| Cyber Security  | infosec@StudioSunAndSea.com | 1       | 9       | Mailing & Security | Security / Compliance / Legal / IT             |

---

## Notes
- All aliases route to the configured mailbox or group unless otherwise specified.
- Aliases and groups should be added to Cloudflare Email Routing (or equivalent) and verified.
- When adding new aliases or groups, update this document to maintain a single source of truth.

---

## External Infrastructure: Mindbody Integration

These mappings dictate how automated client notifications, liability assets, financial tracking, marketing flows, corporate statements, and transactional emails route out of our Mindbody business management suite. For the Mindbody Starter subscription, clients receive emails from the generic address: `Business5754454@mindbodyonline.com`, but reply to the emails below.

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
