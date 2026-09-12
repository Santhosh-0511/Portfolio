import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Users } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

export const AboutEducation: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <>
      {/* =====================================================================
          SECTION: ABOUT
          ===================================================================== */}
      <section
        id="about"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          boxSizing: 'border-box',
          scrollMarginTop: '64px',
        }}
      >
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          {/* Section Header */}
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#38BDF8',
                display: 'inline-block',
                marginBottom: '0.6rem',
                fontWeight: 700,
              }}
            >
              // about
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#F8FAFC',
                marginBottom: '0.75rem',
              }}
            >
              Building AI-Powered &amp; Scalable Software
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto', color: '#94A3B8', fontSize: '1.05rem' }}>
              A quick overview of who I am, what I build, and what I'm currently learning.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Terminal Card & Quick Metric Grid */}
            <div className="reveal-on-scroll delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Interactive Terminal */}
              <InteractiveTerminal />

              {/* 4-Stat Metric Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(14, 20, 32, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#38BDF8', lineHeight: 1.1 }}>
                    7.92
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                    Current GPA
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(14, 20, 32, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#F59E0B', lineHeight: 1.1 }}>
                    900+
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                    Problems Solved
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(14, 20, 32, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#6366F1', lineHeight: 1.1 }}>
                    10+
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                    Projects Shipped
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(14, 20, 32, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#10B981', lineHeight: 1.1 }}>
                    15+
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                    Tech Tooling
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Journey */}
            <div
              className="reveal-on-scroll delay-200"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                color: '#CBD5E1',
                fontSize: '1.02rem',
                lineHeight: 1.75,
              }}
            >
              <p>
                Hey, I'm <strong style={{ color: '#F8FAFC' }}>P Santhosh Sri Sai Ram</strong>,
                a Computer Science undergraduate at{' '}
                <strong style={{ color: '#38BDF8' }}>IIIT Lucknow</strong>. I enjoy building
                AI-powered applications, scalable backend systems, and full-stack products
                that solve practical problems.
              </p>

              <p>
                I am deeply interested in <strong style={{ color: '#F8FAFC' }}>
                  competitive programming, backend engineering, and AI/ML</strong>. I am
                currently a{' '}
                <a
                  href={PORTFOLIO_DATA.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F59E0B', fontWeight: 700, textDecoration: 'none', borderBottom: '1px dashed #F59E0B' }}
                  title="View LeetCode Profile"
                >
                  Knight on LeetCode
                </a>{' '}
                (Max rating: 1945) and a{' '}
                <a
                  href={PORTFOLIO_DATA.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#818CF8', fontWeight: 700, textDecoration: 'none', borderBottom: '1px dashed #818CF8' }}
                  title="View Codeforces Profile"
                >
                  Specialist on Codeforces
                </a>{' '}
                (Max rating: 1425), with over{' '}
                <strong style={{ color: '#10B981' }}>900+ algorithmic problems</strong>{' '}
                solved across competitive programming platforms.
              </p>

              <p>
                On the engineering side, I work with{' '}
                <strong style={{ color: '#F8FAFC' }}>
                  C++, Python, FastAPI, Flask, React, PostgreSQL, and modern AI/ML tools
                </strong>
                . I've built projects involving computer vision, LLMs, OCR, REST APIs,
                real-time monitoring, and scalable backend systems, including{' '}
                <a
                  href="https://road-sense-coral.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#38BDF8', fontWeight: 700, textDecoration: 'none', borderBottom: '1px dashed #38BDF8' }}
                  title="View Road-Sense Live Demo"
                >
                  Road-Sense
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/Lochit-Vinay/MediShare_V2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#38BDF8', fontWeight: 700, textDecoration: 'none', borderBottom: '1px dashed #38BDF8' }}
                  title="View MediShare Repository"
                >
                  Medi Share
                </a>.
              </p>

              <p>
                Beyond technology, I am an active member of the{' '}
                <strong style={{ color: '#F8FAFC' }}>Goonj Dramatics Society</strong> at
                IIIT Lucknow, where I've mentored{' '}
                <strong style={{ color: '#10B981' }}>150+ students</strong> and helped
                organize theatre productions, cultural events, and inter-college
                competitions. I'm always open to collaborating on interesting{' '}
                <strong style={{ color: '#F8FAFC' }}>AI, backend, and software engineering
                  projects</strong>.
              </p>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#38BDF8',
                    textDecoration: 'none',
                    borderBottom: '2px solid #38BDF8',
                    paddingBottom: '2px',
                  }}
                >
                  <span>Let's talk code &amp; systems &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: EDUCATION
          ===================================================================== */}
      <section
        id="education"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          boxSizing: 'border-box',
          scrollMarginTop: '64px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Section Header */}
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#38BDF8',
                display: 'inline-block',
                marginBottom: '0.6rem',
                fontWeight: 700,
              }}
            >
              // education
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#F8FAFC',
                marginBottom: '0.75rem',
              }}
            >
              Academic Background
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto', color: '#94A3B8', fontSize: '1.05rem' }}>
              My academic foundation in computer science and core engineering concepts.
            </p>
          </div>

          {/* Education Card */}
          <div
            className="reveal-on-scroll delay-100"
            style={{
              borderRadius: '14px',
              backgroundColor: 'rgba(14, 20, 32, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              marginBottom: '1.75rem',
            }}
          >
            {/* Top Accent Bar */}
            <div
              style={{
                height: '4px',
                width: '100%',
                background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 50%, #10B981 100%)',
              }}
            />

            <div style={{ padding: '2rem' }}>
              {/* Header with Dates and GPA */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={20} color="#38BDF8" />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#38BDF8',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {education.period}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      lineHeight: 1.25,
                    }}
                  >
                    {education.college}
                  </h3>

                  <p style={{ color: '#CBD5E1', fontSize: '1rem', fontWeight: 600 }}>
                    {education.degree}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                    <MapPin size={15} />
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* Big GPA Badge Box */}
                <div
                  style={{
                    padding: '1rem 1.6rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(8, 11, 17, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    minWidth: '150px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.9rem',
                      fontWeight: 800,
                      color: '#38BDF8',
                      lineHeight: 1.1,
                    }}
                  >
                    {education.gpa}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#94A3B8',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      marginTop: '0.2rem',
                    }}
                  >
                    CGPA
                  </p>
                </div>
              </div>

              {/* Coursework Section */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#94A3B8',
                    marginBottom: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  Relevant Core Coursework
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#F8FAFC',
                        fontWeight: 600,
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentorship & Leadership Card */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.1rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <Users size={20} color="#818CF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#F8FAFC', marginBottom: '0.2rem' }}>
                    {education.leadership.role} · {education.leadership.organization}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                    {education.leadership.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
