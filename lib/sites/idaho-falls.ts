/**
 * Idaho Falls site configuration.
 *
 * This is one of the per-city config modules selected by lib/facility.ts via the
 * NEXT_PUBLIC_SITE environment variable. To launch another city, copy this file,
 * change the values, and register it in lib/facility.ts.
 *
 * IMPORTANT for local SEO: the name, address, phone, and hours below must match
 * the Google Business Profile (GBP) listing character-for-character.
 */

import type { Unit, Faq } from "../types";

export const facility = {
  /** Business name. Must exactly match the Google Business Profile. */
  name: "Storage Units Idaho Falls",

  /** Short tagline used in the hero and as a positioning line. */
  tagline: "Affordable Self Storage",

  /** Public site URL. Used for canonical, Open Graph, sitemap, and schema. */
  url: "https://storageunitsidahofalls.com",

  /** Phone shown to humans. */
  phoneDisplay: "(208) 360-6741",
  /** Phone in tel: link format (E.164). */
  phoneHref: "tel:+12083606741",
  /** Phone in E.164 for schema. */
  phoneE164: "+1-208-360-6741",

  address: {
    street: "1421 East Iona Road",
    city: "Idaho Falls",
    region: "ID",
    regionName: "Idaho",
    postalCode: "83401",
    country: "US",
  },

  /**
   * Approximate geo coordinates for 1421 East Iona Road, Idaho Falls, ID 83401.
   * Replace with the exact pin from the Google Business Profile when available.
   */
  geo: {
    latitude: 43.5407,
    longitude: -111.976,
  },

  /** Gate / access hours. Open every day, all day. */
  access: {
    label: "12:00 AM – 11:59 PM daily",
    short: "24/7 gate access, 365 days a year",
  },

  /** Office availability. */
  office: "By appointment only",

  /**
   * Google Business Profile review link.
   * Replace this placeholder with the real "write a review" URL once the GBP
   * listing is live (Google Business Profile dashboard generates it for you).
   */
  reviewUrl: "https://search.google.com/local/writereview?placeid=PLACEHOLDER",

  /**
   * Public profile URLs for schema `sameAs` (entity verification / GBP
   * alignment). Add the live Google Business Profile listing URL and the
   * Facebook page once they exist. Leave empty until then — never emit
   * placeholder URLs into schema.
   */
  sameAs: [] as string[],

  /**
   * Nearby towns this location serves. Used for the "Areas We Serve" section
   * and the schema `areaServed` property to reinforce local relevance.
   */
  areasServed: ["Idaho Falls", "Ammon", "Iona", "Ucon", "Shelley"],

  /** Lowest monthly price across all units, used in metadata and copy. */
  startingPrice: 65,

  /** priceRange string for LocalBusiness schema. */
  priceRange: "$65–$145",

  /**
   * Location-specific marketing copy. Kept here (not hardcoded in the page) so
   * each city site can vary its wording without touching the layout. Edit these
   * to make a new location read as its own page rather than a clone.
   */
  messaging: {
    heroSubhead:
      "Clean, drive-up units with roll up doors and round-the-clock gate access, starting at $65 a month. Spaces are going fast. Call to lock one in before it is gone.",
    unitsIntro:
      "Every unit is drive-up with a roll up door and outdoor access. Reserve by phone, no online form required.",
    locationIntro:
      "We are on East Iona Road, easy to reach from anywhere in Idaho Falls and the surrounding area.",
  },
} as const;

export const units: Unit[] = [
  {
    id: "10x14",
    size: "10x14",
    sqft: 140,
    price: 65,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 1 left",
    unitsLeft: 1,
  },
  {
    id: "11x14",
    size: "11x14",
    sqft: 154,
    price: 75,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "4 Available",
    unitsLeft: 4,
  },
  {
    id: "11x30",
    size: "11x30",
    sqft: 330,
    price: 145,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 2 left",
    unitsLeft: 2,
  },
];

/** Frequently asked questions. Drives both the visible FAQ and FAQ schema. */
export const faqs: Faq[] = [
  {
    question: "Where can I find storage units in Idaho Falls?",
    answer:
      "Storage Units Idaho Falls is located at 1421 East Iona Road, Idaho Falls, ID 83401. " +
      "You can reserve a unit by calling (208) 360-6741. The gate is open every day from " +
      "12:00 AM to 11:59 PM, so you can reach your unit whenever you need to.",
  },
  {
    question: "How much does storage cost in Idaho Falls?",
    answer:
      "Storage at Storage Units Idaho Falls starts at $65 per month for a 10x14 unit (140 sq ft). " +
      "An 11x14 unit (154 sq ft) is $75 per month, and an 11x30 unit (330 sq ft) is $145 per month. " +
      "Every unit has a roll up door and outdoor drive-up access.",
  },
  {
    question: "What size storage unit do I need?",
    answer:
      "A 10x14 unit (140 sq ft) holds the contents of a one-bedroom apartment or a few rooms of " +
      "furniture. An 11x14 unit (154 sq ft) suits a two-bedroom home. An 11x30 unit (330 sq ft) " +
      "fits the contents of a larger home, a vehicle, or business inventory. Call (208) 360-6741 " +
      "if you would like help choosing.",
  },
  {
    question: "Can I access my storage unit anytime?",
    answer:
      "Yes. Gate access runs from 12:00 AM to 11:59 PM every day of the week, including weekends " +
      "and holidays. Each unit has a roll up door with outdoor drive-up access, so you can pull a " +
      "vehicle right up to your door. The office is available by appointment.",
  },
];
