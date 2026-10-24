import type { Metadata } from "next";
import BookCover from "@/components/BookCover";
import Spotlight from "@/components/Spotlight";
import { Arrow, ButtonLink, Container, Display, Kicker, SectionHead, Ticker, delay } from "@/components/ui";
import { BOOK, EVENT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Buku National Champion",
  description: `${BOOK.title}: ${BOOK.subtitle}. Diluncurkan di ${EVENT.edition}.`,
};

const OBJECTIVE_TONES = ["border-mint text-mint", "border-yellow text-yellow", "border-teal text-teal"];

export default function BukuPage() {
  return (
    <>
      <Spotlight>
        <Container className="grid items-center gap-16 pb-24 pt-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Kicker className="mb-5">The Book · Diluncurkan {EVENT.dateShort}</Kicker>
            <Display as="h1" className="text-[clamp(64px,10vw,150px)]">
              National<br />
              <span className="text-yellow">Champion</span>
            </Display>
            <p data-reveal className="mt-6 max-w-[560px] text-[clamp(20px,2vw,26px)] font-semibold leading-snug">{BOOK.subtitle}</p>
            <p data-reveal style={delay(120)} className="mt-6 text-sm uppercase tracking-[0.14em] text-sage">
              {BOOK.authors.join(" · ")}
            </p>
            <div data-reveal style={delay(200)} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/tiket">
                Dapatkan di IBF 2026 <Arrow />
              </ButtonLink>
            </div>
          </div>
          <div data-reveal="scale" className="group mx-auto w-full max-w-[400px]">
            <BookCover />
          </div>
        </Container>
      </Spotlight>

      <Container className="grid gap-12 py-28 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Kicker className="mb-4">The Background</Kicker>
          <Display className="text-[clamp(52px,6vw,88px)]">
            Dari <span className="text-yellow">Beat the Giant</span> ke National Champion
          </Display>
        </div>
        <div className="flex flex-col gap-6 text-lg text-sage">
          {BOOK.background.map((p, i) => (
            <p key={i} data-reveal style={delay(i * 100)} className={i === 0 ? "text-xl text-cream" : ""}>
              {p}
            </p>
          ))}
        </div>
      </Container>

      <section className="border-t border-line">
        <Container className="py-28">
          <SectionHead kicker="Book Objective" title={<>Tujuan<br /><span className="text-yellow">buku</span></>} />
          <ol className="relative grid gap-5 md:grid-cols-3">
            <span aria-hidden="true" data-reveal="rule" className="absolute left-0 right-0 top-[42px] hidden h-px bg-line md:block" />
            {BOOK.objectives.map((o, i) => (
              <li key={i} data-reveal style={delay(i * 150)} className="relative flex flex-col gap-6">
                <span className={`flex h-[84px] w-[84px] items-center justify-center rounded-full border-2 bg-night font-display text-4xl ${OBJECTIVE_TONES[i]}`}>
                  0{i + 1}
                </span>
                <p className="text-xl leading-snug">{o}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="pt-28">
          <SectionHead kicker="Book Cases" title={<>{BOOK.cases.length} brand<br /><span className="text-yellow">dibedah</span></>} />
        </Container>
        <Ticker items={BOOK.cases} label="Brand yang dibahas di buku" />
        <Container className="py-16">
          <ul className="flex flex-wrap gap-3">
            {BOOK.cases.map((c, i) => (
              <li
                key={c}
                data-reveal
                style={delay((i % 8) * 50)}
                className="rounded-full border border-line px-5 py-3 font-semibold transition-colors duration-300 hover:border-yellow hover:text-yellow"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
