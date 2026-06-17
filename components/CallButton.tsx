import { facility } from "@/lib/facility";

type Props = {
  /** Button label. Defaults to a value-communicating CTA. */
  label?: string;
  /** Visual style. "primary" is the bright accent button, "ghost" is outlined. */
  variant?: "primary" | "ghost";
  className?: string;
};

/** Phone icon, decorative (labelled by the surrounding button text). */
function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * The single conversion action on the page: a phone call. Every CTA on the
 * site is one of these, so the path to conversion is unambiguous (CRO).
 */
export default function CallButton({
  label,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/60";
  const styles =
    variant === "primary"
      ? "bg-amber-400 text-navy-dark hover:bg-amber-300 shadow-lg shadow-amber-500/20"
      : "border-2 border-white/80 text-white hover:bg-white hover:text-navy";

  return (
    <a
      href={facility.phoneHref}
      className={`${base} ${styles} ${className}`}
      aria-label={`Call Storage Units Idaho Falls at ${facility.phoneDisplay}`}
    >
      <PhoneIcon />
      <span>{label ?? `Call ${facility.phoneDisplay}`}</span>
    </a>
  );
}
