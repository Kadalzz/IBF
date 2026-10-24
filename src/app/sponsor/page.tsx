import type { Metadata } from "next";
import Spotlight from "@/components/Spotlight";
import { Arrow, ButtonLink, Container, Display, Kicker, SectionHead, delay } from "@/components/ui";
import { EVENT, ORGANIZERS, SPONSOR_PACKAGES, whatsappUrl } from "@/lib/data";
import SponsorForm from "./SponsorForm";

export const metadata: Metadata = {
  title: "Partner",
  description: `Penyelenggara dan paket kemitraan ${EVENT.edition} ${EVENT.title}.`,
};

export default function SponsorPage() {
  return (
    <>
      <Spotlight>
        <Container className="grid gap-12 pb-24 pt-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Kicker className="mb-5">Partner · {EVENT.edition}</Kicker>
            <Display as="h1" className="text-[clamp(64px,9vw,140px)]">
              Bersama para<br />
              <span className="text-yellow">tuan rumah</span>
            </Display>
          </div>
          <div data-reveal className="flex flex-col gap-4">
            <p className="text-lg text-sage">
              Tampil di panggung yang mempertemukan brand-brand pemimpin pasar Indonesia, para menteri, CEO, dan jaringan media iNews Media Group.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#proposal">
                Minta proposal <Arrow />
              </ButtonLink>
              <ButtonLink href="#" variant="ghost">
                Unduh deck
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Spotlight>

      <Container className="py-24">
        <Kicker className="mb-6">Diselenggarakan oleh</Kicker>
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ORGANIZERS.map((o, i) => (
            <li key={o} data-reveal style={delay(i * 80)} className="flex h-36 items-center justify-center bg-night p-6 text-center font-display text-3xl uppercase transition-colors duration-500 hover:bg-deep hover:text-yellow">
              {o}
            </li>
          ))}
        </ul>
      </Container>

      <section className="border-t border-line">
        <Container className="py-28">
          <SectionHead kicker="Paket kemitraan" title={<>Pilih<br /><span className="text-yellow">panggung Anda</span></>} />
          <div className="grid gap-5 md:grid-cols-3">
            {SPONSOR_PACKAGES.map((p, i) => (
              <div
                key={p.name}
                data-reveal
                style={delay(i * 120)}
                className={`flex flex-col gap-6 rounded-3xl p-8 transition-transform duration-500 ease-stage hover:-translate-y-2 ${
                  p.featured ? "bg-yellow text-night" : "border border-line"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-5xl uppercase leading-none">{p.name}</h3>
                  <span className="font-display text-2xl opacity-60">0{i + 1}</span>
                </div>
                <ul className="flex flex-1 flex-col gap-2 text-[15px]">
                  {p.benefits.map((b) => (
                    <li key={b} className={`border-t pt-2 ${p.featured ? "border-night/15" : "border-line"}`}>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#proposal"
                  className={`group rounded-full py-3.5 text-center font-bold ${p.featured ? "bg-night text-yellow" : "border border-cream/40"}`}
                >
                  Pilih {p.name} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="motif border-t border-line bg-forest">
        <Container className="grid gap-12 py-28 lg:grid-cols-[2fr_3fr]">
          <div id="proposal" data-reveal className="flex scroll-mt-28 flex-col gap-4">
            <Kicker>Proposal</Kicker>
            <Display className="text-[clamp(56px,6vw,96px)]">
              Mari<br />
              <span className="text-yellow">bicara</span>
            </Display>
            <p className="text-lg text-sage">Tim partnership membalas dalam 1 hari kerja dengan proposal dan ketersediaan paket.</p>
            <p>
              Lebih cepat lewat{" "}
              <a href={whatsappUrl("Halo, saya tertarik menjadi partner IBF 2026")} className="group font-semibold">
                <span className="link-draw">WhatsApp</span> <Arrow />
              </a>
            </p>
          </div>
          <div data-reveal style={delay(150)} className="rounded-3xl bg-night/70 p-6 sm:p-8">
            <SponsorForm />
          </div>
        </Container>
      </section>
    </>
  );
}
