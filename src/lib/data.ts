// Prototype content. Values in [brackets] are placeholders until the IBF team confirms them;
// in production this file is replaced by queries to the CMS (Sanity).

export const EVENT = {
  edition: "IBF 2026",
  theme: "[Tema IBF 2026]",
  tagline:
    "Satu hari bersama CEO, CMO, dan pemimpin BUMN membahas strategi brand Indonesia.",
  date: "[Hari, Tanggal Bulan 2026]",
  time: "[08.30 – 15.00 WIB]",
  venue: "[Nama Venue]",
  city: "Jakarta",
  address: "[Alamat lengkap, Jakarta]",
  // ISO date-time of the opening session; null keeps the countdown on placeholders.
  startsAt: null as string | null,
};

export const CONTACT = {
  whatsapp: "6281930719506",
  whatsappLabel: "+62 819-3071-9506",
  email: "[email@brandforum.id]",
  instagram: "https://www.instagram.com/idbrandforum/",
  twitter: "https://twitter.com/IDbrandforum",
  facebook: "https://www.facebook.com/IBF2020",
};

export const whatsappUrl = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}` +
  (text ? `&text=${encodeURIComponent(text)}` : "");

export const NAV = [
  { href: "/event", label: "Event 2026" },
  { href: "/arsip", label: "Arsip" },
  { href: "/#insight", label: "Insight" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/#tentang", label: "Tentang" },
];

export const STATS = [
  { value: "10+", label: "tahun IBF diselenggarakan" },
  { value: "[X.XXX]", label: "peserta dari seluruh edisi" },
  { value: "[XXX]", label: "pembicara yang pernah tampil" },
  { value: "100+", label: "liputan media nasional" },
];

export type Session = {
  time: string;
  duration: string;
  kind: string;
  title: string;
  who: string;
  highlight?: boolean;
};

export const SESSIONS: Session[] = [
  { time: "[08.30]", duration: "[60 menit]", kind: "Registrasi", title: "Registrasi ulang dan coffee morning", who: `Lobi ${EVENT.venue}` },
  { time: "[09.30]", duration: "[30 menit]", kind: "Pembukaan", title: "Sambutan dan keynote", who: "[Nama pembicara keynote]" },
  { time: "[10.00]", duration: "[75 menit]", kind: "Sesi 1", title: "[Judul sesi 1]", who: "[Nama pembicara], [Nama pembicara], moderator [Nama]" },
  { time: "[11.20]", duration: "[75 menit]", kind: "Sesi 2", title: "[Judul sesi 2]", who: "[Nama pembicara], [Nama pembicara], moderator [Nama]" },
  { time: "[12.40]", duration: "[75 menit]", kind: "Sesi 3", title: "[Judul sesi 3]", who: "[Nama pembicara], [Nama pembicara], moderator [Nama]" },
  { time: "[14.00]", duration: "[60 menit]", kind: "Penutupan", title: "Peluncuran e-book IBF 2026 dan networking", who: "Semua peserta", highlight: true },
];

export type Speaker = { name: string; role: string; session: string };

export const SPEAKERS: Speaker[] = [
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Keynote" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 1" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 1" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 2" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 2" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 3" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Sesi 3" },
  { name: "[Nama Pembicara]", role: "[Jabatan, Perusahaan]", session: "Moderator" },
];

export type TierId = "early" | "regular" | "corporate";

export type Tier = {
  id: TierId;
  name: string;
  note: string;
  badge?: string;
  // Example prices for the prototype only; replace once pricing is decided.
  price: number;
  seats: number;
  features: string[];
  featured?: boolean;
};

export const TIERS: Tier[] = [
  { id: "early", name: "Early Bird", note: "Sampai [tanggal batas]", badge: "Hemat", price: 1_500_000, seats: 1, features: ["Akses semua sesi", "E-book IBF 2026", "Sertifikat digital"] },
  { id: "regular", name: "Regular", note: "Sampai H-1 acara", badge: "Paling diminati", price: 2_000_000, seats: 1, features: ["Akses semua sesi", "E-book IBF 2026", "Sertifikat digital", "Makan siang dan networking"], featured: true },
  { id: "corporate", name: "Corporate", note: "Paket 5 tiket", badge: "Untuk tim", price: 9_000_000, seats: 5, features: ["5 tiket Regular", "Kursi berdekatan", "Invoice atas nama perusahaan"] },
];

export const PAYMENT_METHODS = [
  { id: "qris", name: "QRIS", desc: "Scan dari aplikasi bank atau e-wallet apa pun" },
  { id: "va", name: "Virtual Account", desc: "BCA, Mandiri, BNI, BRI, dan bank lain" },
  { id: "ewallet", name: "E-wallet", desc: "GoPay, OVO, DANA, ShopeePay" },
  { id: "card", name: "Kartu kredit / debit", desc: "Visa, Mastercard, JCB" },
];

export const SPONSORS_2024 = [
  "Pertamina", "Telkom", "BSI", "BNI", "Pos Indonesia", "PTPN III",
  "Bank Mandiri", "PLN", "BRI", "Pelindo", "Jamkrindo", "KAI",
];

export const SPONSOR_PACKAGES = [
  { name: "Platinum", featured: true, benefits: ["Slot bicara di sesi utama", "Logo terbesar di panggung, website, dan e-book", "Booth premium", "[X] tiket VIP", "Artikel insight di website IBF"] },
  { name: "Gold", benefits: ["Panelis di salah satu sesi", "Logo di panggung, website, dan e-book", "Booth standar", "[X] tiket Regular"] },
  { name: "Supporter", benefits: ["Logo di website dan e-book", "Penyebutan di media sosial IBF", "[X] tiket Regular"] },
];

export const AUDIENCE = [
  { value: "[XX]%", label: "level manajer ke atas" },
  { value: "[XX]%", label: "dari BUMN dan anak usahanya" },
  { value: "[X.XXX]", label: "peserta per edisi" },
  { value: "100+", label: "liputan media per edisi" },
];

export type Edition = { year: string; theme: string; summary: string };

export const EDITIONS: Edition[] = [
  { year: "2024", theme: "Elephant Learns Flamenco: BUMN Menuju Indonesia Emas 2045", summary: "Membahas transformasi BUMN dan perannya menuju Indonesia Emas 2045, lewat sesi 5K Leadership, Corporate Culture, dan Winning Strategy." },
  { year: "2023", theme: "[Tema IBF 2023]", summary: "[Ringkasan 1–2 kalimat tentang edisi 2023]" },
  { year: "2022", theme: "[Tema IBF 2022]", summary: "[Ringkasan 1–2 kalimat tentang edisi 2022]" },
  { year: "2021", theme: "[Tema IBF 2021]", summary: "[Ringkasan 1–2 kalimat tentang edisi 2021]" },
  { year: "Sebelumnya", theme: "[Edisi sebelumnya]", summary: "[Daftar edisi IBF sebelum 2021]" },
];

export type MediaType = "Nasional" | "Regional" | "Online";

export const MEDIA: { outlet: string; type: MediaType }[] = [
  { outlet: "[Media nasional]", type: "Nasional" },
  { outlet: "[Media online]", type: "Online" },
  { outlet: "[Media regional]", type: "Regional" },
  { outlet: "[Media nasional]", type: "Nasional" },
  { outlet: "[Media online]", type: "Online" },
  { outlet: "[Media regional]", type: "Regional" },
  { outlet: "[Media nasional]", type: "Nasional" },
];

export const ARTICLES = [
  { category: "Leadership", title: "[Judul artikel insight dari sesi forum]" },
  { category: "Corporate Culture", title: "[Judul artikel insight dari sesi forum]" },
  { category: "Brand Strategy", title: "[Judul artikel insight dari sesi forum]" },
];

export const FAQS = [
  { q: "Bagaimana cara membeli tiket?", a: "Pilih tiket di halaman Tiket, isi data, lalu bayar dengan QRIS, virtual account, e-wallet, atau kartu. E-ticket berisi QR code langsung dikirim ke email dan WhatsApp Anda." },
  { q: "Apakah perusahaan bisa meminta invoice?", a: "Bisa. Pilih paket Corporate atau centang opsi invoice perusahaan saat checkout. Invoice dikirim otomatis ke email pemesan." },
  { q: "Apakah tiket bisa dialihkan ke orang lain?", a: "[Kebijakan pengalihan tiket]" },
  { q: "Apakah tiket bisa di-refund?", a: "[Kebijakan refund]" },
  { q: "Apakah peserta mendapat sertifikat dan materi?", a: "Ya. Sertifikat digital dan materi sesi dikirim ke email peserta setelah acara." },
];

export const formatRupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");
