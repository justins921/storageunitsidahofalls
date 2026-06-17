import CallButton from "@/components/CallButton";
import { facility } from "@/lib/facility";

/** Sticky top bar with the business name and a persistent call CTA. */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="hidden h-9 w-2 rounded-sm bg-accent sm:block"
          />
          <span className="font-display text-lg font-extrabold uppercase leading-none tracking-wide text-white sm:text-xl">
            {facility.name}
          </span>
        </a>
        <CallButton label={facility.phoneDisplay} size="sm" />
      </div>
    </header>
  );
}
