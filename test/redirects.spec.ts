// test/redirects.spec.ts
/**
 * Test suite to verify the redirect behavior for domains and subdomains.
 * - npm run test:redirects
 */
import { test, expect } from '@playwright/test';
import { ALL_LANGS, LANGS, DEFAULT_LANG } from '../src/data/i18n.ts';
import { getSiteConfig, sites, type SiteMode } from '../src/data/config.ts';

// Base data layer for all secondary ccTLDs and tracking assets (apex and WWW redirect the same)
const BASE_TLD_TARGETS = [
  { source: 'https://studiosunandsea.eu', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosunandsea.de', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://studiosunandsea.hr', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosonneundmeer.eu', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://studiosonneundmeer.de', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://sunceimore.eu', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosunceimore.eu', expected: 'https://studiosunandsea.com' },
  { source: 'https://studiosunceimore.hr', expected: 'https://studiosunandsea.com' },
];

/*
/ Subdomain Redirects for Primary Domain (Brand) -> should always be language specific redirect
const LANG_TARGETS = [
  { source: 'https://studiosunandsea.com', expected: '/en' }, // Relative redirect
  { source: 'https://www.studiosunandsea.com', expected: 'https://studiosunandsea.com' },
  { source: 'https://en.studiosunandsea.com', expected: 'https://studiosunandsea.com/en' },
  { source: 'https://de.studiosunandsea.com', expected: 'https://studiosunandsea.com/de' },
  { source: 'https://hr.studiosunandsea.com', expected: 'https://studiosunandsea.com/en' },
];
*/

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
};

/**
 * Test redirects for Canonical, WWW, and language specific subdomains for the site.
 * @param siteMode site to test
 */
function testPrimary(siteMode: SiteMode) {
  const canonical = getSiteConfig(siteMode).canonical;
  const host = new URL(canonical).host;
  const TARGETS = [
    { source: canonical, expected: `/${DEFAULT_LANG}` }, // Relative redirect
    { source: `https://www.${host}`, expected: canonical },
  ];
  for (const route of TARGETS) {
    test(`Route: ${route.source} -> ${route.expected}`, async ({ request }) => {
      await verifyRedirect(request, route.source, route.expected);
    });
  }

  // Iterate through all the languages
  for (const lang of ALL_LANGS) {
    // Determine if the language is public or should fallback to the default language (always TRUE for NOW)
    const isPublic = true || (LANGS as readonly string[]).includes(lang);
    const targetLang = isPublic ? lang : DEFAULT_LANG;
    const source = `https://${lang}.${host}`;
    const expected = `${canonical}/${targetLang}`;

    test(`Route: ${source} -> ${expected}`, async ({ request }) => {
      await verifyRedirect(request, source, expected);
    });
  }
};


// SECTION 1: Redirects for Primary Domains -> should be language specific
for (const site of sites) {
  test.describe(`Primary ${site.toUpperCase()}`, () => {
    testPrimary(site);
  });
}

// SECTION 2: TLD Redirects for Secondary Domains
test.describe('TLDs (Secondary)', () => {
  for (const route of BASE_TLD_TARGETS) {
    test(`Route: ${route.source} -> ${route.expected}`, async ({ request }) => {
      await verifyRedirect(request, route.source, route.expected);
    });
  }
});

// SECTION 3: Subdomain Redirects for Secondary Domains with WWW prepended
test.describe('Secondary Domains with WWW', () => {
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
