import type { Metadata } from "next";
import Spotlight from "@/components/Spotlight";
import { Container, Display, Kicker, Photo, delay } from "@/components/ui";
import { EDITIONS, IBF_ABOUT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Arsip",
  description: "Indonesia Brand Forum sejak 2013: tema, buku, dan lokasi setiap edisi.",
};

export default function ArsipPage() {
  return (
    <>
      <Spotlight>
        <Container className="grid gap-12 pb-24 pt-16 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Kicker className="mb-5">IBF at a glance</Kicker>
            <Display as="h1" className="text-[clamp(72px,12vw,180px)]">
              Sejak<br />
              <span className="text-yellow">2013</span>
            </Display>
          </div>
          <div className="flex flex-col gap-5 text-lg text-sage">
            {IBF_ABOUT.map((p, i) => (
              <p key={i} data-reveal style={delay(i * 120)} className={i === 1 ? "text-xl text-cream" : ""}>
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Spotlight>

      <Container className="py-24">
        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[calc(200px+7px)]" />
          {EDITIONS.map((e, i) => (
            <li
              key={e.year}
              id={`ibf-${e.year}`}
              className="relative grid scroll-mt-28 gap-x-10 gap-y-4 pb-20 pl-10 md:grid-cols-[200px_1fr] md:pl-0"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-3 h-[15px] w-[15px] rounded-full border-2 md:left-[200px] ${i === 0 ? "border-yellow bg-yellow" : "border-yellow bg-night"}`}
              />
              <span data-reveal className="font-display text-[clamp(64px,7vw,104px)] leading-[0.85] text-yellow md:pr-10 md:text-right">
                {e.year}
              </span>
              <div data-reveal style={delay(120)} className="grid gap-8 md:pl-12 lg:grid-cols-[1.3fr_1fr]">
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
                    {i === 0 ? "Edisi 2026 · " : ""}
                    {e.venue}
                  </p>
                  <h2 className="font-display text-[clamp(40px,4.5vw,64px)] uppercase leading-[0.92]">{e.book}</h2>
                  <p className="text-xl font-semibold leading-snug">{e.theme}</p>
                  <p className="text-sage">{e.summary}</p>
                </div>
                <div className="group">
                  <Photo label={`Foto IBF ${e.year}, ${e.venue}`} className="aspect-[4/3] rounded-3xl" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
