# brandforum.id · IBF 2026 National Champion

Prototype website Indonesia Brand Forum 2026 (Next.js 16 + Tailwind CSS 4). Konten dari deck IBF 2026 "National Champion"; semua halaman statis, belum terhubung ke CMS atau pembayaran.

| Halaman | Isi |
| --- | --- |
| `/` | Hero National Champion + hitung mundur, 3 program, line-up, run-down, para National Champion, buku, sejarah IBF |
| `/awarding` | Latar belakang award, kriteria Beat the Giant 2.0, 16 kategori + pemenang, 15 juri |
| `/konferensi` | Run-down lengkap dengan pembicara per sesi, venue, FAQ (`/event` diarahkan ke sini) |
| `/buku` | Buku National Champion: latar belakang, tujuan, penulis, brand yang dibahas |
| `/arsip` | Semua edisi IBF sejak 2013: buku, tema, lokasi |
| `/sponsor` | Penyelenggara, paket kemitraan, form permintaan proposal |
| `/tiket` | Pendaftaran 4 langkah (simulasi). `?tier=early\|regular\|corporate` memilih tiket awal |

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # cek sebelum deploy
```

## Mengubah konten

Semua teks, run-down, pemenang, juri, dan harga ada di `src/lib/data.ts`. Nilai dalam `[kurung siku]` belum ada di deck dan masih placeholder (jam mulai, alamat venue, harga tiket, foto). Hitung mundur memakai `EVENT.startsAt`.

Foto pembicara, juri, dan dokumentasi masih kotak placeholder; ganti komponen `Photo` di `src/components/ui.tsx` dengan `next/image` saat foto tersedia.

Prototype memakai `robots: noindex` di `src/app/layout.tsx` supaya tidak terindeks Google; hapus saat website asli diluncurkan.

## Deploy

Vercel men-deploy otomatis setiap push ke branch `main`.
