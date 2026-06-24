// test/redirects.spec.ts
import { test, expect } from '@playwright/test';

// Base data layer for all secondary ccTLDs and tracking assets (apex and WWW redirect the same)
const BASE_TLD_TARGETS = [
  { source: 'https://studiosunandsea.eu', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosunandsea.de', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://studiosonneundmeer.eu', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://studiosonneundmeer.de', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://sunceimore.eu', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosunceimore.eu', expected: 'https://studiosunandsea.com' },
];

// Subdomain Redirects for Primary Domain -> should always be language specific redirect
const LANG_TARGETS = [
  { source: 'https://www.studiosunandsea.com', expected: 'https://studiosunandsea.com/en' },
  { source: 'https://en.studiosunandsea.com', expected: 'https://studiosunandsea.com/en' },
  { source: 'https://de.studiosunandsea.com', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://hr.studiosunandsea.com', expected: 'https://studiosunandsea.com/en' },
];

// Shared execution logic to eliminate duplication
async function verifyRedirect(request: any, source: string, expected: string) {
  // maxRedirects: 0 prevents Playwright from automatically following the chain,
  // allowing inspection of the raw network header response code
  const response = await request.get(source, { maxRedirects: 0 });

  // Assert that the status code is either a 301 (Permanent) or 302 (Found) redirect
  const validRedirectStatuses = [301, 302];
  expect(validRedirectStatuses).toContain(response.status());

  // Fetch the target location header
  const rawLocation = response.headers().location;
  expect(rawLocation).toBeDefined();

    // Normalize both paths (removes trailing slashes for an exact match evaluation)
  const normalize = (url: string) => url.replace(/\/$/, '').toLowerCase();
  expect(normalize(rawLocation!)).toBe(normalize(expected));
}

// SECTION 1: TLD Redirects
test.describe('TLDs', () => {
  for (const route of BASE_TLD_TARGETS) {
    test(`Route: ${route.source} -> ${route.expected}`, async ({ request }) => {
      await verifyRedirect(request, route.source, route.expected);
    });
  }
});

// SECTION 2: Subdomain Redirects for Primary Domain -> should always be language specific
test.describe('Primary Subdomains', () => {
  for (const route of LANG_TARGETS) {
    test(`Route: ${route.source} -> ${route.expected}`, async ({ request }) => {
      await verifyRedirect(request, route.source, route.expected);
    });
  }
});

// SECTION 3: Subdomain Redirects for Secondary Domains
test.describe('Secondary Subdomains', () => {
  const targets = BASE_TLD_TARGETS.map(route => ({
    source: route.source.replace('https://', 'https://www.'),
    expected: route.expected
  }));

  for (const route of targets) {
    test(`Route: ${route.source} -> ${route.expected}`, async ({ request }) => {
      await verifyRedirect(request, route.source, route.expected);
    });
  }
});
