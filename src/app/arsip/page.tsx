import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/ui";
import ArsipBrowser from "./ArsipBrowser";

export const metadata: Metadata = {
  title: "Arsip",
  description: "Tema, pembicara, e-book, dan liputan media dari setiap edisi Indonesia Brand Forum.",
};

export default function ArsipPage() {
  return (
    <>
      <Container className="pb-8 pt-18">
        <Eyebrow>ARSIP</Eyebrow>
        <h1 className="mb-3 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-[56px]">
          Satu dekade Indonesia Brand Forum
        </h1>
        <p className="max-w-[680px] text-lg text-muted">
          Tema, pembicara, e-book, dan liputan media dari setiap edisi IBF.
        </p>
      </Container>
      <Suspense fallback={<div className="min-h-[800px]" aria-busy="true" />}>
        <ArsipBrowser />
      </Suspense>
    </>
  );
}
