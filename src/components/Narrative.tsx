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
  const solutionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const [progress, setProgress] = useState(0);
  const [solutionProgress, setSolutionProgress] = useState(0);

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
        setActiveIndex(Math.min(problems.length - 1, Math.floor(p * problems.length)));

        // Read the solution block's actual position instead of guessing a scroll
        // fraction — the label reflects what's really on screen, not an estimate,
        // and stays correct no matter how the content's height changes later.
        const solutionTop = solutionRef.current?.getBoundingClientRect().top;
        setPhase(solutionTop !== undefined && solutionTop < viewportHeight * 0.75 ? "solution" : "problem");

        // Same real-position read, expressed as a 0-1 reveal used to draw the
        // corner geometry in as the solution block actually arrives on screen.
        if (solutionTop !== undefined) {
          const revealStart = viewportHeight * 0.95;
          const revealEnd = viewportHeight * 0.35;
          setSolutionProgress(Math.max(0, Math.min(1, (revealStart - solutionTop) / (revealStart - revealEnd))));
        }
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
      className="section relative min-h-[150vh] bg-paper"
    >
      <AccentGlow position="center" size="50%" progress={progress} />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* phase indicator */}
        <div className="mb-16 flex items-center gap-3">
          <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            phase === "problem" ? "text-ink-muted" : "text-ink-subtle"
          }`}>
            Problem
          </span>
          <span className="h-px flex-1 bg-ink/10" />
          <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            phase === "solution" ? "text-ink-muted" : "text-ink-subtle"
          }`}>
            Solution
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Sticky left label — a real ordinal (genuine 3-item sequence, earns the numeral) */}
          <div className="md:col-span-4 md:sticky md:top-1/3 md:self-start">
            <div className="relative">
              <p className="mono text-xs tracking-[0.2em] text-ink-muted uppercase">
                The {phase === "problem" ? "Problem" : "Solution"}
              </p>
              {phase === "problem" && (
                <p className="mono mt-3 text-[11px] tabular-nums tracking-[0.15em] text-ink-subtle">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(problems.length).padStart(2, "0")}
                </p>
              )}
              {/* Progress indicator — a lit tip at the current position, not just a static track.
                  Track height is h-32 (128px); the dot moves via transform, never `top`, so the
                  browser can composite it on the GPU instead of relayouting every frame. */}
              <div className="relative mt-6 hidden h-32 w-px bg-ink/10 md:block">
                <div
                  className="h-full w-px origin-top bg-accent transition-transform duration-500 ease-out-expo"
                  style={{ transform: `scaleY(${Math.min(1, progress)})` }}
                />
                <div
                  className="absolute left-1/2 top-0 h-2 w-2 -ml-1 -mt-1 rounded-full bg-accent shadow-[0_0_8px_2px_var(--color-accent-subtle)] transition-transform duration-500 ease-out-expo"
                  style={{ transform: `translateY(${Math.min(1, progress) * 128}px)` }}
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-7 md:col-start-6">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`group relative mb-24 transition-[opacity,transform,filter] duration-700 ease-out-expo ${
                  activeIndex === i
                    ? "translate-y-0 opacity-100 blur-none"
                    : activeIndex > i
                      ? "translate-y-0 opacity-25 blur-none hover:opacity-50"
                      : "translate-y-6 opacity-10 blur-[2px]"
                }`}
              >
                <p className="mb-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.08] tracking-[-0.015em] text-ink text-balance">
                  {p.text}
                </p>
                <p className="max-w-prose text-base leading-relaxed text-ink-muted">
                  {p.detail}
                </p>
              </div>
            ))}

            {/* Solution beat — the bold payoff, with real visual weight, not just a bigger font */}
            <div ref={solutionRef} className="relative border-t border-ink/10 pt-16">
              <EdgeGeometry side="right" lines={4} className="top-0 right-0 text-ink/25" progress={solutionProgress} />
              <p className="mb-5 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-subtle">
                <MarkedWord word="good enough" gesture="strike" />
              </p>
              <p className="relative font-display text-[clamp(2.75rem,6.5vw,5rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-ink">
                <span
                  className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 animate-fade-in"
                  aria-hidden="true"
                  style={{
                    background: "radial-gradient(60% 80% at 20% 50%, var(--color-accent-subtle) 0%, transparent 70%)",
                    animationDelay: "0.3s",
                  }}
                />
                <MarkedWord word="scalable" /> digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
