"use client";

import { useEffect, useState } from "react";

const UNITS = ["Hari", "Jam", "Menit", "Detik"];

function partsUntil(target: number): string[] {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60].map((n) =>
    String(n).padStart(2, "0"),
  );
}

// Renders dashes on the server, then ticks every second in the browser.
export default function Countdown({ startsAt }: { startsAt: string | null }) {
  const [parts, setParts] = useState<string[] | null>(null);

  useEffect(() => {
    if (!startsAt) return;
    const target = Date.parse(startsAt);
    const tick = () => setParts(partsUntil(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startsAt]);

  return (
    <div role="timer" aria-label="Hitung mundur menuju IBF 2026" className="grid grid-cols-4 gap-1">
      {UNITS.map((unit, i) => (
        <div key={unit} className={`border-t-2 pt-2.5 ${i === 0 ? "border-yellow" : "border-cream/30"}`}>
          <div className="font-display text-[clamp(44px,5vw,68px)] leading-none tabular-nums">{parts ? parts[i] : "––"}</div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">{unit}</div>
        </div>
      ))}
    </div>
  );
}
