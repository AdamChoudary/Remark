'use client';

import { useReveal } from '@/hooks/useReveal';
import './CTA.css';

function CTA() {
  const sectionRef = useReveal(0.2);

  return (
    <section id="contact" className="cta section-top-line" ref={sectionRef}>
      <div className="container">
        <div className="cta-layout">
          {/* Left */}
          <div className="cta-main reveal">
            <span className="cta-eyebrow">Get in Touch</span>
            <h2 className="cta-heading">Let&apos;s work together</h2>
            <p className="cta-desc">
              From strategy to execution&mdash;we build digital ecosystems that scale.
            </p>
            <a href="mailto:hello@remarkstudio.agency" className="cta-email">
              hello@remarkstudio.agency
            </a>
            <span className="cta-phone">+92-3268450001</span>
          </div>

          {/* Right */}
          <div className="cta-side reveal reveal-delay-1">
            <div className="cta-office">
              <span className="cta-office-label">Office</span>
              <span className="cta-office-address">Embassy Gardens, Islamabad</span>
            </div>
            <a className="cta-button btn btn-primary" href="mailto:hello@remarkstudio.agency">
              Start your project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="cta-socials">
              <a href="https://instagram.com/remark_studios" target="_blank" rel="noopener noreferrer" className="cta-social-link">Instagram</a>
              <span className="cta-social-divider" aria-hidden="true">/</span>
              <a href="https://tiktok.com/@remark.studio" target="_blank" rel="noopener noreferrer" className="cta-social-link">TikTok</a>
              <span className="cta-social-divider" aria-hidden="true">/</span>
              <a href="https://wa.me/923268450001" target="_blank" rel="noopener noreferrer" className="cta-social-link">WhatsApp</a>
              <span className="cta-social-divider" aria-hidden="true">/</span>
              <a href="mailto:hello@remarkstudio.agency" className="cta-social-link">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
