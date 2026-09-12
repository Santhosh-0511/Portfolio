import React, { useEffect, useRef } from 'react';

export const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 160,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);

    const colors = [
      'rgba(99, 102, 241, ', // Electric Indigo
      'rgba(56, 189, 248, ', // Cyber Sky
      'rgba(168, 85, 247, ', // Neon Violet
      'rgba(16, 185, 129, ', // Neon Emerald
    ];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2 + 1,
          color,
          alpha: Math.random() * 0.45 + 0.2,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color.includes('99, 102') ? 'rgba(99, 102, 241, 0.5)' : 'rgba(56, 189, 248, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -10,
        overflow: 'hidden',
      }}
    >
      {/* Deep Obsidian Canvas Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(160deg, #080B11 0%, #0B101B 50%, #07090E 100%)',
        }}
      />

      {/* Atmospheric Electric Indigo & Cyber Cyan Halos */}
      <div
        style={{
          position: 'absolute',
          top: '-8rem',
          left: '-8rem',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          filter: 'blur(140px)',
          WebkitFilter: 'blur(140px)',
          backgroundColor: 'rgba(99, 102, 241, 0.12)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-8rem',
          right: '-8rem',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          filter: 'blur(140px)',
          WebkitFilter: 'blur(140px)',
          backgroundColor: 'rgba(6, 182, 212, 0.10)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          filter: 'blur(180px)',
          WebkitFilter: 'blur(180px)',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle tactical cyber grid */}
      <div
        className="bg-grid"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
        }}
      />

      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
