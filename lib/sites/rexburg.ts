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
  startingPrice: 45,

  /** priceRange string for LocalBusiness schema. */
  priceRange: "$45–$89",

  /**
   * Limited-time move-in promotion. Rendered in the hero and on the unit cards
   * when set; sites with no active promo set this to null.
   */
  promo: {
    badge: "$5 First Month",
    headline: "Move In for Just $5",
    detail:
      "Get your first month for $5 on any size, then the regular monthly rate. Limited-time move-in special while units last — call to claim yours.",
  },

  /**
   * Location-specific marketing copy. Kept here (not hardcoded in the page) so
   * each city site can vary its wording without touching the layout. Edit these
   * to make a new location read as its own page rather than a clone.
   */
  messaging: {
    heroSubhead:
      "Drive-up storage on Highway 191 just south of Rexburg, with wide 9x9 garage doors and 24/7 gate access, from $45 a month. Move in for just $5 your first month. Call to claim a unit before they are gone.",
    unitsIntro:
      "Three drive-up sizes, each with a wide 9x9 garage door you can pull right up to and load in minutes. Reserve in one phone call, with no online forms.",
    locationIntro:
      "You will find us on South Highway 191, a short drive from downtown Rexburg, Sugar City, and the BYU-Idaho campus.",
  },
} as const;

// NOTE: availability/unitsLeft are placeholders ("Now Available") pending the
// unit quantities. Set real counts and low-stock urgency once they arrive.
export const units: Unit[] = [
  {
    id: "10x10",
    size: "10x10",
    sqft: 100,
    price: 45,
    features: ["9x9 Garage Door", "Drive-Up Access"],
    availability: "Now Available",
    unitsLeft: 10,
  },
  {
    id: "10x14",
    size: "10x14",
    sqft: 140,
    price: 69,
    features: ["9x9 Garage Door", "Drive-Up Access"],
    availability: "Now Available",
    unitsLeft: 10,
  },
  {
    id: "10x20",
    size: "10x20",
    sqft: 200,
    price: 89,
    features: ["9x9 Garage Door", "Drive-Up Access"],
    availability: "Now Available",
    unitsLeft: 10,
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
      "Storage Units Rexburg has three drive-up sizes: a 10x10 unit (100 sq ft) for $45 per " +
      "month, a 10x14 unit (140 sq ft) for $69 per month, and a 10x20 unit (200 sq ft) for $89 " +
      "per month. Every unit has a wide 9x9 garage door and outdoor drive-up access. For a " +
      "limited time, your first month is just $5.",
  },
  {
    question: "What size storage unit do I need?",
    answer:
      "A 10x10 unit (100 sq ft) holds a dorm move-out or a couple of rooms of furniture. A 10x14 " +
      "unit (140 sq ft) suits a one to two-bedroom home. A 10x20 unit (200 sq ft) fits a larger " +
      "home, a vehicle, or business inventory. Every unit has a wide 9x9 garage door for easy " +
      "drive-up access. Call (208) 360-6741 if you would like help choosing.",
  },
  {
    question: "Can I access my storage unit anytime?",
    answer:
      "Yes. Gate access runs from 12:00 AM to 11:59 PM every day of the week, including weekends " +
      "and holidays. Each unit has a roll up door with outdoor drive-up access, so you can pull a " +
      "vehicle right up to your door. The office is available by appointment.",
  },
];
