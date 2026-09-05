"use client";

export function RightTextPanel() {
  return (
    <div className="relative w-full h-full min-h-[440px] lg:min-h-[580px] bg-[#0c0e12] rounded-2xl border border-white/10 p-8 sm:p-12 flex flex-col justify-between overflow-hidden text-white shadow-2xl">
      
      {/* Background Subtle Gradient Mesh & Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Ambient Red Glow Halo */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-bold text-white/70 uppercase tracking-widest">
            DIGITAL REALITY ARCHITECTURE
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/40">03 / ARCHITECTURE</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-8 space-y-6">
        
        {/* Monumental Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08] tracking-tight">
          Transform your <br />
          <span className="italic font-serif text-accent font-normal">digital presence.</span>
        </h2>

        {/* Editorial Subtitle */}
        <p className="text-base sm:text-lg font-mono text-white/70 max-w-md font-light leading-relaxed">
          From zero to extraordinary. Let&apos;s create your digital reality with bespoke kinetic engineering and spatial narrative.
        </p>

        {/* Interactive Pill CTA Button (matching Image Reference) */}
        <div className="pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/30 bg-white/5 hover:bg-white text-white font-mono text-sm font-medium transition-all duration-300 hover:text-black group shadow-lg"
          >
            <span>Send a message</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>

      {/* Footer System Telemetry */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/40">
        <span>REMARK STUDIO • ARCHITECTURAL DESIGN</span>
        <span className="text-accent font-bold">ACTIVE DEPLOYMENT</span>
      </div>

    </div>
  );
}
