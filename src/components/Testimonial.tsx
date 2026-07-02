"use client";

import { MarkedWord } from "./MarkedWord";
import { AccentGlow } from "./SvgPatterns";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonial() {
  return (
    <section className="relative bg-void overflow-hidden pt-20 pb-14 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20">
      {/* Testimonial backdrop atmosphere image */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-12 bg-cover bg-center mix-blend-screen"
        style={{ backgroundImage: `url('/testimonial_atmosphere.png')` }}
      />

      <AccentGlow position="right" size="45%" className="z-10" />

      {/* Giant decorative quote mark */}
      <span className="pointer-events-none absolute left-4 top-4 select-none font-display text-[clamp(8rem,25vw,20rem)] font-semibold leading-none text-accent/[0.05] md:left-8 md:top-8 z-10">
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 z-10">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Quote side — the quote leads, attribution follows, metrics land last:
              reading order and reveal order match. */}
          <div className="md:col-span-9">
            <ScrollReveal>
              <blockquote className="font-display text-[clamp(1.6rem,3.2vw,2.8rem)] font-normal leading-[1.2] tracking-[-0.01em] text-fg max-w-[50ch]">
                They didn&rsquo;t just build our platform &ndash; they transformed how we
                operate. The voice agent alone cut our support response time by 70%.
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-12 bg-accent/60" />
                <p className="text-sm text-muted">
                  Enterprise Client &ndash; SaaS Startup &middot; Series A
                </p>
              </div>
            </ScrollReveal>

            {/* Asymmetric metrics: two at lower-left (hidden on mobile, stacked below on mobile) */}
            <div className="hidden md:flex gap-16 mt-16">
              <ScrollReveal delay={280}>
                <p className="font-display text-4xl font-medium text-fg tabular-nums">2 Wk</p>
                <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Delivery</p>
              </ScrollReveal>
              <ScrollReveal delay={360}>
                <p className="font-display text-4xl font-medium text-fg tabular-nums">4.9</p>
                <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Rating</p>
              </ScrollReveal>
            </div>
          </div>

          {/* Large offset metric on the right (overlapping quote's bottom area on desktop) */}
          <div className="md:col-span-3 md:col-start-10 md:self-end md:-translate-y-8 md:translate-x-4">
            <ScrollReveal delay={440}>
              <div className="text-left md:text-right">
                <p className="font-display text-6xl md:text-7xl font-semibold text-fg tabular-nums leading-none">
                  100%
                </p>
                <p className="mt-3 text-[10px] tracking-[0.18em] text-subtle uppercase md:whitespace-nowrap">
                  Client <MarkedWord word="Satisfaction" gesture="underline" />
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Mobile-only metrics stack */}
          <div className="grid grid-cols-2 gap-8 md:hidden mt-8 border-t border-border-subtle pt-8">
            <div>
              <p className="font-display text-3xl font-medium text-fg tabular-nums">2 Wk</p>
              <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Delivery</p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium text-fg tabular-nums">4.9</p>
              <p className="mt-1 text-[9px] tracking-[0.15em] text-subtle uppercase">Avg. Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
