"use client";

import { useState, useEffect } from "react";
import { DirectionalLiquidButton } from "./DirectionalLiquidButton";
import { BubbleNavButton } from "./BubbleNavButton";

const navLinks = [
  { label: "Services", href: "#capabilities" },
  { label: "Work", href: "/work" },
  { label: "About", href: "#contact" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] ${scrolled ? "top-5" : "top-0 py-5 md:py-8"}`}>
        <div 
          className={`mx-auto flex w-full items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] ${
            scrolled 
              ? "max-w-5xl rounded-full border border-white/[0.08] bg-void/70 px-6 py-3.5 backdrop-blur-xl" 
              : "max-w-7xl rounded-none border-transparent bg-transparent px-2 py-0"
          }`}
        >
          
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <a href="/" className="flex items-center gap-2 group z-10">
              <img src="/rs logo.png" alt="Remark Studio" className={`w-auto transition-all duration-500 ease-out-expo group-hover:scale-[1.02] ${scrolled ? "h-6 md:h-7" : "h-8 md:h-9"}`} />
            </a>
          </div>
          
          {/* Center: Navigation */}
          <nav className="hidden md:flex flex-none justify-center items-center gap-1 lg:gap-3">
            {navLinks.map((link) => (
              <BubbleNavButton
                key={link.label}
                href={link.href}
                onClick={(e: any) => { 
                  if (link.href.startsWith("#")) { 
                    e.preventDefault(); 
                    handleLinkClick(link.href); 
                  } 
                }}
                className={`px-5 py-2.5 text-[12px] font-normal uppercase tracking-[0.15em] text-fg/85 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent font-[family:var(--font-body)] ${scrolled ? "text-[11px] tracking-[0.12em]" : ""}`}
                style={{ fontFamily: 'var(--font-body), sans-serif' }}
              >
                <span className={`relative z-10 block ${scrolled ? "mr-[-0.12em]" : "mr-[-0.15em]"}`}>{link.label}</span>
              </BubbleNavButton>
            ))}
          </nav>
          
          {/* Right: Actions */}
          <div className="flex flex-1 justify-end items-center gap-6 z-10">
            <div className="hidden md:flex items-center gap-4">
              <span className={`hidden lg:block font-normal tracking-[0.18em] text-fg/70 uppercase select-none whitespace-nowrap transition-all duration-500 font-[family:var(--font-body)] ${scrolled ? "text-[10px] opacity-0 absolute pointer-events-none" : "text-[11px] opacity-100 relative"}`}>Available for projects</span>
              <DirectionalLiquidButton
                href="/contact"
                className={`inline-flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-accent/80 bg-white/[0.02] font-normal uppercase text-fg shadow-[0_0_15px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-500 hover:border-transparent hover:shadow-2xl active:scale-[0.97] font-[family:var(--font-body)] ${scrolled ? "px-6 py-2 text-[11px] tracking-[0.12em]" : "px-7 py-2.5 text-[12px] tracking-[0.15em]"}`}
                style={{ fontFamily: 'var(--font-body), sans-serif' }}
              >
                <span className={`relative z-10 -translate-y-px transition-colors duration-500 group-hover:text-white ${scrolled ? "mr-[-0.12em]" : "mr-[-0.15em]"}`}>Connect</span>
              </DirectionalLiquidButton>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              <span aria-hidden="true" className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span aria-hidden="true" className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${menuOpen ? "opacity-0" : ""}`} />
              <span aria-hidden="true" className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>
          
        </div>
      </header>
      <div inert={!menuOpen} aria-hidden={!menuOpen} className={`fixed inset-0 z-40 flex flex-col bg-void/98 backdrop-blur-xl transition-[opacity,transform] duration-400 ease-out-expo md:hidden overscroll-contain ${menuOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-6"}`}>
        <nav className="relative flex flex-1 flex-col items-center justify-center gap-12">
          {navLinks.map((link, i) => (
            <a key={link.label} href={link.href} onClick={(e) => { if (link.href.startsWith("#")) { e.preventDefault(); handleLinkClick(link.href); } else { setMenuOpen(false); } }} className="font-display text-3xl font-semibold tracking-wide text-fg transition-[opacity,transform] duration-300 ease-out-expo hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent" style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(16px)" }}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="relative p-8">
          <a href="/contact" onClick={() => setMenuOpen(false)} className="block w-full rounded-full bg-accent py-4 text-center text-lg font-medium text-accent-fg transition-[transform,background-color] duration-200 ease-out-expo hover:bg-accent-bright active:scale-[0.96]">Start a project</a>
        </div>
      </div>
    </>
  );
}
