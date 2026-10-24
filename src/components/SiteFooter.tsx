import Link from "next/link";
import { CONTACT, NAV, ORGANIZERS, whatsappUrl } from "@/lib/data";
import { IbfLogo } from "./brand";

// Styled after the deck's closing "Thank You" slide: green-to-navy gradient, centred logo and organisers.
export default function SiteFooter() {
  return (
    <footer id="tentang" className="relative overflow-hidden bg-gradient-to-b from-[#0a8f68] via-[#0b6b6f] to-[#0d3a73] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full border border-white/40" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-10 h-[200px] w-[200px] rounded-tl-full border border-white/40" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-6 px-4 pb-10 pt-20 text-center sm:px-8">
        <IbfLogo size={110} />
        <p className="font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-none">Thank You</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-display text-xl font-extrabold">
          {ORGANIZERS.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <p className="font-display text-lg font-semibold">www.brandforum.id</p>

        <nav aria-label="Menu footer" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/20 pt-8 text-[15px]">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="link-draw">
              {item.label}
            </Link>
          ))}
          <Link href="/tiket" className="link-draw">Daftar</Link>
        </nav>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <a href={whatsappUrl()} className="link-draw">WhatsApp {CONTACT.whatsappLabel}</a>
          <a href={CONTACT.instagram} className="link-draw">Instagram</a>
          <a href={CONTACT.twitter} className="link-draw">X / Twitter</a>
          <a href={CONTACT.facebook} className="link-draw">Facebook</a>
        </div>
        <p className="pb-20 text-xs text-white/60 md:pb-0">© 2026 Indonesia Brand Forum</p>
      </div>
    </footer>
  );
}
