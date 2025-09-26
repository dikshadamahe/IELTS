import { motion, useReducedMotion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '🗣️',
    title: 'Speaking Practice',
    description:
      'Live mentor-led labs simulate IELTS speaking rooms with targeted drills and instant scoring tips.',
  },
  {
    icon: '📝',
    title: 'Mock Tests',
    description:
      'Weekly full-length assessments with proctoring analytics so you refine pacing, accuracy, and stamina.',
  },
  {
    icon: '🤖',
    title: 'AI Band Score',
    description:
      'Smart insights break down each module, flagging grammar, fluency, and coherence gaps to close fast.',
  },
  {
    icon: '🤝',
    title: 'Mentor Support',
    description:
      'Dedicated IELTS strategists track your study plan, answer doubts 24/7, and celebrate every milestone.',
  },
];

const Features = () => {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1];

  return (
    <motion.section
      id="features"
      className="bg-white py-section-gap"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: easing }}
    >
      <div className="container max-w-content-bleed">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.8, ease: easing }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary/80">
            Why learners choose us
          </span>
          <h2 className="mt-6 font-headings text-h2 text-primary">
            Why Learners Choose Precision &amp; Progress
          </h2>
          <p className="mt-4 text-body text-charcoal/70">
            A proven framework that balances expert-led lessons with intelligent analytics to keep you focused on consistent band uplift.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} index={index} {...feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
