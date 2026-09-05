"use client";

import { useEffect, useState } from "react";

export function VisualizerProduction() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lut, setLut] = useState<"log" | "rec709" | "kodak">("rec709");
  const [frames, setFrames] = useState(14);

  useEffect(() => {
    setMounted(true);
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setFrames((prev) => (prev + 1) % 60);
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const lutStyleMap = {
    log: "brightness-75 contrast-75 saturate-50",
    rec709: "brightness-100 contrast-100 saturate-100",
    kodak: "brightness-105 contrast-125 saturate-125 sepia-[0.15]",
  };

  return (
    <div className="relative w-full max-w-[440px] h-[380px] flex items-center justify-center">
      <div 
        className={`relative w-full h-full rounded-2xl bg-void border border-white/10 overflow-hidden flex flex-col shadow-2xl transition-all duration-700 ease-out-expo ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Cinema Viewport with Dynamic Color Grade */}
        <div className={`flex-1 bg-gradient-to-b from-void via-ink to-void relative overflow-hidden flex items-center justify-center transition-all duration-500 ${lutStyleMap[lut]}`}>
          
          {/* Camera Viewfinder Crosshairs */}
          <div className="absolute inset-x-12 top-1/2 h-px bg-white/20" />
          <div className="absolute inset-y-12 left-1/2 w-px bg-white/20" />
          <div className="absolute w-36 h-36 border border-white/20 rounded-full" />
          <div className="absolute w-2 h-2 border-t border-l border-accent -top-1 -left-1" />
          
          {/* Center Interactive Play/Pause Button HUD */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center pl-0.5 backdrop-blur-md shadow-[0_0_30px_rgba(190,38,38,0.4)] cursor-pointer hover:scale-110 transition-transform text-white z-20"
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
          
          {/* Top Cinema Overlay */}
          <div className="absolute top-0 w-full h-10 bg-void/80 backdrop-blur-sm flex items-center justify-between px-4 border-b border-white/10 z-10">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? "bg-accent animate-pulse" : "bg-white/40"}`} />
              <span className="font-mono text-[10px] text-white tracking-widest uppercase font-bold">{isPlaying ? "REC" : "PAUSED"}</span>
            </div>
            <span className="font-mono text-[10px] text-white/80 tracking-widest font-bold">00:14:23:{String(frames).padStart(2, "0")}</span>
          </div>

          {/* LUT Color Grade Selector */}
          <div className="absolute bottom-12 left-4 flex gap-1 z-20 bg-void/80 p-1 rounded-lg border border-white/10 backdrop-blur-md">
            {(["log", "rec709", "kodak"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLut(l)}
                className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded uppercase transition-all ${lut === l ? "bg-accent text-white" : "text-white/60 hover:text-white"}`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Bottom Cinema Overlay */}
          <div className="absolute bottom-0 w-full h-10 bg-void/90 backdrop-blur-sm flex items-center justify-between px-4 border-t border-white/10 z-10">
            <span className="font-mono text-[9px] text-white/60 tracking-widest uppercase font-semibold">ARRI ALEXA 35</span>
            <span className="font-mono text-[9px] text-accent tracking-widest uppercase font-bold">8K 120FPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
