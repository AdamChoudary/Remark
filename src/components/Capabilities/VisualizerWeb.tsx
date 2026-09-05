"use client";

import { useEffect, useState } from "react";

export function VisualizerWeb() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [fps, setFps] = useState(120);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFps(Math.floor(117 + Math.random() * 4));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full max-w-[480px] rounded-2xl border border-white/10 bg-void/95 text-white shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col transition-all duration-700 ease-out-expo ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
      
      {/* Chrome Window Header */}
      <div className="h-11 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <div className="ml-2 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/70 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            remark.studio/app
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
          <button
            onClick={() => setMode("preview")}
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${mode === "preview" ? "bg-accent text-white font-bold" : "text-white/60 hover:text-white"}`}
          >
            Preview
          </button>
          <button
            onClick={() => setMode("code")}
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${mode === "code" ? "bg-accent text-white font-bold" : "text-white/60 hover:text-white"}`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="p-5 flex flex-col gap-4 relative min-h-[300px] justify-between">
        
        {mode === "preview" ? (
          <>
            {/* Viewport Bar */}
            <div className="flex justify-between items-center text-[10px] font-mono">
              <div className="flex items-center gap-2">
                <span className="text-white/40">VIEWPORT:</span>
                <button 
                  onClick={() => setDevice("desktop")}
                  className={`px-2.5 py-0.5 rounded border transition-all cursor-pointer ${device === "desktop" ? "border-accent text-accent bg-accent/10 font-bold" : "border-white/10 text-white/50"}`}
                >
                  1440px
                </button>
                <button 
                  onClick={() => setDevice("mobile")}
                  className={`px-2.5 py-0.5 rounded border transition-all cursor-pointer ${device === "mobile" ? "border-accent text-accent bg-accent/10 font-bold" : "border-white/10 text-white/50"}`}
                >
                  390px
                </button>
              </div>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">{fps} FPS</span>
            </div>

            {/* Dynamic Frame */}
            <div className={`mx-auto transition-all duration-500 border border-white/10 rounded-xl p-4 bg-white/[0.02] ${device === "mobile" ? "w-[240px]" : "w-full"}`}>
              <div className="flex justify-between items-center mb-3">
                <div className="w-6 h-6 rounded-lg bg-accent text-white font-bold text-xs flex items-center justify-center shadow-lg shadow-accent/30">R</div>
                <div className="h-2 w-16 bg-white/20 rounded-full" />
              </div>

              {/* Bento Box UI Node */}
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                  <div className="w-3/4 h-2 bg-white/30 rounded" />
                  <div className="w-1/2 h-1.5 bg-white/15 rounded" />
                </div>
                <div className="p-3 rounded-lg bg-accent text-white shadow-lg shadow-accent/20 flex flex-col justify-between">
                  <span className="text-[9px] font-mono opacity-80">LATENCY</span>
                  <span className="text-lg font-bold font-mono">0.4ms</span>
                </div>
              </div>

              <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg flex items-center justify-between px-3 mt-2">
                <span className="text-[10px] font-mono text-white/70">Server Actions Active</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </>
        ) : (
          /* Animated Code Inspector */
          <div className="w-full h-[250px] bg-black/60 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-hidden flex flex-col justify-between border border-white/10">
            <div className="space-y-1.5">
              <div className="text-white/40">// Server Component - Low Overhead</div>
              <div><span className="text-purple-400">export default async function</span> <span className="text-amber-300">AppEngine</span>() &#123;</div>
              <div className="pl-4 text-white/80"><span className="text-purple-400">const</span> metrics = <span className="text-purple-400">await</span> getTelemetry();</div>
              <div className="pl-4 text-white/80"><span className="text-purple-400">return</span> (</div>
              <div className="pl-8 text-emerald-300">&lt;<span className="text-accent">RemarkEngine</span></div>
              <div className="pl-12 text-blue-300">targetFps=&#123;<span className="text-amber-300">120</span>&#125;</div>
              <div className="pl-12 text-blue-300">ssr=&#123;<span className="text-purple-400">true</span>&#125;</div>
              <div className="pl-8 text-emerald-300">/&gt;</div>
              <div className="pl-4 text-white/80">);</div>
              <div>&#125;</div>
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-white/40">
              <span>TSX • UTF-8</span>
              <span>COMPRESSED: 4.2KB</span>
            </div>
          </div>
        )}

        {/* Footer Meta */}
        <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
          <span>NEXT 16 • TURBOPACK</span>
          <span className="text-emerald-400 font-bold">PRODUCTION READY</span>
        </div>
      </div>
    </div>
  );
}

