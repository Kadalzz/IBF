import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { LineUp, RegisterCta } from "@/components/sections";
import { Arrow, ButtonLink, Container, Divider, GreenSlide, MobileBuyBar, PaperSlide, Photo, SlideTitle, delay } from "@/components/ui";
import { EVENT, FAQS, whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conference",
  description: `The line-up ${EVENT.edition}: keynote speech, introduction National Champion, book launching, awarding, dan dua sesi konferensi. ${EVENT.dateShort}, ${EVENT.venue}.`,
};

export default function KonferensiPage() {
  return (
    <>
      <Divider word="Conference" />
      <LineUp />

      <PaperSlide id="venue">
        <SlideTitle word="Venue" className="mb-10" />
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div data-reveal className="flex flex-col gap-4">
            <p className="font-display text-3xl font-extrabold text-forest">{EVENT.venue}</p>
            <p className="font-serif text-lg text-body">{EVENT.address}</p>
            <dl className="grid gap-3 font-serif text-body">
              <div>
                <dt className="font-display text-sm font-bold uppercase text-ink">Tanggal</dt>
                <dd>{EVENT.date}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase text-ink">Waktu</dt>
                <dd>{EVENT.time}</dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase text-ink">Registrasi ulang</dt>
                <dd>Tunjukkan QR e-ticket di meja registrasi</dd>
              </div>
            </dl>
            <ButtonLink href="#" variant="outline" className="self-start">
              Buka di Google Maps <Arrow />
            </ButtonLink>
          </div>
          <div data-reveal style={delay(150)} className="group">
            <Photo label="Peta Google Maps tersemat" className="h-full min-h-[320px] rounded-3xl" />
          </div>
        </div>
      </PaperSlide>

      <GreenSlide id="faq">
        <Container className="max-w-[960px] py-24">
          <h2 data-reveal className="mb-10 font-display text-[clamp(36px,5vw,64px)] font-extrabold uppercase leading-none">
            Pertanyaan <span className="text-lime">umum</span>
          </h2>
          <Faq items={FAQS} />
          <p className="mt-8 text-lg text-white/85">
            Masih ada pertanyaan?{" "}
            <a href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")} className="group font-semibold text-white">
              <span className="link-draw">Chat tim IBF di WhatsApp</span> <Arrow />
            </a>
          </p>
        </Container>
      </GreenSlide>

      <RegisterCta />
      <MobileBuyBar />
    </>
  );
}
