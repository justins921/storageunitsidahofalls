import { facility, units, faqs } from "./facility";

/**
 * Builds the JSON-LD structured data graph for the page.
 *
 * Combines two schema types with @graph:
 *  1. SelfStorage (a subtype of LocalBusiness) for the facility itself, with
 *     name, address, phone, geo, opening hours, price range, and an offer
 *     catalog of the available units.
 *  2. FAQPage for the question/answer content.
 *
 * Accuracy first: every value is read from lib/facility.ts so the markup always
 * matches the visible content on the page.
 */
export function buildJsonLd() {
  const localBusiness = {
    "@type": "SelfStorage",
    "@id": `${facility.url}/#facility`,
    name: facility.name,
    description:
      "Affordable self storage in Idaho Falls, ID. Drive-up storage units with " +
      "roll up doors and 24/7 gate access, starting at $65 per month.",
    url: facility.url,
    telephone: facility.phoneE164,
    image: `${facility.url}/opengraph-image`,
    priceRange: facility.priceRange,
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: facility.address.street,
      addressLocality: facility.address.city,
      addressRegion: facility.address.region,
      postalCode: facility.address.postalCode,
      addressCountry: facility.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: facility.geo.latitude,
      longitude: facility.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    makesOffer: units.map((unit) => ({
      "@type": "Offer",
      name: `${unit.size} Storage Unit (${unit.sqft} sq ft)`,
      price: unit.price,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: unit.price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      availability:
        unit.unitsLeft > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemOffered: {
        "@type": "Product",
        name: `${unit.size} Self Storage Unit`,
        description: `${unit.sqft} sq ft unit with ${unit.features.join(" and ")}.`,
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${facility.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, faqPage],
  };
}
