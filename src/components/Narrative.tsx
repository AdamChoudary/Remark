"use client";

import { MarkedWord } from "./MarkedWord";
import { ScrollReveal } from "./ScrollReveal";
import { AccentGlow } from "./SvgPatterns";
import { LiquidIconReveal } from "./LiquidIconReveal";
import { LiquidSeparator } from "./LiquidSeparator";
import { HoverMarquee } from "./HoverMarquee";

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
  return (
    <section id="process" className="relative bg-[#E6DFD6] pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden border-t border-ink/5">
      
      {/* Cinematic Background Elements (Light Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-[radial-gradient(ellipse_at_top,var(--color-accent-subtle),transparent_70%)] opacity-30 pointer-events-none" />
      <AccentGlow position="center" size="40%" />
      
      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 flex items-center gap-4">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-ink/60 uppercase">The Problem</span>
          <span className="h-px w-16 bg-ink/10" />
        </div>

        <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
          {problems.map((p, i) => {
            const types: ("chat" | "process" | "web")[] = ["chat", "process", "web"];
            const isReverse = i % 2 === 0;
            return (
              <ScrollReveal 
                key={i} 
                delay={i * 100} 
                className="w-full"
              >
                {/* 
                  Responsive layout: Flex column on mobile for clean full-width reading, 
                  Grid layout on desktop (md+) for exact side-by-side presentation.
                */}
                <div className={`flex flex-col md:grid items-center gap-8 md:gap-12 lg:gap-20 ${
                  isReverse ? "md:grid-cols-[minmax(200px,280px)_1fr]" : "md:grid-cols-[1fr_minmax(200px,280px)]"
                }`}>
                  
                  {isReverse ? (
                    <>
                      {/* Icon Column (Desktop Left, Mobile Top) */}
                      <div className="order-1 flex items-center justify-center pointer-events-none w-full max-w-[240px] mx-auto md:max-w-none">
                        <LiquidIconReveal 
                          type={types[i]} 
                          origin="left" 
                          delay={i * 100 + 200} 
                        />
                      </div>
                      {/* Text Column */}
                      <div className="order-2 flex flex-col gap-4 md:gap-5 relative z-10">
                        <div className="shrink-0 pt-2 mb-1 md:mb-2">
                          <span className="font-mono text-xl md:text-3xl text-ink/30">
                            0{i + 1}
                          </span>
                        </div>
                        <h3 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-normal leading-[1.1] md:leading-[1.05] tracking-tight text-ink text-balance">
                          {p.text}
                        </h3>
                        <p className="max-w-2xl text-sm md:text-lg leading-relaxed text-ink/70 font-light tracking-wide font-[family:var(--font-body)]">
                          {p.detail}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text Column */}
                      <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-5 relative z-10">
                        <div className="shrink-0 pt-2 mb-1 md:mb-2">
                          <span className="font-mono text-xl md:text-3xl text-ink/30">
                            0{i + 1}
                          </span>
                        </div>
                        <h3 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-normal leading-[1.1] md:leading-[1.05] tracking-tight text-ink text-balance">
                          {p.text}
                        </h3>
                        <p className="max-w-2xl text-sm md:text-lg leading-relaxed text-ink/70 font-light tracking-wide font-[family:var(--font-body)]">
                          {p.detail}
                        </p>
                      </div>
                      {/* Icon Column (Desktop Right, Mobile Bottom) */}
                      <div className="order-1 md:order-2 flex items-center justify-center pointer-events-none w-full max-w-[240px] mx-auto md:max-w-none">
                        <LiquidIconReveal 
                          type={types[i]} 
                          origin="right" 
                          delay={i * 100 + 200} 
                        />
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* The Turn / The Solution */}
        <div id="narrative-solution" className="relative pt-12 mt-16 md:pt-16 md:mt-24">
          <LiquidSeparator />
          
          <div className="mb-8 mt-16 md:mt-25 flex items-center gap-4 relative w-max z-50">
            <span className="h-px w-16 bg-ink/10" />
            <HoverMarquee>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent uppercase whitespace-nowrap">The Solution</span>
            </HoverMarquee>
          </div>
          
          <div className="mt-20 md:mt-40">
            <ScrollReveal>
              <div className="mb-4 font-display text-[clamp(2rem,6vw,4rem)] font-normal leading-[1.1] md:leading-[1.05] tracking-tight text-ink/40">
                <MarkedWord word="Good enough" gesture="strike" /> isn't enough anymore.
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <div className="relative font-display text-[clamp(2.75rem,8vw,6rem)] font-normal leading-[1.05] md:leading-[1.0] tracking-tight text-ink">
                We build <MarkedWord word="intelligent" /> digital ecosystems.
              </div>
            </ScrollReveal>
          </div>
        </div>
        
      </div>
    </section>
  );
}