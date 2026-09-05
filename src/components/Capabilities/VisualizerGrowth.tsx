"use client";

import { useEffect, useState } from "react";

export function VisualizerGrowth() {
  const [mounted, setMounted] = useState(false);
  const [model, setModel] = useState<"prophet" | "montecarlo" | "arima">("prophet");

  const modelMap = {
    prophet: { path: "M0,140 C100,140 160,90 260,100 C340,110 370,20 400,0", fill: "M0,160 L0,140 C100,140 160,90 260,100 C340,110 370,20 400,0 L400,160 Z", rev: "$842,500", growth: "+342.8%", kpi: "PROPHET AI ACCURACY" },
    montecarlo: { path: "M0,140 C80,130 140,110 220,70 C300,30 350,40 400,10", fill: "M0,160 L0,140 C80,130 140,110 220,70 C300,30 350,40 400,10 L400,160 Z", rev: "$1,120,000", growth: "+480.2%", kpi: "MONTE CARLO OPTIMISTIC" },
    arima: { path: "M0,140 C120,150 180,120 280,80 C340,40 380,30 400,20", fill: "M0,160 L0,140 C120,150 180,120 280,80 C340,40 380,30 400,20 L400,160 Z", rev: "$760,200", growth: "+298.5%", kpi: "ARIMA CONSERVATIVE" },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const active = modelMap[model];

  return (
    <div className={`relative w-full max-w-[480px] h-[390px] bg-void/95 text-white rounded-2xl border border-white/10 shadow-2xl backdrop-blur-2xl transition-all duration-700 ease-out-expo ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} p-5 flex flex-col justify-between overflow-hidden`}>
      
      {/* Chart Header */}
      <div className="flex justify-between items-end pb-3 border-b border-white/10">
        <div>
          <div className="text-[10px] uppercase font-mono font-bold tracking-widest text-white/40 mb-1">AGGREGATE REVENUE</div>
          <div className="text-3xl font-display font-medium text-white leading-none">{active.rev}</div>
        </div>
        <div className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono text-xs font-bold">{active.growth}</div>
      </div>

      {/* Model Selector Bar */}
      <div className="flex justify-between items-center my-2 text-[10px] font-mono">
        <span className="text-white/40">FORECAST MODEL:</span>
        <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
          {(["prophet", "montecarlo", "arima"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={`px-2 py-0.5 rounded font-bold uppercase transition-all cursor-pointer ${model === m ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative my-2 min-h-[140px]">
        {/* Background Grid */}
        <div className="absolute inset-0 border-l border-b border-white/10" />
        <div className="absolute left-0 bottom-1/3 w-full h-px bg-white/5" />
        <div className="absolute left-0 bottom-2/3 w-full h-px bg-white/5" />

        {/* SVG Curve */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 160">
          <defs>
            <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <path 
            d={active.fill} 
            fill="url(#growthGrad)"
            className="transition-all duration-700 ease-out-expo"
          />
          
          {/* Exponential Line */}
          <path 
            d={active.path} 
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-700 ease-out-expo"
          />
          
          {/* Endpoint Node */}
          <circle 
            cx="400" cy="10" r="5" 
            fill="white" stroke="var(--color-accent)" strokeWidth="3"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Footer Meta */}
      <div className="flex justify-between items-center text-[10px] font-mono text-white/50 pt-3 border-t border-white/10">
        <span className="font-bold text-accent">{active.kpi}</span>
        <span>CONFIDENCE: 98.4%</span>
      </div>
    </div>
  );
}

