import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { ButtonLink, Container, MobileBuyBar, Placeholder } from "@/components/ui";
import { EVENT, FAQS, SESSIONS, SPEAKERS, TIERS, formatRupiah, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Event 2026",
  description: `Agenda, pembicara, venue, dan FAQ ${EVENT.edition}.`,
};

const sections = [
  { href: "#agenda", label: "Agenda" },
  { href: "#pembicara", label: "Pembicara" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
];

const lowestPrice = Math.min(...TIERS.map((t) => t.price));

export default function EventPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="pt-16">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-300">
            <Link href="/" className="hover:underline">Beranda</Link> / Event 2026
          </nav>
          <h1 className="mb-4 max-w-[820px] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-[56px]">
            {EVENT.edition}: {EVENT.theme}
          </h1>
          <dl className="mb-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-slate-200">
            <div className="flex gap-1.5"><dt className="font-bold">Tanggal:</dt><dd>{EVENT.date}</dd></div>
            <div className="flex gap-1.5"><dt className="font-bold">Waktu:</dt><dd>{EVENT.time}</dd></div>
            <div className="flex gap-1.5"><dt className="font-bold">Lokasi:</dt><dd>{EVENT.venue}, {EVENT.city}</dd></div>
          </dl>
          <nav aria-label="Bagian halaman" className="flex flex-wrap gap-1 border-t border-white/10">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="px-4 py-4 text-[15px] font-semibold text-slate-200 hover:text-gold">
                {s.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <Container className="pb-10 pt-20">
        <section id="agenda">
          <h2 className="mb-2 text-4xl font-extrabold tracking-tight">Agenda</h2>
          <p className="mb-8 text-[17px] text-muted">
            Semua waktu dalam WIB. Agenda dapat berubah; perubahan diumumkan lewat email peserta.
          </p>
          <ol className="flex flex-col gap-4">
            {SESSIONS.map((s) => (
              <li
                key={s.kind}
                className={`flex flex-wrap gap-x-8 gap-y-4 rounded-2xl border border-line p-6 ${s.highlight ? "bg-soft" : ""}`}
              >
                <div className="w-[140px]">
                  <div className="text-xl font-extrabold text-brand">{s.time}</div>
                  <div className="text-[13px] text-muted">{s.duration}</div>
                </div>
                <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-1.5">
                  <span className="self-start rounded-full bg-chip px-2.5 py-0.5 text-xs font-bold text-brand">{s.kind}</span>
                  <h3 className="text-[21px] font-bold">{s.title}</h3>
                  <p className="text-[15px] text-muted">{s.who}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] font-bold text-brand">
            <a href="#" className="hover:underline">Tambahkan ke Google Calendar</a> ·{" "}
            <a href="#" className="hover:underline">Unduh agenda (PDF)</a>
          </p>
        </section>

        <section id="pembicara" className="pb-10 pt-20">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight">Pembicara</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {SPEAKERS.map((sp, i) => (
              <li key={i} className="flex flex-col gap-3">
                <Placeholder label="Foto pembicara" className="aspect-square" />
                <div>
                  <h3 className="text-lg font-bold">{sp.name}</h3>
                  <p className="mb-1.5 mt-0.5 text-sm text-muted">{sp.role}</p>
                  <span className="text-[13px] font-semibold text-brand">{sp.session}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <section id="venue" className="bg-soft">
        <Container className="flex flex-wrap gap-10 py-20">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
            <h2 className="text-4xl font-extrabold tracking-tight">Venue</h2>
            <div>
              <h3 className="mb-1 text-xl font-bold">{EVENT.venue}</h3>
              <p className="text-base text-muted">{EVENT.address}</p>
            </div>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] text-slate-700">
              <li>Transportasi umum: [halte / stasiun terdekat]</li>
              <li>Parkir: [informasi parkir]</li>
              <li>Registrasi ulang: tunjukkan QR e-ticket di meja registrasi</li>
            </ul>
            <ButtonLink href="#" variant="outline" className="self-start">Buka di Google Maps</ButtonLink>
          </div>
          <Placeholder label="Peta Google Maps tersemat" className="min-h-[340px] min-w-0 flex-[1.4_1_420px] rounded-[20px] !bg-[#dce3ef]" />
        </Container>
      </section>

      <section id="faq" className="mx-auto max-w-[860px] px-4 pb-32 pt-20 sm:px-6">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight">Pertanyaan yang sering diajukan</h2>
        <Faq items={FAQS} />
        <p className="mt-7 text-base text-muted">
          Masih ada pertanyaan?{" "}
          <a href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")} className="font-bold text-brand hover:underline">
            Chat tim IBF di WhatsApp
          </a>
        </p>
      </section>

      <div className="sticky bottom-0 z-20 hidden border-t border-line bg-white md:block">
        <Container className="flex items-center justify-between gap-4 py-3.5">
          <div>
            <strong>{EVENT.edition} · {EVENT.date}</strong>
            <span className="text-muted"> · Tiket mulai {formatRupiah(lowestPrice)}</span>
          </div>
          <ButtonLink href="/tiket">Beli Tiket</ButtonLink>
        </Container>
      </div>
      <MobileBuyBar />
    </>
  );
}
