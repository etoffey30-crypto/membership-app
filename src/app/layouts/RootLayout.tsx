import { Outlet, ScrollRestoration } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { GlobalAurora } from '../components/GlobalAurora';
import { useEffect, useRef } from 'react';

export function RootLayout() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let rafId: number;
    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates relative to the viewport
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };

    const handleMouseLeave = () => {
      targetX = 0.5;
      targetY = 0.5;
    };

    const updatePosition = () => {
      // Smooth interpolation for mouse follow
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      root.style.setProperty('--mx', currentX.toString());
      root.style.setProperty('--my', currentY.toString());

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen">
      <GlobalAurora />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <ScrollRestoration />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
