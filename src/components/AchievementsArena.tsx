import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Zap } from 'lucide-react';

export const AchievementsArena: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section
      id="achievements"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          className="reveal-on-scroll text-center"
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#F59E0B',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.6rem',
              fontWeight: 700,
            }}
          >
            <Zap size={14} />
            // achievements
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
            Achievements &amp; Competitive Programming
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
            Competitive programming ratings, contest finishes, and
            open-source contributions.
          </p>
        </div>

        {/* Achievement Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {achievements.map((item, idx) => {
            const isLC = item.platform === 'LeetCode';
            const isCF = item.platform === 'Codeforces';
            const isCC = item.platform === 'CodeChef';

            const cardAccent = isLC
              ? '#F59E0B'
              : isCF
              ? '#38BDF8'
              : isCC
              ? '#10B981'
              : '#6366F1';

            const delayClass = `delay-${((idx % 4) + 1) * 100}`;

            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal-on-scroll ${delayClass}`}
                style={{
                  borderRadius: '16px',
                  backgroundColor:
                    'rgba(14, 20, 32, 0.75)',
                  border:
                    '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop:
                    `3px solid ${cardAccent}`,
                  backdropFilter: 'blur(16px)',
                  boxShadow:
                    '0 8px 32px rgba(0, 0, 0, 0.36)',
                  padding: '1.6rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '330px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px)';

                  e.currentTarget.style.borderColor =
                    cardAccent;

                  e.currentTarget.style.borderTop =
                    `3px solid ${cardAccent}`;

                  e.currentTarget.style.boxShadow =
                    `0 14px 35px rgba(0, 0, 0, 0.4), 0 0 22px ${cardAccent}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0)';

                  e.currentTarget.style.borderColor =
                    'rgba(255, 255, 255, 0.08)';

                  e.currentTarget.style.borderTop =
                    `3px solid ${cardAccent}`;

                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0, 0, 0, 0.36)';
                }}
              >
                {/* Platform */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.15rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: cardAccent,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.platform}
                  </span>

                  <ExternalLink
                    size={15}
                    style={{
                      color: '#64748B',
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginBottom: '0.45rem',
                  }}
                >
                  {item.title}
                </h3>

                {/* Rating */}
                {item.rating && (
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: cardAccent,
                      lineHeight: 1.1,
                      marginBottom: '0.8rem',
                    }}
                  >
                    {item.rating}
                  </div>
                )}

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#94A3B8',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>

                {/* Rank / Highlight */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop:
                      '1px solid rgba(255, 255, 255, 0.08)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#CBD5E1',
                    lineHeight: 1.45,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.45rem',
                  }}
                >
                  <span
                    style={{
                      color: cardAccent,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>

                  <span>
                    {item.rankHighlight}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};