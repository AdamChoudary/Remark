"use client";

import { SOCIALS, EMAIL } from "@/data/social";
import { DirectionalLiquidButton } from "./DirectionalLiquidButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-void text-fg overflow-hidden border-t border-white/[0.05] pt-16">
      
      {/* 
        Clean & Professional Background Image Layer 
        Using abstract material study for a high-end, clean architectural vibe
      */}
      <div className="absolute inset-x-0 top-0 h-[80%] opacity-20 mix-blend-screen pointer-events-none">
        <img 
          src="/abstract_material_study.png" 
          alt="Professional Background"
          className="w-full h-full object-cover object-top grayscale-[0.2]"
        />
        {/* Seamless fade to solid black */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/60 to-void" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      </div>

      {/* Container - Ultra Clean Grid Layout */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 flex flex-col relative z-10 min-h-[700px]">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-8">
          {/* Logo Badge */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.02] backdrop-blur-md transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
              <img 
                src="/rs logo.png" 
                alt="Remark Studio Icon" 
                className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
          </a>

          {/* Tagline Pill */}
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-[family:var(--font-mono)] border border-white/[0.08] px-6 py-3 rounded-full bg-white/[0.01] shadow-sm backdrop-blur-md">
            <span className="text-accent">WORK </span>
            <span className="text-white">FAST. </span>
            <span className="text-accent">BUILD </span>
            <span className="text-white">SLOW.</span>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 w-full mb-24 border-t border-white/[0.08] pt-16">
          
          {/* MENU Column */}
          <div className="flex flex-col">
            <h3 className="font-bold text-[10px] sm:text-xs tracking-[0.25em] mb-6 uppercase font-[family:var(--font-mono)] text-white/50">
              01 // MENU
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Capabilities", href: "/#capabilities" },
                { label: "Work", href: "/work" },
                { label: "About Studio", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-fg/80 hover:text-white hover:translate-x-1.5 transition-all duration-300 text-sm md:text-base font-medium inline-block font-[family:var(--font-manrope)]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS Column */}
          <div className="flex flex-col">
            <h3 className="font-bold text-[10px] sm:text-xs tracking-[0.25em] mb-6 uppercase font-[family:var(--font-mono)] text-white/50">
              02 // SOLUTIONS
            </h3>
            <ul className="space-y-4">
              {["Web Development", "AI Voice Agents", "Enterprise CRM & ERP", "Brand Identity Design"].map((service) => (
                <li key={service}>
                  <span className="text-fg/80 cursor-default text-sm md:text-base font-medium inline-block transition-colors hover:text-white font-[family:var(--font-manrope)]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS Column */}
          <div className="flex flex-col">
            <h3 className="font-bold text-[10px] sm:text-xs tracking-[0.25em] mb-6 uppercase font-[family:var(--font-mono)] text-white/50">
              03 // SOCIALS
            </h3>
            <ul className="space-y-4">
              {[...SOCIALS, { label: "Direct Email", href: `mailto:${EMAIL}` }].map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.href} 
                    target={social.href.startsWith("http") ? "_blank" : undefined} 
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-fg/80 hover:text-white hover:translate-x-1.5 transition-all duration-300 text-sm md:text-base font-medium inline-block font-[family:var(--font-manrope)]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INQUIRY Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-bold text-[10px] sm:text-xs tracking-[0.25em] mb-6 uppercase font-[family:var(--font-mono)] text-white/50">
                04 // INQUIRY
              </h3>
              <p className="text-sm text-fg/70 mb-8 leading-relaxed max-w-[200px] font-[family:var(--font-manrope)]">
                Ready to transform your digital presence? We are available for select partnerships.
              </p>
            </div>
            
            <div className="pb-2">
              <DirectionalLiquidButton 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-[11px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent/10 active:scale-95 group w-max font-[family:var(--font-mono)]"
              >
                <span className="relative z-10">Start a project</span>
              </DirectionalLiquidButton>
            </div>
          </div>

        </div>

        {/* Massive Logo Image (Replacing the giant text) */}
        <div className="w-full relative flex justify-center items-end select-none pointer-events-none mb-10 pt-4 px-4 sm:px-10 mt-auto">
          {/* Subtle glow behind the logo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
          
          <img 
            src="/rs logo.png" 
            alt="Remark Studio" 
            className="w-full max-w-[1000px] h-auto object-contain opacity-90 transition-transform duration-1000 hover:scale-[1.01]" 
          />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6" />

        {/* Minimal Sub-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-subtle font-mono tracking-widest uppercase gap-4 sm:gap-0 pb-6">
          <p>© {new Date().getFullYear()} Remark Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <span className="text-white/10">•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <span className="text-white/10">•</span>
            <button 
              onClick={scrollToTop} 
              className="text-accent hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span> Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
