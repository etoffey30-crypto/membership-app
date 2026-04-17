import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, CreditCard, Globe, Calendar, Mail, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import image10 from '../../assets/image10.jpg';
import image9 from '../../assets/image9.jpg';
import image7 from '../../assets/image7.jpg';
import image4 from '../../assets/image4.jpg';
import image3 from '../../assets/image3.jpg';
import image6 from '../../assets/image6.jpg';

const features = [
  {
    icon: Users,
    title: 'Membership Database (CRM)',
    image: image10,
    description: 'Centralize all member information in one secure, searchable database. Track profiles, renewal dates, engagement history, and custom fields with ease.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Dues & Renewals Automation',
    image: image9,
    description: 'Automate membership billing, send renewal reminders, and process payments seamlessly. Never miss a renewal with smart automated workflows.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Globe,
    title: 'Member Portal',
    image: image7,
    description: 'Give members 24/7 access to update profiles, renew memberships, register for events, and access exclusive content through a branded self-service portal.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    image: image4,
    description: 'Plan, promote, and execute events effortlessly. Handle registrations, payments, check-ins, and post-event surveys all in one place.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Mail,
    title: 'Communication & Marketing',
    image: image3,
    description: 'Send targeted emails, newsletters, and SMS campaigns. Segment your audience and track engagement with built-in analytics.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    image: image6,
    description: 'Make data-driven decisions with comprehensive dashboards. Track membership growth, revenue, engagement metrics, and generate custom reports.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

function TiltFeatureCard({ children, className }: { children: React.ReactNode, className?: string }) {
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

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="py-32 bg-slate-50/10 backdrop-blur-2xl relative overflow-hidden z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,var(--color-indigo-100),transparent_50%)] pointer-events-none opacity-40 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-indigo-700 border border-indigo-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase glowing-shadow">
            Core Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Everything You Need in <span className="bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent">One Platform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Solidaire centralizes operations, reduces administrative workload, and enhances member engagement through powerful automation.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <TiltFeatureCard className="h-full bg-white/70 backdrop-blur-xl p-3 pb-8 rounded-3xl border-2 border-white shadow-xl glowing-shadow hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Image Banner */}
                <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all" style={{ transform: "translateZ(10px)" }}>
                  <ImageWithFallback 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent mix-blend-overlay" />
                  
                  {/* Floating Icon overlaid on Image */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 text-slate-900`} />
                  </div>
                </div>

                <div style={{ transform: "translateZ(30px)" }} className="px-5 flex-1 flex flex-col">
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Glow Overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-[4rem] pointer-events-none mix-blend-color-burn z-0`} />
              </TiltFeatureCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-primary via-brand-purple to-brand-orange text-white rounded-xl font-bold shadow-2xl glowing-shadow animate-hue-shift luminous-bg"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
