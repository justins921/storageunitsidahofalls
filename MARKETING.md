# Marketing & Growth Setup

This guide covers everything needed to drive traffic and track conversions for
this site. It applies to both **Storage Units Idaho Falls** and **Storage Units
Rexburg** — do each step once per site (each has its own domain, its own Google
Business Profile, and its own ad/analytics IDs).

The single most important conversion on this site is a **phone call**. The site
is already wired to fire a conversion event on every `tel:` click — you just
need to connect your accounts (below).

---

## 0. The fastest path to customers

In rough priority order for a local storage business:

1. **Google Business Profile (GBP)** — free, and the #1 driver of local "storage
   near me" calls. Do this first.
2. **Google Search Console** — confirm Google can index the site; submit the
   sitemap.
3. **Google Ads (Search)** — pay to appear for "storage units [city]" while your
   organic ranking builds. Phone-call conversions are already wired.
4. **Meta Ads (Facebook/Instagram)** — cheap local awareness and retargeting.
5. **Reviews** — ask every customer. Reviews lift both GBP ranking and call rate.

---

## 1. Google Business Profile (drives the most local calls)

Create/claim the profile at <https://business.google.com>.

**Critical: NAP must match the site exactly.** Name, address, and phone on GBP
must be character-for-character identical to `lib/facility.ts`. Google penalizes
inconsistent NAP for local ranking.

- **Name:** exactly as in `facility.name`
- **Address:** exactly as in `facility.address`
- **Phone:** the same number as `facility.phoneDisplay`
- **Primary category:** "Self-storage facility"
- **Hours:** Open 24 hours (matches the gate access hours)
- **Website:** the site's domain
- **Photos:** add 5+ real photos (gate, units, roll-up doors, signage, drive
  aisles). Listings with photos get far more calls.
- **Services/Products:** add each unit size with its price (10x14 $65, 11x14 $75,
  11x30 $145) so they show in the profile.
- **Description:** reuse the site copy.

Once the profile is live, paste two values back into `lib/facility.ts`:

- `geo` — the exact map pin coordinates (currently approximate).
- `reviewUrl` — the "get more reviews" short link GBP generates.
- `sameAs` — add the public GBP listing URL (and Facebook page) so the site's
  structured data links to your verified profile.

Then **post to GBP regularly** (offers, "units available") — GBP Posts are free
and surface in local results.

---

## 2. Google Search Console (indexing + sitemap)

1. Go to <https://search.google.com/search-console> and add the domain.
2. Verify ownership. Easiest options:
   - **DNS** (recommended): add the TXT record they give you at your registrar.
   - **HTML tag**: copy the `content="..."` token into the
     `GOOGLE_SITE_VERIFICATION` env var (see `.env.example`) and redeploy.
3. Submit the sitemap: `https://YOURDOMAIN/sitemap.xml`.
4. Use the URL Inspection tool to request indexing of the homepage.

The site already ships `robots.txt`, `sitemap.xml`, and `llms.txt`, and allows
AI crawlers (ChatGPT, Perplexity, Claude, Gemini) so it can be cited in AI
answers.

---

## 3. Google Ads — Search campaign with call conversions

### Create the conversion action first

1. Google Ads -> **Tools -> Conversions -> New conversion action -> Website**.
2. Create one for a phone-call/contact action (e.g. category "Contact").
3. Copy the **tag ID** (`AW-XXXXXXXXX`) and the **conversion label**.
4. Set env vars (in Vercel -> Settings -> Environment Variables), then redeploy:
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-XXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION` = `AW-XXXXXXXXX/yourLabel`

Every tap on a "Call to Reserve" button now records as a conversion, so you can
see which keywords/ads actually generate calls and optimize spend.

### Campaign setup

- **Type:** Search. **Goal:** Leads / phone calls.
- **Location targeting:** tight radius around the facility (the city + the towns
  in `areasServed`). Don't waste budget statewide.
- **Keywords** (start exact/phrase):
  - `storage units [city]`, `self storage [city]`, `[city] storage`,
    `cheap storage [city]`, `drive up storage [city]`, `storage near me`
- **Negative keywords:** `jobs`, `free`, `auction`, `pods`, `moving truck`.
- **Ad copy:** mirror the landing page (message match raises Quality Score):
  - Headlines: "Storage Units in [City]", "Drive-Up Units From $65/mo",
    "24/7 Access — Call to Reserve"
  - Use the **Call** ad asset and **Location** asset (links to GBP).
- **Landing page:** the homepage already loads fast (static), has one clear
  action (call), and matches ad messaging — all good for Quality Score.

---

## 4. Meta (Facebook / Instagram) Ads

1. In **Meta Events Manager**, create a Pixel (Data Source) and copy the numeric
   **Pixel ID**.
2. Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel and redeploy. PageView fires
   automatically; every `tel:` click fires a **Contact** event.
3. Create a Facebook Page for the business (link it as `sameAs` in
   `lib/facility.ts`).
4. **Campaigns:**
   - **Awareness/Traffic** to local radius (city + nearby towns), objective
     "Calls" or "Traffic" to the site.
   - **Retargeting:** once the Pixel has traffic, re-show ads to site visitors
     who didn't call.
5. Creative: real photos of the units, the "$65/mo, only a few left" scarcity
   angle, and a clear "Call to Reserve" button.

---

## 5. Reviews flywheel

- After move-in, text/email customers the GBP `reviewUrl`.
- Aim for a steady trickle (a few per month beats a one-time burst).
- Reply to every review.
- Once real reviews exist, we can add `AggregateRating` schema to show star
  ratings in search. (We deliberately do **not** fake ratings — that violates
  Google's policy and can get the listing suppressed.)

---

## 6. What's already built into the site (SEO/AEO)

- Title, meta description, canonical, Open Graph + Twitter tags, dynamic social
  image, and a branded favicon.
- `LocalBusiness`/`SelfStorage` + `FAQPage` JSON-LD, now including `areaServed`,
  `hasMap`, `paymentAccepted`, and a `sameAs` slot.
- Semantic HTML, single H1, `<address>`, fast static rendering (good Core Web
  Vitals).
- `robots.txt`, `sitemap.xml`, and a hidden AI-readable context block + `llms.txt`
  so AI assistants can cite the facility.
- Phone-click conversion tracking for GA4, Google Ads, and Meta (this file's
  steps connect the accounts).

---

## 7. Per-site checklist

Repeat for **each** domain:

- [ ] GBP created, verified, NAP matches site, photos + services added
- [ ] `geo`, `reviewUrl`, `sameAs` updated in `lib/facility.ts` from the live GBP
- [ ] Search Console verified + sitemap submitted
- [ ] GA4 property created -> `NEXT_PUBLIC_GA_MEASUREMENT_ID` set
- [ ] Google Ads conversion action created -> `NEXT_PUBLIC_GOOGLE_ADS_ID` +
      `NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION` set
- [ ] Meta Pixel created -> `NEXT_PUBLIC_META_PIXEL_ID` set
- [ ] Redeployed after setting env vars
- [ ] Test: tap a call button, confirm the conversion shows in GA4 DebugView /
      Ads / Meta Events Manager
