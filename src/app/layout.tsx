import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { EVENT } from "@/lib/data";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `Indonesia Brand Forum 2026 · ${EVENT.title}`,
    template: "%s · Indonesia Brand Forum 2026",
  },
  description: `${EVENT.title}: ${EVENT.subtitle}. Konferensi, peluncuran buku, dan National Champion Brand Award 2026 — ${EVENT.dateShort}, ${EVENT.venue}.`,
  // Prototype: keep it out of search results until the real site launches.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${anton.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll-reveal styles only hide content when they can show it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans leading-normal">
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
