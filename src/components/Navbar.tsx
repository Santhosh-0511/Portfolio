import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Command } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ── Fixed Scroll Progress Bar (Top of Viewport) ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          zIndex: 9999,
          background: 'linear-gradient(90deg, #6366F1 0%, #38BDF8 50%, #10B981 100%)',
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: '0% 50%',
          transition: 'transform 0.08s linear',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.25s ease',
          backgroundColor: scrolled ? 'rgba(8, 11, 17, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <nav
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '0.85rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#about"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#F8FAFC',
              }}
            >
              santhosh<span style={{ color: '#38BDF8' }}>.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            className="md-nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  color: '#94A3B8',
                  textDecoration: 'none',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F8FAFC';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Quick Command HUD Trigger */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              title="Open Command HUD (⌘K)"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                e.currentTarget.style.color = '#38BDF8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <Command size={13} />
              <span>⌘K</span>
            </button>

            {/* Resume Button */}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.35)';
              }}
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: '#F8FAFC',
                cursor: 'pointer',
              }}
              className="md-nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '1rem 1.5rem 1.5rem',
              backgroundColor: 'rgba(8, 11, 17, 0.96)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Responsive Media Query CSS for Desktop vs Mobile Nav */}
      <style>{`
        @media (min-width: 768px) {
          .md-nav-desktop {
            display: flex !important;
          }
          .md-nav-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
