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
  const headingRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [entryProgress, setEntryProgress] = useState(0);
  const [rowsVisible, setRowsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const scrollable = rect.height - viewportHeight;
        setProgress(scrollable <= 0 ? entry.intersectionRatio : Math.max(0, Math.min(1, -rect.top / scrollable)));

        const headingTop = headingRef.current?.getBoundingClientRect().top;
        if (headingTop !== undefined) {
          const revealStart = viewportHeight * 0.9;
          const revealEnd = 160;
          setEntryProgress(Math.max(0, Math.min(1, (revealStart - headingTop) / (revealStart - revealEnd))));
          if (headingTop < viewportHeight * 0.8) setRowsVisible(true);
        }
      },
      { threshold: Array.from({ length: 50 }, (_, i) => i / 50) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="section relative bg-section-3 overflow-hidden">
      <AccentGlow position="left" size="55%" progress={progress} />

      <div ref={headingRef} className="relative mx-auto max-w-6xl px-4 md:px-8">
        <EdgeGeometry side="top" lines={5} className="right-4 -top-2 text-fg/20 md:right-8" progress={entryProgress} />
        <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-fg">
          What we build
        </h2>

        <div className="mt-8 h-px w-full bg-border-subtle/40 overflow-hidden">
          <div
            className="h-full bg-accent origin-left transition-transform duration-500 ease-out-expo"
            style={{ transform: `scaleX(${entryProgress})` }}
          />
        </div>

        <ul className="mt-14 md:mt-20">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <li
                key={c.name}
                className="transition-[opacity,transform] duration-700 ease-out-expo"
                style={{
                  opacity: rowsVisible ? 1 : 0,
                  transform: rowsVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: rowsVisible ? `${i * 70}ms` : "0ms",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group relative block w-full cursor-pointer border-t border-border-subtle py-7 text-left
                    transition-[color,background-color] duration-300 ease-out-expo last:border-b
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-inset md:py-9
                    hover:bg-fg/[0.02]"
                >
                  <div className="flex items-baseline gap-5 md:gap-10">
                    <span className={`mono shrink-0 text-sm tabular-nums transition-colors duration-300 ease-out-expo group-hover:text-accent ${isOpen ? "text-accent" : "text-subtle"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="flex-1 font-display text-[clamp(1.6rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-fg
                      transition-[color,transform] duration-300 ease-out-expo will-change-transform
                      group-hover:translate-x-2 group-hover:text-accent">
                      <CapabilityName name={c.name} />
                    </h3>

                    <span
                      aria-hidden
                      className={`shrink-0 self-center font-display text-2xl leading-none
                        transition-[transform,color] duration-300 ease-out-expo
                        group-hover:text-accent ${isOpen ? "rotate-45 text-accent" : "text-subtle"}`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo
                      ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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

      <div className="mt-16 flex bg-fg/[0.02] py-5 md:mt-24" aria-hidden>
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
