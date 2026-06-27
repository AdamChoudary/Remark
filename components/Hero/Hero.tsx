'use client';

import { useEffect, useRef } from 'react';
import './Hero.css';
import Button from '../Button/Button';

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mouse-x', `${x}%`);
      hero.style.setProperty('--mouse-y', `${y}%`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-spotlight"></div>

      <div className="container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="mono">Digital Solutions Agency</span>
          </div>

          {/* Main title */}
          <h1 className="hero-title">
            <span className="title-line">
              <span className="title-word">IDEAS</span>
              <span className="title-arrow">→</span>
              <span className="title-word accent">REALITY</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            We don&apos;t just build websites. We craft
            <span className="highlight"> intelligent digital solutions</span> that scale your business.
          </p>

          {/* CTA Group */}
          <div className="hero-cta">
            <Button href="#services" variant="primary" magnetic>
              Our Services <i className="ri-arrow-right-line"></i>
            </Button>
            <Button href="#contact" variant="ghost">
              Start a Project
            </Button>
          </div>

          {/* Trust bar */}
          <div className="hero-trust">
            <span className="trust-label mono">Our Expertise</span>
            <div className="trust-logos">
              <span className="trust-logo">Web Development</span>
              <span className="trust-divider">•</span>
              <span className="trust-logo">Digital Marketing</span>
              <span className="trust-divider">•</span>
              <span className="trust-logo">Creative Production</span>
              <span className="trust-divider">•</span>
              <span className="trust-logo">Brand Identity</span>
              <span className="trust-divider">•</span>
              <span className="trust-logo">Conversational AI</span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label mono">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label mono">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label mono">Support Available</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span className="mono">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
