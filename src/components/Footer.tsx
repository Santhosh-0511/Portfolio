import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(8, 11, 17, 0.95)',
        backdropFilter: 'blur(16px)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Designed & engineered by <strong style={{ color: '#F8FAFC' }}>{PORTFOLIO_DATA.personal.name}</strong>
            </p>
          </div>

          {/* Action Hub: IST clock + Return to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#64748B',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              LKO <span style={{ color: '#F8FAFC', marginLeft: '0.25rem' }}>{time || '14:15:00 IST'}</span>
            </div>

            <button
              onClick={scrollToTop}
              title="Return to Top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#CBD5E1',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </div>

        {/* Legal / Built Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} P Santhosh Sri Sai Ram · IIIT Lucknow B.Tech CSE '28
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} className="text-[#38BDF8]" /> Built with React, TypeScript &amp; Cyber-Obsidian HUD
          </div>
        </div>
      </div>
    </footer>
  );
};
