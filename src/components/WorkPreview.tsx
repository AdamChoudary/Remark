"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { DirectionalLiquidButton } from "./DirectionalLiquidButton";

const workItems = [
  {
    id: "01",
    name: "AI Voice Agents",
    category: "Conversational AI",
    tagline: "Intelligent voice agents for customer support.",
    image: "/work_ai_voice_agents.png",
  },
  {
    id: "02",
    name: "Web Development",
    category: "Engineering",
    tagline: "Custom-built, high-conversion web apps.",
    image: "/work_web_development.png",
  },
  {
    id: "03",
    name: "Digital Marketing",
    category: "Growth",
    tagline: "Data-driven performance campaigns.",
    image: "/work_digital_marketing.png",
  },
  {
    id: "04",
    name: "Media Production",
    category: "Cinematic",
    tagline: "Professional film, color grading & VFX.",
    image: "/work_media_production.png",
  },
  {
    id: "05",
    name: "Branding & Identity",
    category: "Design",
    tagline: "Core visual assets & design systems.",
    image: "/work_branding_identity.png",
  },
  {
    id: "06",
    name: "Material Systems",
    category: "Spatial",
    tagline: "Architectural material research.",
    image: "/abstract_material_study.png",
  },
  {
    id: "07",
    name: "Structural Form",
    category: "Architecture",
    tagline: "Futuristic physical forms.",
    image: "/architecture_structure.png",
  },
  {
    id: "08",
    name: "Studio Workspace",
    category: "Environment",
    tagline: "Bespoke digital laboratory.",
    image: "/about_studio_floor.png",
  },
];

export function WorkPreview() {
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  const dragStartX = useRef(0);
  const startRotation = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Screen resize listener for responsive arc radius
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setScreenSize("mobile");
      } else if (w < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    lastXRef.current = clientX;
    startRotation.current = rotationOffset;
    velocityRef.current = 0;
  };

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const deltaX = clientX - dragStartX.current;
      velocityRef.current = (clientX - lastXRef.current) * 0.12;
      lastXRef.current = clientX;
      setRotationOffset(startRotation.current + deltaX * (screenSize === "mobile" ? 0.22 : 0.15));
    },
    [isDragging, screenSize]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Global Window Event Listeners for seamless dragging everywhere
  useEffect(() => {
    if (!isDragging) return;

    const onWindowMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const onWindowMouseUp = () => handleDragEnd();
    const onWindowTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
    const onWindowTouchEnd = () => handleDragEnd();

    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);
    window.addEventListener("touchmove", onWindowTouchMove, { passive: true });
    window.addEventListener("touchend", onWindowTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", onWindowMouseUp);
      window.removeEventListener("touchmove", onWindowTouchMove);
      window.removeEventListener("touchend", onWindowTouchEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // SILKY SMOOTH CONTINUOUS ROTATION - ALWAYS ACTIVE & NEVER STOPS ON HOVER
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = Math.min(32, timestamp - lastTimeRef.current);
      lastTimeRef.current = timestamp;

      // Constant rotational speed (degrees per frame)
      const baseSpeed = 0.035 * (deltaTime / 16.666);

      setRotationOffset((prev) => {
        if (isDragging) {
          return prev;
        }

        if (Math.abs(velocityRef.current) > 0.005) {
          const nextVelocity = velocityRef.current * 0.94;
          velocityRef.current = nextVelocity;
          return prev + nextVelocity + baseSpeed;
        }

        // Always spins continuously without stopping
        return prev + baseSpeed;
      });

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [isDragging]);

  // Calculate 80% Arc Rotation Card Positions
  const cards = useMemo(() => {
    const total = workItems.length;
    const step = 360 / total;

    let R = 540;
    let centerY = 280;

    if (screenSize === "mobile") {
      R = 260;
      centerY = 160;
    } else if (screenSize === "tablet") {
      R = 400;
      centerY = 220;
    }

    return workItems.map((item, index) => {
      const angleDeg = index * step + rotationOffset;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = Math.sin(angleRad) * R;
      const y = centerY - Math.cos(angleRad) * R;
      const rotation = angleDeg;

      const cosVal = Math.cos(angleRad);
      
      // 80% Upper Arc Visibility Cutoff (cosVal >= -0.28)
      let opacity = 0;
      if (cosVal >= -0.28) {
        opacity = Math.min(1, (cosVal + 0.28) / 0.35);
      }

      const scale = Math.max(0.68, Math.min(1.0, 0.78 + cosVal * 0.22));
      const zIndex = Math.round((cosVal + 1) * 50) + 100;

      return {
        ...item,
        x,
        y,
        rotation,
        scale,
        opacity,
        zIndex,
        isVisible: opacity > 0,
      };
    });
  }, [rotationOffset, screenSize]);

  return (
    <section 
      id="work" 
      className="relative w-full bg-[#E6DFD6] text-[#0b0d10] py-16 sm:py-24 lg:py-36 overflow-hidden select-none"
    >
      {/* Soft Ambient Cream Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[500px] sm:h-[750px] rounded-full blur-[140px] sm:blur-[180px] opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(230,223,214,0) 75%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 80% Arc Stage Container */}
        <div
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          className="relative w-full h-[280px] sm:h-[420px] md:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing z-30"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`absolute w-[115px] h-[150px] sm:w-[180px] sm:h-[230px] md:w-[220px] md:h-[275px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-black/15 bg-[#12161f] shadow-2xl group ${
                !card.isVisible ? "pointer-events-none opacity-0" : ""
              }`}
              style={{
                // Pure JS 60fps transform without CSS transition conflict so motion NEVER freezes on hover
                transform: `translate3d(${card.x}px, ${card.y}px, 0px) rotate(${card.rotation}deg) scale(${card.scale})`,
                opacity: card.opacity,
                zIndex: card.zIndex,
              }}
            >
              {/* Inner Wrapper handling Hover Micro-Animations smoothly */}
              <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                {/* Card Image with Hover Zoom */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                />

                {/* Top Glass Badge Indicator */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] sm:text-[9px] font-mono tracking-widest text-white/80 uppercase">
                    {card.id}
                  </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-[10px] sm:text-xs">→</span>
                  </div>
                </div>

                {/* Card Gradient & Typography Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-3 sm:p-5 flex flex-col justify-end transition-opacity duration-300 pointer-events-none">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-0.5 sm:mb-1 transition-transform duration-300 group-hover:-translate-y-0.5">
                    {card.category}
                  </span>
                  <h4 className="text-xs sm:text-base font-serif font-medium text-white leading-snug transition-transform duration-300 group-hover:-translate-y-0.5">
                    {card.name}
                  </h4>
                </div>

                {/* Glossy Sheen Micro Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Central Editorial Content Block - Elevated in upper arch dome */}
        <div className="text-center max-w-3xl mx-auto -mt-10 sm:-mt-24 md:-mt-48 relative z-10 space-y-4 sm:space-y-6 pointer-events-none">
          
          {/* Studio Luxury Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/[0.04] border border-[#0b0d10]/15 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#0b0d10]/80 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Section 04 — Capabilities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0b0d10] tracking-tight leading-[1.15] sm:leading-[1.12] pointer-events-auto">
            Create High-Converting <br />
            Digital Realities Instantly
          </h2>

          <p className="text-[#0b0d10]/70 text-sm sm:text-lg font-sans font-light max-w-xl mx-auto leading-relaxed px-2 sm:px-0 pointer-events-auto">
            Transform your vision into extraordinary visual platforms powered by custom web engineering, kinetic motion, and AI systems.
          </p>

          <div className="pt-2 flex justify-center pointer-events-auto">
            <DirectionalLiquidButton
              href="/work"
              className="inline-flex shrink-0 items-center gap-3 sm:gap-5 rounded-full border-[1.5px] border-accent bg-accent px-6 py-2.5 sm:px-9 sm:py-[1.125rem] text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(255,42,42,0.3)] transition-all duration-500 hover:border-accent hover:shadow-[0_15px_40px_rgba(255,42,42,0.5)] active:scale-[0.97]"
              style={{ fontFamily: 'var(--font-body), sans-serif' }}
            >
              <span className="relative z-10 -translate-y-px text-white transition-colors duration-500">
                Explore All Work
              </span>
              <span className="relative z-10 -translate-y-px text-white transition-all duration-500 group-hover:translate-x-1">
                →
              </span>
            </DirectionalLiquidButton>
          </div>

        </div>

        {/* Clean Bottom 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-[#0b0d10]/15 text-center">
          
          <div className="space-y-2 sm:space-y-3 px-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#0b0d10]/50 uppercase block">
              01 / Architecture
            </span>
            <h3 className="font-serif text-lg sm:text-2xl text-[#0b0d10] font-normal">
              Tailored Engineering
            </h3>
            <p className="text-[#0b0d10]/65 text-xs sm:text-sm font-sans font-light max-w-xs mx-auto leading-relaxed">
              Bespoke digital architecture crafted for ultra-high conversion, speed, and long-term scalabilty.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 px-4 border-t md:border-t-0 md:border-l border-[#0b0d10]/15 pt-6 md:pt-0">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#0b0d10]/50 uppercase block">
              02 / Execution
            </span>
            <h3 className="font-serif text-lg sm:text-2xl text-[#0b0d10] font-normal">
              Rapid Deployment
            </h3>
            <p className="text-[#0b0d10]/65 text-xs sm:text-sm font-sans font-light max-w-xs mx-auto leading-relaxed">
              Agile production pipelines turning high-level design vision into production code seamlessly.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 px-4 border-t md:border-t-0 md:border-l border-[#0b0d10]/15 pt-6 md:pt-0">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#0b0d10]/50 uppercase block">
              03 / Versatility
            </span>
            <h3 className="font-serif text-lg sm:text-2xl text-[#0b0d10] font-normal">
              Diverse Capabilities
            </h3>
            <p className="text-[#0b0d10]/65 text-xs sm:text-sm font-sans font-light max-w-xs mx-auto leading-relaxed">
              Expansive range across 3D spatial graphics, AI agents, branding, and cinematic production.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
