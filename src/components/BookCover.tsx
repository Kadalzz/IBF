import { BOOK } from "@/lib/data";

// CSS rendition of the "National Champion" cover until the real cover image is supplied.
// It tilts in 3D when its `group` parent is hovered.
export default function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`@container [perspective:1400px] ${className}`}>
      <div className="relative flex aspect-[2/3] flex-col items-center bg-[#f2f2ef] px-[8%] py-[9%] text-center text-[#1d1d1b] shadow-[18px_22px_0_rgb(0_0_0/0.35)] transition-transform duration-700 ease-stage [transform-style:preserve-3d] group-hover:[transform:rotateY(-16deg)_rotateX(4deg)]">
        <span className="text-[4.2cqw] font-bold leading-tight text-red">
          Brand-Brand
          <br />
          INDONESIA
          <br />
          Menjadi Tuan Rumah
          <br />
          di Negeri Sendiri
        </span>
        <span className="mt-[10%] font-cond text-[22cqw] font-bold leading-[0.9]">NATIONAL</span>
        <span aria-hidden="true" className="my-[6%] h-[9%] w-[62%] -rotate-2 bg-red shadow-[inset_0_-6px_0_rgb(0_0_0/0.12)]" />
        <span className="font-cond text-[22cqw] font-bold leading-[0.9]">CHAMPION</span>
        <span className="mt-auto font-cond text-[6cqw] font-bold uppercase tracking-wide">{BOOK.authors[0]}</span>
        <span className="text-[3.2cqw] font-semibold uppercase leading-snug text-red">
          {BOOK.authors.slice(1).join(" · ")}
        </span>
      </div>
    </div>
  );
}
