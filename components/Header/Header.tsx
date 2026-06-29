'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return (
    <header
      className={`header${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
    >
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="Remark Studio Home">
          REMARK<span className="header-logo-dot" />
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="#contact" className="header-cta btn btn-sm">
            Start a Project
          </Link>
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="header-hamburger-line" />
            <span className="header-hamburger-line" />
          </button>
        </div>
      </div>

      <div
        className={`header-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`header-mobile${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="header-mobile-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="header-mobile-link"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="header-mobile-link-index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="header-mobile-cta"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}

export default Header;
