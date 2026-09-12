import React, { useEffect, useState, useRef } from 'react';

// Cyber / Dark Sapphire Palette Constants
const CYAN = '#38BDF8';
const INDIGO = '#6366F1';
const EMERALD = '#10B981';
const AMBER = '#F59E0B';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface CursorContext {
  mode: 'default' | 'pointer' | 'text' | 'external' | 'copy' | 'mail' | 'code';
  label: string;
}

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [context, setContext] = useState<CursorContext>({ mode: 'default', label: '' });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [velocity, setVelocity] = useState({ speed: 0, angle: 0 });
  const [shockwaves, setShockwaves] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const requestRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });
  const lastMousePos = useRef({ x: -100, y: -100 });
  const shockwaveIdRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Only activate on pointer-fine hardware (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const canvas = canvasRef.current;
    let ctx: CanvasRenderingContext2D | null = null;
    if (canvas) {
      ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Add gentle stardust trail particle when moving
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 6 && particlesRef.current.length < 25) {
        const colors = [CYAN, INDIGO, '#818CF8'];
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.6 - dx * 0.05,
          vy: (Math.random() - 0.5) * 0.6 - dy * 0.05,
          size: Math.random() * 2.2 + 1.2,
          alpha: 0.75,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY };

      // Contextual detection
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, .clickable, [data-interactive="true"]'
      ) as HTMLElement | null;

      if (interactive) {
        if (interactive.tagName === 'INPUT' || interactive.tagName === 'TEXTAREA') {
          setContext({ mode: 'text', label: 'TYPE' });
        } else if (
          interactive.getAttribute('aria-label')?.toLowerCase().includes('copy') ||
          interactive.innerText?.toLowerCase().includes('copy')
        ) {
          setContext({ mode: 'copy', label: 'COPY' });
        } else if (interactive.tagName === 'A') {
          const anchor = interactive as HTMLAnchorElement;
          if (anchor.href?.startsWith('mailto:')) {
            setContext({ mode: 'mail', label: 'MAIL ✉' });
          } else if (anchor.target === '_blank' || anchor.href?.startsWith('http')) {
            setContext({ mode: 'external', label: 'OPEN ↗' });
          } else {
            setContext({ mode: 'pointer', label: 'VIEW' });
          }
        } else {
          setContext({ mode: 'pointer', label: 'SELECT' });
        }
      } else if (target.closest('code, pre, .terminal-container, .terminal-window')) {
        setContext({ mode: 'code', label: 'CODE' });
      } else if (
        target.closest('p, h1, h2, h3, h4, h5, h6') &&
        (target.tagName === 'P' || target.tagName.startsWith('H') || target.tagName === 'SPAN')
      ) {
        setContext({ mode: 'text', label: '' });
      } else {
        setContext({ mode: 'default', label: '' });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newShockwave = {
        id: shockwaveIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setShockwaves((prev) => [...prev.slice(-3), newShockwave]);
      setTimeout(() => {
        setShockwaves((prev) => prev.filter((s) => s.id !== newShockwave.id));
      }, 650);

      // Spawn click burst micro-particles
      for (let i = 0; i < 8; i++) {
        const ang = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
        const spd = Math.random() * 2.5 + 1.2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: Math.random() * 2.5 + 1.5,
          alpha: 1,
          color: i % 2 === 0 ? CYAN : INDIGO,
        });
      }
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic 60fps lerp interpolation with aerodynamic velocity stretching
    const animate = () => {
      const isInteractive = context.mode !== 'default' && context.mode !== 'text';
      const lerpFactor = isInteractive ? 0.28 : 0.18;

      const dx = mouseRef.current.x - trailingRef.current.x;
      const dy = mouseRef.current.y - trailingRef.current.y;

      trailingRef.current.x += dx * lerpFactor;
      trailingRef.current.y += dy * lerpFactor;

      const currentSpeed = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.035, 0.65);
      const currentAngle = Math.atan2(dy, dx);

      setVelocity({ speed: currentSpeed, angle: currentAngle });
      setTrailingPos({ x: trailingRef.current.x, y: trailingRef.current.y });

      // Render stardust trail particles
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha *= 0.92;
          p.size *= 0.96;

          if (p.alpha <= 0.04 || p.size <= 0.4) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [context.mode]);

  if (!isVisible) return null;

  const { mode } = context;
  const isInteractive = mode !== 'default' && mode !== 'text';
  const isText = mode === 'text';

  // State-based coloring
  const primaryColor =
    mode === 'external' ? CYAN :
    mode === 'mail' ? EMERALD :
    mode === 'copy' ? AMBER :
    mode === 'code' ? '#A78BFA' :
    isInteractive ? CYAN :
    '#F8FAFC';

  // Dynamic dimension calculations
  const reticleSize = isInteractive ? 48 : isText ? 26 : 34;

  // Uniform aerodynamic velocity stretch physics across all states
  const stretchX = 1 + velocity.speed * 0.85;
  const stretchY = Math.max(0.68, 1 - velocity.speed * 0.38);
  const rotationDeg = (velocity.angle * 180) / Math.PI;

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        overflow: 'hidden',
      }}
    >
      {/* 1. Stardust trail canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 2. Precision Zero-Lag Focal Core */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 3,
          pointerEvents: 'none',
          width: isText ? '2px' : isInteractive ? '6px' : '7px',
          height: isText ? '20px' : isInteractive ? '6px' : '7px',
          borderRadius: isText ? '1px' : '50%',
          backgroundColor: primaryColor,
          boxShadow: `0 0 ${isInteractive ? '14px' : '8px'} ${primaryColor}`,
          transform: `translate3d(${pos.x - (isText ? 1 : isInteractive ? 3 : 3.5)}px, ${
            pos.y - (isText ? 10 : isInteractive ? 3 : 3.5)
          }px, 0) scale(${isClicked ? 0.6 : 1})`,
          transition:
            'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-radius 0.22s ease, box-shadow 0.2s ease',
          willChange: 'transform',
        }}
      />

      {/* 3. Aerodynamic Fluid Outer Circular Reticle / Lens */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: 'none',
          width: `${reticleSize}px`,
          height: `${reticleSize}px`,
          transform: `translate3d(${trailingPos.x - reticleSize / 2}px, ${
            trailingPos.y - reticleSize / 2
          }px, 0) rotate(${rotationDeg}deg) scale(${isClicked ? 0.8 : stretchX}, ${
            isClicked ? 0.8 : stretchY
          })`,
          transition:
            'width 0.26s cubic-bezier(0.16, 1, 0.3, 1), height 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Main Reticle Glass Body — Always Circular */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: isInteractive
              ? `1.5px solid ${primaryColor}`
              : `1px solid rgba(99, 102, 241, 0.4)`,
            backgroundColor: isInteractive
              ? `rgba(${mode === 'mail' ? '16, 185, 129' : mode === 'copy' ? '245, 158, 11' : '56, 189, 248'}, 0.08)`
              : 'rgba(99, 102, 241, 0.03)',
            backdropFilter: isInteractive ? 'blur(3px)' : 'none',
            WebkitBackdropFilter: isInteractive ? 'blur(3px)' : 'none',
            boxShadow: isInteractive
              ? `0 0 20px rgba(56, 189, 248, 0.35), inset 0 0 10px rgba(56, 189, 248, 0.15)`
              : `0 0 10px rgba(99, 102, 241, 0.15)`,
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* 5. Click Shockwave Ripples */}
      {shockwaves.map((wave) => (
        <div
          key={wave.id}
          style={{
            position: 'fixed',
            top: wave.y,
            left: wave.x,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: `1.5px solid ${CYAN}`,
            boxShadow: `0 0 16px ${CYAN}`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'cursorShockwave 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        />
      ))}

      <style>{`
        @keyframes cursorShockwave {
          0% {
            width: 12px;
            height: 12px;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            width: 85px;
            height: 85px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        @media (pointer: fine) {
          body, a, button, input, textarea, [role="button"], select, .clickable {
            cursor: none !important;
          }
        }
      `}</style>
    </div>
  );
};
