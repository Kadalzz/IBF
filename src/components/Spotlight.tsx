"use client";

import { useRef, type ReactNode } from "react";

// Green stage panel whose yellow spotlight drifts toward the pointer.
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse") return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
      className={`spotlight relative overflow-hidden ${className}`}
    >
      <div aria-hidden="true" className="motif pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </section>
  );
}
