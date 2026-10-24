import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, SponsorGrid } from "@/components/ui";
import { AUDIENCE, SPONSORS_2024, SPONSOR_PACKAGES, whatsappUrl } from "@/lib/data";
import SponsorForm from "./SponsorForm";

export const metadata: Metadata = {
  title: "Sponsor",
  description: "Paket sponsor Indonesia Brand Forum 2026 dan formulir permintaan proposal.",
};

export default function SponsorPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Container className="flex flex-wrap items-end gap-12 py-22">
          <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-5">
            <Eyebrow light>SPONSOR DAN PARTNER</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-[58px]">
              Tempatkan brand Anda di depan pengambil keputusan Indonesia
            </h1>
            <p className="max-w-[620px] text-lg text-slate-300">
              IBF mempertemukan pemimpin BUMN, korporasi, dan pemasar senior selama lebih dari satu dekade.
            </p>
          </div>
          <div className="flex flex-[1_1_280px] flex-wrap gap-3">
            <ButtonLink href="#proposal" variant="gold">Minta proposal</ButtonLink>
            <ButtonLink href="#" variant="ghostLight">Unduh deck (PDF)</ButtonLink>
          </div>
        </Container>
      </section>

      <Container className="pb-12 pt-22">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight">Siapa yang hadir</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {AUDIENCE.map((a) => (
            <div key={a.label} className="rounded-[20px] bg-soft p-7">
              <div className="text-4xl font-extrabold text-brand">{a.value}</div>
              <div className="text-[15px] text-muted">{a.label}</div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="pb-22 pt-12">
        <h2 className="mb-2 text-4xl font-extrabold tracking-tight">Paket sponsor</h2>
        <p className="mb-8 text-[17px] text-muted">Semua paket bisa disesuaikan. Detail harga ada di proposal.</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {SPONSOR_PACKAGES.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col gap-4 rounded-[20px] p-8 ${p.featured ? "border-2 border-brand" : "border border-line"}`}
            >
              <h3 className="text-[22px] font-extrabold">{p.name}</h3>
              <ul className="flex flex-1 list-disc flex-col gap-2 pl-5 text-[15px] text-slate-700">
                {p.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ButtonLink href="#proposal" variant={p.featured ? "primary" : "outline"}>
                Pilih {p.name}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-soft">
        <Container className="py-20">
          <h2 className="mb-7 text-[28px] font-extrabold">Partner IBF 2024</h2>
          <SponsorGrid names={SPONSORS_2024} onSoft />
        </Container>
      </section>

      <Container className="flex flex-wrap gap-12 pb-30 pt-22">
        <div id="proposal" className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">Minta proposal sponsor</h2>
          <p className="text-[17px] text-muted">
            Tim partnership membalas dalam 1 hari kerja dengan proposal dan ketersediaan paket.
          </p>
          <p className="text-base">
            Lebih cepat lewat{" "}
            <a href={whatsappUrl("Halo, saya tertarik menjadi sponsor IBF 2026")} className="font-bold text-brand hover:underline">
              WhatsApp
            </a>
            .
          </p>
        </div>
        <div className="min-w-0 flex-[1.4_1_480px] rounded-[20px] border border-line p-6 sm:p-8">
          <SponsorForm />
        </div>
      </Container>
    </>
  );
}
