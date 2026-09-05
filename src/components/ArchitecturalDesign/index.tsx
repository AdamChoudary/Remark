"use client";

import { LiquidDistortionImage } from "./LiquidDistortionImage";
import { MagneticButton } from "./MagneticButton";
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
            strokeColor="#333333" 
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

              {/* Pill Outline CTA Button with Shery.js Magnet attraction */}
              <div className="pt-4">
                <MagneticButton href="#contact" strength={0.35}>
                  <span>Start closing deals</span>
                </MagneticButton>
              </div>

            </div>
          </HoleBackground>
        </div>

      </div>

      {/* Bottom Organic Curve Transition into WorkPreview */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none text-[#0b0d10]">
        <svg 
          viewBox="0 0 1440 60" 
          fill="currentColor" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-16 lg:h-20"
        >
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" />
        </svg>
      </div>

    </section>
  );
}
