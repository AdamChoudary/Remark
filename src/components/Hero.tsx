"use client";

import { useRef } from "react";
import { GrainOverlay } from "./SvgPatterns";

function DirectionalLiquidButton({ href, className, style, children }: any) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const liquidRef = useRef<HTMLSpanElement>(null);

  const getEdge = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return "bottom";
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const top = y;
    const bottom = rect.height - y;
    const left = x;
    const right = rect.width - x;
    
    const min = Math.min(top, bottom, left, right);
    if (min === top) return "top";
    if (min === bottom) return "bottom";
    if (min === left) return "left";
    return "right";
  };

  const getStartPositions = (edge: string) => {
    if (edge === "top") return { top: "-150px", left: "50%" };
    if (edge === "bottom") return { top: "calc(100% + 150px)", left: "50%" };
    if (edge === "left") return { top: "50%", left: "-150px" };
    return { top: "50%", left: "calc(100% + 150px)" };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const startPos = getStartPositions(edge);
    
    const el = liquidRef.current;
    el.style.transition = "none";
    el.style.top = startPos.top;
    el.style.left = startPos.left;
    
    // Force reflow
    void el.offsetWidth;
    
    // Animate the wave sliding slowly into the center
    el.style.transition = "all 1600ms cubic-bezier(0.2, 1, 0.3, 1)";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%) rotate(180deg)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const exitPos = getStartPositions(edge);
    
    // Animate out slowly towards the exact edge the mouse left from
    const el = liquidRef.current;
    el.style.transition = "all 1400ms cubic-bezier(0.2, 1, 0.3, 1)";
    el.style.top = exitPos.top;
    el.style.left = exitPos.left;
    el.style.transform = "translate(-50%, -50%) rotate(0deg)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`group relative overflow-hidden transition-all duration-[1000ms] hover:border-transparent ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Heavy Foreground Wave */}
      <span
        ref={liquidRef}
        className="pointer-events-none absolute -z-10 block h-64 w-64 rounded-[42%] bg-accent"
        style={{
          top: "calc(100% + 150px)",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      />
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden bg-void text-left">
      <img
        src="/Image Quality Improvement 2K Jul 06.jpeg"
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
        fetchPriority="high"
      />
      <GrainOverlay className="opacity-[0.5]" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-transparent md:from-void/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-8 md:pb-32 lg:pb-40">
        
        {/* Screen Reader Only Heading */}
        <h1 className="sr-only">Creative Intelligence</h1>
        
        {/* Decorative Visual Layout */}
        <div aria-hidden="true" className="flex flex-col gap-4 md:gap-2 md:-translate-y-4 lg:-translate-y-8">
          
          {/* Top Row: "Creative" + Button */}
          <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <span className="block animate-fade-in-up text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.8] tracking-normal text-fg drop-shadow-md transition-opacity hover:opacity-80" style={{ fontFamily: 'var(--font-betha), sans-serif', animationDelay: "0.1s" }}>
              Creative
            </span>
            
            <div className="animate-fade-in-up md:-translate-y-8 lg:-translate-y-10" style={{ animationDelay: "0.4s" }}>
              <DirectionalLiquidButton
                href="#contact"
                className="inline-flex shrink-0 items-center gap-5 rounded-full border-[1.5px] border-accent/80 bg-white/[0.02] px-9 py-[1.125rem] text-[13px] font-bold uppercase tracking-[0.2em] text-fg shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 hover:border-transparent hover:shadow-2xl active:scale-[0.97]"
                style={{ fontFamily: 'var(--font-body), sans-serif' }}
              >
                <span className="relative z-10 -translate-y-px transition-colors duration-500 group-hover:text-white">Start a project</span>
                <span className="relative z-10 -translate-y-px text-accent transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </DirectionalLiquidButton>
            </div>
          </div>
          
          {/* Bottom Row: "Intelligence" */}
          <span className="block animate-fade-in-up text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.8] tracking-normal text-fg drop-shadow-md ml-2 md:ml-32 lg:ml-40" style={{ fontFamily: 'var(--font-betha), sans-serif', animationDelay: "0.25s" }}>
            Intelligence
          </span>
          
        </div>
        
      </div>

      <div className="absolute inset-x-0 top-20 z-20 mx-auto flex w-full max-w-7xl justify-end px-6 md:top-24 lg:top-28 md:px-8">
        <div className="max-w-xs text-right animate-fade-in-up md:max-w-sm" style={{ animationDelay: "0.45s" }}>
          <p className="text-base leading-relaxed text-muted text-pretty md:text-lg">
            Merging high-end design with advanced AI and digital engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
