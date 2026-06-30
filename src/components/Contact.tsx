"use client";

import { MarkedWord } from "./MarkedWord";
import { EdgeGeometry, AccentGlow } from "./SvgPatterns";

export function Contact() {
  return (
    <section id="contact" className="section relative bg-section-2 overflow-hidden">
      <AccentGlow position="left" size="40%" />
      <EdgeGeometry side="right" lines={6} className="top-1/4 right-0" />
      <EdgeGeometry side="left" lines={4} className="bottom-1/4 left-0" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* CTA side */}
          <div className="md:col-span-6">
            <h2 className="mb-10 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.02em] text-fg">
              Ready to <MarkedWord word="scale" /> your digital future.
            </h2>
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded bg-accent px-10 py-4 text-base font-medium text-accent-fg
                transition-[transform,background-color] duration-200 ease-out-expo
                hover:bg-accent-bright active:scale-[0.96]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
            >
              Start a project
              <svg className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Contact details */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-10">
              <div>
                <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Address</p>
                <p className="text-sm leading-relaxed text-muted">
                  Office #104, Mezzanine Floor<br />
                  Embassy Gardens, Sector C1<br />
                  Bahria Enclave, Islamabad
                </p>
              </div>
              <div>
                <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Phone</p>
                <a
                  href="tel:+923268450001"
                  className="block text-sm text-muted transition-colors duration-200 hover:text-fg
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  +92 326 8450001
                </a>
                <a
                  href="tel:+923268450002"
                  className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-fg
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  +92 326 8450002
                </a>
              </div>
              <div>
                <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Social</p>
                <div className="flex flex-wrap gap-6">
                  {["Instagram", "TikTok", "WhatsApp", "Facebook", "Email"].map((s) => (
                    <a
                      key={s}
                      href={s === "Email" ? "mailto:hello@remarkstudio.co" : "#"}
                      aria-label={s}
                      className="text-sm text-muted transition-colors duration-200 hover:text-accent
                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
