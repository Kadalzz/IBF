"use client";

import { useState } from "react";
import { TONE } from "@/components/ui";
import { CATEGORY_GROUPS } from "@/lib/data";

// Category groups A/B/C with their definitions and winners; one group visible at a time.
export default function AwardTabs() {
  const [active, setActive] = useState(CATEGORY_GROUPS.length - 1);
  const group = CATEGORY_GROUPS[active];
  const tone = TONE[group.tone];
  // Numbering runs on across groups, as in the deck's winner tables.
  const offset = CATEGORY_GROUPS.slice(0, active).reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      <div role="tablist" aria-label="Kelompok kategori" className="mb-8 flex flex-wrap gap-2">
        {CATEGORY_GROUPS.map((g, i) => {
          const on = i === active;
          const t = TONE[g.tone];
          return (
            <button
              key={g.key}
              type="button"
              role="tab"
              id={`tab-${g.key}`}
              aria-selected={on}
              aria-controls={`panel-${g.key}`}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 rounded-full border px-5 py-3 transition-colors duration-300 ${
                on ? `${t.bg} ${t.ink} border-transparent` : "border-line text-cream hover:border-cream/50"
              }`}
            >
              <span className="font-display text-xl leading-none">{g.letter}</span>
              <span className="font-semibold">{g.name}</span>
              <span className={`text-xs ${on ? "opacity-70" : "text-sage"}`}>{g.items.length}</span>
            </button>
          );
        })}
      </div>

      <div key={group.key} id={`panel-${group.key}`} role="tabpanel" aria-labelledby={`tab-${group.key}`} className="page-enter">
        <ol className="border-t border-line">
          {group.items.map((c, i) => (
            <li
              key={c.name}
              className="group grid gap-x-8 gap-y-3 border-b border-line py-6 transition-colors duration-300 hover:bg-deep/60 lg:grid-cols-[60px_1.1fr_1.6fr_1.1fr] lg:items-center"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className={`font-display text-3xl leading-none ${tone.text}`}>{String(offset + i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-[28px] uppercase leading-none">{c.name}</h3>
              <p className="text-[15px] text-sage">{c.definition}</p>
              <div className="flex flex-wrap items-center gap-2">
                {c.winners.map((w, j) => (
                  <span key={w} className="flex items-center gap-2">
                    {j > 0 && <span className="text-sage">&amp;</span>}
                    <span className={`rounded-full px-4 py-2 text-sm font-bold ${tone.bg} ${tone.ink}`}>{w}</span>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
