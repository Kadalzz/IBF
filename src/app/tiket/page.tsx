import type { Metadata } from "next";
import { Suspense } from "react";
import Checkout from "./Checkout";

export const metadata: Metadata = {
  title: "Tiket",
  description: "Beli tiket Indonesia Brand Forum 2026 dengan QRIS, virtual account, e-wallet, atau kartu.",
};

export default function TiketPage() {
  return (
    <div className="bg-soft">
      <Suspense fallback={<div className="min-h-[600px]" aria-busy="true" />}>
        <Checkout />
      </Suspense>
    </div>
  );
}
