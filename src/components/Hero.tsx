"use client";

import { MarkedWord } from "./MarkedWord";
import { GrainOverlay } from "./SvgPatterns";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-void">
      {/* Full-bleed image — a single continuous form transforming from crimson wireframe
          (the idea) into solid, glowing material (the reality) — the headline, made literal. */}
      <img
        src="/hero_images/Single Continuous Form Jul 01 2026.jpeg"
        alt="A form transforming from a crimson wireframe outline into solid, glowing material"
        className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
        fetchPriority="high"
      />
      <GrainOverlay className="opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-transparent md:from-void/50" />

      {/* Content — bottom-anchored, integrated with the image, not a separate column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-8 md:pb-20">
        <div className="mb-6 flex items-center gap-3 animate-fade-in-up">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-dot" />
          <span className="mono text-[11px] tracking-[0.25em] text-subtle uppercase">
            Digital Solutions Agency &mdash; Islamabad
          </span>
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em] text-fg">
          <span className="block animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ideas <span className="text-accent">→</span>
          </span>
          <span className="block animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <MarkedWord word="Reality" gesture="underline" animateOnLoad delay={900} />
          </span>
        </h1>

        <div className="mt-8 flex flex-col items-start gap-8 animate-fade-in-up md:flex-row md:items-end md:justify-between" style={{ animationDelay: "0.45s" }}>
          <p className="max-w-sm text-base leading-relaxed text-muted text-pretty md:text-lg">
            Intelligent digital solutions, built end to end.
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-accent/60 px-7 py-3.5 text-sm font-medium tracking-wide text-fg transition-colors duration-300 ease-out-expo hover:bg-accent hover:text-accent-fg active:scale-[0.98]"
          >
            Start a project
            <span aria-hidden="true" className="text-accent transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-accent-fg">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
