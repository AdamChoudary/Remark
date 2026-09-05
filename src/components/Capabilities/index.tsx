"use client";

import { useEffect, useRef, useState } from "react";
import { VisualizerWeb } from "./VisualizerWeb";
import { VisualizerVoice } from "./VisualizerVoice";
import { VisualizerBots } from "./VisualizerBots";
import { VisualizerCRM } from "./VisualizerCRM";
import { VisualizerProduction } from "./VisualizerProduction";
import { VisualizerGrowth } from "./VisualizerGrowth";

export const capabilities = [
  { 
    name: "Web Platforms", 
    tag: "ARCHITECTURE & SAAS",
    desc: "Property sites, portfolios, business platforms & SaaS architectures. We build blazing-fast, responsive web experiences optimized for both users and search engines.",
    Visualizer: VisualizerWeb
  },
  { 
    name: "Voice Agents", 
    tag: "AUTONOMOUS AI VOICE",
    desc: "Intelligent, human-like voice agents that handle inbound customer support, route helplines, and execute outbound marketing campaigns autonomously 24/7.",
    Visualizer: VisualizerVoice
  },
  { 
    name: "Smart Chat Bots", 
    tag: "CONVERSATIONAL AGENTS",
    desc: "Context-aware conversational bots deployed across web, WhatsApp, and social channels to guide users, capture leads, and resolve queries instantly.",
    Visualizer: VisualizerBots
  },
  { 
    name: "CRM & ERP", 
    tag: "OPERATIONAL SYSTEMS",
    desc: "End-to-end operational systems to streamline your business workflow. We customize and integrate enterprise-grade solutions tailored to your exact processes.",
    Visualizer: VisualizerCRM
  },
  { 
    name: "Production", 
    tag: "CINEMATIC & BRANDING",
    desc: "From cinematic video production to brand identity design and high-end photography, we create the visual assets that define industry leaders.",
    Visualizer: VisualizerProduction
  },
  { 
    name: "Growth", 
    tag: "PERFORMANCE & SEO",
    desc: "Data-driven SEO, performance marketing, and social media management that amplify your brand's reach and convert attention into revenue.",
    Visualizer: VisualizerGrowth
  },
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ── KINETIC MARKER PHYSICS REFS ──────────────────────────────────────────
  const markerRef   = useRef<HTMLDivElement>(null);
  const listRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const listWrapRef = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);

  // Physics state for the sliding marker
  const markerTarget  = useRef({ y: 0, h: 0 });
  const markerCurrent = useRef({ y: 0, h: 0 });

  // ── THERMAL STAGING GLOW PHYSICS REFS ─────────────────────────────────────
  const bgGlowRef    = useRef<HTMLDivElement>(null);
  const glowTarget   = useRef({ x: 0, y: 0 });
  const glowCurrent  = useRef({ x: 0, y: 0 });

  // ── SHARED RAF LOOP ───────────────────────────────────────────────────────
  useEffect(() => {
    const snap = () => {
      const el     = listRefs.current[0];
      const parent = listWrapRef.current;
      if (!el || !parent) return;
      const ry = el.offsetTop;
      const rh = el.offsetHeight;
      markerTarget.current  = { y: ry, h: rh };
      markerCurrent.current = { y: ry, h: rh };
    };
    snap();

    const loop = () => {
      // 1 · Kinetic marker — friction 0.18 (matches Hero physics)
      markerCurrent.current.y += (markerTarget.current.y - markerCurrent.current.y) * 0.18;
      markerCurrent.current.h += (markerTarget.current.h - markerCurrent.current.h) * 0.18;

      if (markerRef.current) {
        markerRef.current.style.transform = `translateY(${markerCurrent.current.y}px)`;
        markerRef.current.style.height    = `${markerCurrent.current.h}px`;
      }

      // 2 · Staging glow — friction 0.08
      glowCurrent.current.x += (glowTarget.current.x - glowCurrent.current.x) * 0.08;
      glowCurrent.current.y += (glowTarget.current.y - glowCurrent.current.y) * 0.08;

      if (bgGlowRef.current) {
        bgGlowRef.current.style.setProperty("--gx", `${glowCurrent.current.x}px`);
        bgGlowRef.current.style.setProperty("--gy", `${glowCurrent.current.y}px`);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── GLOBAL MOUSE → STAGING GLOW ──────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = bgGlowRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      glowTarget.current.x = e.clientX - r.left;
      glowTarget.current.y = e.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleEnter = (i: number) => {
    setActiveIndex(i);
    const el = listRefs.current[i];
    if (!el) return;
    markerTarget.current.y = el.offsetTop;
    markerTarget.current.h = el.offsetHeight;
  };

  return (
    <section
      id="capabilities"
      className="relative bg-[#E6DFD6] text-ink overflow-hidden border-t border-ink/10 pt-24 pb-32 md:pt-32 md:pb-40"
    >
      {/* Background Dot Pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="cap-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cap-dots)" />
      </svg>

      {/* Atmospheric Thermal Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.5 0.195 27 / 0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* ── MASTER CONTAINER (Unboxed Full-Bleed Layout) ── */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 z-10">

        {/* ── SECTION HEADER & TITLE ── */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-ink/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase">
                Section 03
              </span>
              <span className="h-px w-12 bg-accent/40" />
              <span className="text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-ink/50 uppercase">
                Capabilities Architecture
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-normal uppercase leading-[0.9] tracking-tight">
              What We <span className="text-accent italic font-betha lowercase text-[clamp(3.5rem,6.5vw,6rem)] leading-[0.4] ml-2 inline-block">build</span>
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-ink/70 font-light leading-relaxed font-[family:var(--font-body)]">
            High-performance digital systems engineered with zero unnecessary friction and maximum operational velocity.
          </p>
        </div>

        {/* ── TWO-COLUMN LAYOUT: Unboxed Spatial Staging ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16 py-12 md:py-16">

          {/* LEFT: Typographic Engineering Index ───────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start relative">
            <div
              ref={listWrapRef}
              className="relative border-t border-ink/10"
            >
              {/* KINETIC MARKER — Molten Red Indicator Bar */}
              <div
                ref={markerRef}
                className="absolute left-0 top-0 w-[4px] bg-accent pointer-events-none z-20 shadow-[0_0_12px_var(--color-accent)]"
                style={{ height: 0, transform: "translateY(0)", willChange: "transform, height" }}
              />

              {capabilities.map((cap, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={cap.name}
                    ref={el => { listRefs.current[i] = el; }}
                    className="relative border-b border-ink/10 cursor-pointer group"
                    onMouseEnter={() => handleEnter(i)}
                    onClick={() => handleEnter(i)}
                  >
                    <div className="pl-6 md:pl-8 pr-6 py-7 md:py-8">

                      {/* Row Header: Mono index + Tag + Name */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span
                              className={`font-mono text-xs md:text-sm tabular-nums tracking-widest transition-colors duration-500
                                ${isActive ? "text-accent font-bold" : "text-ink/30"}`}
                            >
                              0{i + 1}
                            </span>
                            <span 
                              className={`font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
                                isActive ? "text-accent/90 font-medium" : "text-ink/30"
                              }`}
                            >
                              {cap.tag}
                            </span>
                          </div>

                          {/* Arrow Vector */}
                          <span className={`font-mono text-xs transition-all duration-500 ${isActive ? "text-accent translate-x-0 opacity-100" : "text-ink/20 -translate-x-3 opacity-0"}`}>
                            [SELECT →]
                          </span>
                        </div>

                        <h3
                          className={`font-display text-[clamp(1.75rem,3.2vw,2.5rem)] uppercase tracking-tight leading-none transition-all duration-500
                            ${isActive ? "text-ink translate-x-2 font-medium" : "text-ink/40 font-normal"}`}
                        >
                          {cap.name}
                        </h3>
                      </div>

                      {/* Expandable Description */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo
                          ml-0 md:ml-9
                          ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-md text-xs md:text-sm leading-relaxed text-ink/80 font-light font-[family:var(--font-body)] pb-1">
                            {cap.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Floating Seamless Visualizer Stage (Unboxed) ────────── */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-28 h-[460px] md:h-[540px] lg:h-[calc(100vh-180px)] max-h-[700px] w-full flex items-center justify-center relative overflow-hidden">

              {/* Procedural Ambient Heat Glow Canvas */}
              <div
                ref={bgGlowRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle 550px at var(--gx, 50%) var(--gy, 50%), oklch(0.5 0.195 27 / 0.09) 0%, transparent 70%)",
                  willChange: "background",
                }}
              />

              {/* Visualizer Crossfade Pool (Floating without card border) */}
              {capabilities.map((cap, i) => {
                const VisualizerComponent = cap.Visualizer;
                const isActive = activeIndex === i;
                return (
                  <div
                    key={cap.name}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out-expo
                      ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"}`}
                  >
                    {isActive && (
                      <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                        <VisualizerComponent />
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

        </div>{/* end two-col */}
      </div>{/* end max-w-7xl */}
    </section>
  );
}

