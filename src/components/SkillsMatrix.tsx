import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import {
  Terminal,
  Cpu,
  Database,
  Layout,
  Server,
  Wrench,
  Layers,
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((s) => s.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Terminal size={17} className="text-[#38BDF8]" />;

      case 'Machine Learning & AI':
        return <Cpu size={17} className="text-[#A855F7]" />;

      case 'Backend & Frameworks':
        return <Server size={17} className="text-[#6366F1]" />;

      case 'Frontend':
        return <Layout size={17} className="text-[#10B981]" />;

      case 'Databases & Cloud':
        return <Database size={17} className="text-[#F59E0B]" />;

      default:
        return <Wrench size={17} className="text-[#94A3B8]" />;
    }
  };

  const filteredCategories: SkillCategory[] =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.title === selectedCategory);

  return (
    <section
      id="skills"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          className="reveal-on-scroll text-center"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6366F1',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.6rem',
              fontWeight: 700,
            }}
          >
            <Layers size={14} /> // skills
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 2.9rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#F8FAFC',
              marginBottom: '0.75rem',
            }}
          >
            Technical Skills
          </h2>

          <p
            style={{
              maxWidth: '620px',
              margin: '0 auto',
              color: '#94A3B8',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            Technologies and tools I use to build software and AI applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="reveal-on-scroll delay-100"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: isActive
                    ? 'rgba(56, 189, 248, 0.6)'
                    : 'rgba(255,255,255,0.08)',
                  backgroundColor: isActive
                    ? 'rgba(56, 189, 248, 0.15)'
                    : 'rgba(14,20,32,0.6)',
                  color: isActive ? '#38BDF8' : '#94A3B8',
                  boxShadow: isActive
                    ? '0 0 15px rgba(56,189,248,0.2)'
                    : 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'all .2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredCategories.map((group, idx) => {
            const delayClass = `delay-${((idx % 4) + 1) * 100}`;

            return (
              <div
                key={group.title}
                className={`reveal-on-scroll ${delayClass}`}
                style={{
                  borderRadius: '16px',
                  backgroundColor: 'rgba(14,20,32,0.75)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,.36)',
                  padding: '1.65rem',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor =
                    'rgba(99,102,241,.35)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(99,102,241,.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor =
                    'rgba(255,255,255,.08)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0,0,0,.36)';
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.75rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(group.title)}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                    }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.45rem',
                  }}
                >
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '.35rem .8rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,.04)',
                        border: '1px solid rgba(255,255,255,.07)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '.8rem',
                        color: '#CBD5E1',
                        fontWeight: 500,
                        transition: 'all .15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(99,102,241,.15)';
                        e.currentTarget.style.borderColor =
                          'rgba(99,102,241,.35)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(255,255,255,.04)';
                        e.currentTarget.style.borderColor =
                          'rgba(255,255,255,.07)';
                        e.currentTarget.style.color = '#CBD5E1';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};