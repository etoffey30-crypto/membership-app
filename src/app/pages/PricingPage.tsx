import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { MagicAnimator } from '../components/MagicAnimator';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small associations getting started',
    price: '49',
    period: 'per month',
    features: [
      'Up to 500 members',
      'Membership database & CRM',
      'Automated dues & renewals',
      'Member portal access',
      'Email support',
      'Basic reporting',
      '5 GB storage',
      'Standard integrations',
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'from-sky-500 to-sky-600',
  },
  {
    name: 'Professional',
    description: 'For growing organizations with advanced needs',
    price: '149',
    period: 'per month',
    features: [
      'Up to 2,500 members',
      'Everything in Starter',
      'Event management',
      'Email & SMS campaigns',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'API access',
      '50 GB storage',
      'Premium integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'from-violet-500 to-violet-600',
  },
  {
    name: 'Enterprise',
    description: 'For large associations with complex requirements',
    price: 'Custom',
    period: 'tailored pricing',
    features: [
      'Unlimited members',
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'Advanced security features',
      'SLA guarantee',
      'Training & onboarding',
      'Unlimited storage',
      'Custom development',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-orange-500 to-orange-600',
  },
];

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and can arrange bank transfers for Enterprise plans.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes! We use bank-level encryption and are compliant with GDPR, SOC 2, and other security standards.',
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer: 'Yes! We offer special pricing for registered nonprofit organizations. Contact our sales team for details.',
  },
  {
    question: 'What happens if I exceed my member limit?',
    answer: 'We\'ll notify you when you\'re approaching your limit. You can easily upgrade to accommodate more members.',
  },
];

export function PricingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                Flexible Pricing
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Plans That{' '}
                <span className="bg-gradient-to-r from-primary via-brand-purple to-brand-orange bg-clip-text text-transparent">
                  Scale With You
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Start with a 14-day free trial. No credit card required. No long-term contracts. Cancel anytime. All plans include core features to get you started.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No credit card
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cancel anytime
                </div>
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
                  src="https://images.unsplash.com/photo-1758519288197-69c459bd55d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljaW5nJTIwcGxhbnMlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYzNDM2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pricing Plans"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              All plans include our core features. Scale up as your organization grows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-4 py-2 bg-gradient-to-r ${plan.color} text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg`}>
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`h-full bg-white rounded-2xl p-6 sm:p-8 ${
                    plan.popular
                      ? 'border-2 border-violet-500 shadow-2xl shadow-violet-500/20'
                      : 'border border-border shadow-lg'
                  } hover:shadow-xl transition-all duration-300`}
                >
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-foreground/70 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      {plan.price !== 'Custom' && <span className="text-3xl text-foreground/60">$</span>}
                      <span className="text-4xl sm:text-5xl font-bold text-primary">{plan.price}</span>
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{plan.period}</div>
                  </div>

                  {/* CTA Button */}
                  <a href="https://solidaireapp.io/login" className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold mb-8 transition-all ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                          : 'bg-gray-100 text-primary hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </a>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${plan.popular ? 'text-purple-600' : 'text-gray-600'}`}
                          />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gradient Border for Popular */}
                  {plan.popular && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.color} opacity-10 pointer-events-none`} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl border border-blue-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">💰</div>
                <div className="font-semibold text-primary mb-1">No Setup Fees</div>
                <div className="text-sm text-foreground/70">Get started immediately</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">⚡</div>
                <div className="font-semibold text-primary mb-1">Instant Upgrades</div>
                <div className="text-sm text-foreground/70">Scale as you grow</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">🔒</div>
                <div className="font-semibold text-primary mb-1">No Lock-in</div>
                <div className="text-sm text-foreground/70">Cancel anytime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">🎯</div>
                <div className="font-semibold text-primary mb-1">ROI Guaranteed</div>
                <div className="text-sm text-foreground/70">Save 60% on admin</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <HelpCircle
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-4">Still have questions?</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
              >
                Contact Our Team
              </motion.button>
            </Link>
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
                src="/dashboard.png" 
                alt="Dashboard Background"
                className="w-full h-full object-cover filter blur-lg scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-900/80 to-indigo-900/90 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Ready to Get Started?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
                Try Solidaire free for 14 days and see why hundreds of organizations trust us
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="https://solidaireapp.io/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
                <Link to="/how-it-works">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all w-full"
                  >
                    See How It Works
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
