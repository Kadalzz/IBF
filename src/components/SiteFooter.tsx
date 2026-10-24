import Link from "next/link";
import { CONTACT, whatsappUrl } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer id="tentang" className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 px-4 pb-8 pt-16 sm:px-6">
        <div className="flex flex-col gap-3.5">
          <span className="text-lg font-extrabold text-white">Indonesia Brand Forum</span>
          <span className="text-sm">Diselenggarakan oleh Inventure.id</span>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="font-bold text-white">Jelajahi</span>
          <Link href="/event" className="hover:text-white">Event 2026</Link>
          <Link href="/arsip" className="hover:text-white">Arsip</Link>
          <Link href="/sponsor" className="hover:text-white">Sponsor</Link>
          <Link href="/tiket" className="hover:text-white">Tiket</Link>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="font-bold text-white">Kontak</span>
          <a href={whatsappUrl()} className="hover:text-white">WhatsApp {CONTACT.whatsappLabel}</a>
          <span>{CONTACT.email}</span>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="font-bold text-white">Ikuti kami</span>
          <a href={CONTACT.instagram} className="hover:text-white">Instagram</a>
          <a href={CONTACT.twitter} className="hover:text-white">X / Twitter</a>
          <a href={CONTACT.facebook} className="hover:text-white">Facebook</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-white/10 px-4 pb-24 pt-5 text-[13px] sm:px-6 md:pb-8">
        <span>© 2026 Indonesia Brand Forum</span>
        <a href="#" className="underline hover:text-white">Kebijakan privasi</a>
      </div>
    </footer>
  );
}
