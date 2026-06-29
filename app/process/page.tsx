'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import './Process.css';

const steps = [
  { id: '01', title: 'Discovery', desc: 'We learn your business, your goals, your audience. Research phase, 1-2 weeks.', stat: 'Deep Research' },
  { id: '02', title: 'Strategy', desc: 'We craft the roadmap. Architecture, sitemaps, tech stack decisions. 1 week.', stat: 'Roadmap Defined' },
  { id: '03', title: 'Design', desc: 'Visual direction, wireframes, high-fidelity mockups. 2-3 weeks.', stat: 'Design Complete' },
  { id: '04', title: 'Development', desc: 'Build, integrate, test. We code everything. 4-8 weeks depending on scope.', stat: 'Fully Built' },
  { id: '05', title: 'Launch & Grow', desc: 'Deploy, optimize, monitor. We don\'t disappear after launch. Ongoing.', stat: 'Live & Evolving' },
];

const stats = [
  { number: '50+', label: 'Projects' },
  { number: '2-Week', label: 'Avg Delivery' },
  { number: '15', label: 'Disciplines' },
  { number: '4.9★', label: 'Rating' },
];

export default function ProcessPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-page" ref={sectionRef}>
      <Header />
      <main>
        <section className="process-hero section-top-line">
          <div className="process-hero-spotlight" />
          <div className="container">
            <div className="process-hero-content">
              <h1 className="reveal">Our Process</h1>
              <p className="process-hero-subtitle reveal reveal-delay-1">
                From discovery to launch — how we deliver remarkable results
              </p>
              <div className="process-steps-dots reveal reveal-delay-2">
                {steps.map((step, i) => (
                  <div key={step.id} className="process-dot-item">
                    <span className="process-dot" />
                    {i < steps.length - 1 && <span className="process-dot-line" />}
                  </div>
                ))}
              </div>
              <div className="process-steps-labels">
                {steps.map((step) => (
                  <span key={step.id} className="process-dot-label micro">{step.title}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process-timeline-section section-top-line">
          <div className="container">
            <div className="process-timeline">
              {steps.map((step, i) => (
                <div key={step.id} className={`process-step reveal ${i % 2 === 0 ? '' : 'reveal-delay-1'}`}>
                  <div className="process-step-box">
                    <div className="process-step-left">
                      <span className="process-step-number">{step.id}</span>
                    </div>
                    <div className="process-step-right">
                      <h3>{step.title}</h3>
                      <p className="body">{step.desc}</p>
                      <span className="process-step-stat micro">{step.stat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-stats-section section-top-line">
          <div className="container">
            <div className="process-stats-bar glass reveal">
              {stats.map((stat) => (
                <div key={stat.label} className="process-stat-item">
                  <span className="process-stat-number">{stat.number}</span>
                  <span className="process-stat-label micro">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-cta section-top-line">
          <div className="container">
            <div className="process-cta-content reveal">
              <h2>Ready to start your project?</h2>
              <p className="process-cta-subtitle">Let&apos;s build something remarkable together</p>
              <Button variant="primary" className="process-cta-btn">
                Start a Project <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
