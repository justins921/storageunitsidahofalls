import { facility } from "@/lib/facility";

/** Shared site footer: NAP, hours, and legal links. Used on every page. */
export default function SiteFooter() {
  return (
    <footer className="bg-ink text-blue-100">
      <div className="signage-stripe h-2 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
              {facility.name}
            </p>
            <address className="mt-2 not-italic text-sm">
              {facility.address.street}
              <br />
              {facility.address.city}, {facility.address.region}{" "}
              {facility.address.postalCode}
            </address>
          </div>
          <div className="text-sm sm:text-right">
            <a
              href={facility.phoneHref}
              className="font-display text-lg font-bold text-white underline"
            >
              {facility.phoneDisplay}
            </a>
            <p className="mt-2">Access: {facility.access.label}</p>
            <p>Office: {facility.office}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-200/70">
            © {new Date().getFullYear()} {facility.name}. Affordable self storage
            in {facility.address.city}, {facility.address.region}{" "}
            {facility.address.postalCode}.
          </p>
          <nav aria-label="Footer" className="text-xs">
            <a href="/" className="text-blue-100 underline hover:text-white">
              Home
            </a>
            <span aria-hidden="true" className="px-2 text-white/30">
              |
            </span>
            <a
              href="/privacy"
              className="text-blue-100 underline hover:text-white"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
