"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Container, Placeholder } from "@/components/ui";
import { EDITIONS, MEDIA, type MediaType } from "@/lib/data";

const MEDIA_FILTERS: ("Semua" | MediaType)[] = ["Semua", "Nasional", "Regional", "Online"];

const pill = (on: boolean) =>
  `rounded-full border px-5 font-bold ${on ? "border-brand bg-brand text-white" : "border-slate-300 bg-white text-slate-700 hover:border-brand"}`;

export default function ArsipBrowser() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("edisi");
  const [year, setYear] = useState(EDITIONS.some((e) => e.year === requested) ? requested! : EDITIONS[0].year);
  const [mediaType, setMediaType] = useState<(typeof MEDIA_FILTERS)[number]>("Semua");
  const [query, setQuery] = useState("");
  const [ebookSent, setEbookSent] = useState(false);

  const current = EDITIONS.find((e) => e.year === year) ?? EDITIONS[0];
  const media = MEDIA.filter(
    (m) => (mediaType === "Semua" || m.type === mediaType) && m.outlet.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Container className="pb-18 pt-4">
        <div role="group" aria-label="Pilih edisi" className="mb-7 flex flex-wrap gap-2">
          {EDITIONS.map((e) => (
            <button
              key={e.year}
              type="button"
              aria-pressed={e.year === year}
              onClick={() => {
                setYear(e.year);
                setEbookSent(false);
              }}
              className={`h-11 text-[15px] ${pill(e.year === year)}`}
            >
              {e.year}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 rounded-3xl bg-navy p-6 text-white sm:p-10">
          <div className="flex min-w-0 flex-[1.3_1_420px] flex-col gap-4">
            <span className="text-[15px] font-bold text-gold">IBF {current.year}</span>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-[34px]">{current.theme}</h2>
            <p className="text-base text-slate-300">{current.summary}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href="#ebook" className="rounded-full bg-gold px-6 py-3.5 font-bold text-ink hover:brightness-95">
                Unduh e-book {current.year}
              </a>
              <a href="#media" className="rounded-full border border-white/40 px-6 py-3.5 font-semibold hover:bg-white/10">
                Liputan media
              </a>
            </div>
          </div>
          <div className="grid min-w-0 flex-[1_1_320px] grid-cols-2 gap-3">
            <Placeholder dark label="Foto acara" className="aspect-square" />
            <Placeholder dark label="Foto acara" className="aspect-square" />
            <Placeholder dark label="Foto acara" className="aspect-square" />
            <Placeholder dark label="Video rekaman" className="aspect-square" />
          </div>
        </div>
      </Container>

      <section id="media" className="bg-soft">
        <Container className="py-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-extrabold tracking-tight">Liputan media</h2>
            <div>
              <label htmlFor="m-search" className="sr-only">Cari liputan</label>
              <input
                id="m-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari judul atau media"
                className="h-11 w-[260px] max-w-full rounded-full border border-slate-300 bg-white px-4.5 text-[15px]"
              />
            </div>
          </div>
          <div role="group" aria-label="Jenis media" className="mb-6 flex flex-wrap gap-2">
            {MEDIA_FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={label === mediaType}
                onClick={() => setMediaType(label)}
                className={`h-10 text-sm ${pill(label === mediaType)}`}
              >
                {label}
              </button>
            ))}
          </div>
          <ul className="overflow-hidden rounded-2xl border border-line bg-white">
            {media.map((m, i) => (
              <li key={i} className="border-b border-line last:border-b-0">
                <a href="#" className="flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4.5 hover:bg-soft">
                  <span className="w-[160px] text-sm font-bold text-brand">{m.outlet}</span>
                  <span className="min-w-0 flex-[1_1_360px] text-base font-semibold">
                    [Judul berita tentang IBF {current.year}]
                  </span>
                  <span className="text-[13px] text-muted">{m.type} · [Tanggal]</span>
                </a>
              </li>
            ))}
            {media.length === 0 && <li className="px-6 py-5 text-muted">Tidak ada liputan yang cocok.</li>}
          </ul>
          <p className="mt-4 text-sm text-muted" aria-live="polite">
            Menampilkan {media.length} dari 100+ liputan.
          </p>
        </Container>
      </section>

      <Container className="flex flex-wrap items-center gap-12 pb-30 pt-20">
        <div id="ebook" className="flex aspect-[3/4] flex-[0_1_300px] flex-col justify-between rounded-2xl bg-brand p-7 text-white">
          <span className="text-[13px] font-bold text-gold">E-BOOK IBF {current.year}</span>
          <span className="text-2xl font-extrabold leading-tight">{current.theme}</span>
          <span className="text-[13px] text-slate-300">Inventure · Indonesia Brand Forum</span>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">Unduh e-book gratis</h2>
          <p className="text-[17px] text-muted">Masukkan email, tautan unduhan dikirim langsung ke inbox Anda.</p>
          {ebookSent ? (
            <p role="status" className="rounded-2xl bg-green-100 px-5 py-4 text-base font-semibold text-green-800">
              E-book IBF {current.year} sudah dikirim ke email Anda.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEbookSent(true);
              }}
              className="flex flex-wrap gap-2.5"
            >
              <label htmlFor="eb-email" className="sr-only">Alamat email</label>
              <input
                id="eb-email"
                type="email"
                required
                placeholder="nama@perusahaan.com"
                className="h-[52px] min-w-0 flex-[1_1_240px] rounded-full border border-slate-300 px-5 text-base"
              />
              <button type="submit" className="h-[52px] rounded-full bg-brand px-6 text-base font-bold text-white hover:bg-navy">
                Kirim e-book
              </button>
            </form>
          )}
        </div>
      </Container>
    </>
  );
}
