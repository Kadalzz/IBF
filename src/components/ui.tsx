import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { formatRupiah, TIERS, whatsappUrl } from "@/lib/data";
import { IbfLogo } from "./brand";
import { ChatIcon } from "./icons";

// Stagger for [data-reveal] elements: `style={delay(120)}`.
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export const TONE = {
  coral: { bg: "bg-coral", text: "text-coral", border: "border-coral", ink: "text-white" },
  orange: { bg: "bg-orange", text: "text-orange", border: "border-orange", ink: "text-white" },
  leaf: { bg: "bg-leaf", text: "text-leaf", border: "border-leaf", ink: "text-white" },
  sun: { bg: "bg-sun", text: "text-sun", border: "border-sun", ink: "text-ink" },
  mint: { bg: "bg-mint", text: "text-mint", border: "border-mint", ink: "text-ink" },
  white: { bg: "bg-white", text: "text-ink", border: "border-ink/20", ink: "text-ink" },
} as const;

export type Tone = keyof typeof TONE;

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`mx-auto max-w-[1240px] px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

// "THE" in black + the slide's key word in deck green, as on every content slide.
export function SlideTitle({ lead = "THE", word, className = "", light = false }: { lead?: string; word: string; className?: string; light?: boolean }) {
  return (
    <h2
      data-reveal="left"
      className={`font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase leading-[1.02] tracking-tight ${light ? "text-white" : "text-ink"} ${className}`}
    >
      {lead && <>{lead} </>}
      <span className={light ? "text-lime" : "text-forest"}>{word}</span>
    </h2>
  );
}

// Light grey content slide with the IBF logo top right, quarter circles bottom left and the teal wave bottom right.
export function PaperSlide({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden bg-paper ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 hidden w-[110px] flex-col sm:flex">
        <span className="ml-[55px] h-[55px] w-[55px] rounded-tl-full bg-[#f6e7b4] opacity-80" />
        <span className="h-[55px] w-[55px] rounded-tr-full border border-ink/10" />
        <span className="ml-[55px] h-[55px] w-[55px] rounded-tl-full bg-[#f3cfd0] opacity-80" />
        <span className="h-[40px] w-[40px] rounded-tr-full bg-[#aee5d2]" />
      </div>
      <svg aria-hidden="true" viewBox="0 0 1000 160" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-[70px] w-[85%] sm:h-[110px] sm:w-[60%]">
        <path d="M0 160 C320 150 620 120 1000 18 L1000 160 Z" fill="url(#ibf-wave)" />
        <path d="M260 160 C560 140 800 95 1000 50" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
      </svg>
      <span className="absolute right-4 top-6 hidden sm:block lg:right-10">
        <IbfLogo size={64} />
      </span>
      <Container className="relative pb-28 pt-16 sm:pb-36 sm:pt-20">{children}</Container>
    </section>
  );
}

// Deck-green slide with the faint motif (cover, line-up, dividers).
export function GreenSlide({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden bg-forest text-white ${className}`}>
      <div aria-hidden="true" className="motif pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </section>
  );
}

// Section divider slide: one yellow word with the offset white outline.
export function Divider({ word, id }: { word: string; id?: string }) {
  return (
    <GreenSlide id={id}>
      <Container className="flex min-h-[320px] items-center justify-center py-24 sm:min-h-[420px]">
        <p data-reveal="scale" className="outline-shadow text-center font-display text-[clamp(56px,11vw,150px)] font-extrabold uppercase leading-none tracking-wide text-yellow">
          {word}
        </p>
      </Container>
    </GreenSlide>
  );
}

// Image slot until the deck's photos are supplied; real photos turn from greyscale to colour on hover.
export function Photo({ label, className = "", dark = false }: { label: string; className?: string; dark?: boolean }) {
  return (
    <div className={`overflow-hidden ${dark ? "bg-deep" : "bg-[#d5d8d6]"} ${className}`}>
      <div
        className={`flex h-full w-full items-center justify-center p-3 text-center text-xs grayscale transition duration-700 ease-stage group-hover:scale-105 group-hover:grayscale-0 ${
          dark ? "text-sage/70" : "text-[#6b6f6d]"
        }`}
      >
        [{label}]
      </div>
    </div>
  );
}

const buttonStyles = {
  yellow: "bg-yellow text-night [--fill:#ffffff]",
  green: "bg-forest text-white [--fill:var(--color-night)]",
  ghost: "border border-white/50 text-white hover:text-forest transition-colors duration-300",
  outline: "border border-forest text-forest hover:text-white transition-colors duration-300 [--fill:var(--color-forest)]",
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
      className={`btn-fill group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold ${buttonStyles[variant]} ${className}`}
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

const lowestPrice = Math.min(...TIERS.map((t) => t.price));

// Sticky registration bar for phones.
export function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-white/15 bg-forest/95 px-3 pb-4 pt-3 text-white backdrop-blur md:hidden">
      <a
        href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")}
        aria-label="Tanya lewat WhatsApp"
        className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-white/40"
      >
        <ChatIcon size={22} />
      </a>
      <Link href="/tiket" className="flex h-13 flex-1 items-center justify-center rounded-full bg-yellow font-bold text-night">
        Daftar · mulai {formatRupiah(lowestPrice)}
      </Link>
    </div>
  );
}
