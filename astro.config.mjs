// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Requires SSR mode to read live headers on request
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  }
});
