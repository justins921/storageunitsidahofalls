/**
 * Site selector — single source of truth for the active facility.
 *
 * Every page, schema, sitemap, and metadata file imports `facility`, `units`,
 * and `faqs` from here. Which city those resolve to is chosen at build time by
 * the NEXT_PUBLIC_SITE environment variable, so one codebase powers every
 * location:
 *
 *   NEXT_PUBLIC_SITE unset / "idaho-falls"  ->  Storage Units Idaho Falls
 *   NEXT_PUBLIC_SITE = "rexburg"            ->  Storage Units Rexburg
 *
 * Set NEXT_PUBLIC_SITE per Vercel project. Idaho Falls is the safe default if
 * the variable is missing or unrecognized.
 *
 * To add a city: create lib/sites/<city>.ts (copy an existing one), then add it
 * to the `sites` map below.
 */

import * as idahoFalls from "./sites/idaho-falls";
import * as rexburg from "./sites/rexburg";
import type { Unit, Faq } from "./types";

export type { Unit, Faq };

const sites = {
  "idaho-falls": idahoFalls,
  rexburg: rexburg,
} as const;

export type SiteKey = keyof typeof sites;

const requested = process.env.NEXT_PUBLIC_SITE;
const site = (requested && requested in sites
  ? sites[requested as SiteKey]
  : sites["idaho-falls"]);

export const facility = site.facility;
export const units: Unit[] = site.units;
export const faqs: Faq[] = site.faqs;
