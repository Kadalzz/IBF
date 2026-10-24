import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import Spotlight from "@/components/Spotlight";
import { Arrow, ButtonLink, Container, Display, Kicker, MobileBuyBar, Photo, SectionHead, delay } from "@/components/ui";
import { EVENT, FAQS, RUNDOWN, TIERS, formatRupiah, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Konferensi",
  description: `Line-up dan run-down ${EVENT.edition}: keynote, peluncuran buku, awarding, dan dua sesi konferensi. ${EVENT.dateShort}, ${EVENT.venue}.`,
};

const lowestPrice = Math.min(...TIERS.map((t) => t.price));

export default function KonferensiPage() {
  return (
    <>
      <Spotlight>
        <Container className="pb-20 pt-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-sage">
            <Link href="/" className="link-draw">Beranda</Link> / Konferensi
          </nav>
          <Kicker className="mb-5">The Conference · {EVENT.edition}</Kicker>
          <Display as="h1" className="text-[clamp(64px,11vw,170px)]">
            The <span className="text-yellow">line-up</span>
          </Display>
          <p data-reveal className="mt-6 max-w-[760px] text-[clamp(20px,2vw,28px)] font-semibold leading-snug">
            {EVENT.title}: {EVENT.subtitle}
          </p>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {[
              ["Tanggal", EVENT.date],
              ["Waktu", EVENT.time],
              ["Tempat", `${EVENT.venue}, ${EVENT.city}`],
            ].map(([label, value], i) => (
              <div key={label} data-reveal style={delay(i * 80)} className="bg-forest p-6">
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow">{label}</dt>
                <dd className="mt-1 text-lg font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Spotlight>

      <Container id="rundown" className="py-24">
        <SectionHead kicker={EVENT.date} title="Run-down" />
        <ol className="flex flex-col gap-5">
          {RUNDOWN.map((s, i) => (
            <li key={s.title} data-reveal style={delay(i * 50)} className="overflow-hidden rounded-3xl border border-line">
              <div className="grid gap-x-10 gap-y-2 p-6 sm:p-8 md:grid-cols-[260px_1fr] md:items-baseline">
                <div>
                  <span className="font-display text-[clamp(36px,4vw,56px)] leading-none text-yellow">{s.time}</span>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-mint">{s.kind}</p>
                </div>
                <div>
                  <h3 className="font-display text-[clamp(32px,3.6vw,52px)] uppercase leading-[0.95]">{s.title}</h3>
                  {s.subtitle && <p className="mt-2 text-lg text-sage">{s.subtitle}</p>}
                </div>
              </div>
              {s.speakers && (
                <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
                  {s.speakers.map((p) => (
                    <li key={p.name} className="group flex items-center gap-4 bg-night p-5 transition-colors duration-500 hover:bg-deep lg:flex-col lg:items-start">
                      <Photo label="Foto" className="aspect-square w-16 shrink-0 rounded-full lg:w-20" />
                      <div>
                        <p className="font-semibold leading-tight transition-colors group-hover:text-yellow">{p.name}</p>
                        <p className="text-sm text-sage">{p.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-8 flex flex-wrap gap-6 font-semibold">
          <a href="#" className="group"><span className="link-draw">Tambahkan ke Google Calendar</span> <Arrow /></a>
          <a href="#" className="group"><span className="link-draw">Unduh run-down (PDF)</span> <Arrow /></a>
        </p>
      </Container>

      <section id="venue" className="motif border-y border-line bg-forest">
        <Container className="grid gap-10 py-24 lg:grid-cols-[2fr_3fr]">
          <div data-reveal className="flex flex-col gap-5">
            <Kicker>Venue</Kicker>
            <Display className="text-[clamp(52px,6vw,88px)]">{EVENT.venue}</Display>
            <p className="text-lg text-sage">{EVENT.address}</p>
            <ul className="border-t border-line">
              <li className="border-b border-line py-3">Transportasi umum: [halte / stasiun terdekat]</li>
              <li className="border-b border-line py-3">Parkir: [informasi parkir]</li>
              <li className="border-b border-line py-3">Registrasi ulang: tunjukkan QR e-ticket di meja registrasi</li>
            </ul>
            <ButtonLink href="#" variant="ghost" className="self-start">
              Buka di Google Maps <Arrow />
            </ButtonLink>
          </div>
          <div data-reveal style={delay(150)} className="group">
            <Photo label="Peta Google Maps tersemat" className="h-full min-h-[360px] rounded-3xl" />
          </div>
        </Container>
      </section>

      <section id="faq" className="mx-auto max-w-[960px] px-4 pb-32 pt-24 sm:px-8">
        <Display className="mb-10 text-[clamp(52px,6vw,88px)]">
          Pertanyaan<br />
          <span className="text-yellow">umum</span>
        </Display>
        <Faq items={FAQS} />
        <p className="mt-8 text-lg text-sage">
          Masih ada pertanyaan?{" "}
          <a href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")} className="group font-semibold text-cream">
            <span className="link-draw">Chat tim IBF di WhatsApp</span> <Arrow />
          </a>
        </p>
      </section>

      <div className="sticky bottom-0 z-20 hidden border-t border-line bg-night/90 backdrop-blur md:block">
        <Container className="flex items-center justify-between gap-4 py-3">
          <p>
            <span className="font-display text-2xl uppercase">{EVENT.title}</span>
            <span className="text-sage"> · {EVENT.dateShort} · Tiket mulai {formatRupiah(lowestPrice)}</span>
          </p>
          <ButtonLink href="/tiket" className="!py-3">
            Daftar <Arrow />
          </ButtonLink>
        </Container>
      </div>
      <MobileBuyBar />
    </>
  );
}
