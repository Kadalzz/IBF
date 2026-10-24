"use client";

import { useEffect, useState } from "react";

const UNITS = ["Hari", "Jam", "Menit", "Detik"];

function partsUntil(target: number): string[] {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60].map(
    (n) => String(n).padStart(2, "0"),
  );
}

// Renders placeholders on the server and until `startsAt` is set, then ticks every second.
export default function Countdown({ startsAt, compact = false }: { startsAt: string | null; compact?: boolean }) {
  const [parts, setParts] = useState<string[] | null>(null);

  useEffect(() => {
    if (!startsAt) return;
    const target = Date.parse(startsAt);
    const tick = () => setParts(partsUntil(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startsAt]);

  const values = parts ?? ["00", "00", "00", "00"];

  return (
    <div className="grid grid-cols-4 gap-2.5" role="timer" aria-label="Hitung mundur menuju acara">
      {UNITS.map((unit, i) => (
        <div key={unit} className={`rounded-xl bg-white/[0.07] text-center ${compact ? "px-1 py-2.5" : "px-2 py-3.5"}`}>
          <div className={`font-extrabold tabular-nums ${compact ? "text-2xl" : "text-[30px]"}`}>{values[i]}</div>
          <div className="text-xs text-slate-300">{unit}</div>
        </div>
      ))}
    </div>
  );
}
