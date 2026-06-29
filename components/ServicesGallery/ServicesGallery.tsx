'use client';

import { useEffect, useRef, useState } from 'react';
import './ServicesGallery.css';
import { useScrollContext } from '../ScrollProvider';
import { workItems, categories as panelTitles } from '@/data/services';

const PANEL_SIZE = 3;
type WorkItem = typeof workItems[number];
const panels: WorkItem[][] = [];
for (let i = 0; i < workItems.length; i += PANEL_SIZE) {
  panels.push(workItems.slice(i, i + PANEL_SIZE));
}

function ServicesGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const { isDesktop } = useScrollContext();

  useEffect(() => {
    if (!isDesktop) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let kill: (() => void) | null = null;

    async function setup() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'none' } });
        tl.to(track, { xPercent: -(panels.length - 1) * 100, ease: 'none' });

        ScrollTrigger.create({
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: `+=${panels.length * 100}%`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          animation: tl,
          onUpdate: (self) => {
            const raw = self.progress * (panels.length - 1);
            setActivePanel(Math.round(Math.max(0, Math.min(panels.length - 1, raw))));
          },
        });
      }, section!);

      kill = () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };

      ScrollTrigger.refresh();
    }

    setup();
    return () => kill?.();
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    const el = sectionRef.current;
    el?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section id="services" className="services-gallery" ref={sectionRef}>
      <div className="services-track" ref={trackRef}>
        {panels.map((panel, i) => (
          <div key={i} className="services-panel">
            <div className="panel-body">
              {i === 0 && <span className="badge panel-badge">Signature Experience</span>}
              <div className="panel-header-row">
                <span className="panel-number mono">
                  {String(i + 1).padStart(2, '0')}/{String(panels.length).padStart(2, '0')}
                </span>
                <span className="panel-number-sep">—</span>
                <h3 className="panel-title">{panelTitles[i]}</h3>
              </div>
              <div className="panel-divider" />
              <div className="panel-services">
                {panel.map((item) => (
                  <div key={item.index} className="panel-service">
                    <div className="panel-service-left">
                      <span className="panel-service-index mono">{item.index}</span>
                      <div className="panel-service-info">
                        <span className="panel-service-text">{item.title}</span>
                        <span className="panel-service-category micro">{item.category}</span>
                      </div>
                    </div>
                    <div className="panel-service-right">
                      <span className="panel-service-metric micro">{item.metric}</span>
                      <span className="panel-service-arrow micro">→</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="panel-desc">
                {i === panels.length - 1
                  ? 'All 15 services — from websites to AI. We deliver end-to-end across every discipline.'
                  : panel[0].description}
              </p>
              {i === panels.length - 1 && (
                <div className="panel-cta-card glass-light">
                  <span className="badge panel-cta-card-badge">All 15 Services</span>
                  <h4 className="panel-cta-card-heading">End-to-end delivery</h4>
                  <a href="#contact" className="panel-cta-link">
                    <span>See how we deliver</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-bar" aria-hidden="true">
        <div className="gallery-bar-dots">
          {panels.map((_, i) => (
            <span
              key={i}
              className={`gallery-bar-dot${i <= activePanel ? ' active' : ''}`}
            />
          ))}
        </div>
        <span className="gallery-bar-label micro">
          {String(activePanel + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}

export default ServicesGallery;
