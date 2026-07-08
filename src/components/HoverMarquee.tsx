"use client";
import React, { useState } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, 
  SiFigma, SiGraphql, SiTailwindcss, SiPython, 
  SiStripe, SiSupabase, SiVercel, SiFramer,
  SiKubernetes, SiDocker, SiObsidian, SiDjango,
  SiFastapi, SiFirebase, SiAirtable, SiTensorflow
} from "react-icons/si";

const TECH_STACK = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Stripe", Icon: SiStripe, color: "#008CDD" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Framer", Icon: SiFramer, color: "#0055FF" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Obsidian", Icon: SiObsidian, color: "#483699" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Airtable", Icon: SiAirtable, color: "#18BFFF" },
  { name: "AI Agents", Icon: SiTensorflow, color: "#FF6F00" }
];

export function HoverMarquee({ children }: { children: React.ReactNode }) {

  // 20 items perfectly spaced across a 3200px path
  const ITEMS = [...TECH_STACK];
  const DURATION = 40; // 40s duration maintains the exact same smooth 80px/sec speed

  return (
    <div className="relative inline-block cursor-default group">
      <div className="relative inline-block transition-all duration-500 text-ink">
        {children}
      </div>
      
      {/* PARENT WRAPPER: Handles physical drop shadows (which follow the custom curve!) and transforms */}
      <div 
        className="absolute left-[100%] ml-6 top-1/2 flex items-center justify-center z-50 pointer-events-none transition-all duration-700 origin-left"
        style={{
          width: "770px", 
          height: "90px",  
          transform: "translateY(-50%) scale(1)",
          opacity: 1,
          transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
          // CSS drop-shadow hugs the exact SVG curve geometry! 
          // 1st shadow: The deep physical shadow. 2nd shadow: A precise 1px white highlight on the top rim.
          filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.5)) drop-shadow(0 -1px 1px rgba(255,255,255,0.15))"
        }}
      >
        {/* INNER GLASS PANE: Handles the blur, color, and geometric clipping */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden bg-void/70 backdrop-blur-xl"
          style={{
            // The exact physical geometry of the curved pill
            clipPath: "path('M 45 10 Q 385 -10 725 10 A 40 40 0 0 1 725 90 Q 385 70 45 90 A 40 40 0 0 1 45 10 Z')"
          }}
        >
          {/* Seamless Mask Image eliminates ugly gradient blocks */}
          <div 
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
            }}
          >
          {/* 
            CRITICAL MATH FIX:
            3200px path length guarantees exactly 160px spacing for 20 items.
          */}
          {ITEMS.map((tech, i) => {
            const Icon = tech.Icon;
            
            // MATH FIX: Delay -54.8 places Item 0 (React) exactly at x=800, safely off-screen to the right.
            const delay = -54.8 + (i * (DURATION / ITEMS.length));
            
            return (
              <div 
                key={i} 
                className="absolute left-0 top-0 flex items-center gap-3 shrink-0"
                style={{
                  // 3200px path: Left Extension + Smooth Cubic Arch (flattened at edges) + Right Extension
                  // The cubic 'C' curves guarantee a 0-degree tangent at x=45 and x=725, eliminating the 'tickle up' rotation snap.
                  offsetPath: "path('M -1215 50 L 45 50 C 215 50 215 40 385 40 C 555 40 555 50 725 50 L 1985 50')",
                  offsetRotate: "auto", 
                  animation: `offset-travel ${DURATION}s linear infinite reverse`,
                  // Using standard React animationDelay to prevent hydration crash
                  animationDelay: `${delay}s`
                }}
              >
                <Icon className="w-5 h-5 drop-shadow-md" style={{ color: tech.color }} />
                <span className="text-[15px] font-mono tracking-widest text-white/95 uppercase drop-shadow-md">
                  {tech.name}
                </span>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
