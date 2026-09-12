import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

export const Contact: React.FC = () => {
  const { personal, socials } = PORTFOLIO_DATA;

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    try {
      const result = await sendContactEmail(formData);

      setStatusMessage(result.message);

      if (result.method !== 'mailto') {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch {
      setStatusMessage(
        'Message failed. Opening your mail client...'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
              color: '#38BDF8',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.6rem',
              fontWeight: 700,
            }}
          >
            <MessageSquare size={14} />
            // contact
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
            Get in Touch
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
            Open to software engineering roles, AI/ML opportunities,
            and technical collaborations.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Left Column */}
          <div
            className="reveal-on-scroll delay-100"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Contact Information */}
            <div
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(14, 20, 32, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderTop: '3px solid #38BDF8',
                backdropFilter: 'blur(16px)',
                boxShadow:
                  '0 8px 32px rgba(0, 0, 0, 0.36)',
                padding: '1.75rem',
              }}
            >
              {/* Heading */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#38BDF8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                }}
              >
                <Mail size={14} />
                Contact
              </div>

              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border:
                    '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '0.85rem 1.1rem',
                  marginBottom: '1.25rem',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: '#F8FAFC',
                    wordBreak: 'break-all',
                  }}
                >
                  {personal.email}
                </span>

                <button
                  onClick={copyEmailToClipboard}
                  title="Copy email"
                  type="button"
                  style={{
                    background: copied
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'rgba(56, 189, 248, 0.12)',
                    border: 'none',
                    color: copied
                      ? '#10B981'
                      : '#38BDF8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                >
                  {copied ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}

                  <span>
                    {copied ? 'Copied!' : 'Copy'}
                  </span>
                </button>
              </div>

              {/* Phone & Location */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: '#94A3B8',
                    fontSize: '0.88rem',
                  }}
                >
                  <Phone
                    size={15}
                    className="text-[#38BDF8]"
                  />

                  <a
                    href={`tel:${personal.phone}`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {personal.phone}
                  </a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: '#94A3B8',
                    fontSize: '0.88rem',
                  }}
                >
                  <MapPin
                    size={15}
                    className="text-[#6366F1]"
                  />

                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Profiles */}
            <div
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(14, 20, 32, 0.75)',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                boxShadow:
                  '0 8px 32px rgba(0, 0, 0, 0.36)',
                padding: '1.65rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#6366F1',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}
              >
                Profiles
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {[
                  {
                    name: 'GitHub',
                    href: socials.github,
                    icon: <Github size={15} />,
                    accent: '#F8FAFC',
                  },
                  {
                    name: 'LinkedIn',
                    href: socials.linkedin,
                    icon: <Linkedin size={15} />,
                    accent: '#38BDF8',
                  },
                  {
                    name: 'LeetCode',
                    href: socials.leetcode,
                    icon: <Code2 size={15} />,
                    accent: '#F59E0B',
                  },
                  {
                    name: 'Codeforces',
                    href: socials.codeforces,
                    icon: <Code2 size={15} />,
                    accent: '#6366F1',
                  },
                  {
                    name: 'CodeChef',
                    href: socials.codechef,
                    icon: <Code2 size={15} />,
                    accent: '#10B981',
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      backgroundColor:
                        'rgba(255, 255, 255, 0.03)',
                      border:
                        '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#CBD5E1',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        item.accent;
                      e.currentTarget.style.color =
                        '#FFFFFF';
                      e.currentTarget.style.backgroundColor =
                        'rgba(255, 255, 255, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color =
                        '#CBD5E1';
                      e.currentTarget.style.backgroundColor =
                        'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>

                    <ExternalLink
                      size={12}
                      style={{ opacity: 0.5 }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="reveal-on-scroll delay-200"
            style={{
              borderRadius: '16px',
              backgroundColor: 'rgba(14, 20, 32, 0.75)',
              border:
                '1px solid rgba(255, 255, 255, 0.08)',
              borderTop: '3px solid #6366F1',
              backdropFilter: 'blur(16px)',
              boxShadow:
                '0 8px 32px rgba(0, 0, 0, 0.36)',
              padding: '2rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#F8FAFC',
                marginBottom: '0.35rem',
              }}
            >
              Send a Message
            </h3>

            <p
              style={{
                color: '#94A3B8',
                fontSize: '0.88rem',
                marginBottom: '1.5rem',
                lineHeight: 1.5,
              }}
            >
              Have an opportunity or question? Send me a message.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
              }}
            >
              {/* Name + Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                }}
              >
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#94A3B8',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: '8px',
                      backgroundColor:
                        'rgba(255, 255, 255, 0.04)',
                      border:
                        '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor =
                        '#6366F1')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        'rgba(255, 255, 255, 0.1)')
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#94A3B8',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.95rem',
                      borderRadius: '8px',
                      backgroundColor:
                        'rgba(255, 255, 255, 0.04)',
                      border:
                        '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor =
                        '#6366F1')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        'rgba(255, 255, 255, 0.1)')
                    }
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#94A3B8',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Subject
                </label>

                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Job opportunity / Collaboration"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.95rem',
                    borderRadius: '8px',
                    backgroundColor:
                      'rgba(255, 255, 255, 0.04)',
                    border:
                      '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor =
                      '#6366F1')
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor =
                      'rgba(255, 255, 255, 0.1)')
                  }
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#94A3B8',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Message
                </label>

                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    backgroundColor:
                      'rgba(255, 255, 255, 0.04)',
                    border:
                      '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor =
                      '#6366F1')
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor =
                      'rgba(255, 255, 255, 0.1)')
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.55rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '8px',
                  background: isSubmitting
                    ? 'rgba(99, 102, 241, 0.5)'
                    : 'linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: isSubmitting
                    ? 'not-allowed'
                    : 'pointer',
                  boxShadow:
                    '0 4px 20px rgba(99, 102, 241, 0.35)',
                  transition: 'all 0.2s ease',
                  opacity: isSubmitting ? 0.75 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform =
                      'translateY(-2px)';

                    e.currentTarget.style.boxShadow =
                      '0 6px 25px rgba(56, 189, 248, 0.45)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0)';

                  e.currentTarget.style.boxShadow =
                    '0 4px 20px rgba(99, 102, 241, 0.35)';
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status */}
              {statusMessage && (
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    backgroundColor:
                      'rgba(16, 185, 129, 0.15)',
                    border:
                      '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10B981',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                  }}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};