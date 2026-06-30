"use client";

import { GrainOverlay } from "./SvgPatterns";
import { MarkedWord } from "./MarkedWord";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-void">
      {/* Full-bleed creative hero image — dark + bold + vibrant.
          Its own composition keeps the left dark for the text, red burst on the right. */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_images/crimson_burst.png"
          alt="An explosive burst of vivid red against a dark field"
          className="h-full w-full object-cover object-[70%_center] md:object-center"
          fetchPriority="high"
        />
        {/* Legibility scrim — bottom-up, MOBILE ONLY. Fully transparent at md+. */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/65 to-transparent md:hidden" />
        {/* Desktop: a soft left anchor so the headline always reads over the dark side.
            Fades out well before the red burst; the burst itself stays untouched. */}
        <div className="absolute inset-y-0 left-0 hidden w-[55%] bg-gradient-to-r from-void via-void/80 to-transparent md:block" />
      </div>

      <GrainOverlay className="z-0 opacity-[0.04]" />

      {/* Content — left-aligned editorial column over the black negative space */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:px-8 md:pb-0">
        <div className="max-w-2xl">
          {/* Eyebrow (the hero's single allocated eyebrow) */}
          <p
            className="mono animate-fade-in-up text-[11px] uppercase tracking-[0.22em] text-muted"
            style={{ animationDelay: "0.05s" }}
          >
            Digital Solutions Agency
          </p>

          {/* Display headline: IDEAS (scattered/muted) → REALITY (resolved, marked) */}
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-fg">
            <span
              className="block animate-fade-in-up text-muted/70"
              style={{ animationDelay: "0.15s" }}
            >
              Ideas
            </span>
            <span
              className="mt-1 block animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-accent" aria-hidden="true">
                →
              </span>{" "}
              <MarkedWord
                word="Reality"
                gesture="underline"
                animateOnLoad
                delay={900}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8 max-w-md animate-fade-in-up text-base leading-relaxed text-muted text-pretty md:text-lg"
            style={{ animationDelay: "0.45s" }}
          >
            Intelligent digital solutions, built end to end.
          </p>

          {/* Single primary CTA — the one loud red element on the page */}
          <div
            className="mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-accent-fg transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-bright active:scale-[0.98]"
            >
              Start a project
              <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
