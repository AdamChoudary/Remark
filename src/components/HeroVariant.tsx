"use client";

import { GrainOverlay } from "./SvgPatterns";
import { MarkedWord } from "./MarkedWord";

/**
 * Two hero directions for side-by-side comparison.
 * - dark:   near-black canvas, off-white type (uses /hero_dark.png, falls back to crystal)
 * - bright: warm light canvas, near-black type (uses /hero_bright.png, falls back to a warm red wash)
 * Swap the backgroundImage filenames once the real generated images land in /public.
 */
export function HeroVariant({ variant }: { variant: "dark" | "bright" }) {
  const dark = variant === "dark";

  const img = dark ? "/hero_dark.png" : "/hero_bright.png";
  // dark image we already have; bright we don't yet — so dark also falls back to the crystal.
  const fallbackImg = dark ? "/hero_remark.png" : "";

  return (
    <section
      className={`relative flex min-h-[100dvh] w-full flex-col overflow-hidden ${
        dark ? "bg-void" : "bg-[#f5f1ed]"
      }`}
    >
      {/* Background stack: color/gradient fallback -> image layer (transparent if file missing) */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-void"
              : "bg-[radial-gradient(120%_120%_at_85%_30%,#e8443a_0%,#c81e1e_30%,#f3c8c0_60%,#f5f1ed_85%)]"
          }`}
        />
        {(fallbackImg || !dark) && (
          <div
            className="absolute inset-0 bg-cover bg-[position:78%_28%] md:bg-right"
            style={{ backgroundImage: `url(${fallbackImg || img})` }}
          />
        )}
        <div
          className="absolute inset-0 bg-cover bg-[position:78%_28%] md:bg-right"
          style={{ backgroundImage: `url(${img})` }}
        />

        {/* Legibility scrims — mobile only on desktop they stay clean */}
        {dark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/65 to-transparent md:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-void/70 to-transparent md:block" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f1ed] via-[#f5f1ed]/70 to-transparent md:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-[#f5f1ed]/80 to-transparent md:block" />
          </>
        )}
      </div>

      {dark && <GrainOverlay className="z-0 opacity-[0.04]" />}

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:px-8 md:pb-0">
        <div className="max-w-2xl">
          <p
            className={`mono animate-fade-in-up text-[11px] uppercase tracking-[0.22em] ${
              dark ? "text-muted" : "text-[#8a3a34]"
            }`}
            style={{ animationDelay: "0.05s" }}
          >
            Digital Solutions Agency
          </p>

          <h1
            className={`mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] ${
              dark ? "text-fg" : "text-[#16100f]"
            }`}
          >
            <span
              className={`block animate-fade-in-up ${
                dark ? "text-muted/70" : "text-[#16100f]/35"
              }`}
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
              <MarkedWord word="Reality" gesture="underline" animateOnLoad delay={900} />
            </span>
          </h1>

          <p
            className={`mt-8 max-w-md animate-fade-in-up text-base leading-relaxed text-pretty md:text-lg ${
              dark ? "text-muted" : "text-[#4a3b38]"
            }`}
            style={{ animationDelay: "0.45s" }}
          >
            Intelligent digital solutions, built end to end.
          </p>

          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-[transform,background-color] duration-300 ease-out-expo hover:bg-accent-bright active:scale-[0.98]"
            >
              Start a project
              <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Variant label (compare only) */}
      <div
        className={`absolute left-6 top-24 z-20 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] md:left-8 ${
          dark
            ? "border-white/15 bg-black/40 text-white/70"
            : "border-black/10 bg-white/60 text-black/60"
        }`}
      >
        {dark ? "Dark · Vibrant" : "Bright · Bold"}
      </div>
    </section>
  );
}
