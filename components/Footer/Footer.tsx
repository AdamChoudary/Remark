'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import './Footer.css';

function Footer() {
  const footerRef = useReveal(0.2);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand reveal">
            <h3 className="footer-name">Remark Studio</h3>
            <p className="footer-tagline">Digital Solutions Agency</p>
            <p className="footer-copy">&copy; 2026 Remark Studio</p>
          </div>
          <div className="footer-col reveal reveal-delay-1">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#services" className="footer-link">Website Dev</a></li>
              <li><a href="#services" className="footer-link">Voice AI</a></li>
              <li><a href="#services" className="footer-link">Chat Bots</a></li>
              <li><a href="#services" className="footer-link">CRM</a></li>
              <li><a href="#services" className="footer-link">Marketing</a></li>
            </ul>
          </div>
          <div className="footer-col reveal reveal-delay-2">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-list">
              <li><Link href="/process" className="footer-link">Process</Link></li>
              <li><Link href="/#capabilities" className="footer-link">Capabilities</Link></li>
              <li><Link href="/#contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col reveal reveal-delay-3">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-socials">
              <a href="https://instagram.com/remark_studios" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
              <span className="footer-social-divider" aria-hidden="true">/</span>
              <a href="https://tiktok.com/@remark.studio" target="_blank" rel="noopener noreferrer" className="footer-social-link">TikTok</a>
              <span className="footer-social-divider" aria-hidden="true">/</span>
              <a href="https://wa.me/923268450001" target="_blank" rel="noopener noreferrer" className="footer-social-link">WhatsApp</a>
              <span className="footer-social-divider" aria-hidden="true">/</span>
              <a href="mailto:hello@remarkstudio.agency" className="footer-social-link">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-newsletter reveal">
          <p className="footer-newsletter-heading">Get insights delivered to your inbox</p>
          <div className="footer-newsletter-form">
            <input id="footer-email" type="email" placeholder="Your email address" className="footer-newsletter-input" name="email" autoComplete="email" />
            <button className="footer-newsletter-btn" aria-label="Subscribe">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="mailto:hello@remarkstudio.agency" className="footer-link">hello@remarkstudio.agency</a>
            <a href="tel:+923268450001" className="footer-link">+92-3268450001</a>
          </div>
          <span className="footer-status">Available for projects</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
