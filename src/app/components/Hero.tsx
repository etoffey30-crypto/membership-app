import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import heroVideo from "@/assets/hero-solidaire-animation.mp4";
import { useEffect, useRef, useState } from 'react';

/* ─── stagger container for left column ─── */
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ─── Dashboard Mockup Component with 3D Tilt ─── */
function DashboardMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={up}
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', maxWidth: 440, marginTop: 24, zIndex: 10 }}
    >
      {/* Transform Container */}
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.2) 0%, rgba(14,165,233,0.05) 60%, transparent 100%)',
            filter: 'blur(8px)',
            transform: "translateZ(-20px)"
          }}
        />
        
        {/* Floating image container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <motion.img
            src={import.meta.env.BASE_URL + 'dashboard.png'}
            alt="Solidaire Dashboard across devices"
            className="w-full h-auto object-contain"
            style={{ transform: "translateZ(20px)" }}
          />
          
          {/* Metallic Sheen Overlay */}
          <motion.div 
            className="absolute inset-0 z-10 pointer-events-none"
            animate={{ 
              x: ["-100%", "100%"], 
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 4, 
              ease: "linear" 
            }}
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)"
            }}
          />
        </div>

        {/* Shadow layer for depth */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/10 blur-xl rounded-full translate-z-[-30px]" />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        fontFamily: "'Inter',sans-serif",
        paddingTop: 80, /* height of fixed nav */
      }}
    >
      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 flex items-center">        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">

          {/* ━━━━━ LEFT COLUMN ━━━━━ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Trusted Badge */}
            <motion.div
              variants={up}
              className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-700 border border-sky-100/50 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-tight">Trusted by 500+ Organizations</span>
            </motion.div>

            {/* H1 Headline - Matched to Image */}
            <motion.h1
              variants={up}
              className="mb-6 font-black text-slate-900 leading-[1.05] tracking-tight flex flex-col"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
            >
              <span className="text-slate-900">All-in-One</span>
              <span className="text-slate-900">Membership &</span>
              <span className="text-brand-blue-ok">Association</span>
              <span className="text-brand-purple-ok">Management</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={up}
              className="mb-8 text-base text-slate-500 leading-relaxed"
              style={{ maxWidth: 440 }}
            >
              Cloud-based tools to manage membership databases, dues, events, and
              communications — one powerful platform to automate your entire association
              administration.
            </motion.p>

            {/* CTA Button — matches reference exactly */}
            <motion.div variants={up} className="mb-12">
              <a href="https://solidaireapp.io/login">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 50px rgba(14,165,233,0.42)' }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-9 py-4 text-white font-bold text-base rounded-full shadow-lg"
                  style={{ background: 'linear-gradient(130deg,#38bdf8 0%,#0ea5e9 55%,#0284c7 100%)' }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </motion.div>

            {/* ── Dashboard Mockup Image with 3D Tilt ── */}
            <DashboardMockup />

          </motion.div>

          {/* ━━━━━ RIGHT COLUMN ━━━━━ */}
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0" style={{ minHeight: 640 }}>
            {/* ── Animated Wrapper for the visual ── */}
            <div className="relative w-full max-w-[760px] animate-float-container group">
              
              {/* ── Main Video Visual ── */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl z-10">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  // eslint-disable-next-line react/no-unknown-property
                  fetchpriority="high"
                  aria-label="Robotic hand presenting the Solidaire membership dashboard"
                  className="w-full h-auto object-cover"
                />

                {/* ── Primary Animated Gradient Overlay ── */}
                <div 
                  className="absolute inset-0 z-1 pointer-events-none animate-gradient-flow animate-gradient-breathe"
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-coral) 0%, var(--brand-orange) 25%, var(--brand-sky) 50%, var(--brand-blue) 100%)',
                    mixBlendMode: 'overlay',
                  }}
                />

                {/* ── Secondary Rotating Depth Overlay ── */}
                <div 
                  className="absolute inset-0 z-1 pointer-events-none animate-rotate-slow opacity-15"
                  style={{
                    background: 'radial-gradient(circle at top left, var(--brand-coral), var(--brand-blue))',
                    transformOrigin: 'center center',
                    scale: '1.5',
                  }}
                />
              </div>

              {/* ── Floating stats chip: top right ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.55, ease: [0.34,1.56,0.64,1] }}
                className="absolute -top-6 -right-6 rounded-2xl p-3.5 z-20 w-44"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 12px 40px rgba(14,165,233,0.14),0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(186,230,255,0.7)',
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Members</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500"/>
                </div>
                <p className="text-2xl font-black text-slate-900 leading-none">2,500+</p>
                <p className="text-[10px] text-emerald-500 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3"/>
                  +12% this month
                </p>
              </motion.div>

              {/* ── Floating chip: bottom right ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-6 -right-2 rounded-xl px-3.5 py-2.5 z-20 flex items-center gap-2.5"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 28px rgba(14,165,233,0.12),0 2px 6px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(186,230,255,0.7)',
                }}
              >
                <motion.div
                  animate={{ backgroundColor: ['#34d399','#059669','#34d399'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-9 h-4 rounded-full relative"
                >
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow"/>
                </motion.div>
                <span className="text-[11px] font-black text-emerald-600">Auto-Renew ON</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sky-300/60 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-sky-400/60 rounded-full"/>
        </motion.div>
      </motion.div>
    </section>
  );
}
