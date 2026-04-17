import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    organization: 'National Healthcare Association',
    image: 'https://images.unsplash.com/photo-1758518726869-01aff69a56e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjM0Mjk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Solidaire transformed how we manage our 5,000+ members. What used to take days now takes hours. Our renewal rate increased by 35% in the first year!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    organization: 'Professional Engineers Society',
    image: 'https://images.unsplash.com/photo-1758691737492-48e8fdd336f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBidXNpbmVzcyUyMHBlb3BsZSUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3NjM0Mjk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The automation features are incredible. We\'ve reduced our administrative workload by 60% and our members love the self-service portal.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Membership Coordinator',
    organization: 'Artists Guild Federation',
    image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc2MjQ2MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Best investment we\'ve made. The platform is intuitive, the support is outstanding, and our members are more engaged than ever before.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Organizations Trust Us' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50M+', label: 'Members Managed' },
  { value: '35%', label: 'Avg. Renewal Increase' },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-white/10 luminous-bg relative overflow-hidden rounded-t-[3rem] -mt-16 z-30 border-t-2 border-white/40 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.03)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-fuchsia-200),transparent_40%)] pointer-events-none opacity-30 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-indigo-700 border border-indigo-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase glowing-shadow">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Loved by <span className="bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent">Associations Worldwide</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of organizations that have transformed their membership management with Solidaire.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center bg-white/60 backdrop-blur-md rounded-3xl py-8 px-4 border-2 border-white glowing-shadow"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent mb-2 animate-hue-shift">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-white glowing-shadow hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 right-8 w-14 h-14 bg-gradient-to-br from-indigo-500 via-brand-purple to-brand-orange rounded-2xl flex items-center justify-center shadow-xl border-4 border-white animate-hue-shift">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-8 leading-relaxed italic text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-indigo-600 font-medium">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.organization}</div>
                </div>
              </div>

              {/* Glow corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-300 to-fuchsia-300 opacity-5 rounded-bl-full pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">Trusted by leading organizations across</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['Healthcare', 'Engineering', 'Education', 'Arts', 'Finance', 'Technology'].map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-xl font-semibold text-slate-700 border-2 border-white glowing-shadow hover:scale-105 transition-transform cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
