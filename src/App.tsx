import React, { useState, useEffect } from 'react';
import { FluidBackground } from './components/FluidBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { AchievementsArena } from './components/AchievementsArena';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Initialize progressive scroll reveal observer
  useScrollReveal();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-[#F8FAFC] bg-[#080B11] selection:bg-[#6366F1]/30 selection:text-[#F8FAFC]">
      {/* Ambient cursor spotlight */}
      <div
        style={{
          position: 'fixed',
          top: cursorPos.y,
          left: cursorPos.x,
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* Unique Tactical HUD Custom Cursor */}
      <CustomCursor />

      {/* Interactive Constellation Particle Canvas */}
      <FluidBackground />

      {/* Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Sections (Ordered per reference portfolio structure) */}
      <main className="relative z-10">
        <Hero />
        <AboutEducation />
        <Projects />
        <SkillsMatrix />
        <AchievementsArena />
        <Contact />
      </main>

      {/* Tactical Footer */}
      <Footer />

      {/* Quick Command HUD Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};

export default App;
