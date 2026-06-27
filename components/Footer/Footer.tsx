'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './Footer.css';

function Footer() {
  const footerRef = useRef<HTMLElement>(null);

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

    const elements = footerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-main reveal">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Remark Studio" className="footer-logo" width={120} height={36} />
            <p className="footer-tagline">Digital Solutions Agency</p>
          </div>

          <div className="footer-nav">
            <span className="footer-col-title">Navigation</span>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <span className="footer-col-title">Connect</span>
            <a href="https://www.instagram.com/remark_studios" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@remark.studio" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.facebook.com/remarkstudio1" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://wa.me/923268450001" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:hello@remarkstudio.agency">Email</a>
          </div>
        </div>

        <div className="footer-bottom reveal reveal-delay-1">
          <div className="footer-copy">&copy; 2026 REMARK STUDIO &middot; All Rights Reserved</div>
          <div className="footer-location">
            <i className="ri-map-pin-line"></i>
            Islamabad, Pakistan
          </div>
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
