"use client";

import { GridPattern } from "./SvgPatterns";

export function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-void overflow-hidden">
      <GridPattern size={80} opacity={0.015} />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-16">
          <img
            src="/rs logo.png"
            alt="Remark Studio"
            className="h-9 w-auto md:h-11 img-outline"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-muted">Digital Solutions Agency &middot; Islamabad</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            <p className="text-sm text-muted">Available for projects</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div>
            <p className="mono mb-5 text-[10px] tracking-[0.2em] text-subtle uppercase">Navigation</p>
            <div className="space-y-3.5">
              {[
                { label: "Services", href: "/#capabilities" },
                { label: "Process", href: "/#process" },
                { label: "Capabilities", href: "/#capabilities" },
                { label: "Work", href: "/work" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted transition-colors duration-200 hover:text-fg
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mono mb-5 text-[10px] tracking-[0.2em] text-subtle uppercase">Services</p>
            <div className="space-y-3.5">
              {["Web Development", "Voice Agents", "Chat Bots", "CRM & ERP", "Digital Marketing"].map((s) => (
                <p key={s} className="text-sm text-muted">{s}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="mono mb-5 text-[10px] tracking-[0.2em] text-subtle uppercase">Connect</p>
            <div className="space-y-3.5">
              {["Instagram", "TikTok", "WhatsApp", "Facebook", "Email"].map((s) => (
                <a
                  key={s}
                  href={s === "Email" ? "mailto:hello@remarkstudio.co" : "#"}
                  className="block text-sm text-muted transition-colors duration-200 hover:text-fg
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mono mb-5 text-[10px] tracking-[0.2em] text-subtle uppercase">Contact</p>
            <div className="space-y-3.5 text-sm text-muted">
              <p>Islamabad</p>
              <a
                href="tel:+923268450001"
                className="block transition-colors duration-200 hover:text-fg
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                +92 326 8450001
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border-subtle pt-8">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} Remark Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
