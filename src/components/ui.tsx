import Link from "next/link";
import type { ReactNode } from "react";
import { formatRupiah, TIERS, whatsappUrl } from "@/lib/data";
import { ChatIcon } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-2 text-sm font-bold tracking-wider ${light ? "text-gold" : "text-brand"}`}>
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-[40px] ${className}`}>
      {children}
    </h2>
  );
}

export function Placeholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl text-center text-sm ${
        dark ? "bg-navy-2 text-slate-400" : "bg-placeholder text-slate-500"
      } ${className}`}
    >
      [{label}]
    </div>
  );
}

const buttonStyles = {
  primary: "bg-brand text-white hover:bg-navy",
  gold: "bg-gold text-ink hover:brightness-95",
  outline: "border border-brand text-brand hover:bg-chip",
  ghostLight: "border border-white/40 text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
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
      className={`inline-block rounded-full px-7 py-3.5 text-center text-base font-bold ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

const lowestPrice = Math.min(...TIERS.map((t) => t.price));

// Sticky purchase bar for phones, mirroring the mobile prototype.
export function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2.5 border-t border-line bg-white px-4 pb-5 pt-3 md:hidden">
      <a
        href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")}
        aria-label="Tanya lewat WhatsApp"
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-slate-300 text-brand"
      >
        <ChatIcon size={24} />
      </a>
      <Link
        href="/tiket"
        className="flex h-[52px] flex-1 items-center justify-center rounded-full bg-brand text-base font-bold text-white"
      >
        Beli Tiket · mulai {formatRupiah(lowestPrice)}
      </Link>
    </div>
  );
}

export function SponsorGrid({ names, onSoft = false }: { names: string[]; onSoft?: boolean }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
      {names.map((name) => (
        <li
          key={name}
          className={`flex h-[72px] items-center justify-center rounded-xl border border-line text-sm font-semibold text-muted ${
            onSoft ? "bg-white" : ""
          }`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
