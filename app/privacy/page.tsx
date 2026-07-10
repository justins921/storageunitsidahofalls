import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { facility } from "@/lib/facility";

const LAST_UPDATED = "July 2026";
const domain = facility.url.replace(/^https?:\/\//, "");

export const metadata: Metadata = {
  title: `Privacy Policy | ${facility.name}`,
  description: `How ${facility.name} handles information collected on ${domain}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteHeader />

      <main id="top" className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-stone-600">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="mt-8 space-y-8 text-stone-700">
            <p>
              This Privacy Policy explains how {facility.name} handles
              information when you visit {domain} (our website). We keep it short
              because our website is simple: there are no accounts to create, no
              forms to fill out, and nothing to buy. The main way to reach us is
              by phone at{" "}
              <a
                href={facility.phoneHref}
                className="font-semibold text-accent-dark underline"
              >
                {facility.phoneDisplay}
              </a>
              .
            </p>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Information we collect
              </h2>
              <p className="mt-3">
                You do not need to provide any personal information to use our
                website. We collect two kinds of information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Usage information, collected automatically.</strong>{" "}
                  Like most websites, we use analytics tools that record things
                  such as the pages you view, the approximate (city-level)
                  location derived from your IP address, the type of device and
                  browser you use, and how you arrived at our site. This is
                  collected through cookies and similar technologies.
                </li>
                <li>
                  <strong>Information you share when you call us.</strong> When
                  you call {facility.phoneDisplay}, we and the storage facility
                  will see your phone number and whatever you choose to tell us,
                  so we can answer your questions and reserve a unit. Calls are
                  handled under the standard business practices of the facility.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Cookies and analytics
              </h2>
              <p className="mt-3">
                We use Google Analytics to understand how visitors use our
                website, so we can improve it and measure our marketing. Google
                Analytics sets cookies and processes usage data on our behalf. We
                may also use advertising tools from Google (Google Ads) and Meta
                (Facebook and Instagram) to measure the performance of ads and to
                reach people who have visited our site; these tools may set their
                own cookies when they are active.
              </p>
              <p className="mt-3">
                You can control or delete cookies through your browser settings.
                You can also opt out of Google Analytics using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-dark underline"
                >
                  Google Analytics Opt-out Browser Add-on
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                , manage your Google ad settings in your Google account, and
                adjust Meta ad preferences in your Facebook or Instagram
                settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                How we use information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>operate, maintain, and improve the website;</li>
                <li>
                  measure which marketing channels bring visitors and calls;
                </li>
                <li>understand our audience and traffic trends; and</li>
                <li>respond to inquiries you make by phone.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                How information is shared
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We share limited
                information with service providers that operate on our behalf,
                including Google (analytics and advertising), Meta (advertising),
                and our website host, Vercel. These providers process the
                information only to provide their services to us. We may also
                disclose information if required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Your choices and rights
              </h2>
              <p className="mt-3">
                You can limit tracking through the browser and opt-out tools
                described above. Depending on where you live, you may have rights
                to access, correct, or delete personal information, or to opt out
                of certain sharing. California residents have these rights under
                the CCPA and CPRA. Because we do not sell personal information and
                collect very little, these requests are usually simple. To make a
                request, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Third-party content
              </h2>
              <p className="mt-3">
                Our location section displays an embedded Google Map. Google may
                collect information through that map under its own privacy
                policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Children
              </h2>
              <p className="mt-3">
                Our website is intended for a general adult audience and is not
                directed to children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. When we do,
                we will change the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">
                Contact us
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact:
              </p>
              <address className="mt-3 not-italic">
                <strong className="font-display font-bold uppercase tracking-wide text-ink">
                  {facility.name}
                </strong>
                <br />
                {facility.address.street}
                <br />
                {facility.address.city}, {facility.address.region}{" "}
                {facility.address.postalCode}
                <br />
                Phone:{" "}
                <a
                  href={facility.phoneHref}
                  className="font-semibold text-accent-dark underline"
                >
                  {facility.phoneDisplay}
                </a>
              </address>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
