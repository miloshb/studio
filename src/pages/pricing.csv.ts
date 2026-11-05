// src/pages/pricing.csv.ts
import type { APIRoute } from "astro";
import { pricing } from "../data/products.ts";
import { type ProductInfo } from "../data/types.ts";
import { formatMultiCurrency } from "../data/currency.ts";

/**
 * Endpoint generating a machine-readable CSV price list compliant with
 * Croatian consumer price publication regulations (NN 101/2026 & NN 110/2026).
 *
 * Requirements:
 * - Semicolon (;) separated fields
 * - Format: naziv;maloprodajna_cijena_eur;posebni_oblik_prodaje;sidrena_cijena_eur
 * - European decimal formatting (e.g. 70,00)
 * - UTF-8 encoding with BOM for MS Excel / Inspector compatibility
 */

interface CsvRow {
  naziv: string;
  maloprodajna_cijena_eur: string;
  posebni_oblik_prodaje: string;
  sidrena_cijena_eur: string;
}

// function formatMultiCurrency(eur: number): string {
//   return eur.toFixed(2).replace(".", ",");
// }

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
      maloprodajna_cijena_eur: formatMultiCurrency(eur, "hr-HR")[0],
      posebni_oblik_prodaje: specialSale,
      sidrena_cijena_eur: anchorPriceEur !== undefined ? formatMultiCurrency(anchorPriceEur, "hr-HR")[0] : "",
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
  addProduct("2-tjedni probni paket (2-Week Trial)", pricing.intro.trialTwoWeek);

  // 4. Private Sessions
  pricing.private.forEach((p: ProductInfo) => {
    addProduct(`Privatni sat joge (1 osoba) - ${p.duration} min`, p.eur);
  });

  // 5. Duet Sessions
  pricing.duet.forEach((p: ProductInfo) => {
    addProduct(`Privatni sat joge za dvoje (Duet) - ${p.duration} min`, p.eur);
  });

  // 6. Group Sessions
  pricing.group.forEach((p: ProductInfo) => {
    addProduct(`Privatni grupi sat joge (Group) - ${p.duration} min`, p.eur);
  });

  // 7. Workshops
  pricing.workshop.forEach((p: ProductInfo) => {
    addProduct(`Radionica (Workshop) - ${p.duration}h`, p.eur);
  });

  // 8. Retreats
  pricing.retreats.retreats.forEach((p: ProductInfo) => {
    addProduct(`${p.label}`, p.eur);
  });

  // 9. Retreat Add-ons
  const retreats = pricing.retreats.upgrades;
  // if (retreats.coreRetreat) {
  //   addProduct("7-Dnevni Yoga Retreat (Brač)", retreats.coreRetreat.eur);
  // }
  // if (retreats.advancedImmersion) {
  //   addProduct("Intenziv-Immersion 5-Dnevni Program (Advanced Immersion)", retreats.advancedImmersion.eur);
  // }
  if (retreats.suite) {
    addProduct("Nadogradnja: Wellness Suite (Per booking)", retreats.suite.eur);
  }
  // if (retreats.residence) {
  //   addProduct("Nadogradnja: Wellness Residence (Po osobi, min 3)", retreats.residence.eur);
  // }
  if (retreats.singleOccupancy) {
    addProduct("Nadogradnja: Jednokrevetna soba (Single Occupancy)", retreats.singleOccupancy.eur);
  }
  if (retreats.arrivalStay) {
    addProduct("Dodatna noć: Raniji dolazak (Arrival Stay - per night)", retreats.arrivalStay.eur);
  }
  if (retreats.integrationStay) {
    addProduct("Dodatna noć: Integracijski boravak (Integration Stay - per night)", retreats.integrationStay.eur);
  }

  return rows;
}

export const GET: APIRoute = async () => {
  const headers = [
    "naziv",
    "maloprodajna_cijena_eur",
    "posebni_oblik_prodaje",
    "sidrena_cijena_eur",
  ];

  const rows = extractRows();

  const csvLines = [
    headers.join(";"),
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
      "Content-Disposition": 'inline; filename="cjenik-eirene-intentio-citta.csv"',
      "Cache-Control": "public, max-age=3600",
    },
  });
};
