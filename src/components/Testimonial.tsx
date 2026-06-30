"use client";

import { MarkedWord } from "./MarkedWord";
import { AccentGlow } from "./SvgPatterns";

export function Testimonial() {
  return (
    <section className="section relative bg-void overflow-hidden">
      <AccentGlow position="right" size="45%" />

      {/* Giant decorative quote mark */}
      <span className="pointer-events-none absolute left-4 top-4 select-none font-display text-[clamp(8rem,25vw,20rem)] font-light leading-none text-fg/[0.02] md:left-8 md:top-8">
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Quote side */}
          <div className="md:col-span-9">
            <blockquote className="font-display text-[clamp(1.6rem,3.2vw,2.8rem)] font-light leading-[1.2] tracking-[-0.01em] text-fg max-w-[50ch]">
              They didn&rsquo;t just build our platform &ndash; they transformed how we
              operate. The voice agent alone cut our support response time by 70%.
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-12 bg-accent/60" />
              <p className="text-sm text-muted">
                Enterprise Client &ndash; SaaS Startup &middot; Series A
              </p>
            </div>

            {/* Asymmetric metrics: two at lower-left (hidden on mobile, stacked below on mobile) */}
            <div className="hidden md:flex gap-16 mt-16">
              <div>
                <p className="font-display text-4xl font-light text-fg tabular-nums">2 Wk</p>
                <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Delivery</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-fg tabular-nums">4.9</p>
                <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Rating</p>
              </div>
            </div>
          </div>

          {/* Large offset metric on the right (overlapping quote's bottom area on desktop) */}
          <div className="md:col-span-3 md:col-start-10 md:self-end md:-translate-y-8 md:translate-x-4">
            <div className="text-left md:text-right">
              <p className="font-display text-6xl md:text-7xl font-light text-fg tabular-nums leading-none">
                100%
              </p>
              <p className="mt-3 text-[10px] tracking-[0.18em] text-subtle uppercase md:whitespace-nowrap">
                Client <MarkedWord word="Satisfaction" gesture="underline" />
              </p>
            </div>
          </div>

          {/* Mobile-only metrics stack */}
          <div className="grid grid-cols-2 gap-8 md:hidden mt-8 border-t border-border-subtle pt-8">
            <div>
              <p className="font-display text-3xl font-light text-fg tabular-nums">2 Wk</p>
              <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Delivery</p>
            </div>
            <div>
              <p className="font-display text-3xl font-light text-fg tabular-nums">4.9</p>
              <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
