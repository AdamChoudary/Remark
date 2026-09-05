"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedRemarkLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "monolithic";
}

export function AnimatedRemarkLogo({ className = "", size = "monolithic" }: AnimatedRemarkLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Responsive font size scales based on variant
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl sm:text-7xl",
    monolithic: "text-[clamp(3.5rem,13vw,11.5rem)]",
  };

  const studioSizeClasses = {
    sm: "text-xl -bottom-1 right-0",
    md: "text-3xl -bottom-2 right-1",
    lg: "text-5xl -bottom-3 right-2",
    monolithic: "text-[clamp(2.5rem,10vw,8.5rem)] -bottom-[0.15em] right-[0.05em]",
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer group ${className}`}
    >
      {/* Ambient Red Studio Backdrop Glow on Hover */}
      <div
        className={`absolute -inset-10 rounded-full bg-accent/20 blur-3xl transition-opacity duration-700 pointer-events-none ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main Container for Overlayed Logo Typography */}
      <div className="relative inline-block leading-none py-4">
        {/* Monumental REMARK Bold Sans Typography */}
        <span
          className={`block font-black tracking-[0.04em] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${sizeClasses[size]}`}
          style={{
            fontFamily: "var(--font-display), var(--font-manrope), sans-serif",
            background: hovered
              ? "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.18) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
          }}
        >
          REMARK
        </span>

        {/* Expressive Red Handwritten Studio Cursive Script (Matching /rs logo.png) */}
        <span
          className={`absolute font-normal text-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-[0_4px_25px_rgba(235,30,30,0.5)] ${studioSizeClasses[size]}`}
          style={{
            fontFamily: "var(--font-betha), cursive",
            transform: isVisible
              ? hovered
                ? "rotate(-4deg) scale(1.08) translate(4px, -4px)"
                : "rotate(-6deg) scale(1) translate(0, 0)"
              : "rotate(-12deg) scale(0.8) translate(-10px, 10px)",
            opacity: isVisible ? 1 : 0,
            transitionProperty: "transform, opacity, filter",
          }}
        >
          Studio
        </span>

        {/* Dynamic Animated Liquid Stroke Effect Overlaying Studio */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eb1e1e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff5555" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
