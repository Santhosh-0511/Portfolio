import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Search, X, Terminal, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [copyFeedback, setCopyFeedback] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'jump-projects',
      label: 'Explore Projects (Road-Sense, Medi Share)',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'projects';
        onClose();
      },
    },
    {
      id: 'jump-about',
      label: 'Inspect Terminal Bio & Core Metrics',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'about';
        onClose();
      },
    },
    {
      id: 'jump-education',
      label: 'View IIIT Lucknow Education (7.92 CGPA)',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'education';
        onClose();
      },
    },
    {
      id: 'jump-achievements',
      label: 'View Competitive Coding Stats (Knight 1945, Specialist 1425)',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'achievements';
        onClose();
      },
    },
    {
      id: 'jump-skills',
      label: 'Inspect Technical Skills Matrix',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'skills';
        onClose();
      },
    },
    {
      id: 'jump-contact',
      label: 'Initiate Contact & Send Transmission',
      category: 'Navigation',
      handler: () => {
        window.location.hash = 'contact';
        onClose();
      },
    },
    {
      id: 'copy-email',
      label: copyFeedback ? '✓ Email Copied to Clipboard!' : `Copy Email (${PORTFOLIO_DATA.personal.email})`,
      category: 'Action',
      handler: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        setCopyFeedback(true);
        setTimeout(() => {
          setCopyFeedback(false);
          onClose();
        }, 800);
      },
    },
    {
      id: 'open-leetcode',
      label: 'Open LeetCode Profile (Knight 1945)',
      category: 'External',
      handler: () => {
        window.open(PORTFOLIO_DATA.socials.leetcode, '_blank');
        onClose();
      },
    },
    {
      id: 'open-codeforces',
      label: 'Open Codeforces Profile (Specialist 1425)',
      category: 'External',
      handler: () => {
        window.open(PORTFOLIO_DATA.socials.codeforces, '_blank');
        onClose();
      },
    },
    {
      id: 'open-codechef',
      label: 'Open CodeChef Profile (3-Star 1618)',
      category: 'External',
      handler: () => {
        window.open(PORTFOLIO_DATA.socials.codechef, '_blank');
        onClose();
      },
    },
    {
      id: 'open-github',
      label: 'Open GitHub Profile & Repositories',
      category: 'External',
      handler: () => {
        window.open(PORTFOLIO_DATA.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'open-road-sense',
      label: 'Launch Road-Sense Live Demo',
      category: 'Projects',
      handler: () => {
        window.open('https://road-sense-coral.vercel.app/', '_blank');
        onClose();
      },
    },
    {
      id: 'open-medishare',
      label: 'View MediShare V2 GitHub Repository',
      category: 'Projects',
      handler: () => {
        window.open('https://github.com/Lochit-Vinay/MediShare_V2', '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '580px',
          backgroundColor: '#0E1420',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(99, 102, 241, 0.2)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.1rem 1.3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            gap: '0.75rem',
          }}
        >
          <Search size={18} className="text-[#38BDF8]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or navigate to section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#F8FAFC',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div
          style={{
            maxHeight: '340px',
            overflowY: 'auto',
            padding: '0.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                color: '#64748B',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}
            >
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.handler}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#CBD5E1',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#CBD5E1';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Terminal size={14} className="text-[#38BDF8]" />
                  <span>{item.label}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: '#64748B',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {item.category}
                  </span>
                  {item.category === 'External' && <ExternalLink size={12} className="text-[#64748B]" />}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer HUD */}
        <div
          style={{
            padding: '0.75rem 1.3rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#64748B',
          }}
        >
          <span>Press ⌘K / Ctrl+K anytime</span>
          <span>ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
