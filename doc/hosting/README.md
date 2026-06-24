# Studio Sun & Sea — Domain & DNS Architecture

This document tracks the multi-regional domain routing, security protocols, and Cloudflare network configuration for Studio Sun & Sea.

## 1. Master Configuration At-A-Glance

| Domain Name | Registrar | DNS Management | Active Routing Target | Outbound Mail | Domain Privacy | Expiration Date |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **studiosunandsea.com** | GoDaddy | Cloudflare | **Primary Host** (Astro Page App) | Google Workspace | **ON** (High Security) | **Dec 5, 2028** |
| `studiosunandsea.eu` | GoDaddy | Cloudflare | Redirects to English Root | Banned (Null SPF) | OFF (Limited) | **Dec 6, 2026** |
| `studiosunandsea.de` | INWX | Cloudflare | Redirects to Local `/de/` Path | Banned (Null SPF) | **ON** (DENIC Default) | **Jun 24, 2027** |
| `studiosonneundmeer.de` | INWX | Cloudflare | Redirects to Local `/de/` Path | Banned (Null SPF) | **ON** (DENIC Default) | **Jun 24, 2027** |
| `studiosonneundmeer.eu` | GoDaddy | Cloudflare | Redirects to Local `/de/` Path | Banned (Null SPF) | OFF (Limited) | **Dec 6, 2026** |
| `sunceimore.eu` | GoDaddy | Cloudflare | Redirects to English Root (or `/hr/`) | Banned (Null SPF) | OFF (Limited) | **Dec 6, 2026** |
| `studiosunceimore.eu` | GoDaddy | Cloudflare | Redirects to English Root (or `/hr/`) | Banned (Null SPF) | OFF (Limited) | **Dec 6, 2026** |
| *verticalis.us* | GoDaddy | Internal/Other | Secondary Brand Asset Tracking | | **ON** (High Security) | **Sep 19, 2027** |
| *nanoonan.com* | GoDaddy | Internal/Other | Secondary Brand Asset Tracking | | **ON** (High Security) | **Mar 19, 2033** |

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

## 4. Threat Intelligence & Vulnerability Disclosure

### Scraper Defenses (AI Labyrinth)
* **Status**: Enabled via Cloudflare Edge WAF.
* **Mechanics**: Identifies and blocks high-volume automated data collection bots (e.g., GPTBot, ClaudeBot) from scraping studio layout pages, conserving bandwidth resources and preserving original content.

### Vulnerability Reporting Standard (`security.txt`)
* **Path**: Stored natively in the source repository at `public/.well-known/security.txt`.
* **Standardization**: Complies with **RFC 9116**. It establishes an isolated communication link, routing all white-hat security researcher vulnerability reports directly to `infosec@studiosunandsea.com` while bypassing standard customer-facing queues.
* **Lifecycle**: Requires a manual text timestamp update on the `Expires` tag once per year.

---

## 5. Agentic Web Optimization & Machine Discovery

### Crawler Discoverability
* **Sitemap Framework**: Built dynamically via `@astrojs/sitemap` to emit multi-regional indices/paths at `/sitemap-index.xml` on every production build event. Re-indexed explicitly at the base line of `src/pages/robots.txt.ts`.
* **Decentralized Discovery (DNS-AID)**: Cryptographically signed via **DNSSEC** protocol chains. Leverages `HTTPS/SVCB` target entrypoint tracks under `_index._agents` and `_a2a._agents` to declare agent compatibility parameters globally.

### Semantic Content Optimization (Markdown Negotiation)
* **Infrastructure Pipeline**: Cloudflare *Markdown for Agents* edge routing is toggled **OFF** - requires upgrade of hosting plan.
* **Mechanics**: Intercepts automated client crawler cycles requesting `Accept: text/markdown`. Converts studio schedule data and layouts into minified, token-optimized Markdown text content on the fly before delivery.

### Decentralized Discovery (DNS-AID)
* **Status**: Active & Authenticated via **DNSSEC** protocol chains.
* **Records**: Formatted natively as RFC 9460 generic `SVCB` infrastructure records:
  * Name: `_index._://studiosunandsea.com` | Target: `.` | Params: `alpn="h2" port="443"`
  * Name: `_a2a._://studiosunandsea.com`  | Target: `.` | Params: `alpn="h2" port="443"`
* **Rationale**: Swapped from standard `HTTPS` to `SVCB` types to strictly comply with the IETF DNS-AID standard, allowing semantic crawlers to negotiate custom protocol stacks (like MCP or A2A schemes) natively.

---

## 6. Extrernal Accounts (Hosting, Domains, Email, etc.)
* Primary website hosting is handled by CloudFlare under the user milos@studiosunandsea.com and uses Google OAuth.
* Business Email is handled via Google Workspace Starter with admin account milos@studiosunandsea.com
* Scheduling, Booking, Account Management are supported via Mindbody with admin account milos@studiosunandsea.com (backup: miloshboroyevich@gmail.com)
* Domains are registered with [GoDaddy](https://dcc.godaddy.com/control/portfolio) with Customer #: 1788537

---
*Last Checked: June 2026*
