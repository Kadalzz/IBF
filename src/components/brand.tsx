// IBF 2026 logo lock-up (red square) and the four-petal mark from the "National Champion" key visual.

export function IbfLogo({ size = 52, className = "", year = "2026" }: { size?: number; className?: string; year?: string }) {
  return (
    <span
      role="img"
      aria-label={`Indonesia Brand Forum ${year}`}
      className={`inline-flex shrink-0 flex-col items-center justify-center bg-red text-center leading-[0.92] text-white ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.16 }}
    >
      <span aria-hidden="true" className="font-cond font-semibold tracking-tight">INDONESIA</span>
      <span aria-hidden="true" className="font-cond text-[1.3em] font-bold">BRAND</span>
      <span aria-hidden="true" className="font-cond text-[1.3em] font-bold">FORUM</span>
      <span aria-hidden="true" className="text-[0.5em] tracking-[0.25em]">★★★★★</span>
      <span aria-hidden="true" className="font-serif text-[1.8em] leading-none">{year}</span>
    </span>
  );
}

const LEAF = "M50 8 C70 22 70 40 50 50 C30 40 30 22 50 8 Z";

export function PetalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="rotate(45 50 50)">
        <path d={LEAF} fill="#f4f7f2" />
        <path d={LEAF} fill="#dc4a4e" transform="rotate(90 50 50)" />
        <path d={LEAF} fill="#5ec9a0" transform="rotate(180 50 50)" />
        <path d={LEAF} fill="#fbc52d" transform="rotate(270 50 50)" />
      </g>
      <rect x="44" y="44" width="12" height="12" transform="rotate(45 50 50)" fill="none" stroke="#f4f7f2" strokeWidth="3" />
      <circle cx="50" cy="3" r="2.5" fill="#f4f7f2" />
      <circle cx="50" cy="97" r="2.5" fill="#f4f7f2" />
      <circle cx="3" cy="50" r="2.5" fill="#f4f7f2" />
      <circle cx="97" cy="50" r="2.5" fill="#f4f7f2" />
    </svg>
  );
}
