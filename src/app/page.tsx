import type { CSSProperties } from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import CountUp from "@/components/CountUp";
import Countdown from "@/components/Countdown";
import Spotlight from "@/components/Spotlight";
import { PetalMark } from "@/components/brand";
import {
  Arrow,
  ButtonLink,
  Container,
  Display,
  Kicker,
  MobileBuyBar,
  Photo,
  SectionHead,
  TONE,
  Ticker,
  delay,
} from "@/components/ui";
import { BOOK, CATEGORY_GROUPS, EDITIONS, EVENT, KEYNOTES, ORGANIZERS, PROGRAMS, RUNDOWN, SPEAKERS, STATS, TICKER } from "@/lib/data";

const PROGRAM_TONES = ["red", "yellow", "mint"] as const;

export default function HomePage() {
  const champions = CATEGORY_GROUPS.find((g) => g.key === "champion")!;
  const panelists = SPEAKERS.filter((s) => s.slot.startsWith("Session"));

  return (
    <>
      {/* Hero */}
      <Spotlight>
        <PetalMark className="spin-slow pointer-events-none absolute -right-[12vw] -top-[8vw] w-[48vw] max-w-[640px] opacity-[0.16]" />
        <Container className="relative flex min-h-[calc(100svh-73px)] flex-col justify-end gap-10 pb-14 pt-16">
          <Kicker>Indonesia Brand Forum 2026 · Sejak 2013</Kicker>
          <h1 className="font-display font-normal uppercase leading-[0.84] tracking-tight">
            <span className="rise-line text-[clamp(72px,15.5vw,236px)]">
              <span style={{ "--i": 0 } as CSSProperties}>National</span>
            </span>
            <span className="rise-line text-[clamp(72px,15.5vw,236px)] text-yellow">
              <span style={{ "--i": 1 } as CSSProperties}>Champion</span>
            </span>
          </h1>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div data-reveal className="flex flex-col gap-5">
              <p className="max-w-[640px] text-[clamp(20px,2vw,28px)] font-semibold leading-snug">{EVENT.subtitle}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
                {EVENT.date} · {EVENT.venue}, {EVENT.city}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/tiket">
                  Daftar sekarang <Arrow />
                </ButtonLink>
                <ButtonLink href="/konferensi" variant="ghost">
                  Lihat line-up
                </ButtonLink>
              </div>
            </div>
            <div data-reveal style={delay(200)}>
              <Countdown startsAt={EVENT.startsAt} />
            </div>
          </div>
          <p data-reveal style={delay(300)} className="flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-5 text-sm text-sage">
            <span className="font-semibold uppercase tracking-[0.2em]">Diselenggarakan oleh</span>
            {ORGANIZERS.map((o) => (
              <span key={o} className="font-semibold text-cream">
                {o}
              </span>
            ))}
          </p>
        </Container>
      </Spotlight>

      <Ticker items={TICKER} label="IBF 2026 dalam angka" />

      {/* Programs */}
      <Container className="py-28">
        <SectionHead kicker="The Programs" title={<>Tiga program,<br />satu panggung</>} />
        <div className="grid gap-5 md:grid-cols-3">
          {PROGRAMS.map((p, i) => {
            const tone = TONE[PROGRAM_TONES[i]];
            return (
              <Link
                key={p.n}
                href={p.href}
                data-reveal
                style={delay(i * 120)}
                className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-deep p-8 transition-transform duration-500 ease-stage hover:-translate-y-2"
              >
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 origin-left scale-x-[0.25] ${tone.bg} transition-transform duration-700 ease-stage group-hover:scale-x-100`} />
                <span className={`font-display text-7xl leading-none ${tone.text}`}>{p.n}</span>
                <div>
                  <h3 className="mb-3 font-display text-5xl uppercase leading-none">{p.name}</h3>
                  <p className="text-[15px] text-sage">{p.text}</p>
                  <p className="mt-5 font-semibold">
                    <span className="link-draw">Selengkapnya</span> <Arrow />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>

      {/* Keynote + speakers */}
      <section className="border-t border-line">
        <Container className="py-28">
          <SectionHead
            kicker="The Line-up"
            title={<>Di atas<br />panggung</>}
            action={
              <Link href="/konferensi" className="group font-semibold">
                <span className="link-draw">Run-down lengkap</span> <Arrow />
              </Link>
            }
          />
          <div className="mb-5 grid gap-5 md:grid-cols-2">
            {KEYNOTES.map((k, i) => (
              <article key={k.name} data-reveal style={delay(i * 120)} className="group grid grid-cols-[120px_1fr] gap-6 rounded-3xl bg-forest p-6 sm:grid-cols-[160px_1fr]">
                <Photo label="Foto" className="aspect-[3/4] rounded-2xl" />
                <div className="flex flex-col justify-end">
                  <Kicker className="mb-3">Keynote Speech</Kicker>
                  <h3 className="font-display text-[clamp(28px,3vw,40px)] uppercase leading-[0.95]">{k.name}</h3>
                  <p className="mt-2 text-sage">{k.role}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {panelists.map((sp, i) => (
              <li key={sp.name} data-reveal style={delay((i % 5) * 80)} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-deep p-5">
                <Photo label="Foto potret" className="absolute inset-0" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <span className="absolute left-5 top-4 font-display text-xl text-yellow">{String(i + 1).padStart(2, "0")}</span>
                <div className="relative transition-transform duration-500 ease-stage group-hover:-translate-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-mint">{sp.slot}</span>
                  <h3 className="font-display text-[26px] uppercase leading-none">{sp.name}</h3>
                  <p className="mt-1 text-[13px] text-sage">{sp.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Run-down */}
      <section className="motif border-t border-line bg-forest">
        <Container className="py-28">
          <SectionHead kicker={EVENT.date} title="Run-down" />
          <ol className="border-t border-line">
            {RUNDOWN.map((s, i) => (
              <li key={s.title} data-reveal style={delay(i * 60)} className="group grid gap-x-10 gap-y-1 border-b border-line py-7 md:grid-cols-[260px_1fr_auto] md:items-baseline">
                <span className="font-display text-[clamp(32px,3.6vw,52px)] leading-none text-yellow">{s.time}</span>
                <div className="transition-transform duration-500 ease-stage group-hover:translate-x-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-mint">{s.kind}</span>
                  <p className="text-[clamp(22px,2.2vw,30px)] font-semibold leading-tight">{s.title}</p>
                  {s.subtitle && <p className="text-sage">{s.subtitle}</p>}
                </div>
                {s.speakers && <span className="text-sm text-sage">{s.speakers.length} pembicara</span>}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Winners preview */}
      <Container className="py-28">
        <SectionHead
          kicker="The Winner · National Champion Brand Award 2026"
          title={<>Para <span className="text-red">National</span><br />Champions</>}
          action={
            <Link href="/awarding#pemenang" className="group font-semibold">
              <span className="link-draw">Semua 16 kategori</span> <Arrow />
            </Link>
          }
        />
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {champions.items.map((c, i) => (
            <li key={c.name} data-reveal style={delay((i % 4) * 80)} className="group flex min-h-[200px] flex-col justify-between gap-6 bg-night p-6 transition-colors duration-500 hover:bg-deep">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red">{c.name}</span>
              <div className="flex flex-col gap-1">
                {c.winners.map((w) => (
                  <span key={w} className="font-display text-[32px] uppercase leading-none transition-colors group-hover:text-yellow">
                    {w}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Container>

      {/* Numbers */}
      <section className="border-y border-line">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} data-reveal style={delay(i * 90)} className="border-line py-12 pr-6 lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0">
                <dd className="font-display text-[clamp(64px,7vw,104px)] leading-none text-yellow">
                  <CountUp value={s.value} />
                </dd>
                <dt className="mt-2 text-sage">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Book */}
      <Container className="grid items-center gap-16 py-28 lg:grid-cols-[1fr_1.2fr]">
        <Link href="/buku" data-reveal="scale" className="group mx-auto w-full max-w-[380px]" aria-label="Tentang buku National Champion">
          <BookCover />
        </Link>
        <div className="flex flex-col gap-6">
          <Kicker>The Book · Diluncurkan di IBF 2026</Kicker>
          <Display className="text-[clamp(52px,6.5vw,96px)]">
            Buku<br />
            <span className="text-yellow">National Champion</span>
          </Display>
          <p data-reveal className="max-w-[560px] text-lg text-sage">{BOOK.background[2]}</p>
          <p data-reveal className="text-sm uppercase tracking-[0.14em]">{BOOK.authors.join(" · ")}</p>
          <div data-reveal>
            <ButtonLink href="/buku" variant="ghost">
              Tentang buku <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* History */}
      <section className="border-t border-line">
        <Container className="py-28">
          <SectionHead
            kicker="IBF at a glance"
            title={<>Sejak<br /><span className="text-yellow">2013</span></>}
            action={
              <Link href="/arsip" className="group font-semibold">
                <span className="link-draw">Semua edisi</span> <Arrow />
              </Link>
            }
          />
          <ol className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:px-8">
            {EDITIONS.map((e, i) => (
              <li key={e.year} data-reveal style={delay(i * 70)} className="w-[280px] shrink-0 snap-start">
                <Link href={`/arsip#ibf-${e.year}`} className="group flex h-full flex-col gap-3 rounded-3xl border border-line p-6 transition-colors duration-500 hover:border-yellow">
                  <span className="font-display text-6xl leading-none text-yellow">{e.year}</span>
                  <span className="font-display text-2xl uppercase leading-tight">{e.book}</span>
                  <span className="text-sm text-sage">{e.venue}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Closing CTA */}
      <Spotlight className="border-t border-line">
        <Container className="flex flex-wrap items-end justify-between gap-10 py-28">
          <Display className="text-[clamp(64px,10vw,150px)]">
            Sampai jumpa<br />
            <span className="text-yellow">9 Desember.</span>
          </Display>
          <div data-reveal className="flex max-w-[380px] flex-col gap-4">
            <p className="text-lg text-sage">
              {EVENT.venue}, {EVENT.city}. Kursi terbatas; e-ticket langsung dikirim ke email dan WhatsApp.
            </p>
            <ButtonLink href="/tiket" className="self-start">
              Daftar sekarang <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </Spotlight>

      <MobileBuyBar />
    </>
  );
}
