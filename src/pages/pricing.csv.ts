// src/pages/pricing.csv.ts
import type { APIRoute } from "astro";
import type { ProductInfo } from "../data/types.ts";
import type { SupportedLocale } from "../data/i18n.ts";
import { formatDuration, localeString } from "../data/i18n.ts";
import { formatMultiCurrency, discountedPrice } from "../data/currency.ts";
import { company } from "../data/config.ts";
import { pricing } from "../data/products.ts";

const locale: SupportedLocale = "hr-HR";
/**
 * Endpoint generating a machine-readable CSV price list compliant with
 * Croatian consumer price publication regulations (NN 101/2026 & NN 110/2026).
 *
 * Requirements:
 * - Semicolon (;) separated fields
 * - Format: naziv;maloprodajna_cijena_eur;posebni_oblik_prodaje;sidrena_cijena_eur
 * - European decimal formatting (e.g. 70,00): "hr-HR"
 * - UTF-8 encoding with BOM for MS Excel / Inspector compatibility
 */

// naziv;maloprodajna_cijena_eur;posebni_oblik_prodaje;sidrena_cijena_eur
// 7-Dnevni Yoga Retreat;2000,00;;
// 7-Dnevni Yoga Retreat (Rana prijava - 5%);1900,00;Rana prijava;2000,00
// 7-Dnevni Yoga Retreat (Plaćanje u cijelosti - 5%);1900,00;Popust na jednokratno plaćanje;2000,00
// 7-Dnevni Yoga Retreat (Članski popust - Stay Member 5%);1900,00;Članski popust;2000,00
// 7-Dnevni Yoga Retreat (Članski popust - Yoga Member 10%);1800,00;Članski popust;2000,00
// 7-Dnevni Yoga Retreat (Članski popust - Yoga Alumni 15%);1700,00;Članski popust;2000,00
// 7-Dnevni Yoga Retreat (Članski popust - Blue Heron Alumni 20%);1600,00;Članski popust;2000,00
// Intensiv-Immersion (Samostalno);2000,00;;
// Intensiv-Immersion (Uz 7-Dnevni Retreat);1500,00;Paket / Popust uz retreat;2000,00

interface CsvRow {
  naziv: string;
  maloprodajna_cijena_eur: string;
  posebni_oblik_prodaje: string;
  sidrena_cijena_eur: string;
}
const csvHeaders = Object.keys({} as CsvRow);

function extractRows(): CsvRow[] {
  const rows: CsvRow[] = [];

  const addProduct = (
    title: string,
    eur: number,
    specialSale: string = "",
    anchorPriceEur?: number
  ) => {
    rows.push({
      naziv: title,
      maloprodajna_cijena_eur: formatMultiCurrency(eur, locale)[0],
      posebni_oblik_prodaje: specialSale,
      sidrena_cijena_eur: anchorPriceEur !== undefined ? formatMultiCurrency(anchorPriceEur, locale)[0] : "",
    });
  };

  // 1. Single & Pack Classes
  addProduct("Jednokratni sat joge (Single Class)", pricing.class.single.eur);
  addProduct(
    `Paket 10 satova joge (10-Class Pass - ${pricing.class.tenPack.validity} mjeseci)`,
    pricing.class.tenPack.eur
  );

  // 2. Memberships
  addProduct("Mjesečna članarina - Neograničeno (Unlimited Monthly)", pricing.membership.unlimitedMonthly.eur);

  // 3. Intro / Trial Passes
  addProduct("Probni sat (Trial Class)", pricing.intro.trialClass);
  addProduct("Probni tjedan (Trial Week)", pricing.intro.trialWeek);
  addProduct("Dvotjedni probni paket (2-Week Trial)", pricing.intro.trialTwoWeek);

  // 4. Private Sessions
  pricing.private.forEach((p: ProductInfo) => {
    addProduct(`Privatni sat joge (1 osoba) - ${formatDuration(p.duration, locale)}`, p.eur);
  });

  // 5. Duet Sessions
  pricing.duet.forEach((p: ProductInfo) => {
    addProduct(`Privatni sat joge za dvoje (Duet) - ${formatDuration(p.duration, locale)}`, p.eur);
  });

  // 6. Group Sessions
  pricing.group.forEach((p: ProductInfo) => {
    addProduct(`Privatni grupni sat joge (Small-Group) - ${formatDuration(p.duration, locale)}`, p.eur);
  });

  // 7. Workshops
  pricing.workshop.forEach((p: ProductInfo) => {
    addProduct(`Radionica (Workshop) - ${formatDuration(p.duration, locale)}`, p.eur);
  });

  // 8. Retreats
  pricing.retreats.retreats.forEach((p: ProductInfo) => {
    addProduct(`${localeString(p.label, locale)}: ${p.name}`, p.eur);
  });

  // 9. Retreat Add-ons
  const retreatUpgrades = pricing.retreats.upgrades;
  Object.values(retreatUpgrades).filter((product) => (product.upgrade)).forEach((p: ProductInfo) => {
    if (p.eur <= 0) return;
    if(p.discountApply) {
      addProduct(`Retreat dodatak: ${p.name} (Paket popust - ${p.discountApply}%)`, discountedPrice(p).eur, "Paket / Popust uz Retreat", p.eur);
    } else {
      addProduct(`Retreat dodatak: ${p.name} (${localeString(p.billingUnit, locale)})`, p.eur);
    }
  });

  // if (retreats.coreRetreat) {
  //   addProduct("7-Dnevni Yoga Retreat (Brač)", retreats.coreRetreat.eur);
  // }
  // if (retreats.advancedImmersion) {
  //   addProduct("Intenziv-Immersion 5-Dnevni Program (Advanced Immersion)", retreats.advancedImmersion.eur);
  // }
  // if (retreatUpgrades.suite) {
  //   addProduct("Nadogradnja: Wellness Suite (Per booking)", retreatUpgrades.suite.eur);
  // }
  // if (retreats.residence) {
  //   addProduct("Nadogradnja: Wellness Residence (Po osobi, min 3)", retreats.residence.eur);
  // }
  // if (retreatUpgrades.singleOccupancy) {
  //   addProduct("Nadogradnja: Jednokrevetna (Single Occupancy)", retreatUpgrades.singleOccupancy.eur);
  // }
  // if (retreatUpgrades.arrivalStay) {
  //   addProduct("Dodatna noć: Raniji dolazak (Arrival Stay - per night)", retreatUpgrades.arrivalStay.eur);
  // }
  // if (retreatUpgrades.integrationStay) {
  //   addProduct("Dodatna noć: Integracijski boravak (Integration Stay - per night)", retreatUpgrades.integrationStay.eur);
  // }

  return rows;
}

export const GET: APIRoute = async () => {

  const rows = extractRows();

  const csvLines = [
    csvHeaders.join(";"),
    ...rows.map((r) =>
      [
        `"${r.naziv.replace(/"/g, '""')}"`,
        r.maloprodajna_cijena_eur,
        r.posebni_oblik_prodaje,
        r.sidrena_cijena_eur,
      ].join(";")
    ),
  ];

  // Include UTF-8 Byte Order Mark (\uFEFF) for seamless Croatian diacritics rendering in Excel
  const csvContent = "\uFEFF" + csvLines.join("\r\n");

  return new Response(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `inline; filename="cjenik-${company.kebabCase}.csv"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
};
