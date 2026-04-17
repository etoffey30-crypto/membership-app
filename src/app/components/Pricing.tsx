import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small associations getting started',
    price: 'Custom',
    period: 'per month',
    features: [
      'Up to 500 members',
      'Membership database & CRM',
      'Automated dues & renewals',
      'Member portal access',
      'Email support',
      'Basic reporting',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing organizations with advanced needs',
    price: 'Custom',
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
    ],
    cta: 'Start Free Trial',
    popular: true,
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
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={ref} className="py-32 bg-white/10 luminous-bg relative overflow-hidden rounded-t-[3rem] -mt-16 z-[60] border-t border-white/40 shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.03)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-indigo-100),transparent_50%)] pointer-events-none opacity-40 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-indigo-700 border border-indigo-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase glowing-shadow">
            Flexible Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Plans That <span className="bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent">Scale With You</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start with a 14-day free trial. No credit card required. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-1000">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                plan.popular ? 'md:-mt-6 md:mb-6' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-xl glowing-shadow animate-hue-shift">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 border-2 border-indigo-300 shadow-2xl glowing-shadow'
                    : 'bg-white/70 border-2 border-white glowing-shadow'
                }`}
              >
                {/* Plan Name */}
                <h3 className={`text-2xl font-extrabold mb-2 ${
                  plan.popular ? 'bg-gradient-to-r from-indigo-500 to-brand-purple bg-clip-text text-transparent' : 'text-slate-900'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {plan.period}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="https://solidaireapp.io/login" className="block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-xl font-bold mb-8 transition-all shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange text-white shadow-xl glowing-shadow animate-hue-shift'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-2 border-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </a>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular
                          ? 'bg-gradient-to-br from-indigo-500 to-brand-purple'
                          : 'bg-indigo-100'
                      }`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border-2 border-white glowing-shadow shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[{e:'💰',t:'No Setup Fees',d:'Get started immediately at no extra cost'},{e:'⚡',t:'Instant Upgrades',d:'Scale your plan as your organization grows'},{e:'🔒',t:'No Lock-in',d:'Cancel or change plans anytime, freely'},{e:'🎯',t:'ROI Guaranteed',d:'Save 60%+ on admin overhead time'}].map((item, i) => (
              <div key={i} className="p-6 bg-white/50 rounded-2xl border border-white/80 hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">{item.e}</div>
                <div className="font-bold text-slate-900 mb-1">{item.t}</div>
                <div className="text-sm text-slate-600">{item.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
