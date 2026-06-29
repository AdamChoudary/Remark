'use client';

import { useReveal } from '@/hooks/useReveal';
import './Capabilities.css';

const columns = [
  {
    entries: [
      { title: 'Web Development', desc: 'Property sites, portfolios, SaaS platforms. Modern, responsive, SEO-optimized. Over', metric: '50+', metricLabel: 'projects delivered' },
      { title: 'CRM & ERP', desc: 'End-to-end business system implementation and management across your entire operation. Over', metric: '30+', metricLabel: 'integrations' },
    ],
  },
  {
    entries: [
      { title: 'AI Voice Agents', desc: 'Intelligent voice agents for customer support, call handling, and helpline routing. Over', metric: '200+', metricLabel: 'active deployments' },
      { title: 'Security & Scale', desc: 'Enterprise-grade security posture and infrastructure built to scale with your growth. Over', metric: '40+', metricLabel: 'secured platforms' },
    ],
  },
  {
    entries: [
      { title: 'Chat Bots', desc: 'Conversational bots for 24/7 support, guidance, and lead capture across platforms. Over', metric: '100+', metricLabel: 'chat interfaces' },
      { title: 'Full-Spectrum Digital', desc: 'Strategy to execution across every layer of your digital ecosystem. Over', metric: '60+', metricLabel: 'end-to-end projects' },
    ],
  },
];

function Capabilities() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="capabilities" className="capabilities section-top-line" ref={sectionRef}>
      <div className="container">
        <div className="cap-header reveal">
          <div className="cap-eyebrow-row">
            <span className="cap-eyebrow">Expertise</span>
            <span className="cap-count">06 Services</span>
          </div>
          <h2 className="cap-title">Capabilities</h2>
        </div>

        <div className="cap-columns">
          {columns.map((col, ci) => (
            <div className="cap-column" key={ci}>
              {col.entries.map((entry, ei) => (
                <div className={`cap-entry reveal reveal-delay-${ci * 2 + ei + 1}`} key={ei}>
                  <span className="cap-entry-rule" aria-hidden="true" />
                  <h3 className="cap-entry-title">{entry.title}</h3>
                  <p className="cap-entry-desc">
                    {entry.desc}{' '}
                    <span className="cap-entry-metric">{entry.metric}</span>{' '}
                    {entry.metricLabel}.
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="cap-footer reveal">
          <div className="cap-footer-cta">
            <p className="cap-footer-cta-text">
              Need a custom solution?
            </p>
            <a className="cap-footer-link btn btn-primary" href="#contact">
              Let&rsquo;s talk
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="cap-footer-stats">
            <span className="cap-footer-stat">
              <span className="cap-footer-stat-value">50+</span> Web Projects
            </span>
            <span className="cap-footer-stat-divider" aria-hidden="true" />
            <span className="cap-footer-stat">
              <span className="cap-footer-stat-value">200+</span> AI Deployments
            </span>
            <span className="cap-footer-stat-divider" aria-hidden="true" />
            <span className="cap-footer-stat">
              <span className="cap-footer-stat-value">99.9%</span> Uptime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
