"use client";

import { useEffect, useRef, useState } from "react";
import { MarkedWord } from "./MarkedWord";
import { AccentGlow, EdgeGeometry } from "./SvgPatterns";

const capabilities = [
  { name: "Web Development", desc: "Property sites, portfolios, business websites & SaaS platforms. Modern, responsive, and SEO-optimized." },
  { name: "Voice Agents", desc: "AI-powered voice agents for customer support, call handling, helplines, and marketing campaigns." },
  { name: "Chat Bots", desc: "Intelligent conversational bots for customer support, handling, and user guidance across platforms." },
  { name: "CRM & ERP", desc: "End-to-end CRM & ERP solutions to streamline your business operations and boost efficiency." },
  { name: "Analytics & Insights", desc: "Data-driven dashboards and reporting to track performance and make informed decisions." },
  { name: "Scalable & Secure", desc: "Enterprise-grade security and infrastructure built to scale with your growing business." },
];

const tech = [
  "React", "Next.js", "Node.js", "Python", "OpenAI", "Figma",
  "Adobe Creative Suite", "DaVinci Resolve", "Meta Ads", "Google Analytics", "Salesforce",
];

function CapabilityName({ name }: { name: string }) {
  if (name === "Voice Agents") {
    return (
      <>
        <MarkedWord word="Voice" gesture="circle" /> Agents
      </>
    );
  }
  return <>{name}</>;
}

export function Capabilities() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [entryProgress, setEntryProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const scrollable = rect.height - viewportHeight;
        setProgress(scrollable <= 0 ? entry.intersectionRatio : Math.max(0, Math.min(1, -rect.top / scrollable)));

        // Pinned to the section's top edge, so its reveal has to track pixels
        // scrolled past that edge directly — not a fraction of the whole
        // section's height, which would still be climbing long after this
        // corner has scrolled off the top of the viewport.
        setEntryProgress(Math.max(0, Math.min(1, -rect.top / 320)));
      },
      { threshold: Array.from({ length: 50 }, (_, i) => i / 50) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="section relative bg-section-3 overflow-hidden">
      <AccentGlow position="left" size="55%" progress={progress} />
      <EdgeGeometry side="top" lines={5} className="right-8 top-0 text-fg/20" progress={entryProgress} />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-fg">
          What we build
        </h2>

        <ul className="mt-14 md:mt-20">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.name}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group block w-full cursor-pointer border-t border-border-subtle py-7 text-left
                    transition-colors duration-300 ease-out-expo last:border-b
                    focus-visible:outline-none focus-visible:bg-accent-subtle md:py-9"
                >
                  <div className="flex items-baseline gap-5 md:gap-10">
                    <span className="mono shrink-0 text-sm tabular-nums text-subtle transition-colors duration-300 ease-out-expo group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="flex-1 font-display text-[clamp(1.6rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-fg
                      transition-[color,transform] duration-300 ease-out-expo will-change-transform
                      group-hover:translate-x-2 group-hover:text-accent">
                      <CapabilityName name={c.name} />
                    </h3>

                    <span
                      aria-hidden
                      className={`shrink-0 self-center font-display text-2xl leading-none text-subtle
                        transition-[transform,color] duration-300 ease-out-expo
                        group-hover:text-accent ${isOpen ? "rotate-45 text-accent" : ""} lg:group-hover:rotate-45`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo
                      ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                      lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100`}
                  >
                    <div className="overflow-hidden">
                      <p className="ml-[calc(0.875rem+1.25rem)] mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted md:ml-[calc(0.875rem+2.5rem)] md:text-base">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tech marquee — the page's single allotted marquee */}
      <div className="mt-16 flex border-y border-border-subtle py-5 md:mt-24" aria-hidden>
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 whitespace-nowrap">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="mono text-xs uppercase tracking-[0.18em] text-subtle/70 select-none">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
