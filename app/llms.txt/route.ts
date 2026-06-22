import { facility, units, faqs } from "@/lib/facility";

const { city, region, postalCode, street } = facility.address;
const fullAddress = `${street}, ${city}, ${region} ${postalCode}`;

/**
 * Generates /llms.txt from the facility config so AI crawlers always read
 * current facts. Derived entirely from lib/facility.ts — no hardcoded city,
 * phone, or pricing.
 */
export const dynamic = "force-static";

export function GET() {
  const unitLines = units
    .map(
      (u) =>
        `- ${u.size} (${u.sqft} sq ft): $${u.price}/month. ${u.features.join(
          ", "
        )}. ${u.availability}.`
    )
    .join("\n");

  const faqLines = faqs
    .map((f) => `- ${f.question} ${f.answer}`)
    .join("\n");

  const body = `# ${facility.name}

> Affordable self storage in ${city}, ${region}. Drive-up units with roll up doors and 24/7 gate access, starting at $${facility.startingPrice} per month.

## Facility
- Name: ${facility.name}
- Address: ${fullAddress}
- Phone: ${facility.phoneDisplay}
- Access hours: ${facility.access.label}
- Office: ${facility.office}

## Available units and pricing
${unitLines}

## Common questions
${faqLines}

## Reserve
All reservations are by phone. Call ${facility.phoneDisplay}.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
