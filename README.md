# Prototype brandforum.id

Prototype website baru Indonesia Brand Forum (Next.js 16 + Tailwind CSS 4). Semua halaman statis, belum terhubung ke CMS atau pembayaran.

| Halaman | Isi |
| --- | --- |
| `/` | Beranda: hero, angka, pembicara, agenda, tiket, partner, arsip, insight, newsletter |
| `/event` | Agenda, pembicara, venue, FAQ |
| `/tiket` | Checkout 4 langkah (simulasi, tanpa pembayaran sungguhan). `?tier=early\|regular\|corporate` memilih tiket awal |
| `/sponsor` | Profil audiens, paket sponsor, form permintaan proposal |
| `/arsip` | Edisi per tahun (`?edisi=2024`), liputan media, unduh e-book |

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # cek sebelum deploy
```

## Mengubah konten

Semua teks, jadwal, pembicara, harga contoh, dan sponsor ada di `src/lib/data.ts`. Nilai dalam `[kurung siku]` masih placeholder. Isi `EVENT.startsAt` (mis. `"2026-12-10T08:30:00+07:00"`) agar hitung mundur berjalan.

Prototype memakai `robots: noindex` di `src/app/layout.tsx` supaya tidak terindeks Google; hapus saat website asli diluncurkan.

## Deploy ke Vercel

- **Lewat GitHub:** push repo ini ke GitHub, lalu di vercel.com pilih *Add New → Project*, impor repo, dan klik *Deploy*. Pengaturan default sudah benar.
- **Lewat CLI:** `npx vercel` (preview) lalu `npx vercel --prod`.
