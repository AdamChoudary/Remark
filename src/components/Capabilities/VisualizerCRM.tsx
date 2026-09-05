"use client";

import { useEffect, useState } from "react";

export function VisualizerCRM() {
  const [mounted, setMounted] = useState(false);
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "1Y">("1M");
  const [selectedRow, setSelectedRow] = useState<number | null>(0);

  const dataMap = {
    "1D": { arr: "$1.28M", diff: "+0.4% Today", bars: [20, 35, 45, 60, 50, 75, 80] },
    "1W": { arr: "$1.28M", diff: "+4.2% WTD", bars: [40, 55, 60, 70, 65, 85, 90] },
    "1M": { arr: "$1.28M", diff: "+28.4% MoM", bars: [45, 65, 30, 85, 95, 70, 100] },
    "1Y": { arr: "$1.28M", diff: "+142.8% YoY", bars: [30, 50, 70, 80, 85, 90, 100] },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentData = dataMap[timeframe];

  return (
    <div className={`w-full max-w-[480px] h-[390px] rounded-2xl border border-white/10 bg-void/95 text-white shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col justify-between transition-all duration-700 ease-out-expo ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      
      {/* Header telemetry bar */}
      <div className="h-11 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-accent" />
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">ERP Telemetry</span>
        </div>
        
        <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
          {(["1D", "1W", "1M", "1Y"] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${timeframe === tf ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Body */}
      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col justify-between">
            <span className="font-mono text-[10px] text-white/40 uppercase">ARR RUN RATE</span>
            <div className="text-xl font-display font-medium text-white">{currentData.arr}</div>
            <span className="font-mono text-[9px] text-emerald-400 font-semibold">{currentData.diff}</span>
          </div>

          <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col justify-between">
            <span className="font-mono text-[10px] text-white/40 uppercase">PIPELINE VALUE</span>
            <div className="flex items-end gap-1.5 h-7">
              {currentData.bars.map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-accent rounded-xs transition-all duration-500 shadow-xs shadow-accent/40"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Customer Accounts Table */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 flex flex-col gap-1.5">
          {[
            { id: "ACC-091", client: "Aether Systems", status: "Active", val: "$42,000" },
            { id: "ACC-092", client: "Vortex Labs", status: "Pending", val: "$18,500" },
            { id: "ACC-093", client: "Kinetix Global", status: "Active", val: "$95,000" },
          ].map((row, idx) => (
            <div 
              key={row.id} 
              onClick={() => setSelectedRow(idx)}
              className={`flex items-center justify-between py-1.5 px-3 rounded-lg border text-xs font-mono transition-all cursor-pointer ${selectedRow === idx ? "border-accent bg-accent/15 text-white font-bold" : "border-white/5 bg-white/[0.01] hover:bg-white/5 text-white/80"}`}
            >
              <span className="text-white/40 text-[10px]">{row.id}</span>
              <span className="text-white">{row.client}</span>
              <span className="text-accent">{row.val}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Status */}
      <div className="px-4 py-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/40 bg-white/[0.02]">
        <span>CRM API v3.1</span>
        <span className="text-emerald-400 font-semibold">SYNCHRONIZED</span>
      </div>
    </div>
  );
}

