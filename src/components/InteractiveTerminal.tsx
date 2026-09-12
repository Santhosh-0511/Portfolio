import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp?: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'init',
      output: (
        <div style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.6 }}>
          <p style={{ color: '#38BDF8', fontWeight: 600 }}>
            ⚡ Antigravity Portfolio Kernel v2.4 initialized.
          </p>
          <p>
            Welcome to Santhosh's Interactive Engineering Console.
          </p>
          <p style={{ color: '#F59E0B', marginTop: '0.25rem' }}>
            Type <span style={{ color: '#10B981', fontWeight: 700 }}>help</span> or click any command chip below to explore.
          </p>
        </div>
      ),
    },
    {
      command: 'whoami',
      output: (
        <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
          <span style={{ color: '#F8FAFC', fontWeight: 700 }}>P Santhosh Sri Sai Ram</span>{' '}
          <span style={{ color: '#38BDF8' }}>(IIIT Lucknow CSE '26)</span>
          <p style={{ color: '#94A3B8' }}>
            Software Developer · AI/ML Enthusiast · Competitive Programmer (Knight @ LeetCode 1945, Specialist @ Codeforces 1425).
          </p>
        </div>
      ),
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>(['whoami']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to command history for arrow-up / arrow-down navigation
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    let outputNode: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        outputNode = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem' }}>
            <p style={{ color: '#38BDF8', fontWeight: 700 }}>Available commands:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.2rem 1rem' }}>
              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>whoami</span>
              <span style={{ color: '#CBD5E1' }}>Display bio & engineering background</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>skills</span>
              <span style={{ color: '#CBD5E1' }}>List core programming languages & frameworks</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>projects</span>
              <span style={{ color: '#CBD5E1' }}>Show featured projects (Road-Sense, MediShare)</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>cp</span>
              <span style={{ color: '#CBD5E1' }}>Competitive programming ratings (LeetCode, CF, CC)</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>education</span>
              <span style={{ color: '#CBD5E1' }}>IIIT Lucknow degree, CGPA & coursework</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>contact</span>
              <span style={{ color: '#CBD5E1' }}>Show direct email, phone, and profile links</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>clear</span>
              <span style={{ color: '#CBD5E1' }}>Clear the console screen</span>

              <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>sudo</span>
              <span style={{ color: '#CBD5E1' }}>Request elevated privileges</span>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        outputNode = (
          <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
            <p>
              <strong style={{ color: '#F8FAFC' }}>Name:</strong> P Santhosh Sri Sai Ram
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>College:</strong> Indian Institute of Information Technology, Lucknow (B.Tech CSE)
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>Focus:</strong> Scalable backend systems, AI/ML, computer vision, algorithms
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>Leadership:</strong> Mentored 150+ students in Goonj Dramatics Society @ IIIT Lucknow
            </p>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        outputNode = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem' }}>
            <p><strong style={{ color: '#38BDF8' }}>Languages:</strong> C++, Python, JavaScript, Java, SQL</p>
            <p><strong style={{ color: '#10B981' }}>Frameworks:</strong> FastAPI, Flask, React.js, Express.js, TailwindCSS</p>
            <p><strong style={{ color: '#F59E0B' }}>AI & ML:</strong> YOLOv8, OpenCV, OCR (PaddleOCR), PyTorch, LLMs</p>
            <p><strong style={{ color: '#A855F7' }}>Databases & Cloud:</strong> PostgreSQL, MongoDB, Docker, Git, REST APIs</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
            <div style={{ borderLeft: '2px solid #38BDF8', paddingLeft: '0.6rem' }}>
              <p style={{ color: '#F8FAFC', fontWeight: 700 }}>Road-Sense (Real-Time Road Defect Intelligence)</p>
              <p style={{ color: '#94A3B8' }}>AI-driven automated road condition evaluation using YOLOv8 & computer vision.</p>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.2rem' }}>
                <a href="https://road-sense-coral.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8', textDecoration: 'underline' }}>
                  Live Demo ↗
                </a>
                <a href="https://github.com/kad-link/Road-Sense" target="_blank" rel="noopener noreferrer" style={{ color: '#818CF8', textDecoration: 'underline' }}>
                  Source Code ↗
                </a>
              </div>
            </div>

            <div style={{ borderLeft: '2px solid #10B981', paddingLeft: '0.6rem' }}>
              <p style={{ color: '#F8FAFC', fontWeight: 700 }}>MediShare (Emergency Medicine & Resource Redistribution)</p>
              <p style={{ color: '#94A3B8' }}>Full-stack platform for geo-tagged medical resource coordination & prescription OCR.</p>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.2rem' }}>
                <a href="https://github.com/Lochit-Vinay/MediShare_V2" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'underline' }}>
                  Source Code ↗
                </a>
              </div>
            </div>
          </div>
        );
        break;

      case 'cp':
      case 'competitive':
      case 'ratings':
        outputNode = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem' }}>
            <p>
              <strong style={{ color: '#F59E0B' }}>LeetCode Knight:</strong> Rating 1945 (Top 2.5% globally){' '}
              <a href="https://leetcode.com/u/Santhosh1105/" target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8' }}>
                leetcode.com/u/Santhosh1105/ ↗
              </a>
            </p>
            <p>
              <strong style={{ color: '#818CF8' }}>Codeforces Specialist:</strong> Rating 1425{' '}
              <a href="https://codeforces.com/profile/Santhosh_1105" target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8' }}>
                codeforces.com/profile/Santhosh_1105 ↗
              </a>
            </p>
            <p>
              <strong style={{ color: '#10B981' }}>CodeChef 3-Star:</strong> Rating 1618{' '}
              <a href="https://www.codechef.com/users/santhosh11_05" target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8' }}>
                codechef.com/users/santhosh11_05 ↗
              </a>
            </p>
            <p style={{ color: '#94A3B8', marginTop: '0.2rem' }}>
              Total Problems Solved: <strong style={{ color: '#F8FAFC' }}>900+ algorithmic challenges</strong>.
            </p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
            <p style={{ color: '#F8FAFC', fontWeight: 700 }}>
              Indian Institute of Information Technology, Lucknow (IIITL)
            </p>
            <p>Bachelor of Technology in Computer Science & Engineering (2022 – 2026)</p>
            <p style={{ color: '#38BDF8', fontWeight: 600 }}>Cumulative GPA: 7.92 / 10.0</p>
            <p style={{ color: '#94A3B8', marginTop: '0.2rem' }}>
              Coursework: Data Structures & Algorithms, OS, DBMS, Computer Networks, AI/ML, Software Engineering.
            </p>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        outputNode = (
          <div style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.6 }}>
            <p>
              <strong style={{ color: '#F8FAFC' }}>Email:</strong>{' '}
              <a href="mailto:santhoshpalnati11@gmail.com" style={{ color: '#38BDF8' }}>
                santhoshpalnati11@gmail.com
              </a>
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>Phone:</strong> +91 9390234057
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>GitHub:</strong>{' '}
              <a href="https://github.com/Santhosh-0511" target="_blank" rel="noopener noreferrer" style={{ color: '#818CF8' }}>
                github.com/Santhosh-0511 ↗
              </a>
            </p>
            <p>
              <strong style={{ color: '#F8FAFC' }}>LinkedIn:</strong>{' '}
              <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#818CF8' }}>
                linkedin.com/in/santhosh-palnati-b2b859327 ↗
              </a>
            </p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        outputNode = (
          <p style={{ color: '#F43F5E', fontSize: '0.82rem' }}>
            🔒 Permission denied: Root access is restricted to Santhosh. Try `whoami` or `help`.
          </p>
        );
        break;

      case 'echo':
        outputNode = <p style={{ color: '#F8FAFC', fontSize: '0.82rem' }}>{args}</p>;
        break;

      case 'date':
        outputNode = <p style={{ color: '#38BDF8', fontSize: '0.82rem' }}>{new Date().toString()}</p>;
        break;

      default:
        outputNode = (
          <p style={{ color: '#F43F5E', fontSize: '0.82rem' }}>
            command not found: {mainCmd}. Type <span style={{ color: '#10B981', fontWeight: 700 }}>help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || '');
      }
    }
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'cp', 'education', 'contact', 'clear'];

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        borderRadius: '12px',
        backgroundColor: 'rgba(10, 14, 22, 0.95)',
        color: '#F8FAFC',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.15)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '420px',
        cursor: 'text',
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          padding: '0.65rem 1rem',
          backgroundColor: 'rgba(6, 9, 15, 0.98)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F43F5E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.5rem' }}>
            <TerminalIcon size={13} color="#38BDF8" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600 }}>
              santhosh@iiitl-dev:~
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: '#10B981',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
            interactive
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            title="Reset Console"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Quick Command Chips */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.45rem 0.85rem',
          backgroundColor: 'rgba(14, 20, 32, 0.7)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Sparkles size={11} color="#F59E0B" /> quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: cmd === 'clear' ? '#F43F5E' : '#38BDF8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              padding: '0.15rem 0.45rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
              e.currentTarget.style.borderColor = '#38BDF8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          lineHeight: 1.65,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        {history.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#F59E0B' }}>
              <span style={{ color: '#10B981' }}>guest@portfolio:~$</span>
              <span style={{ color: '#F8FAFC' }}>{item.command}</span>
            </div>
            <div style={{ paddingLeft: '0.5rem' }}>{item.output}</div>
          </div>
        ))}

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div
        style={{
          padding: '0.65rem 1rem',
          backgroundColor: 'rgba(6, 9, 15, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10B981', flexShrink: 0 }}>
          guest@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. 'cp', 'skills', 'projects')..."
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#F8FAFC',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
          }}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="button"
          onClick={() => executeCommand(input)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#38BDF8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
          }}
          title="Run command"
        >
          <CornerDownLeft size={14} />
        </button>
      </div>
    </div>
  );
};
