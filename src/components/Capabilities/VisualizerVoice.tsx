"use client";

import { useEffect, useState } from "react";

export function VisualizerVoice() {
  const [active, setActive] = useState(true);
  const [transcriptIdx, setTranscriptIdx] = useState(0);
  const [db, setDb] = useState(-18);

  const transcripts = [
    "Recognized: 'Book executive consultation for tomorrow at 2 PM'",
    "Synthesizing voice response using ElevenLabs Turbo v2.5...",
    "Audio stream dispatched over WebRTC. Zero packet loss.",
  ];

  useEffect(() => {
    if (!active) return;
    const tInterval = setInterval(() => {
      setTranscriptIdx((prev) => (prev + 1) % transcripts.length);
    }, 3200);
    const dbInterval = setInterval(() => {
      setDb(Math.floor(-24 + Math.random() * 12));
    }, 400);
    return () => {
      clearInterval(tInterval);
      clearInterval(dbInterval);
    };
  }, [active]);

  return (
    <div className="relative w-full max-w-[460px] h-[390px] rounded-2xl border border-white/10 bg-void/95 text-white backdrop-blur-2xl shadow-2xl flex flex-col justify-between p-5 overflow-hidden">
      
      {/* Top HUD Header */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${active ? "bg-accent animate-pulse" : "bg-white/30"}`} />
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Voice Engine 01</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="text-white/40">LEVEL:</span>
          <span className="text-accent font-bold">{active ? `${db} dB` : "MUTED"}</span>
        </div>
      </div>

      {/* Speech-to-Text Live Transcript */}
      <div className="w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/10 my-2 text-xs font-mono text-white/90 min-h-[52px] flex items-center gap-2">
        <span className="text-accent font-bold">›</span>
        <span className="animate-pulse">{active ? transcripts[transcriptIdx] : "Voice engine suspended. Click microphone to resume."}</span>
      </div>

      {/* Central Audio Frequency Spectrum */}
      <div className="relative w-full flex-1 flex items-center justify-center gap-2 px-2 my-2">
        <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        {[35, 65, 40, 85, 100, 70, 90, 45, 95, 55, 80, 60, 85, 30].map((height, i) => (
          <div
            key={i}
            className="w-2.5 rounded-full bg-gradient-to-t from-white/10 to-accent transition-all duration-300"
            style={{
              height: active ? `${height}%` : "10%",
              animation: active ? `pulse 1.1s ease-in-out infinite ${i * 0.07}s` : "none"
            }}
          />
        ))}
      </div>

      {/* Control Footer */}
      <div className="w-full flex items-center justify-between bg-white/[0.04] border border-white/10 rounded-xl p-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActive(!active)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all cursor-pointer ${active ? "bg-accent text-white shadow-lg shadow-accent/30 hover:scale-105" : "bg-white/10 text-white/50 hover:bg-white/20"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          </button>
          <div>
            <div className="text-xs font-mono font-medium text-white">{active ? "REALTIME SPEECH PIPELINE" : "STANDBY"}</div>
            <div className="text-[10px] font-mono text-white/40">OPENAI REALTIME + WEBRTC</div>
          </div>
        </div>
        <span className="font-mono text-xs font-bold text-accent">24kHz</span>
      </div>
    </div>
  );
}

