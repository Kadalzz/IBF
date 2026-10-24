"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { SPONSOR_PACKAGES } from "@/lib/data";

const inputClass = "h-12 rounded-xl border border-slate-300 px-3.5 text-[15px]";

export default function SponsorForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-3 py-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-800">
          <CheckIcon size={28} />
        </span>
        <h3 className="text-2xl font-extrabold">Terima kasih, permintaan terkirim</h3>
        <p className="text-base text-muted">Tim partnership IBF akan menghubungi Anda dalam 1 hari kerja.</p>
        <button type="button" onClick={() => setSent(false)} className="h-11 font-bold text-brand hover:underline">
          Kirim permintaan lain
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
      className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-nama" className="text-sm font-semibold">Nama</label>
        <input id="s-nama" type="text" autoComplete="name" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-co" className="text-sm font-semibold">Perusahaan</label>
        <input id="s-co" type="text" autoComplete="organization" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-email" className="text-sm font-semibold">Email kantor</label>
        <input id="s-email" type="email" autoComplete="email" required className={inputClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="s-wa" className="text-sm font-semibold">Nomor WhatsApp</label>
        <input id="s-wa" type="tel" autoComplete="tel" className={inputClass} />
      </div>
      <div className="col-span-full flex flex-col gap-1.5">
        <label htmlFor="s-paket" className="text-sm font-semibold">Paket yang diminati</label>
        <select id="s-paket" className={`${inputClass} bg-white`}>
          {SPONSOR_PACKAGES.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
          <option>Belum tahu, butuh saran</option>
        </select>
      </div>
      <div className="col-span-full flex flex-col gap-1.5">
        <label htmlFor="s-msg" className="text-sm font-semibold">Tujuan sponsorship (opsional)</label>
        <textarea id="s-msg" rows={4} className="resize-y rounded-xl border border-slate-300 px-3.5 py-3 text-[15px]" />
      </div>
      <button type="submit" className="col-span-full h-[52px] rounded-full bg-brand text-base font-bold text-white hover:bg-navy">
        Kirim permintaan
      </button>
    </form>
  );
}
