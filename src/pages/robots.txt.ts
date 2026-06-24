// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = process.env.ASTRO_SITE ?? 'https://studiosunandsea.com';
  const body = [
    '# =======================================================',
    '# Studio Sun & Sea — Core Crawler Schema Configuration',
    '# =======================================================',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    // include the canonical sitemap reference (or include /sitemap-index.xml if preferred)
    `Sitemap: ${site}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
