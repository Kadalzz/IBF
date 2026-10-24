"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { IbfLogo } from "./brand";
import { CloseIcon, MenuIcon } from "./icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Slides away while scrolling down, comes back as soon as the visitor scrolls up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[transform,background-color,border-color] duration-500 ease-stage ${
        hidden && !open ? "-translate-y-full" : ""
      } ${scrolled || open ? "border-b border-line bg-night/90 backdrop-blur" : "border-b border-transparent bg-forest"}`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Indonesia Brand Forum 2026, beranda">
          <IbfLogo size={48} />
          <span className="hidden font-display text-xl uppercase leading-none tracking-wide sm:block">
            National<br />
            <span className="text-yellow">Champion</span>
          </span>
        </Link>
        <nav aria-label="Menu utama" className="hidden gap-8 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-draw py-1 text-[15px] font-medium ${active ? "text-yellow" : "text-cream"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/tiket"
            className="btn-fill hidden rounded-full bg-yellow px-6 py-3 text-[15px] font-bold text-night sm:inline-block"
          >
            Daftar
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-stage lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Menu utama" className="min-h-0 px-4 sm:px-8">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl uppercase"
            >
              <span className="font-sans text-xs font-bold text-yellow">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            href="/tiket"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
            className="my-5 block rounded-full bg-yellow py-4 text-center font-bold text-night"
          >
            Daftar sekarang
          </Link>
        </nav>
      </div>
    </header>
  );
}
