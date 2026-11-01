/**
 * This Cloudflare Worker (mta-sts-proxy) is used to serve specifically files in the URL: ./.well-known/**
 * It exists for the purpose of enabling MTA-STS (Mail Transfer Agent Strict Transport Security).
 * https://www.rfc-editor.org/rfc/rfc8461.txt
 * https://knowledge.workspace.google.com/admin/gmail/advanced/about-mta-sts-and-tls-reporting
 *
 * Validate the MTA-STS configuration: https://admin.google.com/ac/apps/cs/diagnostic
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
