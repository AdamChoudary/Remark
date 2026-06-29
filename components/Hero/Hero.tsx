'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import './Hero.css';

const SERVICES = [
  'Web Development', 'Digital Marketing', 'Social Media',
  'Graphic Design', 'Video Production', 'Brand Identity',
  'AI Agents', 'CRM & ERP',
];

function Hero() {
  const sectionRef = useReveal(0.1);

  return (
    <section className="hero" ref={sectionRef}>
      {/* Rail — the editorial apparatus (spine) */}
      <div className="hero-rail" aria-hidden="true">
        <span className="hero-rail-num">01</span>
        <span className="hero-rail-kicker">Digital Solutions Studio</span>
        <span className="hero-rail-line" />
      </div>

      {/* Eyebrow — left of the stage */}
      <div className="hero-eyebrow reveal">
        <span className="hero-eyebrow-mark">Remark Studio</span>
        <span className="hero-eyebrow-rule" />
        <span className="hero-eyebrow-label">Est. 2024</span>
      </div>

      {/* Status — pinned right */}
      <div className="hero-status reveal">
        <span className="hero-status-dot" aria-hidden="true" />
        <span className="hero-status-label">Available for projects — 2026</span>
      </div>

      {/* Headline — one real h1, the mass grows down-left */}
      <div className="hero-headline">
        <h1 className="hero-title">
          <span className="hero-title-sm reveal">We turn</span>
          <span className="hero-title-lg reveal reveal-delay-1">ideas</span>
          <span className="hero-title-sm hero-title-into reveal reveal-delay-1">into</span>
          <span className="hero-title-lg hero-signature reveal reveal-delay-2">
            reality
            <i className="hero-signature-stroke" aria-hidden="true" />
          </span>
        </h1>
      </div>

      {/* Visual — high-right, deliberately offset down */}
      <div className="hero-visual reveal reveal-delay-2">
        <div className="hero-visual-frame">
          <Image
            src="/abstract_torus_knot.jpg"
            alt="Remark Studio — selected work"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="hero-visual-image"
            priority
          />
        </div>
        <span className="hero-visual-caption">Selected Work — 2026</span>
      </div>

      {/* Action — lead + CTAs, left-weighted */}
      <div className="hero-action reveal reveal-delay-3">
        <p className="hero-lead">
          We engineer premium digital experiences at the intersection of
          design, technology, and strategy — signed by hand.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            View Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#capabilities" className="btn btn-ghost">Explore Capabilities</a>
        </div>
      </div>

      {/* Marquee — full-bleed base */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-fade-left" />
        <div className="hero-marquee-track">
          {[...SERVICES, ...SERVICES].map((item, i) => (
            <span className="hero-marquee-chip" key={i}>
              <span className="hero-marquee-text">{item}</span>
              <svg className="hero-marquee-dot" width="4" height="4" viewBox="0 0 4 4" fill="none" aria-hidden="true">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
        <div className="hero-marquee-fade-right" />
      </div>
    </section>
  );
}

export default Hero;
