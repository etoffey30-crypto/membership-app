import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HowItWorks } from '../components/HowItWorks';
import { Integrations } from '../components/Integrations';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </motion.div>
  );
}
