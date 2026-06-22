import { facility } from "./facility";

const { city, region, postalCode } = facility.address;

/**
 * SEO strings derived from the facility config so a new location only requires
 * editing lib/facility.ts. Nothing here hardcodes a city, phone, or price.
 */
export const seo = {
  title: `${facility.name} | ${facility.tagline} | ${facility.phoneDisplay}`,
  description:
    `Affordable self storage in ${city}, ${region} ${postalCode}. Drive-up units ` +
    `with roll up doors and 24/7 access, starting at $${facility.startingPrice}/mo. ` +
    `Call ${facility.phoneDisplay} to reserve.`,
  ogTitle: `${facility.name} | ${facility.tagline} | ${facility.phoneDisplay}`,
  twitterTitle: `${facility.name} | ${facility.tagline}`,
  socialDescription:
    `Drive-up self storage in ${city}, ${region}. Roll up doors, 24/7 access, ` +
    `units from $${facility.startingPrice}/mo. Call ${facility.phoneDisplay}.`,
  keywords: [
    `storage units ${city}`,
    `self storage ${city}`,
    `storage ${city} ${region}`,
    `cheap storage ${city}`,
    `drive up storage ${city}`,
    `${postalCode} storage`,
  ],
};
