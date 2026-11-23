/**
 * This Cloudflare Worker (mta-sts-proxy) is used to serve specifically files in the URL: ./.well-known/**
 * It exists for the purpose of enabling MTA-STS (Mail Transfer Agent Strict Transport Security).
 *
 * Deployed to these production domains:
 * - https://mta-sts.studiosunandsea.com
 * - https://mta-sts.mail.studiosunandsea.com
 * - https://mta-sts.eireneintentiocitta.hr
 *
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
      let targetPath = url.pathname;

      // If requesting /.well-known/mta-sts.txt from a subdomain (e.g. mta-sts.mail.studiosunandsea.com),
      // rewrite to /.well-known/mta-sts.<subdomain>.txt
      if (targetPath === "/.well-known/mta-sts.txt") {
        const match = url.hostname.toLowerCase().match(/^mta-sts\.([^.]+)\.studiosunandsea\.com$/);
        if (match) {
          targetPath = `/.well-known/mta-sts.${match[1]}.txt`;
        }
      }

      return fetch(ORIGIN + targetPath + url.search);
    }

    return new Response("Not Found", { status: 404 });
  },
};
