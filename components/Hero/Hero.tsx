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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const revealElements = hero.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-spotlight"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow reveal">
            <span className="eyebrow-line"></span>
            <span className="mono">DIGITAL SOLUTIONS AGENCY</span>
          </div>

          <h1 className="hero-title reveal reveal-delay-1">
            <span className="title-line">
              <span className="title-word">IDEAS</span>
              <span className="title-arrow">→</span>
              <span className="title-word accent">REALITY</span>
            </span>
          </h1>

          <p className="hero-subtitle reveal reveal-delay-2">
            We transform ambitious visions into digital experiences that captivate, convert, and endure.
          </p>

          <div className="hero-cta reveal reveal-delay-3">
            <Button href="#services" variant="primary">
              Our Services
            </Button>
            <Button href="#contact" variant="ghost">
              Start a Project
            </Button>
          </div>
        </div>

        <div className="hero-stats reveal reveal-delay-4">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label mono">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">120+</span>
            <span className="stat-label mono">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">8</span>
            <span className="stat-label mono">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll reveal reveal-delay-5">
        <span className="mono">SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
