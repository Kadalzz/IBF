import { whatsappUrl } from "@/lib/data";
import { ChatIcon } from "./icons";

// Desktop only; on phones the WhatsApp action lives in MobileBuyBar.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")}
      aria-label="Tanya lewat WhatsApp"
      className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_6px_20px_rgba(11,20,55,0.3)] hover:bg-navy md:flex"
    >
      <ChatIcon />
    </a>
  );
}
