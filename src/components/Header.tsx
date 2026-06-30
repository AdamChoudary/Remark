"use client";

import { useState, useEffect, useRef } from "react";
import { GridPattern, GrainOverlay } from "./SvgPatterns";

const navLinks = [
  { label: "Services", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 left-0 right-0 h-px pointer-events-none" />
      {/* Top scrim — keeps the nav readable over any hero (dark left or bright red right).
          Fades to nothing by ~8rem; the hero below stays untouched. */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-32 bg-gradient-to-b from-void/90 via-void/45 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <header
        className={`fixed left-1/2 top-0 z-50 w-full max-w-7xl -translate-x-1/2 transition-all duration-500 ease-out-expo px-4 md:px-8
          ${scrolled ? "pt-4" : "pt-6 md:pt-8"}`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ease-out-expo
            ${scrolled ? "rounded-full border border-border-subtle/50 bg-void/75 px-6 py-3 backdrop-blur-xl shadow-2xl shadow-black/60" : "rounded-full border border-transparent bg-transparent px-2 py-2"}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
          >
            <GridPattern size={40} opacity={0.05} />
            <GrainOverlay />
          </div>

          <a href="/" className="relative z-10 flex items-center gap-2 group">
            <img
              src="/rs logo.png"
              alt="Remark Studio"
              className="h-8 w-auto md:h-9 transition-transform duration-300 ease-out-expo group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden relative z-10 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm tracking-wide text-fg/85 transition-colors duration-200 hover:text-fg
                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent
                after:transition-all after:duration-300 after:ease-out-expo hover:after:w-full
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
            >
              {link.label}
            </a>
          ))}
          <span className="pl-6 text-[11px] tracking-[0.18em] text-fg/70 uppercase select-none">
            Available for projects
          </span>
          <a
            href="/contact"
            className="rounded bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg
              transition-[transform,background-color] duration-200 ease-out-expo
              hover:bg-accent-bright active:scale-[0.96]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Connect
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span aria-hidden="true"
            className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span aria-hidden="true"
            className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span aria-hidden="true"
            className={`block h-[1.5px] w-6 bg-fg transition-[transform,opacity] duration-300 ease-out-expo ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-void/98 backdrop-blur-xl
          transition-[opacity,transform] duration-400 ease-out-expo md:hidden overscroll-contain
          ${menuOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-6"
          }`}
      >
        <div className="absolute inset-0">
          <GridPattern size={40} opacity={0.04} />
        </div>
        <nav className="relative flex flex-1 flex-col items-center justify-center gap-12">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light tracking-wide text-fg
                transition-[opacity,transform] duration-300 ease-out-expo hover:text-accent
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="relative p-8">
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full rounded bg-accent py-4 text-center text-lg font-medium text-accent-fg
              transition-[transform,background-color] duration-200 ease-out-expo
              hover:bg-accent-bright active:scale-[0.96]"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
    </>
  );
}
