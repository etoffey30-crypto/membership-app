import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileSpreadsheet, AlertCircle, Puzzle, TrendingDown, ArrowRight } from 'lucide-react';

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Manual Spreadsheets',
    description: 'Hours wasted managing member data across disconnected files',
    colorBox: 'from-orange-400 to-amber-500',
    colorIcon: 'text-white'
  },
  {
    icon: AlertCircle,
    title: 'Missed Renewals',
    description: 'Lost revenue from members who forget to renew their membership',
    colorBox: 'from-fuchsia-500 to-pink-500',
    colorIcon: 'text-white'
  },
  {
    icon: Puzzle,
    title: 'Fragmented Tools',
    description: 'Juggling multiple platforms for events, payments, and communication',
    colorBox: 'from-indigo-500 to-violet-500',
    colorIcon: 'text-white'
  },
  {
    icon: TrendingDown,
    title: 'Low Engagement',
    description: 'Struggling to keep members active and connected to your mission',
    colorBox: 'from-sky-400 to-blue-500',
    colorIcon: 'text-white'
  },
];

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-white/20 luminous-bg z-20 backdrop-blur-2xl">
      {/* ── Organic Wavy Divider (Top) ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[99%] z-10 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/20 backdrop-blur-xl"
          ></path>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>
      
      {/* ── Floating Luminous Orbs (Background) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand-blue-ok/5 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 120, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full bg-brand-purple-ok/5 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-brand-pink-ok/5 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          {/* Premium Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-indigo-50/50 backdrop-blur-md text-indigo-700 border border-indigo-200/50 rounded-full mb-8 text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            The Problem
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Running an Association <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Shouldn't Be This Hard
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            We understand the daily challenges you face managing <br className="hidden sm:block"/>
            your organization's scattered ecosystem.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.34, 1.56, 0.64, 1] 
              }}
              className="relative group h-full perspective-1000"
            >
              <TiltCard className="h-full bg-white/60 backdrop-blur-2xl p-9 rounded-[2.5rem] border border-white/40 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div style={{ transform: "translateZ(40px)" }} className="h-full flex flex-col">
                  {/* Icon Box */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${problem.colorBox} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-500`}>
                    <problem.icon className={`w-8 h-8 ${problem.colorIcon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {problem.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="w-10 h-0.5 bg-slate-200 rounded-full group-hover:w-full transition-all duration-700 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-500" />
                  </div>
                </div>

                {/* Glass Glare */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Transition Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-full cursor-pointer shadow-xl"
          >
            <span className="font-bold tracking-tight">There's a better way</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 text-indigo-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
