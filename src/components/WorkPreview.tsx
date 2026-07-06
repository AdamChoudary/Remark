"use client";

import { useEffect, useRef, useState } from "react";
import { MarkedWord } from "./MarkedWord";

const workItems = [
  { name: "AI Voice Agents", category: "Conversational AI", tagline: "Intelligent voice agents for automated customer support.", image: "/work_ai_voice_agents.png" },
  { name: "Web Development", category: "Engineering", tagline: "Custom-built, high-conversion websites.", image: "/work_web_development.png" },
  { name: "Digital Marketing", category: "Growth", tagline: "Data-driven performance marketing campaigns.", image: "/work_digital_marketing.png" },
  { name: "Media Production", category: "Cinematic", tagline: "Professional film, color grading & VFX.", image: "/work_media_production.png" },
  { name: "Branding & Identity", category: "Design", tagline: "Core visual assets and unified design systems.", image: "/work_branding_identity.png" },
];

export function WorkPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
            Drag —
          </span>
        </div>
      </div>

      <div ref={trackRef} className="mt-14 flex gap-5 overflow-x-auto px-4 pb-6 md:mt-20 md:px-8 snap-x snap-mandatory scrollbar-hide">
        {workItems.map((item, i) => (
          <a
            key={item.name}
            href="/work"
            aria-label={`${item.name} — ${item.category}`}
            className={`group relative flex aspect-[3/4] min-w-[280px] max-w-[340px] snap-start flex-col justify-between
              overflow-hidden rounded-sm border border-border-subtle bg-void p-7
              transition-[transform,opacity,border-color] duration-700 ease-out-expo
              hover:-translate-y-1.5 hover:border-accent/40
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-w-[340px]
              ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: visible ? `${i * 90}ms` : "0ms" }}
          >
            <img
              src={item.image}
              alt=""
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-65 transition-all duration-700 ease-out-expo group-hover:scale-105 group-hover:opacity-90"
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-void/45 to-transparent transition-opacity duration-500" />

            <div className="relative z-20 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70 transition-transform duration-500 ease-out-expo group-hover:scale-150" />
              <span className="mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {item.category}
              </span>
            </div>

            <div className="relative z-20">
              <h3 className="font-display text-3xl font-semibold leading-[1.02] tracking-[-0.01em] text-fg">
                {item.name === "AI Voice Agents" ? (
                  <><MarkedWord word="AI" /> Voice Agents</>
                ) : (
                  item.name
                )}
              </h3>
              <p className="mt-3 max-w-[230px] text-xs leading-relaxed text-muted">{item.tagline}</p>

              <div className="mt-5 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </div>
          </a>
        ))}

        <a
          href="/work"
          className="group flex min-w-[160px] snap-start flex-col items-start justify-end gap-3 p-7 text-sm tracking-wide text-muted
            transition-colors duration-300 ease-out-expo hover:text-fg
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          <span className="font-display text-2xl font-semibold leading-tight text-fg">View<br />all work</span>
          <span className="text-accent transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5">—</span>
        </a>
      </div>
    </section>
  );
}
