import React from 'react';

export function GlobalAurora() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Primary Animated Blobs */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full animate-float-blob-1"
        style={{
          background: 'radial-gradient(circle, oklch(0.6 0.16 230) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.35,
          mixBlendMode: 'multiply',
        }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[80%] rounded-full animate-float-blob-2"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0.2 15) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.3,
          mixBlendMode: 'multiply',
        }}
      />
      <div 
        className="absolute top-[20%] left-[20%] w-[50%] h-[60%] rounded-full animate-float-blob-3"
        style={{
          background: 'radial-gradient(circle, oklch(0.7 0.18 45) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.25,
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Mouse-Reactive Spotlight Layer ── */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 600px at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%), oklch(0.7 0.2 15 / 0.18), transparent 70%)`,
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Subtle Readability Overlay ── */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(180deg, white 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
