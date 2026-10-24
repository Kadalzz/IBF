// Site content, taken word for word from the IBF 2026 "National Champion" deck.
// Values in [brackets] are not in the deck; in production this file is replaced by CMS queries.

export const EVENT = {
  edition: "IBF 2026",
  title: "National Champion",
  subtitle: "Brand-brand yang Menjadi Tuan Rumah di Negeri Sendiri",
  date: "Rabu, 9 Desember 2026",
  dateShort: "9 Desember 2026",
  time: "[Mulai pukul] – 17.25 WIB",
  venue: "MNC Conference Hall",
  city: "Jakarta",
  address: "[Alamat MNC Conference Hall, Jakarta]",
  // The deck gives no time for the keynote; 13.00 is the first timed slot.
  startsAt: "2026-12-09T13:00:00+07:00",
};

export const ORGANIZERS = ["iNews Media Group", "iNews", "SindoNews TV", "Inventure"];

export const CONTACT = {
  whatsapp: "6281930719506",
  whatsappLabel: "+62 819-3071-9506",
  email: "[email@brandforum.id]",
  instagram: "https://www.instagram.com/idbrandforum/",
  twitter: "https://twitter.com/IDbrandforum",
  facebook: "https://www.facebook.com/IBF2020",
};

export const whatsappUrl = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}` + (text ? `&text=${encodeURIComponent(text)}` : "");

export const NAV = [
  { href: "/arsip", label: "IBF at Glance" },
  { href: "/awarding", label: "Awarding" },
  { href: "/konferensi", label: "Conference" },
  { href: "/buku", label: "Book" },
  { href: "/sponsor", label: "Partner" },
];

// ---------------------------------------------------------------- IBF at glance

export const IBF_ABOUT = [
  "Indonesia Brand Forum diselenggarakan pertama kali pada tahun 2013 sebagai bentuk kepedulian pada pengembangan brand-brand Indonesia.",
  "Event tahunan ini mengusung konsep yang unik karena menggabungkan conference, riset dan penulisan buku, dan awarding.",
  "Setiap tahun IBF menghadirkan topik-topik kajian yang baru dan inovatif berdasarkan riset dan kajian mendalam mengenai strategi brand dan praktek terbaik branding di Indonesia.",
];

export const GLANCE_PHOTOS = [
  { venue: "JCC", year: "2013" },
  { venue: "Balai Kartini", year: "2015" },
  { venue: "Hotel Grand Hyatt", year: "2016" },
  { venue: "Pos Bloc", year: "2021" },
  { venue: "Balairung Kemenparekraf", year: "2022" },
  { venue: "Telkom Landmark Tower", year: "2024" },
];

export type Edition = { year: string; book: string; title: string; quote?: string; text?: string };

export const EDITIONS: Edition[] = [
  {
    year: "2013",
    book: "Beat the Giant",
    title: "Kebangkitan Nasional Kedua, Kebangkitan Merek Indonesia",
    quote: "Beat the Giant: “Strategi Merek Indonesia Menandingi Merek Global dan Menjadi Tuan Rumah di Negeri Sendiri” (2013)",
    text: "Strategi merek lokal/nasional dalam menghadapi merek global dan menjadi tuan rumah di negeri sendiri.",
  },
  {
    year: "2015",
    book: "Global Chaser",
    title: "Merek Indonesia Perkasa di Pentas Dunia",
    quote: "Global Chaser: “Merek Indonesia Perkasa di Pentas Dunia” (2015)",
    text: "Strategi perusahaan/merek Indonesia yang telah sukses menembus dan membangun daya saing di pasar global.",
  },
  {
    year: "2016",
    book: "2G Challenges",
    title: "Branding Family Business for the Nation, Lestari dari Generasi ke Generasi",
    quote: "2G Challenges, “Bagaimana Pemimpin Generasi Kedua Perusahaan Keluarga Mencapai Sukses Berkesinambungan” (2016)",
    text: "Buku pertama di Indonesia yang mengungkap tantangan para pemimpin generasi kedua perusahaan keluarga dengan mengambil kasus perusahaan-perusahaan keluarga papan atas di Indonesia.",
  },
  {
    year: "2021",
    book: "The Rise of Cool+Agile Brands",
    title: "The Rise of Cool+Agile Brands",
    quote: "The Rise of Cool+Agile Brands, “Bagaimana merek Indonesia berhasil melewati disrupsi digital, milenial dan pandemi” (2021)",
    text: "Buku ini membahas generasi baru brand di Indonesia yang piawai merespons perubahan dan mumpuni melakukan transformasi digital.",
  },
  {
    year: "2022",
    book: "Brand Collab Advantage",
    title: "Brand Collab Advantage",
    quote: "“Strategi serta best practice dari beberapa kolaborasi perusahaan di Indonesia yang memenuhi syarat sukses kolaborasi antar brand” (2022)",
  },
  {
    year: "2024",
    book: "Elephant Learns Flamenco",
    title: "Elephant Learns Flamenco",
    text: "Elephant Learns Flamenco, menggambarkan perjalanan transformasi BUMN selama lima tahun terakhir di bawah kepemimpinan Erick Thohir.",
  },
];

// ---------------------------------------------------------------- Programs

export const PROGRAMS = [
  {
    n: "1",
    name: "Awarding",
    href: "/awarding",
    tone: "coral",
    text: "IBF 2026 akan memberikan penghargaan kepada brand lokal terpilih yang telah dikurasi dan memenuhi kriteria sebagai National Champion di pasar Indonesia.",
  },
  {
    n: "2",
    name: "Conference",
    href: "/konferensi",
    tone: "orange",
    text: "IBF 2026 akan menghadirkan conferensi dengan tema “National Champion: Brand-brand yang Menjadi Tuan Rumah di Negeri Sendiri” dengan menghadirkan para industry leaders.",
  },
  {
    n: "3",
    name: "Book",
    href: "/buku",
    tone: "leaf",
    text: "IBF 2026 akan meluncurkan buku “National Champion” yang mengulas perjalanan brand lokal membangun keunggulan kompetitif untuk menjadi pemimpin pasar di negeri sendiri.",
  },
] as const;

// ---------------------------------------------------------------- Awarding

export const AWARD_BACKGROUND = [
  "Pada tahun 2013, Indonesia Brand Forum memperkenalkan konsep Beat the Giant, yaitu strategi brand lokal untuk menandingi merek global dan menjadi tuan rumah di negeri sendiri. Lebih dari satu dekade kemudian, semakin banyak brand Indonesia yang berhasil memenangkan persaingan dan menjadi pemimpin di pasar domestik.",
  "Keberhasilan tersebut tidak terlepas dari kemampuan brand lokal menghadapi triple disruption, yaitu disrupsi kelas menengah, boikot merek global, dan digitalisasi. Untuk menjadi National Champion, brand Indonesia perlu mengoptimalkan keunggulan lokal sekaligus membangun kapabilitas bisnis berstandar global agar mampu menciptakan daya saing yang berkelanjutan.",
  "Berangkat dari semangat memperkuat daya saing brand Indonesia, Inventure bersama iNews Media Group menyelenggarakan National Champion Brand Award 2026. Penghargaan ini diberikan kepada brand-brand lokal terpilih melalui proses kurasi dan penilaian atas strategi, inovasi, serta keberhasilannya dalam memenangkan pasar dan menjadi tuan rumah di negeri sendiri.",
];

export const CRITERIA_INTRO =
  "Memberikan apresiasi dan penghargaan kepada brand-brand lokal Indonesia yang telah dikurasi dan memenuhi kriteria sebagai";

export type Quadrant = { name: string; tone: "mint" | "coral" | "sun" | "white"; tips: { n: string; text: string }[] };

// Beat the Giant 2.0: x = capability to catch up with the global frontier, y = ownership of local advantages.
export const QUADRANTS: { topLeft: Quadrant; topRight: Quadrant; bottomLeft: Quadrant; bottomRight: Quadrant } = {
  topLeft: { name: "Local Challenger", tone: "mint", tips: [{ n: "5", text: "Focus on your unique local advantages. Be a playmaker of your owned industry." }, { n: "6", text: "Benchmark to global practices." }] },
  topRight: { name: "National Champion", tone: "coral", tips: [{ n: "4", text: "Global context is your strength. Local content is your real weapon to win." }] },
  bottomLeft: { name: "Smart Flanker", tone: "sun", tips: [{ n: "1", text: "Be an unbeatable niche player." }] },
  bottomRight: { name: "Global Chaser", tone: "white", tips: [{ n: "2", text: "Going regional/global. Leverage your transferable assets." }, { n: "3", text: "Be a smart follower." }] },
};

export const CRITERIA = [
  { name: "Smart Flanker", tone: "sun", text: "Brand lokal yang menghindari persaingan langsung dengan market leader dengan memanfaatkan celah pasar, baik melalui produk, segmen, kanal distribusi, maupun komunikasi untuk memenangkan pasar spesifik." },
  { name: "Local Challenger", tone: "mint", text: "Brand lokal yang menantang dominasi market leader dengan mengoptimalkan keunggulan lokal sebagai diferensiasi untuk merebut preferensi konsumen dan meningkatkan pangsa pasar." },
  { name: "National Champion", tone: "coral", text: "Brand lokal yang berhasil memimpin pasar dengan memadukan keunggulan lokal dan kapabilitas bisnis kelas dunia untuk menandingi atau mengungguli pemain global." },
] as const;

// `name` is the label on THE CATEGORY slides, `award` the label on THE WINNER slides.
export type Category = { name: string; award: string; definition: string; winners: [string, string] };
export type CategoryGroup = { key: string; letter: string; name: string; items: Category[] };

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    key: "flanker",
    letter: "A",
    name: "Smart Flanker",
    items: [
      { name: "Smart Product Flanker", award: "Product Innovation Flanker", winners: ["Mie Gacoan", "Bobobox"], definition: "Brand yang menciptakan diferensiasi produk untuk memenuhi kebutuhan spesifik yang belum dilayani optimal oleh market leader, melalui inovasi yang cepat dan menghasilkan pertumbuhan di ceruk pasar." },
      { name: "Smart Market Flanker", award: "Market Innovation Flanker", winners: ["DANA", "Mykonos"], definition: "Brand yang jeli mengidentifikasi segmen pasar yang kurang terlayani, menawarkan proposisi nilai yang relevan, dan berhasil membangun penetrasi serta loyalitas konsumen di segmen tersebut." },
      { name: "Smart Channel Flanker", award: "Channel Innovation Flanker", winners: ["Jago", "Roti’O"], definition: "Brand yang memanfaatkan kombinasi kanal distribusi alternatif secara kreatif, terkoordinasi, dan agresif untuk menjangkau konsumen yang belum dilayani optimal oleh market leader." },
      { name: "Smart BrandComm Flanker", award: "BrandComm Flanker", winners: ["Buttonscarves", "Tuku"], definition: "Brand yang membangun identitas dan komunikasi khas melalui pesan yang relevan serta pemilihan media yang cerdas untuk memenangkan perhatian dan preferensi audiens spesifik." },
    ],
  },
  {
    key: "challenger",
    letter: "B",
    name: "Local Challenger",
    items: [
      { name: "Local Product Challenger", award: "Product Innovation Challenger", winners: ["Solaria", "Fore"], definition: "Brand yang mengembangkan produk unggul berdasarkan kebutuhan dan karakteristik konsumen Indonesia untuk menantang market leader serta merebut penjualan dan pangsa pasar." },
      { name: "Local Market Challenger", award: "Market Innovation Challenger", winners: ["Bukalapak", "Kahf"], definition: "Brand yang memanfaatkan pemahaman pasar lokal untuk menyasar segmen potensial, menawarkan proposisi nilai yang lebih relevan, dan merebut preferensi serta pangsa pasar dari market leader." },
      { name: "Local Channel Challenger", award: "Channel Innovation Challenger", winners: ["Kopi Kenangan", "Erafone"], definition: "Brand yang membangun jaringan distribusi sesuai karakteristik geografis dan perilaku belanja konsumen Indonesia untuk memperluas jangkauan dan meningkatkan penetrasi pasar." },
      { name: "Local BrandComm Challenger", award: "BrandComm Challenger", winners: ["Marjan", "Sido Muncul"], definition: "Brand yang mengangkat identitas, budaya, dan aspirasi lokal melalui komunikasi yang autentik untuk memperkuat ekuitas merek dan merebut preferensi konsumen dari market leader." },
    ],
  },
  {
    key: "champion",
    letter: "C",
    name: "National Champion",
    items: [
      { name: "Product Innovation Champion", award: "Product Innovation Champion", winners: ["Kawan Lama", "Cimory"], definition: "Brand yang secara berkelanjutan menghasilkan inovasi produk yang unggul, relevan, dan sulit ditiru dengan kualitas serta kinerja yang mampu menandingi produk pemain global." },
      { name: "Market Innovation Champion", award: "Market Innovation Champion", winners: ["Unifam", "MD Entertainment"], definition: "Brand yang berhasil menciptakan pasar atau segmen baru melalui inovasi proposisi nilai dan model bisnis, serta membangun pertumbuhan dan kepemimpinan pasar yang berkelanjutan." },
      { name: "Channel Innovation Champion", award: "Channel Innovation Champion", winners: ["BRILink Agen", "Point Coffee"], definition: "Brand yang membangun inovasi jaringan distribusi melalui integrasi kanal, mitra, dan platform untuk menciptakan jangkauan luas, efisiensi, dan kepemimpinan pasar." },
      { name: "BrandComm Champion", award: "BrandComm Champion", winners: ["Mayora", "Kapal Api"], definition: "Brand yang membangun identitas kuat dan komunikasi terintegrasi untuk meningkatkan ekuitas merek, loyalitas konsumen, serta kepemimpinan pasar dalam menghadapi pemain global." },
      { name: "Ecosystem Builder Champion", award: "Ecosystem Builder Champion", winners: ["GoTo", "Blibli"], definition: "Brand yang berhasil membangun dan mengelola ekosistem bisnis melalui sinergi mitra, sumber daya, dan teknologi untuk menciptakan nilai bersama serta keunggulan kompetitif." },
      { name: "Tech Leader Champion", award: "Tech Leader Champion", winners: ["GoTo", "BCA"], definition: "Brand yang memanfaatkan teknologi untuk meningkatkan efisiensi, pengalaman pelanggan, dan inovasi model bisnis dengan kinerja yang mampu memenuhi standar global." },
      { name: "Talent Champion", award: "Talent Champion", winners: ["ParagonCorp", "Kopra by Mandiri"], definition: "Brand yang unggul dalam menarik, mengembangkan, dan mempertahankan talenta berkualitas untuk meningkatkan produktivitas, inovasi, dan daya saing organisasi berstandar global." },
      { name: "Culture Champion", award: "Culture Champion", winners: ["Bluebird Group", "Nutrifood"], definition: "Brand yang berhasil merumuskan, menginternalisasi, dan mengadaptasi nilai perusahaan menjadi budaya kerja yang mendorong kolaborasi, inovasi, dan kinerja organisasi berkelanjutan." },
    ],
  },
];

export type Judge = { name: string; points: string[] };

export const JUDGES: Judge[] = [
  { name: "Yuswohady", points: ["Managing Partner, Inventure", "Founding Chairman Indonesia Brand Forum (IBF) and Indonesia Industry Outlook (IIO)", "Author with 60+ Books in Business-Marketing Field"] },
  { name: "Dyah Hasto Palupi", points: ["Senior Editor at SWA Business Magazine.", "Author of approximately 30 books on Marketing Communications, Biographies, and Corporate Publications", "Partner at Inventure"] },
  { name: "Tanty Dwi Permassanty", points: ["Business Dev and Account Director Dwisapta Pratama (1995 - 2013)", "Lecturer Surya University (2013 - 2025)", "Business Partner Inventure (2024 - Present)"] },
  { name: "Budiman Goh", points: ["Executive, Garudafood & Enesis Group", "Former President, Aruna (2021)", "COO, Indonesia Prima"] },
  { name: "Budi Rizanto Binol", points: ["Client Service Director, Ogilvy", "Managing Partner, Kinanti Consultant (2019 – Present)", "Managing Partner, Dadakaranya (2024 – Present)"] },
  { name: "Siddharta FM", points: ["Managing Partner, Trade Marketing Indonesia (2009 – Present)", "Director, CORE - Center for Organizational Excellence (2012 – Present)", "President Commissioner, Teletrans (2026 – Present)"] },
  { name: "Meidy Ferdiansyah", points: ["VP SME Business Project, Bank Syariah Indonesia (2023 – 2024)", "Chief Marketing Officer, Asia Coach Indonesia (2024 – 2025)", "Commissioner, Bank Syariah Indonesia (Appointed 2025)"] },
  { name: "Farid Fatahillah", points: ["Chief Knowledge Officer, Inventure (2024 – Present)", "Co-Author of 20+ books of business and marketing (2014 – Present)"] },
  { name: "Bagus Zidni Ilman Nafi", points: ["Researcher, Lingkaran Survei Indonesia (2018 - 2021)", "Senior Business Analyst, Inventure Indonesia (2021 - 2024)", "Head of Media & Event, Inventure Indonesia (2024 - Present)"] },
  { name: "Gilang Brillian", points: ["Lecture & Mentor MBA ITB (Postgraduate) (2020 – 2025)", "Senior Consultant, Inventure Indonesia (2019 – Present)", "Brand Consultant for 30+ Multinational Company in Telco, Banking and Retail"] },
  { name: "Aiman Witjaksono", points: ["Editor-in-Chief, iNews TV & iNews.id", "Senior Journalist and Prominent Television Host", "Expertise in Law, Politics, and Current Affairs"] },
  { name: "Masirom", points: ["Editor-in-Chief, IDX Channel & Okezone.com", "Senior Journalist Specializing in Economics and Business", "Expertise in Business and Capital Markets"] },
  { name: "Pung Purwanto", points: ["Editor-in-Chief, Sindonews.com & Sindonews TV", "Senior Journalist Specializing in Political Economy and Geopolitics", "Expertise in Politics, Law, and International Affairs"] },
  { name: "M. Budi Santosa", points: ["Deputy Editor-in-Chief, IDX Channel", "Senior Journalist Specializing in Economic Affairs", "Chairman, FORKEM (Forum of Economic Journalists)", "Experience in Managing Digital Programs within IDX Cluster"] },
  { name: "Andry Susanto", points: ["Deputy Editor-in-Chief, Sindonews", "Senior Journalist", "Expertise in Communications, Business, and Digital Media"] },
];

// ---------------------------------------------------------------- Conference

export type Person = { name: string; role: string };

export const KEYNOTES: Person[] = [
  { name: "Dr. (H.C.) Ir. Airlangga Hartarto, M.B.A., M.M.T.", role: "Menteri Koordinator Bidang Perekonomian RI" },
  { name: "Muhammad Sarmuji", role: "Menteri Perindustrian RI" },
];

export const OPENING = [
  { icon: "podium", time: "", title: "Keynote Speech:", speakers: KEYNOTES },
  { icon: "bulb", time: "13.00 – 13.30", title: "Introduction National Champion:", subtitle: EVENT.subtitle },
  { icon: "book", time: "13.35 – 13.55", title: "Book Launching “National Champion”" },
  { icon: "trophy", time: "14.00 – 15.00", title: "National Champion Brand Award 2026" },
] as const;

export const SESSIONS = [
  {
    label: "Session 1",
    time: "15.05 – 16.20",
    title: "Beat the Giants:",
    subtitle: "How Local Brands Challenge Market Leaders",
    speakers: [
      { name: "Indra Gunawan", role: "CEO Bobobox" },
      { name: "Yoshua Tanu", role: "CEO & Co-Founder Jago Coffee" },
      { name: "Irwan Hidayat", role: "President Director Sido Muncul" },
      { name: "Aliuyanto", role: "Founder & Owner Solaria" },
      { name: "Nurhayati Subakat", role: "CEO ParagonCorp" },
    ],
  },
  {
    label: "Session 2",
    time: "16.25 – 17.25",
    title: "Owning the Home Turf:",
    subtitle: "How National Champions Lead Indonesia’s Market",
    speakers: [
      { name: "Steven Wijaya", role: "CEO Unifam" },
      { name: "Hans Patuwo", role: "CEO GoTo" },
      { name: "Farell Sutantio", role: "CEO Cimory" },
      { name: "Sinarman Jonatan", role: "CEO Indomaret Group" },
      { name: "Riduan", role: "President Director Bank Mandiri" },
    ],
  },
];

// ---------------------------------------------------------------- Book

export const BOOK = {
  title: "National Champion",
  subtitle: "Brand-Brand Indonesia Menjadi Tuan Rumah di Negeri Sendiri",
  authors: ["Yuswohady", "Dyah Hasto Palupi", "Teguh S. Pambudi", "Farid Fatahillah", "Isti Hanifah", "Bagus Zidni IN"],
  background: [
    "Pada tahun 2013, kami menerbitkan buku Beat the Giant, yang mengulas strategi brand Indonesia dalam menandingi merek global dan menjadi tuan rumah di negeri sendiri. Kami mengelompokkan brand lokal ke dalam empat kategori: Smart Flanker, Local Challenger, National Champion, dan Global Chaser.",
    "Dua belas tahun kemudian, lanskap persaingan berubah drastis akibat digitalisasi, melemahnya daya beli kelas menengah, dan meningkatnya preferensi terhadap brand lokal. Momentum ini membuka peluang bagi brand Indonesia untuk memperkuat daya saing, membangun loyalitas konsumen, dan bahkan berekspansi ke pasar global.",
    "Melalui buku National Champion: Brand-brand Indonesia Menjadi Tuan Rumah di Negeri Sendiri, kami memotret strategi dan perjalanan brand lokal yang berhasil membangun keunggulan kompetitif dan menjadi pemimpin pasar domestik. Buku ini sekaligus menjadi refleksi kebangkitan brand Indonesia dalam memenangkan persaingan di negeri sendiri.",
  ],
  objectives: [
    "Mendokumentasikan perjalanan merek-merek Indonesia yang sukses dalam transformasinya menjadi national champion.",
    "Mengetahui strategi dan inovasi dibalik merek-merek Indonesia yang sukses menyandang gelar national champion.",
    "Merumuskan lesson-learned dari perjalanan bisnis merek-merek Indonesia hingga menjadi national champion.",
  ],
  cases: [
    "Eiger", "Sasa", "Indomie", "Paragon", "Summarecon", "ecoCare", "Martha Tilaar Group", "Alfamart",
    "BCA", "Vidio", "AZKO", "Sido Muncul", "Java Jazz Festival", "Cimory", "Mayora", "Blibli",
    "KAI", "Nutrifood", "Unifam", "Propan", "Bluebird Group", "MD Entertainment",
  ],
};

// ---------------------------------------------------------------- Registration (not in the deck)

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
  { id: "early", name: "Early Bird", note: "Sampai [tanggal batas]", badge: "Hemat", price: 1_500_000, seats: 1, features: ["Akses konferensi dan awarding", "Buku National Champion", "Sertifikat digital"] },
  { id: "regular", name: "Regular", note: "Sampai H-1 acara", badge: "Paling diminati", price: 2_000_000, seats: 1, features: ["Akses konferensi dan awarding", "Buku National Champion", "Sertifikat digital", "Networking"], featured: true },
  { id: "corporate", name: "Corporate", note: "Paket 5 tiket", badge: "Untuk tim", price: 9_000_000, seats: 5, features: ["5 tiket Regular", "Kursi berdekatan", "Invoice atas nama perusahaan"] },
];

export const PAYMENT_METHODS = [
  { id: "qris", name: "QRIS", desc: "Scan dari aplikasi bank atau e-wallet apa pun" },
  { id: "va", name: "Virtual Account", desc: "BCA, Mandiri, BNI, BRI, dan bank lain" },
  { id: "ewallet", name: "E-wallet", desc: "GoPay, OVO, DANA, ShopeePay" },
  { id: "card", name: "Kartu kredit / debit", desc: "Visa, Mastercard, JCB" },
];

export const SPONSOR_PACKAGES = [
  { name: "Platinum", featured: true, benefits: ["Slot bicara di sesi konferensi", "Logo terbesar di panggung, website, dan buku", "Booth premium", "[X] tiket VIP", "Liputan di jaringan iNews Media Group"] },
  { name: "Gold", benefits: ["Logo di panggung, website, dan buku", "Booth standar", "[X] tiket Regular"] },
  { name: "Supporter", benefits: ["Logo di website", "Penyebutan di media sosial IBF", "[X] tiket Regular"] },
];

export const FAQS = [
  { q: "Kapan dan di mana IBF 2026 digelar?", a: `${EVENT.date} di ${EVENT.venue}, ${EVENT.city}. Rangkaian acara: keynote speech, introduction National Champion, book launching, National Champion Brand Award 2026, dan dua sesi konferensi hingga 17.25 WIB.` },
  { q: "Bagaimana cara mendaftar?", a: "Pilih tiket di halaman Daftar, isi data, lalu bayar dengan QRIS, virtual account, e-wallet, atau kartu. E-ticket berisi QR code langsung dikirim ke email dan WhatsApp Anda." },
  { q: "Apakah peserta mendapat buku National Champion?", a: "[Konfirmasi apakah buku termasuk dalam tiket]" },
  { q: "Apakah perusahaan bisa meminta invoice?", a: "Bisa. Pilih paket Corporate atau centang opsi invoice perusahaan saat pendaftaran." },
  { q: "Apakah acara disiarkan?", a: "[Informasi siaran di iNews / SindoNews TV]" },
];

export const formatRupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");
