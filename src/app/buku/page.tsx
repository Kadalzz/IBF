import type { Metadata } from "next";
import { BookBackground, BookCases, BookObjective, RegisterCta } from "@/components/sections";
import { Divider, MobileBuyBar } from "@/components/ui";
import { BOOK, EVENT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book",
  description: `${BOOK.title}: ${BOOK.subtitle}. Diluncurkan di ${EVENT.edition}.`,
};

export default function BukuPage() {
  return (
    <>
      <Divider word="Book" />
      <BookBackground />
      <BookObjective />
      <BookCases />
      <RegisterCta />
      <MobileBuyBar />
    </>
  );
}
