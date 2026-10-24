import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { formatRupiah, TIERS, whatsappUrl } from "@/lib/data";
import { ChatIcon } from "./icons";

// Stagger for [data-reveal] elements: `style={delay(120)}`.
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export const TONE = {
  yellow: { bg: "bg-yellow", text: "text-yellow", border: "border-yellow", ink: "text-night" },
  mint: { bg: "bg-mint", text: "text-mint", border: "border-mint", ink: "text-night" },
  red: { bg: "bg-red", text: "text-red", border: "border-red", ink: "text-white" },
  white: { bg: "bg-cream", text: "text-cream", border: "border-cream", ink: "text-night" },
} as const;

export type Tone = keyof typeof TONE;

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`mx-auto max-w-[1320px] px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-bold uppercase tracking-[0.2em] text-yellow ${className}`}>{children}</p>;
}

// Big condensed uppercase heading, the signature of the "Panggung" concept.
export function Display({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag data-reveal className={`font-display font-normal uppercase leading-[0.9] ${className}`}>
      {children}
    </Tag>
  );
}

export function SectionHead({ kicker, title, action }: { kicker?: string; title: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        {kicker && <Kicker className="mb-4">{kicker}</Kicker>}
        <Display className="text-[clamp(52px,7vw,104px)]">{title}</Display>
      </div>
      {action}
    </div>
  );
}

// Image slot; real photos render greyscale and turn to colour on hover.
export function Photo({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`overflow-hidden bg-deep ${className}`}>
      <div className="flex h-full w-full items-center justify-center p-4 text-center text-[13px] text-sage/70 grayscale transition duration-700 ease-stage group-hover:scale-105 group-hover:grayscale-0">
        [{label}]
      </div>
    </div>
  );
}

const buttonStyles = {
  yellow: "bg-yellow text-night [--fill:var(--color-cream)]",
  ghost: "border border-cream/40 text-cream hover:text-night transition-colors duration-300",
  red: "bg-red text-white [--fill:var(--color-yellow)] hover:text-night transition-colors duration-300",
};

export function ButtonLink({
  href,
  children,
  variant = "yellow",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn-fill group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-stage group-hover:translate-x-1.5">
      →
    </span>
  );
}

export function Ticker({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-[30px] uppercase leading-none tracking-wide">{item}</span>
          <span aria-hidden="true">★</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={label} className="marquee overflow-hidden bg-yellow py-4 text-night">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}

const lowestPrice = Math.min(...TIERS.map((t) => t.price));

// Sticky registration bar for phones.
export function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-line bg-night/95 px-3 pb-4 pt-3 backdrop-blur md:hidden">
      <a
        href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")}
        aria-label="Tanya lewat WhatsApp"
        className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-cream/40"
      >
        <ChatIcon size={22} />
      </a>
      <Link href="/tiket" className="flex h-13 flex-1 items-center justify-center rounded-full bg-yellow font-bold text-night">
        Daftar · mulai {formatRupiah(lowestPrice)}
      </Link>
    </div>
  );
}
