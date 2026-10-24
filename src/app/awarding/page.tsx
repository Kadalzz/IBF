import type { Metadata } from "next";
import { AwardingIntro, Categories, Criteria, Judges, RegisterCta, Winners } from "@/components/sections";
import { Divider, MobileBuyBar } from "@/components/ui";

export const metadata: Metadata = {
  title: "Awarding",
  description: "National Champion Brand Award 2026: the awarding, criteria Beat the Giant 2.0, kategori, pemenang, dan dewan juri.",
};

export default function AwardingPage() {
  return (
    <>
      <Divider word="Awarding" />
      <AwardingIntro />
      <Criteria />
      <Categories />
      <Winners />
      <Judges />
      <RegisterCta />
      <MobileBuyBar />
    </>
  );
}
