"use client";

import { useEffect, useRef } from "react";
import { MarkedWord } from "./MarkedWord";
import { AccentGlow } from "./SvgPatterns";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Animated counter that counts from 0 to target when it enters the viewport.
 * Cubic ease-out for a natural settling feel.
 */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();
          let rafId: number;

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${Math.round(eased * value)}${suffix}`;
            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            }
          };

          rafId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Testimonial() {
  return (
    <section className="relative bg-void overflow-hidden pt-20 pb-14 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/testimonial_atmosphere.png')`,
          opacity: 0.08,
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%)",
        }}
      />

      <AccentGlow position="right" size="45%" className="z-10" />

      <span className="pointer-events-none absolute left-4 top-4 select-none font-display text-[clamp(8rem,25vw,20rem)] font-semibold leading-none text-accent/[0.05] md:left-8 md:top-8 z-10">
        &ldquo;
      </span>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 z-10">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12">
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

          <div className="md:col-span-3 md:col-start-10 md:self-end md:-translate-y-8 md:translate-x-4">
            <ScrollReveal delay={440}>
              <div className="text-left md:text-right">
                <p className="font-display text-6xl md:text-7xl font-semibold text-fg leading-none">
                  <Counter value={100} suffix="%" />
                </p>
                <p className="mt-3 text-[10px] tracking-[0.18em] text-subtle uppercase md:whitespace-nowrap">
                  Client <MarkedWord word="Satisfaction" gesture="underline" />
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-8 md:hidden mt-8 pt-8">
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
