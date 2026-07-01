"use client";

import { MarkedWord } from "./MarkedWord";

const workItems = [
  { name: "AI Voice Agents", category: "Conversational AI", tagline: "Intelligent voice agents for automated customer support." },
  { name: "Web Development", category: "Engineering", tagline: "Custom-built, high-conversion websites." },
  { name: "Digital Marketing", category: "Growth", tagline: "Data-driven performance marketing campaigns." },
  { name: "Media Production", category: "Cinematic", tagline: "Professional film, color grading & VFX." },
  { name: "Branding & Identity", category: "Design", tagline: "Core visual assets and unified design systems." },
];

export function WorkPreview() {
  return (
    <section id="work" className="section bg-section-4 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono mb-4 text-xs tracking-[0.25em] text-muted uppercase">
              Selected Work
            </p>
            <p className="max-w-md text-sm leading-relaxed text-subtle">
              A curated selection of projects across our core capabilities.
            </p>
          </div>
          <span className="mono hidden shrink-0 text-[11px] tracking-[0.2em] text-subtle/70 uppercase md:inline">
            Drag &rarr;
          </span>
        </div>
      </div>

      <div className="mt-14 flex gap-5 overflow-x-auto px-4 pb-6 md:mt-20 md:px-8 snap-x snap-mandatory scrollbar-hide">
        {workItems.map((item, i) => (
          <article
            key={item.name}
            className="group relative flex aspect-[3/4] min-w-[280px] max-w-[340px] snap-start flex-col justify-between
              overflow-hidden rounded-sm border border-border-subtle bg-bg-light/40 p-7
              transition-[transform,border-color,background-color] duration-500 ease-out-expo
              hover:-translate-y-1.5 hover:border-accent/40 hover:bg-bg-light/70
              focus-within:ring-2 focus-within:ring-accent md:min-w-[340px]"
          >
            {/* Oversized index watermark — the energy is in the type, not a photo */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-6 font-display text-[8.5rem] font-bold leading-none text-fg/[0.04]
                transition-[color,transform] duration-500 ease-out-expo group-hover:text-accent/15 group-hover:-translate-y-1"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Top: category tag */}
            <div className="relative flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70 transition-transform duration-500 ease-out-expo group-hover:scale-150" />
              <span className="mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {item.category}
              </span>
            </div>

            {/* Bottom: title + tagline */}
            <div className="relative">
              <h3 className="font-display text-3xl font-semibold leading-[1.02] tracking-[-0.01em] text-fg">
                {item.name === "AI Voice Agents" ? (
                  <><MarkedWord word="AI" /> Voice Agents</>
                ) : (
                  item.name
                )}
              </h3>
              <p className="mt-3 max-w-[230px] text-xs leading-relaxed text-muted">{item.tagline}</p>

              {/* Accent line sweeps in on hover */}
              <div className="mt-5 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            </div>
          </article>
        ))}

        <a
          href="/work"
          className="group flex min-w-[160px] snap-start flex-col items-start justify-end gap-3 p-7 text-sm tracking-wide text-muted
            transition-colors duration-300 ease-out-expo hover:text-fg
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          <span className="font-display text-2xl font-semibold leading-tight text-fg">View<br />all work</span>
          <span className="text-accent transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
