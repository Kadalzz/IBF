import type { Metadata } from "next";
import { GlanceBooks, GlancePhotos, Programs } from "@/components/sections";
import { MobileBuyBar } from "@/components/ui";

export const metadata: Metadata = {
  title: "IBF at Glance",
  description: "Indonesia Brand Forum sejak 2013: lokasi, tema, dan buku setiap edisi.",
};

export default function ArsipPage() {
  return (
    <>
      <GlancePhotos />
      <GlanceBooks />
      <Programs />
      <MobileBuyBar />
    </>
  );
}
