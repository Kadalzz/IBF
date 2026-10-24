import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-ink">
      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand text-[15px] font-extrabold tracking-wide text-gold">
        IBF
      </span>
      <span className="text-[15px] font-bold leading-tight">
        Indonesia
        <br />
        Brand Forum
      </span>
    </Link>
  );
}
