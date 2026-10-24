import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Lora, Poppins } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { EVENT } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["600", "700", "800"] });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });
const barlow = Barlow_Condensed({ variable: "--font-barlow", subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `Indonesia Brand Forum 2026 · ${EVENT.title}`,
    template: "%s · Indonesia Brand Forum 2026",
  },
  description: `${EVENT.title}: ${EVENT.subtitle}. Awarding, conference, dan peluncuran buku — ${EVENT.dateShort}, ${EVENT.venue}.`,
  // Prototype: keep it out of search results until the real site launches.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${lora.variable} ${barlow.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before paint so scroll-reveal styles only hide content when they can show it again.
            `?noanim` skips it, which shows every section at once (full-page screenshots, QA). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if(!/[?&]noanim/.test(location.search))document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans leading-normal">
        {/* Shared gradient for the corner wave on every paper slide. */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <linearGradient id="ibf-wave" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#d7f1ea" stopOpacity="0" />
              <stop offset="0.35" stopColor="#a6dfd2" />
              <stop offset="0.7" stopColor="#1b6d8c" />
              <stop offset="1" stopColor="#0c9a72" />
            </linearGradient>
          </defs>
        </svg>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-4 focus:py-2 focus:text-night"
        >
          Langsung ke konten
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <RevealObserver />
      </body>
    </html>
  );
}
