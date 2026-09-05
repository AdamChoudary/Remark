"use client";

import { useEffect, useState } from "react";

export function VisualizerBots() {
  const [mounted, setMounted] = useState(false);
  const [channel, setChannel] = useState<"whatsapp" | "slack" | "web">("whatsapp");
  const [chatLog, setChatLog] = useState([
    { text: "System initialized for channel WhatsApp.", isBot: true },
    { text: "How can I assist your team today?", isBot: true },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrompt = (promptText: string, replyText: string) => {
    if (isTyping) return;
    setChatLog((prev) => [...prev, { text: promptText, isBot: false }]);
    setIsTyping(true);
    setTimeout(() => {
      setChatLog((prev) => [...prev, { text: replyText, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={`w-full max-w-[460px] h-[400px] rounded-2xl border border-white/10 bg-void/95 text-white shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-700 ease-out-expo ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      
      {/* Interactive Channel Header */}
      <div className="h-12 bg-white/[0.03] border-b border-white/10 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Agent Engine v4</span>
        </div>
        <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
          {(["whatsapp", "slack", "web"] as const).map((ch) => (
            <button
              key={ch}
              onClick={() => {
                setChannel(ch);
                setChatLog([
                  { text: `Switched channel to ${ch.toUpperCase()}.`, isBot: true },
                  { text: `Bot ready for ${ch} events.`, isBot: true },
                ]);
              }}
              className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded uppercase transition-all cursor-pointer ${channel === ch ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Log Stream */}
      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-y-auto relative bg-gradient-to-b from-transparent to-white/[0.02]">
        {chatLog.map((msg, i) => (
          <div 
            key={i}
            className={`max-w-[88%] rounded-xl px-3.5 py-2 text-xs font-mono leading-relaxed transition-all
              ${msg.isBot 
                ? "bg-white/10 border border-white/10 text-white self-start rounded-tl-xs" 
                : "bg-accent text-white font-medium self-end rounded-tr-xs shadow-lg shadow-accent/20"}`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="bg-white/10 border border-white/10 text-accent font-mono text-[10px] self-start rounded-xl px-3 py-1.5 animate-pulse flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Agent processing tool query...
          </div>
        )}
      </div>

      {/* Interactive Quick Prompts */}
      <div className="p-3 bg-white/[0.02] border-t border-white/10 space-y-2">
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          <button 
            onClick={() => handlePrompt("Check order #4829 status", "Order #4829 is out for delivery. ETA: 14:30 today.")}
            className="px-2.5 py-1 bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 rounded-lg text-[10px] font-mono text-white/80 whitespace-nowrap transition-all cursor-pointer"
          >
            Order #4829
          </button>
          <button 
            onClick={() => handlePrompt("Query enterprise pricing", "Enterprise tiers start at $2.4k/mo with 99.99% SLA.")}
            className="px-2.5 py-1 bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 rounded-lg text-[10px] font-mono text-white/80 whitespace-nowrap transition-all cursor-pointer"
          >
            Enterprise Pricing
          </button>
          <button 
            onClick={() => handlePrompt("Verify API uptime", "All 14 regional nodes operating at 100% health.")}
            className="px-2.5 py-1 bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 rounded-lg text-[10px] font-mono text-white/80 whitespace-nowrap transition-all cursor-pointer"
          >
            API Uptime
          </button>
        </div>
      </div>
    </div>
  );
}

