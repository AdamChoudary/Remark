"use client";

import { useRef, useState, useEffect } from "react";
import { MarkedWord } from "./MarkedWord";
import { EdgeGeometry, AccentGlow } from "./SvgPatterns";

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
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const scrollable = rect.height - viewportHeight;
        
        if (scrollable <= 0) return;
        
        // Calculate progress based on how far the section has scrolled past the viewport top
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / scrollable));
        
        setProgress(p);
        
        // problem 0: 0.0 - 0.28
        // problem 1: 0.28 - 0.56
        // problem 2: 0.56 - 0.75
        // solution: 0.75+
        const idx = Math.min(2, Math.floor(p * 3.5));
        setActiveIndex(idx);
        setPhase(p > 0.65 ? "solution" : "problem");
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100)
      }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="section relative min-h-[200vh] bg-section-2"
    >
      <AccentGlow position="center" size="50%" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* phase indicator */}
        <div className="mb-16 flex items-center gap-3">
          <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            phase === "problem" ? "text-muted" : "text-subtle"
          }`}>
            Problem
          </span>
          <span className="h-px flex-1 bg-border-subtle" />
          <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            phase === "solution" ? "text-muted" : "text-subtle"
          }`}>
            Solution
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Sticky left label */}
          <div className="md:col-span-4 md:sticky md:top-1/3 md:self-start">
            <div className="relative">
              <p className="mono text-xs tracking-[0.2em] text-muted uppercase">
                The {phase === "problem" ? "Problem" : "Solution"}
              </p>
              {/* Progress indicator */}
              <div className="mt-6 hidden h-32 w-px bg-border-subtle md:block">
                <div
                  className="h-full w-px origin-top bg-accent transition-[transform] duration-300 ease-out-expo"
                  style={{ transform: `scaleY(${Math.min(1, progress)})` }}
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-7 md:col-start-6">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`relative mb-28 transition-[opacity,transform] duration-700 ease-out-expo ${
                  activeIndex === i
                    ? "opacity-100 translate-y-0"
                    : activeIndex > i
                      ? "opacity-20 translate-y-0"
                      : "opacity-10 translate-y-10"
                }`}
              >
                <p className="mb-4 font-display text-[clamp(1.6rem,3.8vw,2.8rem)] font-normal leading-[1.15] tracking-[-0.01em] text-fg">
                  {p.text}
                </p>
                <p className="max-w-prose text-base leading-relaxed text-muted">
                  {p.detail}
                </p>
              </div>
            ))}

            {/* Solution beat — the bold payoff */}
            <div className="relative border-t border-border-subtle pt-16">
              <EdgeGeometry side="right" lines={4} className="top-0 right-0" />
              <p className="mb-5 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-subtle">
                <MarkedWord word="good enough" gesture="strike" />
              </p>
              <p className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-fg">
                <MarkedWord word="scalable" /> digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
