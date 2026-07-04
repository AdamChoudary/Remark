"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Flush top bar, sitting directly on the page — no floating card, no blur, no corner
          chrome. The scrim has to hold up over BOTH registers now that sections genuinely
          alternate light/dark (not just a safety net for one dark hero) — strong enough
          through the actual nav row's height, not just at the very top edge. */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-36 bg-gradient-to-b from-void/85 via-void/60 to-transparent" />

      <header className="fixed inset-x-0 top-0 z-50 px-6 py-5 md:px-8 md:py-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/rs logo.png"
              alt="Remark Studio"
              className="h-8 w-auto md:h-9 transition-transform duration-300 ease-out-expo group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm tracking-wide text-fg/85 transition-colors duration-200 hover:text-fg
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent
                  after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100
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
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg
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
      </header>

      {/* Mobile drawer */}
      <div
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col bg-void/98 backdrop-blur-xl
          transition-[opacity,transform] duration-400 ease-out-expo md:hidden overscroll-contain
          ${menuOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-6"
          }`}
      >
        <nav className="relative flex flex-1 flex-col items-center justify-center gap-12">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold tracking-wide text-fg
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
            className="block w-full rounded-full bg-accent py-4 text-center text-lg font-medium text-accent-fg
              transition-[transform,background-color] duration-200 ease-out-expo
              hover:bg-accent-bright active:scale-[0.96]"
          >
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
