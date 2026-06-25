# Storage Units Idaho Falls

Single-page marketing site for **Storage Units Idaho Falls**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Designed for deployment on Vercel.

The site is built around one conversion goal: **a phone call**. Every call to action dials `(208) 360-6741`. There is no database, API, or form.

## Editing facility data

All facility content lives in **`lib/facility.ts`**: name, address, phone, hours, the available units (size, price, features, availability), the FAQ, the Google review URL, and the canonical site URL. Change a value there once and it updates the page copy, the JSON-LD schema, the metadata, the sitemap, and `robots.txt`.

> **Local SEO note:** the name, address, phone, and hours in `lib/facility.ts` must match the Google Business Profile listing exactly. Consistent NAP data is critical for local ranking.

When the listing goes live, update these placeholders in `lib/facility.ts`:

- `geo.latitude` / `geo.longitude` — replace the approximate coordinates with the exact GBP pin.
- `reviewUrl` — replace with the real Google "write a review" link.

## What's implemented

**SEO**

- Title tag, meta description, canonical URL, Open Graph + Twitter tags.
- H1 `Storage Units in Idaho Falls, ID`, single-H1 heading hierarchy, semantic HTML (`<main>`, `<section>`, `<article>`, `<address>`).
- `SelfStorage` + `LocalBusiness` JSON-LD with address, phone, geo, opening hours, price range, and an offer per unit.
- `FAQPage` JSON-LD matching the visible FAQ.
- `robots.txt` and `sitemap.xml` generated via Next.js metadata routes.
- Dynamically generated Open Graph / Twitter image.

**AI / LLM SEO**

- Hidden `#llm-context` block with a plain-language facility summary for AI crawlers to extract and cite.
- Copy that directly answers "where can I find storage units in Idaho Falls" and "how much does storage cost in Idaho Falls".
- `public/llms.txt` summarizing the facility and pricing for AI systems.
- `robots.txt` allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) so the site is eligible for citation.

**CRO**

- Scarcity-driven hero headline and availability badges.
- One unambiguous action everywhere: call to reserve.
- Trust signals (hours, location, reviews placeholder) and objection-handling FAQ.

## Marketing, analytics & ads

See **[MARKETING.md](MARKETING.md)** for the full growth playbook: Google
Business Profile, Search Console, Google Ads (with phone-call conversion
tracking), Meta Pixel/Ads, and reviews.

Analytics and ad tracking are wired up but **inert until you set the matching
environment variables** (copy `.env.example` to `.env.local` for local dev, and
set them in Vercel for production). With none set, no tracking scripts load.
Every `tel:` click automatically fires a GA4 event, a Google Ads conversion, and
a Meta "Contact" event once the IDs are in place.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Push to the connected Git repository and import the project in Vercel. No environment variables are required. Set the production domain to match `facility.url` in `lib/facility.ts` so the canonical URL, sitemap, and schema use the live domain.
