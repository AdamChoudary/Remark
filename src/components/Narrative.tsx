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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const trackDotRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const [solutionProgress, setSolutionProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Scroll engine. IntersectionObserver thresholds physically cannot fire
    // while a taller-than-viewport section fills the viewport — the ratio sits
    // constant, so every threshold-driven update stalls mid-scroll and then
    // jumps at the exit edge. The observer here is ONLY an on/off gate; the
    // actual reads run in a passive scroll listener throttled to one
    // rAF per frame, from real DOM positions.
    let active = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      if (scrollable <= 0) return;

      // Continuous values are written straight to the DOM — re-rendering the
      // whole section (three blur-filtered blocks) every frame is jank fuel.
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      if (trackFillRef.current) trackFillRef.current.style.transform = `scaleY(${p})`;
      if (trackDotRef.current) trackDotRef.current.style.transform = `translateY(${p * 128}px)`;

      // Per-item focus, scrubbed continuously from each item's real distance to
      // the viewport's reading band and written as inline styles every frame.
      // Not class swaps + CSS transitions: a transition that gets interrupted or
      // paused freezes at its interpolated value and the class change never
      // lands visually — the exact stuck-dim state this section kept showing.
      // Direct writes have no in-between machinery to stick.
      let idx = 0;
      let best = -1;
      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        const r = item.getBoundingClientRect();
        const center = r.top + r.height / 2;
        // 0 at viewport middle, 1 at viewport edge
        const dist = Math.abs(center - vh * 0.5) / (vh * 0.5);
        // full focus in the middle band, falling off toward the edges
        const focus = Math.max(0, Math.min(1, 1.5 - dist * 1.9));
        item.style.opacity = String(0.12 + focus * 0.88);
        item.style.filter = focus > 0.95 ? "none" : `blur(${((1 - focus) * 1.5).toFixed(2)}px)`;
        if (focus > best) { best = focus; idx = i; }
      });
      setActiveIndex(idx);

      const solutionTop = solutionRef.current?.getBoundingClientRect().top;
      if (solutionTop !== undefined) {
        setPhase(solutionTop < vh * 0.75 ? "solution" : "problem");
        const revealStart = vh * 0.95;
        const revealEnd = vh * 0.35;
        const sp = Math.max(0, Math.min(1, (revealStart - solutionTop) / (revealStart - revealEnd)));
        // Quantized so the corner-geometry re-render happens ~20 times across
        // the reveal, not once per frame.
        setSolutionProgress(Math.round(sp * 20) / 20);
      }
    };

    const onScroll = () => {
      if (!active || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) update();
      },
      { threshold: 0 }
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="section relative min-h-[150vh] bg-paper"
    >
      <AccentGlow position="center" size="50%" />

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

        <div className="flex flex-col gap-16 md:grid md:grid-cols-12">
          {/* Sticky left label — a real ordinal (genuine 3-item sequence, earns the numeral).
              Mobile deliberately stays `flex-col`, not `grid-cols-1`: in a single-column grid,
              the label and content would auto-place into separate rows (the label's own row
              sized to its own short content), leaving `sticky` nothing tall to stick within —
              it would just sit at rest, never tracking. As plain flex-col siblings, the label's
              containing block for sticky purposes is the shared flex parent, which is exactly
              as tall as label + content combined — the same room sticky already gets from the
              grid row on desktop. */}
          <div className="self-start sticky top-24 md:col-span-4 md:top-1/3">
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
                  Track height is h-32 (128px); both pieces move via transform written directly
                  from the rAF handler (no React state, no CSS transition) so they track the
                  scroll 1:1 with zero lag and zero per-frame re-renders. */}
              <div className="relative mt-6 hidden h-32 w-px bg-ink/10 md:block">
                <div
                  ref={trackFillRef}
                  className="h-full w-px origin-top bg-accent"
                  style={{ transform: "scaleY(0)" }}
                />
                <div
                  ref={trackDotRef}
                  className="absolute left-1/2 top-0 h-2 w-2 -ml-1 -mt-1 rounded-full bg-accent shadow-[0_0_8px_2px_var(--color-accent-subtle)]"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-7 md:col-start-6">
            {problems.map((p, i) => (
              <div
                key={i}
                ref={(node) => { itemRefs.current[i] = node; }}
                className="relative mb-24"
                style={{ opacity: i === 0 ? 1 : 0.12, filter: i === 0 ? "none" : "blur(1.5px)" }}
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
