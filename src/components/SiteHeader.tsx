"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        href="/tiket"
        className="block bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ink hover:underline"
      >
        Tiket early-bird IBF 2026 sudah dibuka, kuota terbatas. Beli sekarang →
      </Link>
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-4 py-3 sm:px-6">
          <Logo />
          <nav aria-label="Menu utama" className="hidden flex-1 justify-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    "rounded-lg px-3.5 py-2.5 text-[15px] " +
                    (active
                      ? "bg-chip font-bold text-brand"
                      : "font-medium text-slate-700 hover:bg-soft")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Link
              href="/tiket"
              className="hidden rounded-full bg-brand px-5 py-3 text-[15px] font-bold text-white hover:bg-navy sm:inline-block"
            >
              Beli Tiket
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-soft lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="menu-mobile"
            aria-label="Menu utama"
            className="border-t border-line px-4 pb-4 lg:hidden"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-100 px-1 py-3.5 text-[17px] font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/tiket"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-brand py-3.5 text-center font-bold text-white"
            >
              Beli Tiket
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
