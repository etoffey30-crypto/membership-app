import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { UserPlus, Settings, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Onboard Members',
    description: 'Import existing member data or start fresh. Set up membership tiers, pricing, and access levels in minutes.',
    step: '01',
  },
  {
    icon: Settings,
    title: 'Automate Billing',
    description: 'Configure automated dues collection, renewal reminders, and payment processing. Set it once and let it run.',
    step: '02',
  },
  {
    icon: Zap,
    title: 'Execute Events',
    description: 'Create events, send invitations, manage registrations, and handle check-ins seamlessly through the platform.',
    step: '03',
  },
  {
    icon: TrendingUp,
    title: 'Track & Grow',
    description: 'Monitor engagement, analyze trends, and use insights to increase member satisfaction and retention.',
    step: '04',
  },
];

function TiltStepCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white/10 luminous-bg relative overflow-hidden rounded-t-[3rem] -mt-16 z-30 border-t-2 border-white/40 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.03)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-purple-200),transparent_40%)] pointer-events-none opacity-40 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-indigo-700 border border-indigo-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase glowing-shadow">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Get Started in <span className="bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From onboarding to growth, our platform intuitively guides you through every stage of membership management.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 -translate-y-1/2" 
               style={{ top: '120px' }} 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 perspective-1000">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative h-full"
              >
                {/* Step Card */}
                <TiltStepCard className="relative h-full bg-white/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-white glowing-shadow hover:shadow-2xl transition-all duration-300">
                  <div style={{ transform: "translateZ(30px)" }}>
                    {/* Step Number */}
                    <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-indigo-500 via-brand-purple to-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white animate-hue-shift">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-fuchsia-50 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-indigo-500/10 transition-transform">
                      <step.icon className="w-8 h-8 text-indigo-600 animate-hue-shift" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 text-indigo-300/50 -translate-y-1/2 translate-x-1/2 z-10 pointer-events-none">
                      <svg className="w-10 h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}

                  {/* Subtle Glow Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400 to-fuchsia-400 opacity-5 rounded-bl-full pointer-events-none" />
                </TiltStepCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-white glowing-shadow">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Ready to streamline your operations?
              </h3>
              <p className="text-slate-600">
                Start your free trial today and experience the difference.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-primary via-brand-purple to-brand-orange text-white rounded-xl font-bold shadow-2xl glowing-shadow animate-hue-shift luminous-bg whitespace-nowrap"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
