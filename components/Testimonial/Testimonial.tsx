'use client';

import { useEffect, useRef } from 'react';
import './Testimonial.css';

function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonial" ref={sectionRef}>
      <div className="container">
        <div className="testimonial-content">
          {/* Quote mark */}
          <div className="quote-mark reveal">&quot;</div>

          {/* Quote */}
          <blockquote className="testimonial-quote reveal reveal-delay-1">
            Remark Studio didn&apos;t just build us a website—they built us a
            <em> complete digital ecosystem</em>.
            Voice agents, chatbots, CRM — everything works seamlessly together.
          </blockquote>

          {/* Author */}
          <div className="testimonial-author reveal reveal-delay-2">
            <div className="author-avatar">
              <i className="ri-user-3-line"></i>
            </div>
            <div className="author-info">
              <span className="author-name">Enterprise Client</span>
              <span className="author-title mono">SaaS Startup • Series A</span>
            </div>
          </div>

          {/* Metrics bar */}
          <div className="metrics-bar reveal reveal-delay-3">
            <div className="metric-item">
              <span className="metric-value">4.9</span>
              <span className="metric-label mono">Avg. Rating</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-value">2 Wk</span>
              <span className="metric-label mono">Avg. Delivery</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-value">100%</span>
              <span className="metric-label mono">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
