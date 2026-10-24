"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { CheckIcon, LockIcon } from "@/components/icons";
import { EVENT, PAYMENT_METHODS, TIERS, formatRupiah, type TierId } from "@/lib/data";

const STEPS = ["Pilih tiket", "Data pemesan", "Pembayaran", "E-ticket"];

type Qty = Record<TierId, number>;

function initialQty(tier: string | null): Qty {
  const qty: Qty = { early: 0, regular: 0, corporate: 0 };
  const id = TIERS.some((t) => t.id === tier) ? (tier as TierId) : "regular";
  qty[id] = 1;
  return qty;
}

const inputClass =
  "h-13 rounded-xl border border-line bg-deep px-4 text-base text-cream placeholder:text-sage/60 focus:border-yellow focus:outline-none";
const heading = "font-display text-[clamp(44px,5vw,72px)] uppercase leading-[0.9]";

export default function Checkout() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [qty, setQty] = useState<Qty>(() => initialQty(searchParams.get("tier")));
  const [method, setMethod] = useState(PAYMENT_METHODS[0].id);

  const lines = TIERS.filter((t) => qty[t.id] > 0);
  const total = lines.reduce((sum, t) => sum + qty[t.id] * t.price, 0);
  const seats = lines.reduce((sum, t) => sum + qty[t.id] * t.seats, 0);
  const canContinue = step !== 1 || total > 0;

  const change = (id: TierId, delta: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(20, q[id] + delta)) }));

  const next = () => {
    if (canContinue) setStep((s) => Math.min(4, s + 1));
  };

  const submitBuyer = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  const nextLabel = step === 1 ? "Lanjut isi data" : step === 2 ? "Lanjut ke pembayaran" : `Bayar ${formatRupiah(total)}`;

  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-24 pt-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.2em] text-sage">
        <span className="text-yellow">
          Registrasi · {EVENT.edition} · {EVENT.dateShort}
        </span>
        <span className="flex items-center gap-2">
          <LockIcon size={16} /> Pembayaran aman via Midtrans
        </span>
      </div>

      <ol aria-label="Langkah pendaftaran" className="mb-12 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const done = n < step;
          const active = n === step;
          return (
            <li key={label} aria-current={active ? "step" : undefined} className="flex flex-col gap-3">
              <span className="h-1 overflow-hidden rounded-full bg-line">
                <span
                  className={`block h-full origin-left bg-yellow transition-transform duration-700 ease-stage ${n <= step ? "scale-x-100" : "scale-x-0"}`}
                />
              </span>
              <span className={`flex items-baseline gap-2 ${active ? "text-cream" : "text-sage"}`}>
                <span className="font-display text-xl text-yellow">{done ? "✓" : `0${n}`}</span>
                <span className="font-semibold">{label}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_380px]">
        <div key={step} className="page-enter min-w-0">
          {step === 1 && (
            <>
              <h1 className={heading}>Pilih tiket</h1>
              <p className="mb-8 mt-3 text-sage">
                {EVENT.date} · {EVENT.venue}, {EVENT.city}
              </p>
              <ul className="flex flex-col gap-4">
                {TIERS.map((t) => {
                  const on = qty[t.id] > 0;
                  return (
                    <li
                      key={t.id}
                      className={`flex flex-wrap items-center justify-between gap-5 rounded-3xl border p-6 transition-colors duration-300 ${
                        on ? "border-yellow bg-deep" : "border-line"
                      }`}
                    >
                      <div className="min-w-0 flex-[1_1_260px]">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="font-display text-3xl uppercase leading-none">
                            {t.seats > 1 ? `${t.name} (${t.seats} tiket)` : t.name}
                          </h2>
                          {t.badge && (
                            <span className="rounded-full bg-yellow px-2.5 py-0.5 text-xs font-bold text-night">{t.badge}</span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-sage">
                          {t.features.join(" · ")}. {t.note}.
                        </p>
                        <p className="mt-2 text-lg font-bold">{formatRupiah(t.price)}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full border border-line p-1">
                        <button
                          type="button"
                          onClick={() => change(t.id, -1)}
                          aria-label={`Kurangi ${t.name}`}
                          className="h-11 w-11 rounded-full text-2xl transition-colors hover:bg-deep"
                        >
                          −
                        </button>
                        <span className="w-9 text-center font-display text-2xl tabular-nums" aria-live="polite">
                          {qty[t.id]}
                        </span>
                        <button
                          type="button"
                          onClick={() => change(t.id, 1)}
                          aria-label={`Tambah ${t.name}`}
                          className="h-11 w-11 rounded-full bg-yellow text-2xl text-night transition-transform hover:scale-105"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex max-w-[480px] gap-3">
                <label htmlFor="promo" className="sr-only">Kode promo</label>
                <input id="promo" type="text" placeholder="Kode promo (opsional)" className={`${inputClass} flex-1`} />
                <button type="button" className="h-13 rounded-xl border border-line px-5 font-semibold transition-colors hover:border-yellow hover:text-yellow">
                  Pakai
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className={heading}>Data pemesan</h1>
              <p className="mb-8 mt-3 text-sage">E-ticket dikirim ke email dan nomor WhatsApp ini.</p>
              <form id="buyer" onSubmit={submitBuyer} className="grid gap-5 sm:grid-cols-2">
                <Field id="nama" label="Nama lengkap" autoComplete="name" placeholder="Sesuai yang tertulis di sertifikat" required />
                <Field id="email" label="Email" type="email" autoComplete="email" placeholder="nama@perusahaan.com" required />
                <Field id="wa" label="Nomor WhatsApp" type="tel" autoComplete="tel" placeholder="08xx xxxx xxxx" required />
                <Field id="perusahaan" label="Perusahaan / instansi" autoComplete="organization" />
                <Field id="jabatan" label="Jabatan" autoComplete="organization-title" />
                <div className="flex items-center gap-3 pt-7">
                  <input id="invoice" type="checkbox" className="h-5 w-5 accent-yellow" />
                  <label htmlFor="invoice">Saya butuh invoice perusahaan</label>
                </div>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className={heading}>Metode pembayaran</h1>
              <p className="mb-8 mt-3 text-sage">Pembayaran dikonfirmasi otomatis dalam hitungan detik.</p>
              <fieldset className="flex flex-col gap-3">
                <legend className="sr-only">Metode pembayaran</legend>
                {PAYMENT_METHODS.map((m) => {
                  const on = method === m.id;
                  return (
                    <label
                      key={m.id}
                      className={`flex cursor-pointer items-center gap-5 rounded-3xl border p-5 transition-colors duration-300 ${
                        on ? "border-yellow bg-deep" : "border-line hover:border-cream/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="method"
                        value={m.id}
                        checked={on}
                        onChange={() => setMethod(m.id)}
                        className="h-5 w-5 accent-yellow"
                      />
                      <span>
                        <span className="block font-display text-2xl uppercase leading-none">{m.name}</span>
                        <span className="text-sm text-sage">{m.desc}</span>
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            </>
          )}

          {step === 4 && (
            <div className="flex flex-col items-start gap-8">
              <div>
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow text-night">
                  <CheckIcon size={30} />
                </span>
                <h1 className={heading}>
                  Sampai jumpa di <span className="text-yellow">{EVENT.edition}</span>
                </h1>
                <p className="mt-3 max-w-[540px] text-lg text-sage">
                  Pembayaran berhasil. E-ticket sudah dikirim ke email dan WhatsApp Anda; tunjukkan QR code-nya saat registrasi ulang.
                </p>
              </div>
              <div className="w-full max-w-[580px] overflow-hidden rounded-3xl bg-cream text-night">
                <div className="flex items-center justify-between bg-forest px-6 py-5 text-cream">
                  <span className="font-display text-3xl uppercase leading-none">
                    National <span className="text-yellow">Champion</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">E-ticket</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-night/10 text-[13px]">[QR code]</div>
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div><dt className="opacity-60">No. pesanan</dt><dd className="font-bold">IBF26-[XXXXXX]</dd></div>
                    <div><dt className="opacity-60">Jumlah</dt><dd className="font-bold">{seats} tiket</dd></div>
                    <div><dt className="opacity-60">Tanggal</dt><dd className="font-bold">{EVENT.dateShort}</dd></div>
                    <div><dt className="opacity-60">Tempat</dt><dd className="font-bold">{EVENT.venue}</dd></div>
                  </dl>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-fill h-13 rounded-full bg-yellow px-6 font-bold text-night">
                  Unduh e-ticket (PDF)
                </button>
                <button type="button" className="btn-fill h-13 rounded-full border border-cream/40 px-6 font-bold transition-colors hover:text-night">
                  Tambah ke kalender
                </button>
                <Link href="/" className="flex h-13 items-center px-2 font-semibold">
                  <span className="link-draw">Kembali ke beranda</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-4 rounded-3xl border border-line bg-deep p-6 lg:sticky lg:top-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Ringkasan pesanan</h2>
          {lines.length === 0 && <p className="text-sage">Belum ada tiket dipilih.</p>}
          {lines.map((t) => (
            <div key={t.id} className="flex justify-between gap-3 border-b border-line pb-3">
              <span>
                {qty[t.id]} × {t.name}
              </span>
              <span className="font-semibold tabular-nums">{formatRupiah(qty[t.id] * t.price)}</span>
            </div>
          ))}
          <div className="flex justify-between gap-3 text-sm text-sage">
            <span>Biaya layanan</span>
            <span>Rp 0</span>
          </div>
          <div className="flex items-baseline justify-between gap-3 border-t border-line pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-display text-[40px] leading-none tabular-nums text-yellow">{formatRupiah(total)}</span>
          </div>
          {step < 4 && (
            <>
              <button
                type={step === 2 ? "submit" : "button"}
                form={step === 2 ? "buyer" : undefined}
                onClick={step === 2 ? undefined : next}
                disabled={!canContinue}
                className="btn-fill group h-14 rounded-full bg-yellow text-base font-bold text-night disabled:cursor-not-allowed disabled:bg-sage"
              >
                {nextLabel} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              {step > 1 && (
                <button type="button" onClick={() => setStep((s) => s - 1)} className="h-11 font-semibold">
                  <span className="link-draw">Kembali</span>
                </button>
              )}
            </>
          )}
          <p className="text-xs text-sage">Prototype: harga hanya contoh, tidak ada pembayaran sungguhan.</p>
        </aside>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  ...rest
}: { id: string; label: string; type?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.14em] text-sage">
        {label}
      </label>
      <input id={id} name={id} type={type} className={inputClass} {...rest} />
    </div>
  );
}
