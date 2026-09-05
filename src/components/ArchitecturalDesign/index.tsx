"use client";

import { LiquidDistortionImage } from "./LiquidDistortionImage";
import { DirectionalLiquidButton } from "../DirectionalLiquidButton";
import { HoleBackground } from "./HoleBackground";

export function ArchitecturalDesign() {
  return (
    <section 
      id="architectural-design" 
      className="relative w-full bg-[#0b0d10] text-white overflow-hidden min-h-[640px] lg:min-h-[820px] flex items-stretch"
    >
      {/* Top Organic Curve Transition from Narrative #E6DFD6 into #0b0d10 */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none text-[#E6DFD6]">
        <svg 
          viewBox="0 0 1440 60" 
          fill="currentColor" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-16 lg:h-20 transform rotate-180"
        >
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Full-Bleed Edge-to-Edge Grid: Touches top, bottom, and left edges 100% */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
        
        {/* Left Side: WebGL Image Stage displaying Tomandjarry.jpg with Shery Liquid Distortion */}
        <div className="lg:col-span-7 relative w-full h-[520px] sm:h-[640px] lg:h-full overflow-hidden">
          <LiquidDistortionImage
            imageSrc="/Tomandjarry.jpg"
            alt="Tom & Jerry Sales Acceleration"
            className="w-full h-full"
          />
        </div>

        {/* Right Side: Editorial Text Panel Wrapped in HoleBackground (Dark Tone) */}
        <div className="lg:col-span-5 relative w-full h-full">
          <HoleBackground 
            strokeColor="#525866" 
            particleRGBColor={[220, 220, 220]}
            className="w-full h-full min-h-[480px] lg:min-h-full"
          >
            <div className="relative px-8 sm:px-12 lg:px-16 py-20 lg:py-32 flex flex-col justify-center space-y-6 h-full">
              
              {/* Main Serif Growth Headline */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight">
                Increase your sales <br />
                10x faster.
              </h2>

              {/* Subtitle Body Text */}
              <p className="text-white/70 text-base sm:text-lg font-sans font-light leading-relaxed max-w-md">
                High-converting kinetic websites, automated sales pipelines, and high-performance AI growth engines designed to print real business results.
              </p>

              {/* Hero Section Directional Liquid Fill Button */}
              <div className="pt-4">
                <DirectionalLiquidButton
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-4 md:gap-5 rounded-full border-[1.5px] border-accent/80 bg-white/[0.02] px-7 py-3 md:px-9 md:py-[1.125rem] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 hover:border-transparent hover:shadow-2xl active:scale-[0.97]"
                  style={{ fontFamily: 'var(--font-body), sans-serif' }}
                >
                  <span className="relative z-10 -translate-y-px transition-colors duration-500 group-hover:text-white">
                    Start closing deals
                  </span>
                  <span className="relative z-10 -translate-y-px text-accent transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </DirectionalLiquidButton>
              </div>

            </div>
          </HoleBackground>
        </div>

      </div>

      {/* Bottom Organic Curve Transition into WorkPreview */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none text-[#E6DFD6]">
        <svg 
          viewBox="0 0 1440 60" 
          fill="currentColor" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-16 lg:h-20"
        >
          <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>

    </section>
  );
}
