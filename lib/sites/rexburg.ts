/**
 * Rexburg site configuration.
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
  name: "Storage Units Rexburg",

  /** Short tagline used in the hero and as a positioning line. */
  tagline: "Affordable Self Storage",

  /** Public site URL. Used for canonical, Open Graph, sitemap, and schema. */
  url: "https://storageunitsrexburg.com",

  /** Phone shown to humans. */
  phoneDisplay: "(208) 360-6741",
  /** Phone in tel: link format (E.164). */
  phoneHref: "tel:+12083606741",
  /** Phone in E.164 for schema. */
  phoneE164: "+1-208-360-6741",

  address: {
    street: "5221 S Hwy 191",
    city: "Rexburg",
    region: "ID",
    regionName: "Idaho",
    postalCode: "83440",
    country: "US",
  },

  /**
   * Approximate geo coordinates for 5221 S Hwy 191, Rexburg, ID 83440.
   * Replace with the exact pin from the Google Business Profile when available.
   */
  geo: {
    latitude: 43.76,
    longitude: -111.805,
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
  areasServed: ["Rexburg", "Sugar City", "Rigby", "Teton", "Newdale"],

  /** Lowest monthly price across all units, used in metadata and copy. */
  startingPrice: 35,

  /** priceRange string for LocalBusiness schema. */
  priceRange: "$35–$60",

  /**
   * Location-specific marketing copy. Kept here (not hardcoded in the page) so
   * each city site can vary its wording without touching the layout. Edit these
   * to make a new location read as its own page rather than a clone.
   */
  messaging: {
    heroSubhead:
      "Drive-up storage on Highway 191 just south of Rexburg, with roll up doors and 24/7 gate access from $35 a month. A range of sizes are open right now. Call to claim one before they fill up.",
    unitsIntro:
      "Pick a size, pull right up to the door, and unload. Every space has a roll up door and outdoor drive-up access. Reserve in one phone call, with no online forms.",
    locationIntro:
      "You will find us on South Highway 191, a short drive from downtown Rexburg, Sugar City, and the BYU-Idaho campus.",
  },
} as const;

export const units: Unit[] = [
  {
    id: "9x7",
    size: "9x7",
    sqft: 63,
    price: 35,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 1 left",
    unitsLeft: 1,
  },
  {
    id: "9x9",
    size: "9x9",
    sqft: 81,
    price: 40,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 2 left",
    unitsLeft: 2,
  },
  {
    id: "10x9",
    size: "10x9",
    sqft: 90,
    price: 45,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 1 left",
    unitsLeft: 1,
  },
  {
    id: "9x13",
    size: "9x13",
    sqft: 117,
    price: 50,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "12 Available",
    unitsLeft: 12,
  },
  {
    id: "9x14",
    size: "9x14",
    sqft: 126,
    price: 55,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "Only 1 left",
    unitsLeft: 1,
  },
  {
    id: "9x20",
    size: "9x20",
    sqft: 180,
    price: 60,
    features: ["Roll Up Door", "Outdoor Access"],
    availability: "27 Available",
    unitsLeft: 27,
  },
];

/** Frequently asked questions. Drives both the visible FAQ and FAQ schema. */
export const faqs: Faq[] = [
  {
    question: "Where can I find storage units in Rexburg?",
    answer:
      "Storage Units Rexburg is located at 5221 S Hwy 191, Rexburg, ID 83440, just south of town. " +
      "You can reserve a unit by calling (208) 360-6741. The gate is open every day from " +
      "12:00 AM to 11:59 PM, so you can reach your unit whenever you need to.",
  },
  {
    question: "How much does storage cost in Rexburg?",
    answer:
      "Storage at Storage Units Rexburg starts at $35 per month for a 9x7 unit (63 sq ft). " +
      "A 9x9 (81 sq ft) is $40, a 10x9 (90 sq ft) is $45, a 9x13 (117 sq ft) is $50, a 9x14 " +
      "(126 sq ft) is $55, and a 9x20 (180 sq ft) is $60 per month. Every unit has a roll up " +
      "door and outdoor drive-up access.",
  },
  {
    question: "What size storage unit do I need?",
    answer:
      "A 9x7 (63 sq ft) or 9x9 (81 sq ft) unit holds a dorm move-out or a few rooms of furniture. " +
      "A 9x13 (117 sq ft) or 9x14 (126 sq ft) unit suits a one to two-bedroom home. A 9x20 unit " +
      "(180 sq ft) fits the contents of a larger home, a vehicle, or business inventory. Call " +
      "(208) 360-6741 if you would like help choosing.",
  },
  {
    question: "Can I access my storage unit anytime?",
    answer:
      "Yes. Gate access runs from 12:00 AM to 11:59 PM every day of the week, including weekends " +
      "and holidays. Each unit has a roll up door with outdoor drive-up access, so you can pull a " +
      "vehicle right up to your door. The office is available by appointment.",
  },
];
