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

const inputClass = "h-12 rounded-xl border border-slate-300 px-3.5 text-[15px]";

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
    <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-8 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <ol aria-label="Langkah pembelian" className="flex flex-wrap gap-x-7 gap-y-2">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const active = n === step;
            return (
              <li key={label} className="flex items-center gap-2.5" aria-current={active ? "step" : undefined}>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    done ? "bg-green-800 text-white" : active ? "bg-brand text-white" : "bg-line text-muted"
                  }`}
                >
                  {done ? "✓" : n}
                </span>
                <span className={`text-[15px] font-semibold ${active ? "text-ink" : "text-muted"}`}>{label}</span>
              </li>
            );
          })}
        </ol>
        <span className="flex items-center gap-2 text-sm text-muted">
          <LockIcon /> Pembayaran aman via Midtrans
        </span>
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <div className="min-w-0 flex-[999_1_560px] rounded-[20px] border border-line bg-white p-6 sm:p-8">
          {step === 1 && (
            <>
              <h1 className="mb-1.5 text-[28px] font-extrabold">Pilih tiket</h1>
              <p className="mb-6 text-[15px] text-muted">
                {EVENT.edition} · {EVENT.date} · {EVENT.venue}, {EVENT.city}
              </p>
              <ul className="flex flex-col gap-3.5">
                {TIERS.map((t) => (
                  <li
                    key={t.id}
                    className={`flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5 ${
                      qty[t.id] > 0 ? "border-brand" : "border-line"
                    }`}
                  >
                    <div className="min-w-0 flex-[1_1_260px]">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h2 className="text-[19px] font-bold">{t.seats > 1 ? `${t.name} (${t.seats} tiket)` : t.name}</h2>
                        {t.badge && (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">{t.badge}</span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted">{t.features.join(", ")}. {t.note}.</p>
                      <p className="mt-2 text-lg font-extrabold">{formatRupiah(t.price)}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-slate-300 p-1">
                      <button
                        type="button"
                        onClick={() => change(t.id, -1)}
                        aria-label={`Kurangi ${t.name}`}
                        className="h-11 w-11 rounded-full bg-slate-100 text-[22px] font-bold hover:bg-slate-200"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-[17px] font-bold" aria-live="polite">
                        {qty[t.id]}
                      </span>
                      <button
                        type="button"
                        onClick={() => change(t.id, 1)}
                        aria-label={`Tambah ${t.name}`}
                        className="h-11 w-11 rounded-full bg-brand text-[22px] font-bold text-white hover:bg-navy"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <label htmlFor="promo" className="sr-only">Kode promo</label>
                <input id="promo" type="text" placeholder="Kode promo (opsional)" className={`${inputClass} flex-[1_1_220px]`} />
                <button type="button" className="h-12 rounded-xl border border-brand px-5 font-bold text-brand hover:bg-chip">
                  Pakai
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="mb-1.5 text-[28px] font-extrabold">Data pemesan</h1>
              <p className="mb-6 text-[15px] text-muted">E-ticket dikirim ke email dan nomor WhatsApp ini.</p>
              <form id="buyer" onSubmit={submitBuyer} className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
                <Field id="nama" label="Nama lengkap" autoComplete="name" placeholder="Sesuai yang tertulis di sertifikat" required />
                <Field id="email" label="Email" type="email" autoComplete="email" placeholder="nama@perusahaan.com" required />
                <Field id="wa" label="Nomor WhatsApp" type="tel" autoComplete="tel" placeholder="08xx xxxx xxxx" required />
                <Field id="perusahaan" label="Perusahaan / instansi" autoComplete="organization" />
                <Field id="jabatan" label="Jabatan" autoComplete="organization-title" />
                <div className="flex items-center gap-2.5 pt-6">
                  <input id="invoice" type="checkbox" className="h-5 w-5" />
                  <label htmlFor="invoice" className="text-[15px]">Saya butuh invoice perusahaan</label>
                </div>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="mb-1.5 text-[28px] font-extrabold">Metode pembayaran</h1>
              <p className="mb-6 text-[15px] text-muted">Pembayaran dikonfirmasi otomatis dalam hitungan detik.</p>
              <fieldset className="flex flex-col gap-3">
                <legend className="sr-only">Metode pembayaran</legend>
                {PAYMENT_METHODS.map((m) => {
                  const on = method === m.id;
                  return (
                    <label
                      key={m.id}
                      className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 px-5 py-[18px] ${
                        on ? "border-brand bg-chip" : "border-line"
                      }`}
                    >
                      <input
                        type="radio"
                        name="method"
                        value={m.id}
                        checked={on}
                        onChange={() => setMethod(m.id)}
                        className="h-5 w-5 accent-brand"
                      />
                      <span>
                        <strong className="block text-base">{m.name}</strong>
                        <span className="text-sm text-muted">{m.desc}</span>
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            </>
          )}

          {step === 4 && (
            <>
              <div className="flex flex-col items-center gap-3 pb-6 pt-2 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <CheckIcon />
                </span>
                <h1 className="text-[28px] font-extrabold">Pembayaran berhasil</h1>
                <p className="max-w-[460px] text-base text-muted">
                  E-ticket sudah dikirim ke email dan WhatsApp Anda. Tunjukkan QR code ini saat registrasi ulang.
                </p>
              </div>
              <div className="mx-auto max-w-[460px] overflow-hidden rounded-[20px] border border-line">
                <div className="bg-navy px-6 py-5 text-white">
                  <div className="text-[13px] font-bold text-gold">E-TICKET</div>
                  <div className="text-xl font-extrabold">Indonesia Brand Forum 2026</div>
                  <div className="text-sm text-slate-300">
                    {EVENT.date} · {EVENT.venue}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 p-6">
                  <div className="flex h-[132px] w-[132px] items-center justify-center rounded-xl bg-slate-100 text-[13px] text-muted">
                    [QR code]
                  </div>
                  <dl className="flex flex-col gap-1 text-sm text-muted">
                    <dt>No. pesanan</dt>
                    <dd className="text-[17px] font-bold text-ink">IBF26-[XXXXXX]</dd>
                    <dt className="mt-2">Total tiket</dt>
                    <dd className="text-[17px] font-bold text-ink">{seats} tiket</dd>
                  </dl>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button type="button" className="h-12 rounded-full bg-brand px-5 font-bold text-white hover:bg-navy">
                  Unduh e-ticket (PDF)
                </button>
                <button type="button" className="h-12 rounded-full border border-brand px-5 font-bold text-brand hover:bg-chip">
                  Tambah ke kalender
                </button>
                <Link href="/" className="flex h-12 items-center px-5 font-bold text-brand hover:underline">
                  Kembali ke beranda
                </Link>
              </div>
            </>
          )}
        </div>

        <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 rounded-[20px] border border-line bg-white p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-extrabold">Ringkasan pesanan</h2>
          {lines.length === 0 && <p className="text-[15px] text-muted">Belum ada tiket dipilih.</p>}
          {lines.map((t) => (
            <div key={t.id} className="flex justify-between gap-3 text-[15px]">
              <span>
                {qty[t.id]} × {t.name}
              </span>
              <strong>{formatRupiah(qty[t.id] * t.price)}</strong>
            </div>
          ))}
          <div className="flex justify-between gap-3 border-t border-line pt-3.5 text-sm text-muted">
            <span>Biaya layanan</span>
            <span>Rp 0</span>
          </div>
          <div className="flex justify-between gap-3 text-lg font-extrabold">
            <span>Total</span>
            <span>{formatRupiah(total)}</span>
          </div>
          {step < 4 && (
            <>
              <button
                type={step === 2 ? "submit" : "button"}
                form={step === 2 ? "buyer" : undefined}
                onClick={step === 2 ? undefined : next}
                disabled={!canContinue}
                className="h-[52px] rounded-full bg-brand text-base font-bold text-white hover:bg-navy disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {nextLabel}
              </button>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="h-11 font-bold text-brand hover:underline"
                >
                  Kembali
                </button>
              )}
            </>
          )}
          <p className="text-xs text-slate-500">Prototype: harga hanya contoh, tidak ada pembayaran sungguhan.</p>
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
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input id={id} name={id} type={type} className={inputClass} {...rest} />
    </div>
  );
}
