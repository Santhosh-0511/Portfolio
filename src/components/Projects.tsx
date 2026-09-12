import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Eye,
  Shield,
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const [activeCategory, setActiveCategory] = useState<
    'All' | 'AI / ML' | 'Full-Stack'
  >('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'road-sense':
        return (
          <Eye
            size={20}
            className="text-[#38BDF8]"
          />
        );

      case 'medi-share':
        return (
          <Shield
            size={20}
            className="text-[#F59E0B]"
          />
        );

      default:
        return (
          <Sparkles
            size={20}
            className="text-[#6366F1]"
          />
        );
    }
  };

  return (
    <section
      id="projects"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
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
              color: '#38BDF8',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.6rem',
              fontWeight: 700,
            }}
          >
            <Sparkles size={14} /> // projects
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
            Featured Projects
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
            AI applications, computer vision systems, and scalable
            software solving real-world problems.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="reveal-on-scroll delay-100"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {(['All', 'AI / ML', 'Full-Stack'] as const).map(
            (category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: isActive
                      ? 'rgba(99, 102, 241, 0.6)'
                      : 'rgba(255, 255, 255, 0.08)',
                    backgroundColor: isActive
                      ? 'rgba(99, 102, 241, 0.2)'
                      : 'rgba(14, 20, 32, 0.6)',
                    color: isActive
                      ? '#FFFFFF'
                      : '#94A3B8',
                    boxShadow: isActive
                      ? '0 0 15px rgba(99, 102, 241, 0.25)'
                      : 'none',
                    backdropFilter: 'blur(8px)',
                    transition:
                      'all 0.2s ease',
                  }}
                >
                  {category}
                </button>
              );
            }
          )}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map(
            (
              project: Project,
              index: number
            ) => {
              const delayClass =
                index % 2 === 0
                  ? 'delay-200'
                  : 'delay-300';

              return (
                <div
                  key={project.id}
                  className={`reveal-on-scroll ${delayClass}`}
                  style={{
                    borderRadius: '16px',
                    backgroundColor:
                      'rgba(14, 20, 32, 0.75)',
                    border:
                      '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter:
                      'blur(16px)',
                    boxShadow:
                      '0 8px 32px rgba(0, 0, 0, 0.36)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.85rem',
                    transition:
                      'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(-5px)';

                    e.currentTarget.style.borderColor =
                      'rgba(99, 102, 241, 0.45)';

                    e.currentTarget.style.boxShadow =
                      '0 16px 40px rgba(99, 102, 241, 0.15), 0 0 20px rgba(56, 189, 248, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0)';

                    e.currentTarget.style.borderColor =
                      'rgba(255, 255, 255, 0.08)';

                    e.currentTarget.style.boxShadow =
                      '0 8px 32px rgba(0, 0, 0, 0.36)';
                  }}
                >
                  <div>
                    {/* Top Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:
                          'space-between',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          backgroundColor:
                            'rgba(255, 255, 255, 0.04)',
                          border:
                            '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:
                            'center',
                        }}
                      >
                        {getProjectIcon(
                          project.id
                        )}
                      </div>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily:
                            'var(--font-mono)',
                          color: '#6366F1',
                          padding:
                            '0.2rem 0.6rem',
                          borderRadius:
                            '9999px',
                          backgroundColor:
                            'rgba(99, 102, 241, 0.1)',
                          border:
                            '1px solid rgba(99, 102, 241, 0.25)',
                          fontWeight: 600,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      style={{
                        fontFamily:
                          'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#F8FAFC',
                        lineHeight: 1.25,
                        marginBottom:
                          '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontFamily:
                          'var(--font-mono)',
                        color: '#38BDF8',
                        marginBottom:
                          '0.95rem',
                      }}
                    >
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        color: '#94A3B8',
                        marginBottom:
                          '1.4rem',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom:
                          '1.2rem',
                      }}
                    >
                      {project.metrics.map(
                        (metric, index) => (
                          <span
                            key={index}
                            style={{
                              padding:
                                '0.3rem 0.65rem',
                              borderRadius: '6px',
                              backgroundColor:
                                'rgba(16, 185, 129, 0.08)',
                              border:
                                '1px solid rgba(16, 185, 129, 0.18)',
                              fontFamily:
                                'var(--font-mono)',
                              fontSize:
                                '0.7rem',
                              color: '#10B981',
                              fontWeight: 600,
                            }}
                          >
                            {metric}
                          </span>
                        )
                      )}
                    </div>

                    {/* Technology Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom:
                          '1.75rem',
                      }}
                    >
                      {project.tags.map(
                        (tag, index) => (
                          <span
                            key={index}
                            style={{
                              padding:
                                '0.3rem 0.65rem',
                              borderRadius: '6px',
                              backgroundColor:
                                'rgba(255, 255, 255, 0.04)',
                              border:
                                '1px solid rgba(255, 255, 255, 0.08)',
                              fontFamily:
                                'var(--font-mono)',
                              fontSize:
                                '0.74rem',
                              color: '#CBD5E1',
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      borderTop:
                        '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '1.1rem',
                    }}
                  >
                    {/* GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display:
                          'inline-flex',
                        alignItems:
                          'center',
                        gap: '0.45rem',
                        padding:
                          '0.5rem 1rem',
                        borderRadius: '8px',
                        backgroundColor:
                          'rgba(255, 255, 255, 0.05)',
                        border:
                          '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize:
                          '0.82rem',
                        fontFamily:
                          'var(--font-mono)',
                        fontWeight: 600,
                        textDecoration:
                          'none',
                        transition:
                          'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(255, 255, 255, 0.12)';

                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          'rgba(255, 255, 255, 0.05)';

                        e.currentTarget.style.borderColor =
                          'rgba(255, 255, 255, 0.12)';
                      }}
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>

                    {/* Live Demo */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display:
                            'inline-flex',
                          alignItems:
                            'center',
                          gap: '0.45rem',
                          padding:
                            '0.5rem 1rem',
                          borderRadius: '8px',
                          background:
                            'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(56, 189, 248, 0.25) 100%)',
                          border:
                            '1px solid rgba(56, 189, 248, 0.4)',
                          color: '#38BDF8',
                          fontSize:
                            '0.82rem',
                          fontFamily:
                            'var(--font-mono)',
                          fontWeight: 600,
                          textDecoration:
                            'none',
                          transition:
                            'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            'linear-gradient(135deg, rgba(99, 102, 241, 0.5) 0%, rgba(56, 189, 248, 0.4) 100%)';

                          e.currentTarget.style.borderColor =
                            '#38BDF8';

                          e.currentTarget.style.boxShadow =
                            '0 0 15px rgba(56, 189, 248, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(56, 189, 248, 0.25) 100%)';

                          e.currentTarget.style.borderColor =
                            'rgba(56, 189, 248, 0.4)';

                          e.currentTarget.style.boxShadow =
                            'none';
                        }}
                      >
                        <ExternalLink
                          size={15}
                        />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};