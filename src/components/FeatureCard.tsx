import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FeatureCardProps {
  icon?: string;
  title?: string;
  description?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon = "�️", 
  title = "Speaking Practice Labs", 
  description = "Role-play real IELTS speaking scenarios with mentors who grade each response in real time.",
  index = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const easing = [0.22, 1, 0.36, 1] as const;

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.7,
        ease: easing,
      },
    },
  };

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: shouldReduceMotion ? 0 : -12, boxShadow: shouldReduceMotion ? undefined : '0 32px 54px rgba(26,43,109,0.18)' }}
      className="group relative rounded-3xl border border-neutral-medium/30 bg-white p-8 shadow-[0_20px_38px_rgba(26,43,109,0.08)] transition-all duration-500 ease-brand"
    >
      <div className="absolute inset-x-8 -top-3 h-1 rounded-full bg-gradient-to-r from-amber/0 via-amber/70 to-amber/0 opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100" />
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
  transition={{ delay: 0.12 * index, duration: 0.6, ease: easing }}
        className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-amber/80 bg-emerald/15 text-3xl text-emerald shadow-[0_12px_26px_rgba(29,185,84,0.25)]"
      >
        <span className="text-2xl">{icon}</span>
      </motion.div>
      <h3 className="font-headings text-h3 text-primary">{title}</h3>
      <p className="mt-4 text-body text-charcoal/70">{description}</p>
      <a
        href="#courses"
        className="mt-6 inline-flex items-center text-small font-semibold text-emerald transition-all duration-200 ease-brand hover:text-secondary"
      >
        Learn More
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </motion.article>
  );
};

export default FeatureCard;