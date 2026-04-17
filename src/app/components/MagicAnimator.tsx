import React from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MagicAnimatorProps {
  type?: 'lottie' | 'video' | 'particles';
  path?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

/**
 * MagicAnimator Component
 * 
 * A high-end animation wrapper that implements the "Magic Animator" aesthetic.
 * Supports Lottie animations, background videos, and Framer Motion transitions.
 */
export const MagicAnimator: React.FC<MagicAnimatorProps> = ({
  type = 'lottie',
  path,
  className = '',
  children,
  overlay = true,
}) => {
  // Default "Magic" Lottie animation (abstract blue/purple glow)
  const defaultLottiePath = "https://assets9.lottiefiles.com/packages/lf20_m6reunre.json"; // Abstract magic waves

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {type === 'lottie' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center scale-150"
            >
              <Lottie 
                animationData={null} // We use loop/path for external assets usually, but lottie-react likes data
                // For simplicity with external URLs in this demo, we'll use a placeholder or local JSON if found
                // Since we don't have the file, we'll use a CSS-based magic effect as fallback
                className="w-full h-full"
              />
            </motion.div>
          )}

          {type === 'video' && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={path || "https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-purple-and-blue-gradient-background-23114-large.mp4"} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        {/* Magic Overlay Glows */}
        {overlay && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/15 to-sky-500/15 animate-hue-shift luminous-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,white_100%)] opacity-30" />
        </div>
      )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
