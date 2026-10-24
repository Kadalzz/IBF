# brandforum.id · IBF 2026 National Champion

Prototype website Indonesia Brand Forum 2026 (Next.js 16 + Tailwind CSS 4). Konten dari deck IBF 2026 "National Champion"; semua halaman statis, belum terhubung ke CMS atau pembayaran.

Website mengikuti urutan dan gaya slide deck: slide abu-abu terang dengan judul "THE …" hijau, slide hijau, dan pembatas AWARDING / CONFERENCE / BOOK. Setiap slide adalah satu komponen di `src/components/sections.tsx`.

| Halaman | Isi (slide deck) |
| --- | --- |
| `/` | Seluruh deck berurutan, dari cover sampai Book Cases |
| `/arsip` | IBF at Glance (foto lokasi + buku per edisi), The Programs |
| `/awarding` | The Awarding, The Criteria, The Category, The Winner, The Judges |
| `/konferensi` | The Line-up, venue, FAQ (`/event` diarahkan ke sini) |
| `/buku` | The Background, Book Objective, Book Cases |
| `/sponsor` | Penyelenggara, paket kemitraan, form proposal |
| `/tiket` | Pendaftaran 4 langkah (simulasi). `?tier=early\|regular\|corporate` memilih tiket awal |

Tambahkan `?noanim` ke URL untuk menampilkan semua bagian tanpa animasi scroll (berguna untuk screenshot satu halaman penuh).

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # cek sebelum deploy
```

## Mengubah konten

Semua teks, run-down, pemenang, juri, dan harga ada di `src/lib/data.ts`. Nilai dalam `[kurung siku]` belum ada di deck dan masih placeholder (jam mulai, alamat venue, harga tiket, foto). Hitung mundur memakai `EVENT.startsAt`.

Foto acara, trofi, sampul buku edisi lama, foto juri, dan logo brand masih placeholder; simpan gambar dari deck ke `public/` dan ganti komponen `Photo` di `src/components/ui.tsx` dengan `next/image`.

Prototype memakai `robots: noindex` di `src/app/layout.tsx` supaya tidak terindeks Google; hapus saat website asli diluncurkan.

## Deploy

Vercel men-deploy otomatis setiap push ke branch `main`.
