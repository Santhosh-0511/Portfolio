import React from 'react';

export const FluidBackground: React.FC = () => {
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
          opacity: 0.25,
        }}
      />
    </div>
  );
};
