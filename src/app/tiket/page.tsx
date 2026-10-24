import type { Metadata } from "next";
import { Suspense } from "react";
import { GreenSlide } from "@/components/ui";
import Checkout from "./Checkout";

export const metadata: Metadata = {
  title: "Daftar",
  description: "Daftar Indonesia Brand Forum 2026 National Champion, 9 Desember 2026 di MNC Conference Hall.",
};

export default function TiketPage() {
  return (
    <GreenSlide className="text-cream">
      <Suspense fallback={<div className="min-h-[600px]" aria-busy="true" />}>
        <Checkout />
      </Suspense>
    </GreenSlide>
  );
}
