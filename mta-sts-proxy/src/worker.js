/**
 * Welcome to Cloudflare Workers!
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const ORIGIN = "https://studiosunandsea.com";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/.well-known/")) {
      return fetch(ORIGIN + url.pathname + url.search);
    }

    return new Response("Not Found", { status: 404 });
  },
};
