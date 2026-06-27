'use client';

import { useEffect, useRef } from 'react';
import './CTA.css';
import Button from '../Button/Button';

function CTA() {
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
    <section id="contact" className="cta" ref={sectionRef}>
      <div className="cta-grid-bg"></div>
      <div className="container">
        <div className="cta-content reveal">
          <span className="section-label">Ready to scale?</span>
          <h2 className="cta-title">
            Let&apos;s build something<br />
            <span className="text-muted">remarkable.</span>
          </h2>
          <p className="cta-subtitle">
            Tell us about your project and we&apos;ll show you what&apos;s possible.
          </p>
        </div>

        <div className="cta-form-section reveal reveal-delay-1">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="cta-name">Name</label>
                <input id="cta-name" type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cta-email">Email</label>
                <input id="cta-email" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 'var(--space-md)' }}>
              <label className="form-label" htmlFor="cta-service">Service</label>
              <select id="cta-service">
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="voice">Voice Agents</option>
                <option value="crm">CRM & Automation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 'var(--space-lg)' }}>
              <label className="form-label" htmlFor="cta-message">Message</label>
              <textarea id="cta-message" placeholder="Tell us about your project..." />
            </div>

            <div className="form-actions">
              <Button type="submit" variant="primary">
                Send Message <i className="ri-arrow-right-line"></i>
              </Button>
              <span className="form-note">
                or email directly: <a href="mailto:hello@remarkstudio.agency">hello@remarkstudio.agency</a>
              </span>
            </div>
          </form>
        </div>

        <div className="cta-contact-info reveal reveal-delay-2">
          <span><i className="ri-phone-line"></i> <a href="tel:+923268450001">+92-3268450001</a></span>
          <span><i className="ri-phone-line"></i> <a href="tel:+923268450002">+92-3268450002</a></span>
          <span><i className="ri-map-pin-line"></i> Office#104, Mezzanine Floor, Embassy Gardens, Sector C1, Bahria Enclave, Islamabad</span>
        </div>

        <div className="cta-links reveal reveal-delay-3">
          <a href="https://www.instagram.com/remark_studios" target="_blank" rel="noopener noreferrer" className="cta-link">
            <i className="ri-instagram-line"></i>
            <span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@remark.studio" target="_blank" rel="noopener noreferrer" className="cta-link">
            <i className="ri-tiktok-line"></i>
            <span>TikTok</span>
          </a>
          <a href="https://wa.me/923268450001" target="_blank" rel="noopener noreferrer" className="cta-link">
            <i className="ri-whatsapp-line"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
