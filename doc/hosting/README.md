# Studio Sun & Sea — Domain & DNS Architecture

This document tracks the multi-regional domain routing, security protocols, and Cloudflare network configuration for Studio Sun & Sea.

## 1. Master Configuration At-A-Glance

| Domain Name | Registrar | DNS Management | Active Routing Target | Outbound Mail |
| :--- | :--- | :--- | :--- | :--- |
| **studiosunandsea.com** | GoDaddy | Cloudflare | **Primary Host** (Astro Page App) | Google Workspace |
| `studiosunandsea.eu` | GoDaddy | Cloudflare | Redirects to English Root | Banned (Null SPF) |
| `studiosonneundmeer.eu`| GoDaddy | Cloudflare | Redirects to Local `/de/` Path | Banned (Null SPF) |
| `sunceimore.eu` | GoDaddy | Cloudflare | Redirects to English Root (or `/hr/`) | Banned (Null SPF) |
| `studiosunceimore.eu`  | GoDaddy | Cloudflare | Redirects to English Root (or `/hr/`) | Banned (Null SPF) |

---

## 2. Infrastructure Setup & Network Rules

### Primary Domain Engine (`studiosunandsea.com`)
* **Hosting Platform**: Cloudflare Pages (`studio-sun-and-sea.pages.dev`).
* **WWW Routing Rule**: Handled via a proxied `CNAME` pointing to the Pages build root instance.
* **Global Security Toggle**: `Always Use HTTPS` turned **ON** via SSL/TLS edge certificates. Forces all unencrypted `http://` entries to securely upgrade immediately to `https://` before page assets are processed.

### Subdomain Redirect Matrix
* **`de.studiosunandsea.com`**: Created as a proxied `CNAME` pointing to the root. An edge redirect rule captures this specific hostname request and handles localized folder mappings using:
   ```javascript
   concat("https://studiosunandsea.com/de", http.request.uri.path)
   ```

### Secondary Forwarding Mechanics (`.eu` Variants)
To conserve server resources and consolidate SEO search authority, secondary domains use a **Forwarding Priority** mechanism:
1. **DNS Interception**: A dummy `AAAA` placeholder record set to `100::` keeps the network interface active.
2. **Edge Rules**: Traffic utilizes Cloudflare's *Redirect Rules* template engine.
3. **Locale Tracking**:
   * The German variant (`studiosonneundmeer.eu`) computes path transformations using:
   ```javascript
   concat("https://studiosunandsea.com/de", http.request.uri.path)
   ```
   * The Croatian variant (`studiosunceimore.eu`) computes path transformations using:
   ```javascript
   concat("https://studiosunandsea.com", http.request.uri.path)
   ```

---

## 3. Email Authentication & Anti-Spoofing Matrix

### Active Domain (`studiosunandsea.com`)
Email hosting is strictly locked to **Google Workspace** servers.
* **SPF Authorization**: `v=spf1 include:_://google.com ~all`
* **DMARC Monitoring Target**: Automated XML summaries route directly to the custom internal alias `infosec@studiosunandsea.com`.

### Defended Domains (All `.eu` Variants)
To prevent bad actors from forging addresses to spoof the brand name, secondary strings utilize a **Null Email Configuration** profile to reject all traffic:
* **Inbound Block (Null MX)**: `MX 0 .`
* **Outbound Deflection (Null SPF)**: `TXT "v=spf1 -all"`
* **Key Revocation (Null DKIM)**: `TXT "v=DKIM1; p="`
* **Enforced Dropping (DMARC)**: `TXT "v=DMARC1; p=reject; aspf=s; adkim=s;"`

---

## 4. Hosting and Extrernal Accounts
* Primary website hosting is handled by CloudFlare under the user milos@studiosunandsea.com and uses Google OAuth.
* Business Email is handled via Google Workspace Starter with admin account milos@studiosunandsea.com
* Scheduling, Booking, Account Management are supported via Mindbody with admin account milos@studiosunandsea.com (backup: miloshboroyevich@gmail.com)

---
*Last Checked: June 2026*
