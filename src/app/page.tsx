import Link from "next/link";
import Countdown from "@/components/Countdown";
import NewsletterForm from "@/components/NewsletterForm";
import { CalendarIcon, PinIcon } from "@/components/icons";
import {
  ButtonLink,
  Container,
  Eyebrow,
  MobileBuyBar,
  Placeholder,
  SectionTitle,
  SponsorGrid,
} from "@/components/ui";
import {
  ARTICLES,
  EDITIONS,
  EVENT,
  SESSIONS,
  SPEAKERS,
  SPONSORS_2024,
  STATS,
  TIERS,
  formatRupiah,
} from "@/lib/data";

const coreSessions = SESSIONS.filter((s) => s.kind.startsWith("Sesi"));

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="flex flex-wrap items-center gap-14 pb-24 pt-16 sm:pt-22">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <span className="self-start rounded-full border border-white/30 px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-gold">
              INDONESIA BRAND FORUM 2026
            </span>
            <h1 className="text-[40px] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[68px]">
              {EVENT.theme}
            </h1>
            <p className="max-w-[560px] text-lg text-slate-300 sm:text-[19px]">{EVENT.tagline}</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-base">
              <span className="flex items-center gap-2.5">
                <CalendarIcon />
                <strong>{EVENT.date}</strong>
              </span>
              <span className="flex items-center gap-2.5">
                <PinIcon />
                <strong>
                  {EVENT.venue}, {EVENT.city}
                </strong>
              </span>
            </div>
            <div className="mt-1 flex flex-wrap gap-3">
              <ButtonLink href="/tiket" variant="gold">Beli Tiket</ButtonLink>
              <ButtonLink href="/event" variant="ghostLight">Lihat Agenda</ButtonLink>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
            <Placeholder dark label="Foto panggung IBF / video teaser 15 detik" className="aspect-[4/3] rounded-[20px] border border-white/10" />
            <Countdown startsAt={EVENT.startsAt} />
          </div>
        </Container>
      </section>

      <section aria-label="IBF dalam angka" className="border-b border-line">
        <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-brand sm:text-[40px]">{s.value}</div>
              <div className="text-[15px] text-muted">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <Container className="pb-12 pt-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>PEMBICARA</Eyebrow>
            <SectionTitle>Belajar langsung dari pemimpin brand</SectionTitle>
          </div>
          <Link href="/event#pembicara" className="font-bold text-brand hover:underline">
            Semua pembicara →
          </Link>
        </div>
        <ul className="flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:gap-6 sm:overflow-visible">
          {SPEAKERS.slice(0, 4).map((sp, i) => (
            <li key={i} className="flex w-[160px] shrink-0 snap-start flex-col gap-3.5 sm:w-auto">
              <Placeholder label="Foto pembicara" className="aspect-[4/5]" />
              <div>
                <h3 className="text-[19px] font-bold">{sp.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{sp.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="flex flex-wrap gap-12 pb-24 pt-12">
        <div className="min-w-0 flex-[1_1_320px]">
          <Eyebrow>AGENDA</Eyebrow>
          <SectionTitle className="mb-4">Satu hari, tiga sesi inti</SectionTitle>
          <p className="mb-6 text-[17px] text-muted">
            Setiap sesi ditutup dengan tanya jawab dan networking. Agenda lengkap beserta pembicara per sesi ada di
            halaman Event.
          </p>
          <ButtonLink href="/event#agenda" variant="outline">Agenda lengkap</ButtonLink>
        </div>
        <ol className="min-w-0 flex-[2_1_560px] border-t border-line">
          {coreSessions.map((s) => (
            <li key={s.kind} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-5">
              <span className="w-[120px] font-bold text-brand">{s.time}</span>
              <div className="flex-[1_1_300px]">
                <div className="text-[19px] font-bold">
                  {s.kind}: {s.title}
                </div>
                <div className="text-[15px] text-muted">{s.who}</div>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <section id="tiket" className="bg-soft">
        <Container className="py-24">
          <div className="mb-12 text-center">
            <Eyebrow>TIKET</Eyebrow>
            <SectionTitle className="mb-3">Pilih tiket Anda</SectionTitle>
            <p className="text-[17px] text-muted">
              Bayar dengan QRIS, virtual account, e-wallet, atau kartu. E-ticket langsung dikirim ke email dan WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {TIERS.map((t) => (
              <div
                key={t.id}
                className={`relative flex flex-col gap-5 rounded-[20px] p-8 ${
                  t.featured ? "bg-navy text-white" : "border border-line bg-white"
                }`}
              >
                {t.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-ink">
                    {t.badge}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <p className={`mt-1 text-sm ${t.featured ? "text-slate-300" : "text-muted"}`}>{t.note}</p>
                </div>
                <div className="text-4xl font-extrabold">{formatRupiah(t.price)}</div>
                <ul className={`flex flex-1 list-disc flex-col gap-2 pl-5 text-[15px] ${t.featured ? "text-slate-200" : "text-slate-700"}`}>
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <ButtonLink href={`/tiket?tier=${t.id}`} variant={t.featured ? "gold" : "outline"}>
                  Pilih {t.name}
                </ButtonLink>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">Harga di prototype ini hanya contoh.</p>
        </Container>
      </section>

      <Container className="py-22">
        <p className="mb-7 text-center text-sm font-bold tracking-wider text-muted">DIDUKUNG OLEH PARTNER IBF 2024</p>
        <SponsorGrid names={SPONSORS_2024} />
        <p className="mt-6 text-center">
          <Link href="/sponsor" className="font-bold text-brand hover:underline">
            Jadi sponsor IBF 2026 →
          </Link>
        </p>
      </Container>

      <section className="bg-navy text-white">
        <Container className="py-24">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow light>ARSIP</Eyebrow>
              <SectionTitle>Satu dekade Indonesia Brand Forum</SectionTitle>
            </div>
            <Link href="/arsip" className="font-bold hover:underline">
              Lihat semua edisi →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {EDITIONS.slice(0, 3).map((e) => (
              <Link
                key={e.year}
                href={`/arsip?edisi=${e.year}`}
                className="flex flex-col gap-3 rounded-[20px] border border-white/10 bg-white/5 p-7 hover:bg-white/10"
              >
                <span className="text-sm font-bold text-gold">IBF {e.year}</span>
                <span className="text-[22px] font-bold leading-tight">{e.theme}</span>
                <span className="text-[15px] text-slate-300">Agenda, pembicara, e-book, dan liputan media</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="insight">
        <Container className="py-24">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>INSIGHT</Eyebrow>
              <SectionTitle>Pelajaran dari panggung IBF</SectionTitle>
            </div>
            <a href="#" className="font-bold text-brand hover:underline">
              Semua artikel →
            </a>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {ARTICLES.map((a) => (
              <article key={a.category} className="flex flex-col gap-3.5">
                <Placeholder label="Gambar artikel" className="aspect-[16/10]" />
                <span className="text-[13px] font-bold text-brand">{a.category}</span>
                <h3 className="text-[21px] font-bold leading-snug">{a.title}</h3>
                <span className="text-sm text-muted">[Tanggal] · 5 menit baca</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="mb-24">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl bg-gold p-8 sm:p-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <h2 className="mb-2 text-[32px] font-extrabold leading-tight text-ink">Jangan lewatkan IBF berikutnya</h2>
            <p className="text-base text-slate-800">Info early-bird, pembicara baru, dan insight brand, sebulan sekali.</p>
          </div>
          <NewsletterForm />
        </div>
      </Container>

      <MobileBuyBar />
    </>
  );
}
