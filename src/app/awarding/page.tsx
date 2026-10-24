import type { Metadata } from "next";
import Spotlight from "@/components/Spotlight";
import { Container, Display, Kicker, Photo, SectionHead, TONE, delay, type Tone } from "@/components/ui";
import { AWARD_BACKGROUND, BEAT_THE_GIANT, CRITERIA, EVENT, JUDGES } from "@/lib/data";
import AwardTabs from "./AwardTabs";

export const metadata: Metadata = {
  title: "National Champion Brand Award 2026",
  description: "Kriteria Beat the Giant 2.0, 16 kategori, pemenang, dan dewan juri National Champion Brand Award 2026.",
};

function Quadrant({ q, i }: { q: { name: string; tone: string; tips: { n: string; text: string }[] }; i: number }) {
  const tone = TONE[q.tone as Tone];
  return (
    <div data-reveal="scale" style={delay(i * 120)} className={`flex min-h-[200px] flex-col gap-4 rounded-3xl p-6 ${tone.bg} ${tone.ink}`}>
      <span className="self-start rounded-full bg-night/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cream">{q.name}</span>
      <ul className="flex flex-col gap-2">
        {q.tips.map((t) => (
          <li key={t.n} className="flex gap-3 text-[15px] font-medium leading-snug">
            <span className="font-display text-lg leading-none">{t.n}</span>
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AwardingPage() {
  const q = BEAT_THE_GIANT;
  return (
    <>
      <Spotlight>
        <Container className="grid gap-12 pb-24 pt-20 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Kicker className="mb-5">The Awarding · {EVENT.edition}</Kicker>
            <Display as="h1" className="text-[clamp(72px,12vw,180px)]">
              Award<span className="text-yellow">ing</span>
            </Display>
            <p data-reveal className="mt-6 max-w-[520px] font-display text-3xl uppercase leading-tight">
              National Champion Brand Award 2026
            </p>
          </div>
          <div className="flex flex-col gap-5 text-lg text-sage">
            {AWARD_BACKGROUND.map((p, i) => (
              <p key={i} data-reveal style={delay(i * 120)}>
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Spotlight>

      {/* Criteria */}
      <Container className="py-28">
        <SectionHead kicker="The Criteria" title={<>Beat the<br /><span className="text-yellow">Giant 2.0</span></>} />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <figure>
            <div className="grid grid-cols-[28px_1fr] gap-3">
              <div className="flex items-center justify-center">
                <span className="-rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] text-sage">{q.yAxis} →</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Quadrant q={q.topLeft} i={0} />
                <Quadrant q={q.topRight} i={1} />
                <Quadrant q={q.bottomLeft} i={2} />
                <Quadrant q={q.bottomRight} i={3} />
              </div>
            </div>
            <figcaption className="mt-4 pl-10 text-center text-xs font-bold uppercase tracking-[0.14em] text-sage">
              {q.xAxis} → <span className="font-normal normal-case tracking-normal">({q.xNote})</span>
            </figcaption>
          </figure>
          <div className="flex flex-col gap-4">
            <p data-reveal className="text-lg">
              Penghargaan diberikan kepada brand lokal Indonesia yang telah dikurasi dan memenuhi kriteria sebagai{" "}
              <strong>Smart Flanker, Local Challenger, dan National Champion</strong>.
            </p>
            {CRITERIA.map((c, i) => {
              const tone = TONE[c.tone];
              return (
                <div key={c.name} data-reveal style={delay(i * 120)} className={`rounded-3xl border-l-8 bg-deep p-6 ${tone.border}`}>
                  <h3 className={`mb-2 font-display text-3xl uppercase leading-none ${tone.text}`}>{c.name}</h3>
                  <p className="text-[15px] text-sage">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Categories and winners */}
      <section id="pemenang" className="border-t border-line">
        <Container className="py-28">
          <SectionHead kicker="The Category · The Winner" title={<>Kategori &amp;<br /><span className="text-yellow">pemenang</span></>} />
          <AwardTabs />
        </Container>
      </section>

      {/* Judges */}
      <section className="motif border-t border-line bg-forest">
        <Container className="py-28">
          <SectionHead kicker="The Judges" title={<>Dewan<br /><span className="text-yellow">juri</span></>} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {JUDGES.map((j, i) => (
              <li key={j.name} data-reveal style={delay((i % 3) * 100)} className="group grid grid-cols-[96px_1fr] gap-5 rounded-3xl bg-night/60 p-5 transition-colors duration-500 hover:bg-night">
                <Photo label="Foto" className="aspect-[3/4] rounded-2xl" />
                <div>
                  <h3 className="mb-2 font-display text-[26px] uppercase leading-none transition-colors group-hover:text-yellow">{j.name}</h3>
                  <ul className="flex flex-col gap-1.5 text-[13px] leading-snug text-sage">
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
