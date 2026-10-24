import { whatsappUrl } from "@/lib/data";
import { ChatIcon } from "./icons";

// Desktop only; on phones the WhatsApp action lives in MobileBuyBar.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Halo, saya mau tanya tentang IBF 2026")}
      aria-label="Tanya lewat WhatsApp"
      className="group fixed bottom-6 right-6 z-30 hidden h-14 items-center gap-0 overflow-hidden rounded-full bg-yellow px-4 text-night shadow-[0_8px_30px_rgb(0_0_0/0.35)] transition-[gap] duration-300 hover:gap-2.5 md:flex"
    >
      <ChatIcon size={24} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-[max-width] duration-500 ease-stage group-hover:max-w-[140px]">
        Tanya tim IBF
      </span>
    </a>
  );
}
