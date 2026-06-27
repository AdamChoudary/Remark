'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Header.css';
import GlassSurface from '../GlassSurface';
import Button from '../Button/Button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <GlassSurface
        className="header"
        width="min(1200px, 90%)"
        height="auto"
        borderRadius={40}
        borderWidth={0}
        opacity={0.8}
        blur={12}
        displace={0.3}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        mixBlendMode="screen"
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
        }}
      >
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo-link">
              <Image src="/logo.png" alt="Remark Studio" className="logo" width={140} height={40} priority />
            </a>

            <div className="nav-center">
              <ul className="nav-links">
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#process" className="nav-link">Process</a></li>
                <li><a href="#capabilities" className="nav-link">Capabilities</a></li>
              </ul>
            </div>

            <div className="nav-right">
              <span className="nav-status">
                <span className="status-dot"></span>
                <span className="mono">Available</span>
              </span>
              <Button href="#contact" variant="primary">
                Get Started
              </Button>
            </div>

            <button
              className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </GlassSurface>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <a href="#services" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">01</span>
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">02</span>
                Process
              </a>
            </li>
            <li>
              <a href="#capabilities" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">03</span>
                Capabilities
              </a>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <div className="mobile-status">
              <span className="status-dot"></span>
              <span className="mono">Available for projects</span>
            </div>
            <Button href="#contact" variant="primary" onClick={handleNavClick}>
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
