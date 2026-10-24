"use client";

import { useState } from "react";
import { SPONSOR_PACKAGES } from "@/lib/data";

const inputClass =
  "h-13 rounded-xl border border-line bg-deep px-4 text-base text-cream focus:border-yellow focus:outline-none";
const labelClass = "text-xs font-bold uppercase tracking-[0.14em] text-sage";

export default function SponsorForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="page-enter flex flex-col items-start gap-4 py-6">
        <p className="font-display text-6xl uppercase leading-none text-yellow">Terima kasih.</p>
        <p className="text-lg text-sage">Tim partnership IBF akan menghubungi Anda dalam 1 hari kerja.</p>
        <button type="button" onClick={() => setSent(false)} className="font-semibold">
          <span className="link-draw">Kirim permintaan lain</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-nama" className={labelClass}>Nama</label>
        <input id="s-nama" type="text" autoComplete="name" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-co" className={labelClass}>Perusahaan / brand</label>
        <input id="s-co" type="text" autoComplete="organization" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-email" className={labelClass}>Email kantor</label>
        <input id="s-email" type="email" autoComplete="email" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-wa" className={labelClass}>Nomor WhatsApp</label>
        <input id="s-wa" type="tel" autoComplete="tel" className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="s-paket" className={labelClass}>Paket yang diminati</label>
        <select id="s-paket" className={inputClass}>
          {SPONSOR_PACKAGES.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
          <option>Belum tahu, butuh saran</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="s-msg" className={labelClass}>Tujuan kemitraan (opsional)</label>
        <textarea
          id="s-msg"
          rows={4}
          className="resize-y rounded-xl border border-line bg-deep px-4 py-3 text-base text-cream focus:border-yellow focus:outline-none"
        />
      </div>
      <button type="submit" className="btn-fill group h-14 rounded-full bg-yellow text-base font-bold text-night sm:col-span-2">
        Kirim permintaan <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
