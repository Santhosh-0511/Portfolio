import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const roles = [
    'CS Undergraduate @ IIIT Lucknow | Software Developer | AI/ML Enthusiast'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '7.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        textAlign: 'center',
        boxSizing: 'border-box',
        scrollMarginTop: '0px',
      }}
    >
      <div
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ── 1. Live Status Badge Pill ── */}
        <div
          className="hero-enter-1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.2rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(14, 20, 32, 0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            marginBottom: '1.25rem',
          }}
        >
          <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                opacity: 0.75,
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '50%',
                width: '8px',
                height: '8px',
                backgroundColor: '#10B981',
              }}
            />
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#F8FAFC',
              letterSpacing: '0.02em',
            }}
          >
            {PORTFOLIO_DATA.personal.statusBadge}
          </span>
        </div>

        {/* ── 2. Headline Name ── */}
        <h1
          className="hero-enter-2"
          style={{
            fontSize: 'clamp(2.5rem, 6.2vw, 4.8rem)',
            fontWeight: 850,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            marginBottom: '0.75rem',
            color: '#F8FAFC',
          }}
        >
          P Santhosh{' '}
          <span className="gradient-text" style={{ display: 'inline-block' }}>
            Sri Sai Ram
          </span>
        </h1>

        {/* ── 3. Dynamic Typewriter Role ── */}
        <div
          className="hero-enter-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            minHeight: '2rem',
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 2.1vw, 1.3rem)',
              fontWeight: 600,
              color: '#38BDF8',
              letterSpacing: '-0.01em',
            }}
          >
            {displayedText}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2rem',
              backgroundColor: '#6366F1',
              animation: 'blink 1s step-start infinite',
            }}
          />
        </div>

        {/* ── 4. GitHub Handle ── */}
        <p
          className="hero-enter-3"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: '#94A3B8',
            marginBottom: '1rem',
            letterSpacing: '0.03em',
          }}
        >
          @Santhosh-0511
        </p>

        {/* ── 5. Concise Bio ── */}
        <p
          className="hero-enter-4"
          style={{
            maxWidth: '680px',
            fontSize: 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: 1.6,
            color: '#CBD5E1',
            marginBottom: '1.75rem',
          }}
        >
          I build <strong style={{ color: '#F8FAFC', fontWeight: 700 }}>scalable backend systems</strong>, <strong style={{ color: '#38BDF8', fontWeight: 700 }}>AI-powered applications</strong>, and solve complex algorithmic problems. Currently exploring <strong style={{ color: '#818CF8', fontWeight: 600 }}>AI/ML</strong>, backend engineering, and distributed systems.
        </p>

        {/* ── 6. Call To Action Buttons (Line 1) & Socials (Line 2) ── */}
        <div
          className="hero-enter-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '1.75rem',
          }}
        >
          {/* Row 1: View Projects & Resume in one line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {/* Primary View Projects */}
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                borderRadius: '8px',
                backgroundColor: '#6366F1',
                backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(99, 102, 241, 0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.4)';
              }}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            {/* Secondary Resume */}
            <a
              href="mailto:santhoshpalnati11@gmail.com?subject=Resume%20Request%20-%20P%20Santhosh"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.6rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#F8FAFC',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={16} color="#38BDF8" />
              <span>Resume</span>
            </a>
          </div>

          {/* Row 2: GitHub, LinkedIn, Mail */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(14, 20, 32, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(99, 102, 241, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(14, 20, 32, 0.85)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Github size={24} />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(14, 20, 32, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#38BDF8';
                e.currentTarget.style.borderColor = '#38BDF8';
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(56, 189, 248, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(14, 20, 32, 0.85)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Linkedin size={24} />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.email}
              aria-label="Send Email"
              title="Send Email"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(14, 20, 32, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#10B981';
                e.currentTarget.style.borderColor = '#10B981';
                e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.backgroundColor = 'rgba(14, 20, 32, 0.85)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Smooth Slide Down Prompt */}
          <a
            href="#about"
            aria-label="Slide down to About section"
            style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#64748B',
              textDecoration: 'none',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
          >
            <span>EXPLORE</span>
            <div
              style={{
                width: '18px',
                height: '28px',
                borderRadius: '9999px',
                border: '1.5px solid currentColor',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4px',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '6px',
                  backgroundColor: 'currentColor',
                  borderRadius: '9999px',
                  animation: 'bounce 1.5s infinite',
                }}
              />
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(6px);
          }
          60% {
            transform: translateY(3px);
          }
        }
      `}</style>
    </section>
  );
};
