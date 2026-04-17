import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, CreditCard, Globe, Calendar, Mail, BarChart3, Shield, Zap, Clock, FileText, Bell, Smartphone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { MagicAnimator } from '../components/MagicAnimator';
import designerImage from '../../assets/designer-1.png';

const mainFeatures = [
  {
    icon: Users,
    title: 'Membership Database (CRM)',
    description: 'Centralize all member information in one secure, searchable database. Track profiles, renewal dates, engagement history, and custom fields with ease.',
    benefits: ['Advanced search & filtering', 'Custom fields & tags', 'Member segmentation', 'Import/Export capabilities'],
    color: 'from-sky-500 to-sky-600',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    icon: CreditCard,
    title: 'Dues & Renewals Automation',
    description: 'Automate membership billing, send renewal reminders, and process payments seamlessly. Never miss a renewal with smart automated workflows.',
    benefits: ['Automated invoicing', 'Multiple payment gateways', 'Recurring billing', 'Smart reminders'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Globe,
    title: 'Member Portal',
    description: 'Give members 24/7 access to update profiles, renew memberships, register for events, and access exclusive content through a branded self-service portal.',
    benefits: ['Self-service access', 'Custom branding', 'Mobile responsive', 'Secure login'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Plan, promote, and execute events effortlessly. Handle registrations, payments, check-ins, and post-event surveys all in one place.',
    benefits: ['Online registration', 'Ticketing & payments', 'QR code check-in', 'Attendee tracking'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Mail,
    title: 'Communication & Marketing',
    description: 'Send targeted emails, newsletters, and SMS campaigns. Segment your audience and track engagement with built-in analytics.',
    benefits: ['Email & SMS campaigns', 'Template builder', 'Audience segmentation', 'Engagement tracking'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Make data-driven decisions with comprehensive dashboards. Track membership growth, revenue, engagement metrics, and generate custom reports.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Export capabilities', 'Trend analysis'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
];

const additionalFeatures = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and security' },
  { icon: Zap, title: 'API Access', description: 'Integrate with your existing tools' },
  { icon: Clock, title: '24/7 Support', description: 'Always here when you need us' },
  { icon: FileText, title: 'Document Management', description: 'Store and share files securely' },
  { icon: Bell, title: 'Smart Notifications', description: 'Stay informed with real-time alerts' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Manage on-the-go with our apps' },
];

export function FeaturesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Magic Animator Background */}
        <MagicAnimator 
          type="video" 
          className="absolute inset-0 z-0"
          overlay={true}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-sky-50 text-sky-700 border border-sky-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase">
                Powerful Features
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Everything You Need to{' '}
                <span className="bg-gradient-to-r from-primary via-brand-purple to-brand-orange bg-clip-text text-transparent">
                  Manage Members
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed">
                From membership management to event planning, communications to analytics—Solidaire provides all the tools you need in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://solidaireapp.io/login">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(14, 165, 233, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-sky-500/20 transition-all hover:brightness-110"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
                <Link to="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold hover:border-primary/20 hover:bg-sky-50 transition-all w-full"
                  >
                    View Pricing
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={designerImage}
                  alt="Feature Showcase"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Core Features That Drive Results
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive tools designed to streamline operations and enhance member engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              And Much More
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Additional features to give you a complete membership management solution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] p-12 md:p-20 overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1720962158789-9389a4f399da?auto=format&fit=crop&q=80&w=1600" 
                alt="Dashboard Background"
                className="w-full h-full object-cover filter blur-md scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-900/80 to-indigo-900/90 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                Ready to Transform Your Membership Management?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
                Start your free 14-day trial and experience all features with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://solidaireapp.io/login">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(14,165,233,0.42)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white text-indigo-700 rounded-2xl font-bold text-xl shadow-2xl transition-all"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/60 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all w-full"
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
