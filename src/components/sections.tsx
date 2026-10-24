// One component per slide of the IBF 2026 "National Champion" deck, in deck order.
// Pages compose these; the home page shows them all.
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import BookCover from "./BookCover";
import Countdown from "./Countdown";
import { IbfLogo, PetalMark } from "./brand";
import { Arrow, ButtonLink, Container, GreenSlide, PaperSlide, Photo, SlideTitle, TONE, delay, type Tone } from "./ui";
import {
  AWARD_BACKGROUND,
  BOOK,
  CATEGORY_GROUPS,
  CRITERIA,
  CRITERIA_INTRO,
  EDITIONS,
  EVENT,
  GLANCE_PHOTOS,
  IBF_ABOUT,
  JUDGES,
  OPENING,
  PROGRAMS,
  QUADRANTS,
  SESSIONS,
  type Quadrant,
} from "@/lib/data";

// ---------------------------------------------------------------- Cover

export function Cover() {
  return (
    <GreenSlide id="cover">
      {/* Geometric quarter circles from the cover's left edge. */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 hidden w-[200px] flex-col opacity-90 md:flex">
        <span className="ml-[100px] h-[100px] w-[100px] rounded-tl-full border border-white/50" />
        <span className="h-[100px] w-[100px] rounded-tr-full border border-white/50" />
        <span className="ml-[100px] h-[100px] w-[100px] rounded-tl-full bg-white/90" />
      </div>
      <PetalMark className="spin-slow pointer-events-none absolute -right-24 -top-24 w-[380px] opacity-[0.08]" />

      <Container className="relative flex min-h-[calc(100svh-72px)] flex-col pb-14 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-white sm:justify-between">
          <span className="hidden font-display text-lg font-extrabold leading-none sm:block">
            iNews
            <span className="block text-[11px] tracking-wide">MEDIA GROUP</span>
          </span>
          <IbfLogo size={88} />
          <span className="hidden flex-wrap items-center gap-x-5 gap-y-1 font-display text-lg font-extrabold sm:flex">
            <span>iNews</span>
            <span>SINDONEWS TV</span>
            <span>invent.ure</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <h1 className="leading-[0.95]">
            <span className="rise-line font-serif text-[clamp(64px,13vw,184px)] font-bold">
              <span style={{ "--i": 0 } as CSSProperties}>
                Nati
                <PetalMark className="mx-[0.02em] inline-block h-[0.72em] w-[0.72em] align-[-0.02em]" />
                nal
              </span>
            </span>
            <span className="rise-line font-display text-[clamp(48px,10.5vw,150px)] font-extrabold uppercase tracking-[0.06em] text-yellow">
              <span style={{ "--i": 1 } as CSSProperties}>Champion</span>
            </span>
          </h1>
          <p data-reveal className="mt-4 text-[clamp(18px,2.3vw,32px)]">
            {EVENT.subtitle}
          </p>
          <p data-reveal style={delay(120)} className="mt-6 rounded-full border-2 border-white px-8 py-1.5 text-[clamp(18px,2vw,26px)] font-bold">
            {EVENT.dateShort}
          </p>
          <p data-reveal style={delay(180)} className="mt-4 text-[clamp(18px,2vw,26px)] font-bold">
            {EVENT.venue}
          </p>
        </div>

        <div data-reveal style={delay(260)} className="grid items-end gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-[520px]">
            <Countdown startsAt={EVENT.startsAt} />
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/tiket">
              Daftar sekarang <Arrow />
            </ButtonLink>
            <ButtonLink href="#line-up" variant="ghost">
              Lihat line-up
            </ButtonLink>
          </div>
        </div>
      </Container>
    </GreenSlide>
  );
}

// ---------------------------------------------------------------- IBF at glance

export function GlancePhotos() {
  return (
    <PaperSlide id="glance">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        <ul className="grid grid-cols-2 gap-3">
          {GLANCE_PHOTOS.map((p, i) => (
            <li key={p.year} data-reveal style={delay(i * 70)} className="group relative aspect-[16/10] overflow-hidden">
              <Photo label={`Foto IBF ${p.year}`} className="h-full w-full" />
              <span className="absolute inset-x-0 bottom-[8%] bg-gold/90 py-1.5 text-center text-[clamp(11px,1.3vw,15px)] font-bold text-white">
                {p.venue}, {p.year}
              </span>
            </li>
          ))}
        </ul>
        <div>
          <h2 data-reveal="left" className="mb-6 font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase leading-none tracking-tight">
            IBF at glance
          </h2>
          <div data-reveal style={delay(120)} className="flex flex-col gap-5 rounded-tl-[64px] bg-mint-soft p-8 font-serif text-[17px] leading-relaxed text-body sm:p-10">
            {IBF_ABOUT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </PaperSlide>
  );
}

// Stand-in covers in each book's colours until the real cover images are supplied.
const COVERS: Record<string, { bg: string; ink: string; accent: string }> = {
  "2013": { bg: "#ffffff", ink: "#d62b1f", accent: "#1d1d1b" },
  "2015": { bg: "#ffffff", ink: "#d62b1f", accent: "#f39200" },
  "2016": { bg: "#151515", ink: "#c9a64b", accent: "#c9a64b" },
  "2021": { bg: "#1f8fd6", ink: "#ffe600", accent: "#ffffff" },
  "2022": { bg: "#1b4f8c", ink: "#ffd21f", accent: "#ffffff" },
  "2024": { bg: "#36a6b5", ink: "#fff35c", accent: "#ffffff" },
};

function MiniCover({ year, book }: { year: string; book: string }) {
  const c = COVERS[year];
  return (
    <div
      className="flex aspect-[2/3] w-full flex-col justify-between p-2.5 shadow-[4px_6px_0_rgb(0_0_0/0.15)] transition-transform duration-500 ease-stage group-hover:-translate-y-1 group-hover:-rotate-2"
      style={{ background: c.bg }}
    >
      <IbfLogo size={22} year={year} />
      <span className="font-cond text-[clamp(14px,1.6vw,20px)] font-bold uppercase leading-[0.95]" style={{ color: c.ink }}>
        {book}
      </span>
      <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: c.accent }}>
        Yuswohady
      </span>
    </div>
  );
}

export function GlanceBooks() {
  return (
    <PaperSlide id="glance-books">
      <h2 data-reveal="left" className="mb-12 font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase leading-none tracking-tight">
        IBF at glance
      </h2>
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {EDITIONS.map((e, i) => (
          <li key={e.year} id={`ibf-${e.year}`} data-reveal style={delay((i % 3) * 100)} className="group grid scroll-mt-24 grid-cols-[120px_1fr] gap-5">
            <MiniCover year={e.year} book={e.book} />
            <div className="flex flex-col gap-2">
              <IbfLogo size={58} year={e.year} />
              <h3 className="font-cond text-[22px] font-bold leading-tight">{e.title}</h3>
              {e.quote && <p className="font-serif text-sm text-body">{e.quote}</p>}
              {e.text && <p className="font-serif text-sm text-body">{e.text}</p>}
            </div>
          </li>
        ))}
      </ul>
    </PaperSlide>
  );
}

// ---------------------------------------------------------------- Programs

function ProgramVisual({ i }: { i: number }) {
  if (i === 0) return <Photo label="Trofi National Champion Brand Award" className="h-full w-[150px] rounded-xl" />;
  if (i === 1) return <IbfLogo size={190} />;
  return (
    <div className="w-[160px]">
      <BookCover />
    </div>
  );
}

export function Programs() {
  return (
    <PaperSlide id="programs">
      <SlideTitle word="Programs" className="mb-12" />
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {PROGRAMS.map((p, i) => {
          const tone = TONE[p.tone];
          return (
            <Link key={p.n} href={p.href} data-reveal style={delay(i * 140)} className="group flex flex-col items-center gap-6 text-center">
              <span className={`relative flex h-14 w-full max-w-[340px] items-center justify-center rounded-r-2xl rounded-l-full ${tone.bg} pl-12 shadow-[0_6px_14px_rgb(0_0_0/0.15)]`}>
                <span className={`absolute -left-1 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#f7f7f7] font-display text-4xl font-extrabold shadow-[0_4px_12px_rgb(0_0_0/0.18)] ${tone.text}`}>
                  {p.n}
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-wide text-white">{p.name}</span>
              </span>
              <div className="flex h-[260px] items-center justify-center transition-transform duration-500 ease-stage group-hover:-translate-y-2">
                <ProgramVisual i={i} />
              </div>
              <p className="max-w-[330px] font-serif text-[17px] leading-relaxed text-body">{p.text}</p>
              <span className="text-sm font-bold text-forest">
                <span className="link-draw">Selengkapnya</span> <Arrow />
              </span>
            </Link>
          );
        })}
      </div>
    </PaperSlide>
  );
}

// ---------------------------------------------------------------- Awarding

export function AwardingIntro() {
  return (
    <PaperSlide id="the-awarding" className="!bg-white">
      <SlideTitle word="Awarding" className="mb-10" />
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.8fr]">
        <div data-reveal="scale" className="group mx-auto w-full max-w-[300px]">
          <Photo label="Trofi National Champion Brand Award" className="aspect-[3/5] rounded-2xl" />
        </div>
        <div className="flex flex-col gap-5 font-serif text-[17px] leading-relaxed text-body">
          {AWARD_BACKGROUND.map((p, i) => (
            <p key={i} data-reveal style={delay(i * 100)}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </PaperSlide>
  );
}

const QUADRANT_PILL: Record<Quadrant["tone"], string> = {
  mint: "bg-[#1f9b6c]",
  coral: "bg-[#a91d22]",
  sun: "bg-[#b8901a]",
  white: "bg-[#a3a3a3]",
};

function QuadrantBox({ q, i }: { q: Quadrant; i: number }) {
  const tone = TONE[q.tone as Tone];
  return (
    <div
      data-reveal="scale"
      style={delay(i * 110)}
      className={`flex min-h-[170px] flex-col gap-3 rounded-[28px] p-4 sm:p-5 ${tone.bg} ${tone.ink} ${q.tone === "white" ? "border border-ink/15" : ""}`}
    >
      <span className={`self-center rounded-md px-4 py-1 font-cond text-base font-bold text-white ${QUADRANT_PILL[q.tone]}`}>{q.name}</span>
      <ul className="flex flex-col gap-2">
        {q.tips.map((t) => (
          <li key={t.n} className="flex gap-2 text-[13px] font-medium leading-snug sm:text-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">#{t.n}</span>
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Criteria() {
  return (
    <PaperSlide id="criteria">
      <SlideTitle word="Criteria" className="mb-4" />
      <p data-reveal className="mb-12 max-w-[980px] font-serif text-lg text-body">
        {CRITERIA_INTRO} <strong className="text-ink">Smart Flanker, Local Challenger, dan National Champion.</strong>
      </p>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <figure>
          <figcaption className="mb-4 text-center font-display text-2xl font-extrabold">Beat the Giant 2.0</figcaption>
          <div className="grid grid-cols-[34px_1fr] gap-2">
            <div className="flex flex-col items-center justify-between py-6 text-xs font-bold">
              <span className="-rotate-90">High</span>
              <span className="-rotate-90 whitespace-nowrap font-display text-[13px]">Ownership of Local Advantages</span>
              <span className="-rotate-90">Low</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <QuadrantBox q={QUADRANTS.topLeft} i={0} />
              <QuadrantBox q={QUADRANTS.topRight} i={1} />
              <QuadrantBox q={QUADRANTS.bottomLeft} i={2} />
              <QuadrantBox q={QUADRANTS.bottomRight} i={3} />
            </div>
          </div>
          <div className="ml-[42px] mt-2 grid grid-cols-2 text-center text-xs font-bold">
            <span>Low</span>
            <span>High</span>
          </div>
          <p className="ml-[42px] mt-2 text-center font-display text-sm font-bold">
            Capability to Catch-up Global Frontier
            <span className="block font-sans text-xs font-normal">(Financial, Technology, Management, etc.)</span>
          </p>
        </figure>
        <div className="flex flex-col gap-4">
          {CRITERIA.map((c, i) => {
            const tone = TONE[c.tone];
            return (
              <div key={c.name} data-reveal style={delay(i * 120)} className={`rounded-2xl p-6 shadow-[0_6px_16px_rgb(0_0_0/0.12)] ${tone.bg} ${tone.ink}`}>
                <h3 className="mb-1 font-cond text-3xl font-bold leading-none">{c.name}</h3>
                <p className="text-[15px] leading-snug">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PaperSlide>
  );
}

function TableShell({ head, children }: { head: ReactNode; children: ReactNode }) {
  return (
    <div data-reveal className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgb(0_0_0/0.12)]">
      {head}
      {children}
    </div>
  );
}

// Numbering runs on across the three groups (01–16).
const CATEGORY_OFFSETS = CATEGORY_GROUPS.map((_, gi) => CATEGORY_GROUPS.slice(0, gi).reduce((sum, g) => sum + g.items.length, 0));

export function Categories() {
  return (
    <PaperSlide id="category">
      <SlideTitle word="Category" className="mb-10" />
      <div className="flex flex-col gap-12">
        {CATEGORY_GROUPS.map((g, gi) => (
          <div key={g.key}>
            <h3 data-reveal className="mb-4 font-display text-[clamp(22px,2.6vw,32px)] font-extrabold text-forest">
              {g.letter}. {g.name}
            </h3>
            <TableShell
              head={
                <div className="hidden grid-cols-[72px_280px_1fr] font-cond text-2xl font-bold text-white md:grid">
                  <span className="bg-navy px-4 py-3 text-center">No</span>
                  <span className="bg-teal px-5 py-3">Category</span>
                  <span className="bg-leaf px-5 py-3">Definition</span>
                </div>
              }
            >
              {g.items.map((c, i) => {
                const n = CATEGORY_OFFSETS[gi] + i + 1;
                return (
                  <div key={c.name} className={`grid gap-x-0 gap-y-1 border-t border-ink/10 px-5 py-4 md:grid-cols-[72px_280px_1fr] md:items-center md:px-0 md:py-3.5 ${i % 2 ? "bg-[#f7f7f7]" : ""}`}>
                    <span className="font-bold md:text-center">{String(n).padStart(2, "0")}</span>
                    <span className="font-bold md:px-5">{c.name}</span>
                    <span className="text-sm leading-snug text-body md:px-5">{c.definition}</span>
                  </div>
                );
              })}
            </TableShell>
          </div>
        ))}
      </div>
    </PaperSlide>
  );
}

export function Winners() {
  return (
    <PaperSlide id="winner">
      <SlideTitle word="Winner" className="mb-10" />
      <TableShell
        head={
          <div className="grid grid-cols-2 font-cond text-2xl font-bold text-white">
            <span className="bg-navy px-5 py-3 text-center">Category</span>
            <span className="bg-teal px-5 py-3 text-center">Winner</span>
          </div>
        }
      >
        {CATEGORY_GROUPS.map((g) => (
          <div key={g.key} className="grid border-t border-ink/10 md:grid-cols-[200px_1fr]">
            <span className="flex items-center justify-center bg-leaf px-4 py-4 text-center font-cond text-3xl font-bold uppercase leading-none text-white">
              {g.name === "National Champion" ? "National Champions" : g.name}
            </span>
            <div>
              {g.items.map((c, i) => (
                <div key={c.name} className={`group grid grid-cols-1 items-center gap-2 border-t border-ink/10 px-5 py-4 first:border-t-0 sm:grid-cols-[1fr_1.1fr] ${i % 2 ? "bg-[#f7f7f7]" : ""}`}>
                  <span className="font-bold">{c.award}</span>
                  <span className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                    <span className="font-display text-lg font-extrabold leading-tight transition-colors group-hover:text-forest">{c.winners[0]}</span>
                    <span className="font-bold">&amp;</span>
                    <span className="font-display text-lg font-extrabold leading-tight transition-colors group-hover:text-forest">{c.winners[1]}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </TableShell>
    </PaperSlide>
  );
}

export function Judges() {
  return (
    <PaperSlide id="judges">
      <SlideTitle word="Judges" className="mb-10" />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {JUDGES.map((j, i) => (
          <li
            key={j.name}
            data-reveal
            style={delay((i % 3) * 100)}
            className="group grid grid-cols-[110px_1fr] overflow-hidden rounded-2xl shadow-[0_8px_20px_rgb(0_0_0/0.18)] transition-transform duration-500 ease-stage hover:-translate-y-1.5"
          >
            <Photo label="Foto" className="h-full min-h-[190px] !bg-[#e4e4e4]" />
            <div className="bg-gradient-to-r from-[#0e3c7c] to-[#0e7e78] p-5 text-white">
              <h3 className="mb-2 font-cond text-[28px] font-bold leading-none">{j.name}</h3>
              <ul className="flex list-disc flex-col gap-1 pl-4 text-[13px] leading-snug">
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </PaperSlide>
  );
}

// ---------------------------------------------------------------- Conference

const ICONS: Record<string, ReactNode> = {
  podium: <path d="M8 21h8M12 17v4M7 10h10l-1 7H8zM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 3.5 10.9c-.6.5-1 1.2-1 2V16h-5v-.1c0-.8-.4-1.5-1-2A6 6 0 0 1 12 3z" />,
  book: <path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2zM20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z" />,
  trophy: <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6v4H9z" />,
};

function SessionPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-r-3xl bg-gradient-to-r from-orange to-[#f8e33b] px-8 py-3 font-display text-[clamp(22px,2.6vw,34px)] font-extrabold uppercase leading-none text-forest">
      {children}
    </span>
  );
}

export function LineUp() {
  return (
    <GreenSlide id="line-up">
      <span className="absolute right-4 top-6 hidden sm:block lg:right-10">
        <IbfLogo size={64} />
      </span>
      <Container className="grid gap-14 py-24 lg:grid-cols-2">
        <div>
          <h2 data-reveal="left" className="mb-8 font-display text-[clamp(56px,8vw,112px)] font-extrabold uppercase leading-[0.9]">
            The
            <br />
            <span className="text-lime">Line-up</span>
          </h2>
          <div data-reveal className="mb-8">
            <SessionPill>Opening</SessionPill>
          </div>
          <ol className="flex flex-col gap-6">
            {OPENING.map((o, i) => (
              <li key={o.title} data-reveal style={delay(i * 90)} className="grid grid-cols-[52px_1fr] gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-forest">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[o.icon]}
                  </svg>
                </span>
                <div>
                  {o.time && <p className="text-white/90">{o.time}</p>}
                  <p className="text-xl font-bold text-yellow">{o.title}</p>
                  {"subtitle" in o && o.subtitle && <p>{o.subtitle}</p>}
                  {"speakers" in o && (
                    <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                      {o.speakers.map((s) => (
                        <li key={s.name}>
                          <strong>{s.name},</strong> {s.role}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-12 lg:pt-6">
          {SESSIONS.map((s, i) => (
            <div key={s.label} data-reveal style={delay(i * 150)}>
              <SessionPill>{s.label}</SessionPill>
              <p className="mt-5 text-white/90">{s.time}</p>
              <p className="text-[clamp(22px,2.4vw,30px)] font-bold leading-tight text-yellow">{s.title}</p>
              <p className="mb-3 text-lg">{s.subtitle}</p>
              <ul className="flex list-disc flex-col gap-1.5 pl-5">
                {s.speakers.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name},</strong> {p.role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </GreenSlide>
  );
}

// ---------------------------------------------------------------- Book

export function BookBackground() {
  return (
    <PaperSlide id="the-book">
      <SlideTitle word="Background" className="mb-10" />
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div data-reveal="scale" className="group mx-auto w-full max-w-[330px]">
          <BookCover />
        </div>
        <div className="flex flex-col gap-5 font-serif text-[17px] leading-relaxed text-body">
          {BOOK.background.map((p, i) => (
            <p key={i} data-reveal style={delay(i * 100)}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </PaperSlide>
  );
}

const OBJECTIVE_STYLE = [
  { color: "#7ab92e", icon: <path d="M7 3h7l4 4v14H7zM14 3v4h4M9.5 14l2 2 4-4" />, top: true },
  { color: "#14a59a", icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 3.5 10.9c-.6.5-1 1.2-1 2V16h-5v-.1c0-.8-.4-1.5-1-2A6 6 0 0 1 12 3z" />, top: false },
  { color: "#1a72bb", icon: <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />, top: true },
];

export function BookObjective() {
  return (
    <PaperSlide id="book-objective">
      <SlideTitle lead="Book" word="Objective" className="mb-16" />
      <ol className="grid gap-16 md:grid-cols-3 md:gap-6">
        {BOOK.objectives.map((o, i) => {
          const s = OBJECTIVE_STYLE[i];
          return (
            <li
              key={i}
              data-reveal
              style={{ ...delay(i * 160), borderColor: s.color }}
              className="relative flex min-h-[280px] items-center justify-center rounded-[48px] border-[3px] px-8 py-16 text-center"
            >
              <span
                className={`absolute left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-paper text-white shadow-[0_6px_16px_rgb(0_0_0/0.2)] ${s.top ? "-top-10" : "-bottom-10"}`}
                style={{ background: s.color }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon}
                </svg>
              </span>
              <p className="font-serif text-[17px] leading-relaxed text-body">{o}</p>
            </li>
          );
        })}
      </ol>
    </PaperSlide>
  );
}

const CASE_COLORS = ["#e4572e", "#0b6142", "#1d5a8f", "#c8102e", "#6a3d9a", "#00897b", "#f39200", "#1565c0"];

export function BookCases() {
  return (
    <PaperSlide id="book-cases">
      <h2 data-reveal className="mb-12 text-center font-display text-[clamp(30px,4vw,48px)] font-extrabold uppercase">
        Book cases
      </h2>
      <ul className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-3">
        {BOOK.cases.map((c, i) => (
          <li
            key={c}
            data-reveal="scale"
            style={{ ...delay((i % 8) * 50), color: CASE_COLORS[i % CASE_COLORS.length] }}
            className="rounded-xl bg-white px-5 py-3 font-display text-lg font-extrabold shadow-[0_4px_12px_rgb(0_0_0/0.08)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-2deg]"
          >
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-[#6b6f6d]">[Logo asli tiap brand menyusul dari file deck]</p>
    </PaperSlide>
  );
}

// ---------------------------------------------------------------- Closing call to action (web only)

export function RegisterCta() {
  return (
    <GreenSlide>
      <Container className="flex flex-wrap items-center justify-between gap-8 py-20">
        <div data-reveal>
          <p className="mb-2 font-display font-bold uppercase tracking-[0.2em] text-yellow">{EVENT.edition}</p>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase leading-none">
            Sampai jumpa <span className="text-yellow">{EVENT.dateShort}</span>
          </h2>
          <p className="mt-3 text-lg text-white/85">
            {EVENT.venue}, {EVENT.city}
          </p>
        </div>
        <div data-reveal style={delay(150)}>
          <ButtonLink href="/tiket">
            Daftar sekarang <Arrow />
          </ButtonLink>
        </div>
      </Container>
    </GreenSlide>
  );
}
