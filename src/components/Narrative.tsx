"use client";

import { useRef, useState } from "react";
import { MarkedWord } from "./MarkedWord";
import { ScrollReveal } from "./ScrollReveal";
import { AccentGlow, EdgeGeometry } from "./SvgPatterns";

const problems = [
  {
    text: "Customer queries going unanswered.",
    detail: "Missed calls, delayed responses, and overwhelmed support teams cost you customers every day.",
  },
  {
    text: "Manual processes slowing growth.",
    detail: "Without proper CRM & ERP systems, your business operations are inefficient and error-prone.",
  },
  {
    text: "Outdated or no web presence.",
    detail: "Your competitors are online and thriving while your business lacks a professional digital footprint.",
  },
];

export function Narrative() {
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const [activeIndex, setActiveIndex] = useState(0);
  const [solutionProgress, setSolutionProgress] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="process" className="section relative bg-paper">
      <AccentGlow position="center" size="50%" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-16 flex items-center gap-3">
          <span className="text-xs tracking-[0.2em] text-ink-muted uppercase">Problem</span>
          <span className="h-px flex-1 bg-ink/10" />
          <span className="text-xs tracking-[0.2em] text-ink-subtle uppercase">Solution</span>
        </div>

        <div className="flex flex-col gap-16 md:grid md:grid-cols-12">
          <div className="self-start sticky top-24 md:col-span-4 md:top-1/3">
            <p className="mono text-xs tracking-[0.2em] text-ink-muted uppercase">
              Business Challenges
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {problems.map((p, i) => (
              <ScrollReveal key={i} className="mb-20 last:mb-0">
                <p className="mb-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.08] tracking-[-0.015em] text-ink text-balance">
                  {p.text}
                </p>
                <p className="max-w-prose text-base leading-relaxed text-ink-muted">
                  {p.detail}
                </p>
              </ScrollReveal>
            ))}

            <div id="narrative-solution" className="relative border-t border-ink/10 pt-16 mt-20">
              <ScrollReveal>
                <p className="mb-5 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-subtle">
                  <MarkedWord word="good enough" gesture="strike" />
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="relative font-display text-[clamp(2.75rem,6.5vw,5rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-ink">
                  <MarkedWord word="scalable" /> digital solutions.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}