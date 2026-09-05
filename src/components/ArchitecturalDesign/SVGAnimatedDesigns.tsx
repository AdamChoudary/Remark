"use client";

import { useEffect, useState } from "react";

export function SVGAnimatedDesigns() {
  const [rotation, setRotation] = useState(0);
  const [nodeIndex, setNodeIndex] = useState(0);

  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 30);

    const nodeInterval = setInterval(() => {
      setNodeIndex((prev) => (prev + 1) % 4);
    }, 2400);

    return () => {
      clearInterval(rotInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  const nodes = [
    { title: "PARAMETRIC TRUSS", coord: "48.29° N, 16.37° E", status: "SYNCHRONIZED" },
    { title: "KINETIC MESH 02", coord: "34.05° N, 118.24° W", status: "COMPUTING" },
    { title: "TENSEGRITY FRAME", coord: "51.50° N, 0.12° W", status: "STABLE" },
    { title: "BIOPHILIC CANOPY", coord: "35.67° N, 139.65° E", status: "OPTIMIZED" },
  ];

  const currentNode = nodes[nodeIndex];

  return (
    <div className="relative w-full h-full min-h-[440px] lg:min-h-[580px] rounded-2xl border border-ink/10 bg-[#E6DFD6] p-6 flex flex-col justify-between overflow-hidden shadow-sm">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#111 1px, transparent 1px),
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }}
      />

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between border-b border-ink/15 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-accent rounded-sm animate-pulse" />
          <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
            SVG KINETIC ENGINE
          </span>
        </div>
        <span className="font-mono text-[10px] text-ink/50 bg-ink/5 px-2 py-0.5 rounded border border-ink/10">
          v4.8 • RECURSIVE
        </span>
      </div>

      {/* Center SVG Animated Structural Wireframe */}
      <div className="relative z-10 my-auto flex items-center justify-center py-6">
        
        {/* Animated Compass & Geometry SVG */}
        <svg 
          viewBox="0 0 320 320" 
          className="w-full max-w-[280px] h-[280px] text-ink overflow-visible"
        >
          <defs>
            <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#111" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Compass Ring */}
          <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "160px 160px" }}>
            <circle cx="160" cy="160" r="130" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.4" />
            <circle cx="160" cy="160" r="145" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 16" strokeOpacity="0.3" />
            
            {/* Ticks on outer ring */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1={160 + 130 * Math.cos((angle * Math.PI) / 180)}
                y1={160 + 130 * Math.sin((angle * Math.PI) / 180)}
                x2={160 + 142 * Math.cos((angle * Math.PI) / 180)}
                y2={160 + 142 * Math.sin((angle * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
            ))}
          </g>

          {/* Reverse Counter Rotating Polygon */}
          <g style={{ transform: `rotate(-${rotation * 1.4}deg)`, transformOrigin: "160px 160px" }}>
            <polygon
              points="160,50 255,215 65,215"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              strokeOpacity="0.7"
            />
            <polygon
              points="160,270 65,105 255,105"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          </g>

          {/* Inner Pulsing Circles & Crosshair */}
          <circle cx="160" cy="160" r="85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="160" cy="160" r="45" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeOpacity="0.8" className="animate-ping origin-center scale-90" />
          
          <line x1="20" y1="160" x2="300" y2="160" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" strokeOpacity="0.4" />
          <line x1="160" y1="20" x2="160" y2="300" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" strokeOpacity="0.4" />

          {/* Center Geometric Core */}
          <rect x="145" y="145" width="30" height="30" fill="none" stroke="var(--color-accent)" strokeWidth="2" style={{ transform: `rotate(${rotation * 2}deg)`, transformOrigin: "160px 160px" }} />
          <circle cx="160" cy="160" r="4" fill="var(--color-accent)" />
        </svg>

        {/* Floating Technical Dimension Callout */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-ink/10 font-mono text-[10px] text-ink/70 flex items-center gap-2 shadow-2xs">
          <span className="text-accent font-bold">R:</span>
          <span>{Math.round(rotation)}°</span>
          <span className="text-ink/30">|</span>
          <span className="text-emerald-700 font-bold">3D MESH</span>
        </div>
      </div>

      {/* Bottom Architectural Node Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-4 flex justify-between items-center shadow-xs">
        <div>
          <div className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">CURRENT MODULE</div>
          <div className="font-display font-medium text-sm text-ink">{currentNode.title}</div>
          <div className="font-mono text-[10px] text-ink/60">{currentNode.coord}</div>
        </div>
        <div className="text-right">
          <span className="px-2.5 py-1 bg-accent/10 text-accent font-mono text-[10px] font-bold rounded border border-accent/20">
            {currentNode.status}
          </span>
        </div>
      </div>

    </div>
  );
}
