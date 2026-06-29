'use client';

import { useReveal } from '@/hooks/useReveal';
import './Testimonial.css';

function Testimonial() {
  const sectionRef = useReveal(0.2);

  return (
    <section className="testimonial section-top-line" ref={sectionRef}>
      <div className="container">
        <div className="testimonial-layout reveal">
          <div className="testimonial-rule" aria-hidden="true" />
          <blockquote className="testimonial-quote">
            <p className="testimonial-text">
              Remark Studio didn&apos;t just build us a website&mdash;they built us a
              complete digital ecosystem. Voice agents, chatbots, CRM&mdash;everything
              works seamlessly together.
            </p>
          </blockquote>
          <div className="testimonial-attribution reveal reveal-delay-1">
            <span className="testimonial-author">Enterprise Client</span>
            <span className="testimonial-divider" aria-hidden="true" />
            <span className="testimonial-role">SaaS Startup</span>
          </div>
          <div className="testimonial-divider-rule" aria-hidden="true" />
          <div className="testimonial-stats reveal reveal-delay-2">
            <div className="testimonial-stat">
              <span className="testimonial-stat-value">4.9</span>
              <span className="testimonial-stat-label">Client Rating</span>
            </div>
            <div className="testimonial-stat">
              <span className="testimonial-stat-value">2 Weeks</span>
              <span className="testimonial-stat-label">Average Delivery</span>
            </div>
            <div className="testimonial-stat">
              <span className="testimonial-stat-value">100%</span>
              <span className="testimonial-stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
