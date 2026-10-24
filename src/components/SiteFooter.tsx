import Link from "next/link";
import { CONTACT, EVENT, NAV, ORGANIZERS, whatsappUrl } from "@/lib/data";
import { IbfLogo } from "./brand";

export default function SiteFooter() {
  return (
    <footer id="tentang" className="border-t border-line bg-night">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 pb-10 pt-14 sm:px-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <IbfLogo size={64} />
            <p className="font-display text-3xl uppercase leading-none">
              National <span className="text-yellow">Champion</span>
            </p>
          </div>
          <p className="max-w-[360px] text-sm text-sage">
            {EVENT.subtitle}. {EVENT.dateShort}, {EVENT.venue}.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-yellow">Program</span>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="link-draw self-start">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-yellow">Kontak</span>
          <a href={whatsappUrl()} className="link-draw self-start">WhatsApp {CONTACT.whatsappLabel}</a>
          <span className="text-sage">{CONTACT.email}</span>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-yellow">Ikuti</span>
          <a href={CONTACT.instagram} className="link-draw self-start">Instagram</a>
          <a href={CONTACT.twitter} className="link-draw self-start">X / Twitter</a>
          <a href={CONTACT.facebook} className="link-draw self-start">Facebook</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-line py-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-sage">Diselenggarakan oleh</span>
          {ORGANIZERS.map((o) => (
            <span key={o} className="font-display text-xl uppercase tracking-wide">
              {o}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line py-5 pb-28 text-[13px] text-sage md:pb-6">
          <span>© 2026 Indonesia Brand Forum · brandforum.id</span>
          <a href="#" className="link-draw">Kebijakan privasi</a>
        </div>
      </div>
    </footer>
  );
}
