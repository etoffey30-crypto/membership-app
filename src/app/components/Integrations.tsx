import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { CreditCard, DollarSign, Mail, Video, BarChart, FileText } from 'lucide-react';

export function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-white/10 luminous-bg relative overflow-hidden rounded-t-[3rem] -mt-16 z-40 border-t-2 border-white/40 shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.03)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-sky-100),transparent_30%)] pointer-events-none opacity-40 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-indigo-700 border border-indigo-100 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase glowing-shadow">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Seamlessly Connect <span className="bg-gradient-to-r from-indigo-500 via-brand-purple to-brand-orange bg-clip-text text-transparent">Your Tools</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Solidaire integrates with the platforms you already use. Connect payment gateways, accounting software, and marketing tools flawlessly.
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border-2 border-white glowing-shadow shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-orange-50/50 mix-blend-multiply pointer-events-none" />
          
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Easy Setup</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Connect your tools in just a few clicks with our simple integration wizard.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Real-time Sync</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Keep your data synchronized perfectly across all platforms automatically.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Secure & Reliable</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Enterprise-grade, end-to-end security for all your integrations and data transfers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
