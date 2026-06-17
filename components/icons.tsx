/** Decorative feature icons. Each is hidden from assistive tech because the
 *  adjacent heading already names the feature. */

type IconProps = { className?: string };

const common = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ClockIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function DoorIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M5 8h14M5 12h14M5 16h14" />
    </svg>
  );
}

export function TruckIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function PinIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}
