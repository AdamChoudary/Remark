"use client";

import { MarkedWord } from "./MarkedWord";
import { EdgeGeometry, AccentGlow } from "./SvgPatterns";
import { ScrollReveal } from "./ScrollReveal";
import { SOCIALS, EMAIL } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="relative bg-section-2 overflow-hidden pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36 scroll-mt-24">
      <AccentGlow position="left" size="40%" />
      <div className="absolute right-0 inset-y-0 w-full md:w-1/2 pointer-events-none z-0">
        <img src="/contact_workshop_door.png" alt="" className="h-full w-full object-cover object-center opacity-30 md:opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-bg to-transparent" />
      </div>
      <EdgeGeometry side="left" lines={4} className="bottom-1/4 left-0 z-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <ScrollReveal>
              <h2 className="mb-10 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-fg">
                Ready to <MarkedWord word="scale" /> your digital future.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <a href="/contact" className="group relative inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-base font-medium text-accent-fg transition-[transform,background-color] duration-200 ease-out-expo hover:bg-accent-bright active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent overflow-hidden">
                Start a project
                <svg className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-10">
              <ScrollReveal delay={200}>
                <div className="relative pl-5">
                  <span className="absolute left-0 top-0.5 h-5 w-0.5 bg-accent/60" />
                  <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Address</p>
                  <p className="text-sm leading-relaxed text-muted">
                    Office #104, Mezzanine Floor<br />Embassy Gardens, Sector C1<br />Bahria Enclave, Islamabad
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={280}>
                <div className="relative pl-5">
                  <span className="absolute left-0 top-0.5 h-5 w-0.5 bg-accent/60" />
                  <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Phone</p>
                  <a href="tel:+923268450001" className="block text-sm text-muted transition-colors duration-200 hover:text-fg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">+92 326 8450001</a>
                  <a href="tel:+923268450002" className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-fg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">+92 326 8450002</a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={360}>
                <div className="relative pl-5">
                  <span className="absolute left-0 top-0.5 h-5 w-0.5 bg-accent/60" />
                  <p className="mono mb-3 text-[10px] tracking-[0.2em] text-subtle uppercase">Social</p>
                  <div className="flex flex-wrap gap-6">
                    {[...SOCIALS, { label: "Email", href: `mailto:${EMAIL}` }].map((s) => (
                      <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label} className="text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded">{s.label}</a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
