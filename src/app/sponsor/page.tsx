import type { Metadata } from "next";
import { RegisterCta } from "@/components/sections";
import { Arrow, Container, Divider, GreenSlide, PaperSlide, SlideTitle, delay } from "@/components/ui";
import { EVENT, ORGANIZERS, SPONSOR_PACKAGES, whatsappUrl } from "@/lib/data";
import SponsorForm from "./SponsorForm";

export const metadata: Metadata = {
  title: "Partner",
  description: `Penyelenggara dan paket kemitraan ${EVENT.edition} ${EVENT.title}.`,
};

export default function SponsorPage() {
  return (
    <>
      <Divider word="Partner" />

      <PaperSlide id="organizers">
        <SlideTitle word="Organizers" className="mb-4" />
        <p data-reveal className="mb-10 max-w-[760px] font-serif text-lg text-body">
          National Champion Brand Award 2026 diselenggarakan oleh Inventure bersama iNews Media Group.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ORGANIZERS.map((o, i) => (
            <li
              key={o}
              data-reveal="scale"
              style={delay(i * 90)}
              className="flex h-32 items-center justify-center rounded-2xl bg-white p-6 text-center font-display text-2xl font-extrabold text-forest shadow-[0_6px_16px_rgb(0_0_0/0.08)]"
            >
              {o}
            </li>
          ))}
        </ul>
      </PaperSlide>

      <PaperSlide id="packages" className="!bg-white">
        <SlideTitle word="Packages" className="mb-4" />
        <p data-reveal className="mb-10 font-serif text-lg text-body">Semua paket bisa disesuaikan. Detail harga ada di proposal.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {SPONSOR_PACKAGES.map((p, i) => (
            <div
              key={p.name}
              data-reveal
              style={delay(i * 120)}
              className={`flex flex-col gap-5 overflow-hidden rounded-2xl shadow-[0_8px_20px_rgb(0_0_0/0.12)] transition-transform duration-500 ease-stage hover:-translate-y-2 ${
                p.featured ? "bg-forest text-white" : "bg-paper"
              }`}
            >
              <span className={`px-6 py-4 font-cond text-3xl font-bold ${p.featured ? "bg-gradient-to-r from-orange to-[#f8e33b] text-forest" : "bg-gradient-to-r from-navy to-teal text-white"}`}>
                {p.name}
              </span>
              <ul className="flex flex-1 list-disc flex-col gap-2 px-6 pl-11 font-serif text-[15px]">
                {p.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a href="#proposal" className={`group mx-6 mb-6 rounded-full py-3 text-center font-display font-bold ${p.featured ? "bg-yellow text-night" : "border border-forest text-forest"}`}>
                Pilih {p.name} <Arrow />
              </a>
            </div>
          ))}
        </div>
      </PaperSlide>

      <GreenSlide id="proposal">
        <Container className="grid gap-12 py-24 lg:grid-cols-[2fr_3fr]">
          <div data-reveal className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase leading-none">
              Minta <span className="text-lime">proposal</span>
            </h2>
            <p className="text-lg text-white/85">Tim partnership membalas dalam 1 hari kerja dengan proposal dan ketersediaan paket.</p>
            <p>
              Lebih cepat lewat{" "}
              <a href={whatsappUrl("Halo, saya tertarik menjadi partner IBF 2026")} className="group font-semibold">
                <span className="link-draw">WhatsApp</span> <Arrow />
              </a>
            </p>
          </div>
          <div data-reveal style={delay(150)} className="rounded-3xl bg-night/40 p-6 sm:p-8">
            <SponsorForm />
          </div>
        </Container>
      </GreenSlide>

      <RegisterCta />
    </>
  );
}
