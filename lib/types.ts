/** Shared types for site configuration. Kept separate from lib/facility.ts so
 *  per-city config modules can import the type without a circular dependency. */

export type Unit = {
  /** URL-safe id, also used as the React key. */
  id: string;
  /** Display size, e.g. "10x14". */
  size: string;
  /** Square footage. */
  sqft: number;
  /** Monthly price in USD. */
  price: number;
  /** Feature list shown on the card. */
  features: string[];
  /** Availability badge text shown on the card. */
  availability: string;
  /** Number remaining, used to flag low-stock urgency styling. */
  unitsLeft: number;
};

export type Faq = { question: string; answer: string };
