"use client";

import { useRef, useState } from "react";
import { MarkedWord } from "./MarkedWord";
import { ScrollReveal } from "./ScrollReveal";
import { AccentGlow, EdgeGeometry } from "./SvgPatterns";
import { LiquidIconReveal } from "./LiquidIconReveal";

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
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const [activeIndex, setActiveIndex] = useState(0);
  const [solutionProgress, setSolutionProgress] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="process" className="relative bg-[#E6DFD6] pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden border-t border-ink/5">
      
      {/* Cinematic Background Elements (Light Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-[radial-gradient(ellipse_at_top,var(--color-accent-subtle),transparent_70%)] opacity-30 pointer-events-none" />
      <AccentGlow position="center" size="40%" />
      
      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-ink/60 uppercase">The Problem</span>
          <span className="h-px w-16 bg-ink/10" />
        </div>

        <div className="flex flex-col gap-32 lg:gap-40">
          {problems.map((p, i) => {
            const types: ("chat" | "process" | "web")[] = ["chat", "process", "web"];
            const isReverse = i % 2 === 0;
            return (
              <ScrollReveal 
                key={i} 
                delay={i * 100} 
                className={`group flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-24 w-full ${isReverse ? "md:flex-row-reverse" : ""}`}
              >
                
                {/* Problem Content (70% width) */}
                <div className={`flex flex-col gap-5 w-full md:w-[65%] lg:w-[70%] relative z-10`}>
                  {/* Massive Number Index */}
                  <div className="shrink-0 pt-2 mb-2">
                    <span className="font-mono text-2xl md:text-3xl text-ink/20 transition-colors duration-500 group-hover:text-accent">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-tight text-ink text-balance transition-all duration-500">
                    {p.text}
                  </h3>
                  <p className="max-w-2xl text-base md:text-lg leading-relaxed text-ink/70 font-light tracking-wide font-[family:var(--font-body)]">
                    {p.detail}
                  </p>
                </div>

                {/* Liquid Morphing SVG Animation (30% width) */}
                <div className="w-full md:w-[35%] lg:w-[30%] flex justify-center pointer-events-none">
                  <LiquidIconReveal 
                    type={types[i]} 
                    origin={isReverse ? "left" : "right"} 
                    delay={i * 100 + 200} 
                  />
                </div>
                
              </ScrollReveal>
            );
          })}
        </div>

        {/* The Turn / The Solution */}
        <div id="narrative-solution" className="relative border-t border-ink/10 pt-24 mt-32 md:pt-32 md:mt-40">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px w-16 bg-ink/10" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent uppercase">The Solution</span>
          </div>
          
          <ScrollReveal>
            <p className="mb-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.05] tracking-tight text-ink/40">
              <MarkedWord word="Good enough" gesture="strike" /> isn't enough anymore.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <p className="relative font-display text-[clamp(3.5rem,8vw,6rem)] font-normal leading-[1.0] tracking-tight text-ink">
              We build <MarkedWord word="intelligent" /> digital ecosystems.
            </p>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  );
}