"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p role="status" className="min-w-0 flex-[1_1_380px] text-lg font-bold text-ink">
        Terima kasih, Anda sudah terdaftar.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex min-w-0 flex-[1_1_380px] flex-wrap gap-2.5"
    >
      <label htmlFor="nl-email" className="sr-only">
        Alamat email
      </label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="nama@perusahaan.com"
        className="h-[52px] min-w-0 flex-[1_1_220px] rounded-full border border-ink bg-white px-5 text-base"
      />
      <button type="submit" className="h-[52px] rounded-full bg-ink px-6 text-base font-bold text-white hover:bg-navy">
        Daftar
      </button>
    </form>
  );
}
