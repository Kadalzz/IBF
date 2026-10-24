// IBF 2026 logo lock-up (red square) and the four-petal mark from the "National Champion" key visual.

export function IbfLogo({ size = 52 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 flex-col items-center justify-center bg-red text-center font-sans font-bold leading-[0.95] text-white"
      style={{ width: size, height: size, fontSize: size * 0.135 }}
      aria-label="Indonesia Brand Forum 2026"
      role="img"
    >
      <span aria-hidden="true">INDONESIA</span>
      <span aria-hidden="true" className="text-[1.25em]">BRAND</span>
      <span aria-hidden="true" className="text-[1.25em]">FORUM</span>
      <span aria-hidden="true" className="text-[0.6em] tracking-[0.2em]">★★★★★</span>
      <span aria-hidden="true" className="font-display text-[1.75em] font-normal leading-none">2026</span>
    </span>
  );
}

const LEAF = "M50 8 C70 22 70 40 50 50 C30 40 30 22 50 8 Z";

export function PetalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="rotate(45 50 50)">
        <path d={LEAF} fill="#f4f7f2" />
        <path d={LEAF} fill="#e8140c" transform="rotate(90 50 50)" opacity="0.92" />
        <path d={LEAF} fill="#6ed3a9" transform="rotate(180 50 50)" />
        <path d={LEAF} fill="#fff200" transform="rotate(270 50 50)" />
      </g>
      <rect x="44" y="44" width="12" height="12" transform="rotate(45 50 50)" fill="none" stroke="#f4f7f2" strokeWidth="3" />
      <circle cx="50" cy="3" r="2.5" fill="#f4f7f2" />
      <circle cx="50" cy="97" r="2.5" fill="#f4f7f2" />
      <circle cx="3" cy="50" r="2.5" fill="#f4f7f2" />
      <circle cx="97" cy="50" r="2.5" fill="#f4f7f2" />
    </svg>
  );
}
