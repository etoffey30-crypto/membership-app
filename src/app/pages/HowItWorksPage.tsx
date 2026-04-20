import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Settings, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { MagicAnimator } from '../components/MagicAnimator';
import designerImage2 from '../../assets/designer-2.png';
import oneImage from '../../assets/one.png';
import twoImage from '../../assets/two.png';
import threeImage from '../../assets/threee.png';
import fourImage from '../../assets/four.png';

const steps = [
  {
    icon: UserPlus,
    title: 'Onboard Members',
    description: 'Import existing member data or start fresh. Set up membership tiers, pricing, and access levels in minutes.',
    details: [
      'Quick CSV import of existing data',
      'Create custom membership tiers',
      'Set up pricing and billing cycles',
      'Configure member permissions',
    ],
    step: '01',
    color: 'from-sky-500 to-sky-600',
    image: oneImage,
  },
  {
    icon: Settings,
    title: 'Automate Billing',
    description: 'Configure automated dues collection, renewal reminders, and payment processing. Set it once and let it run.',
    details: [
      'Connect payment gateways instantly',
      'Schedule automatic renewal reminders',
      'Set up recurring billing cycles',
      'Customize invoice templates',
    ],
    step: '02',
    color: 'from-emerald-500 to-emerald-600',
    image: twoImage,
  },
  {
    icon: Zap,
    title: 'Execute Events',
    description: 'Create events, send invitations, manage registrations, and handle check-ins seamlessly through the platform.',
    details: [
      'Build event pages with registration',
      'Send automated event invitations',
      'Process payments and issue tickets',
      'QR code check-in at events',
    ],
    step: '03',
    color: 'from-violet-500 to-violet-600',
    image: threeImage,
  },
  {
    icon: TrendingUp,
    title: 'Track & Grow',
    description: 'Monitor engagement, analyze trends, and use insights to increase member satisfaction and retention.',
    details: [
      'Real-time dashboard analytics',
      'Track engagement metrics',
      'Generate custom reports',
      'Identify growth opportunities',
    ],
    step: '04',
    color: 'from-orange-500 to-orange-600',
    image: fourImage,
  },
];

const benefits = [
  { title: 'Save Time', description: 'Reduce admin work by 60%', icon: '⏱️' },
  { title: 'Increase Revenue', description: 'Boost renewals by 35%', icon: '💰' },
  { title: 'Enhance Engagement', description: 'Double member participation', icon: '📈' },
  { title: 'Stay Organized', description: 'Everything in one place', icon: '🎯' },
];

export function HowItWorksPage() {
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
                Simple Process
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Get Started in{' '}
                <span className="bg-gradient-to-r from-primary via-brand-purple to-brand-orange bg-clip-text text-transparent">
                  4 Simple Steps
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From onboarding to growth, our platform guides you through every stage of membership management with intuitive workflows and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://solidaireapp.io/login" className="flex-1 lg:flex-none">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(14, 165, 233, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-2xl shadow-sky-500/20 transition-all hover:brightness-110 text-center"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
                <Link to="/features" className="flex-1 lg:flex-none">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:border-primary/20 hover:bg-sky-50 transition-all w-full text-center"
                  >
                    View Features
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
                  src={designerImage2}
                  alt="Workflow Process"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Follow these simple steps to transform your membership management
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg`}>
                      {step.step}
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ filter: 'saturate(2)' }} />
                        <span className="text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-8 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl`}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 overflow-hidden relative">
                      {step.image ? (
                        <div className="flex items-center justify-center">
                          <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg shadow-md border border-slate-200/60" />
                        </div>
                      ) : (
                        <>
                          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                            <step.icon className="w-20 h-20 text-gray-300" />
                          </div>
                          <div className="mt-6 space-y-3">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-3 bg-gray-200 rounded animate-pulse" style={{ width: `${100 - i * 15}%` }} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              The Results You'll See
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Organizations using Solidaire experience measurable improvements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h4>
                <p className="text-foreground/70">{benefit.description}</p>
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
                src={import.meta.env.BASE_URL + 'dashboard.png'} 
                alt="Dashboard Background"
                className="w-full h-full object-cover filter blur-lg scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-900/80 to-indigo-900/90 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Ready to Streamline Your Operations?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
                Join hundreds of organizations saving time and increasing member satisfaction
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="https://solidaireapp.io/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-12 py-6 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2"
                  >
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
                <Link to="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all w-full"
                  >
                    View Pricing
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
