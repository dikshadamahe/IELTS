import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const badges = [
  {
    icon: '✅',
    title: 'Band 8+ Achievers',
    description: '500+ students succeeded',
  },
  {
    icon: '📈',
    title: 'Average Band Lift',
    description: '+1.5 score improvement',
  },
  {
    icon: '�‍🏫',
    title: 'Mentor Satisfaction',
    description: '4.9/5 mentor rating',
  },
  {
    icon: '⏱️',
    title: 'Fast-Track Cohorts',
    description: '6-week express results',
  },
];

const AchievementBadge: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="outcomes" className="bg-neutral-light py-section-gap">
      <div className="container max-w-content-bleed text-center">
        <h2 className="font-headings text-h2 text-primary">Celebrate Your IELTS Milestones</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body text-charcoal/70">
          Each badge represents the tangible progress our learners achieve through consistent guidance and precise feedback.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              tabIndex={0}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easing }}
              whileHover={{ y: reduceMotion ? 0 : -8, boxShadow: reduceMotion ? undefined : '0 26px 48px rgba(255,181,71,0.35)' }}
              className="group inline-flex items-center gap-4 rounded-full border border-amber/70 bg-white px-6 py-4 text-left shadow-[0_18px_36px_rgba(26,43,109,0.1)] transition-all duration-400 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/15 text-xl text-amber">
                {badge.icon}
              </span>
              <div>
                <p className="font-headings text-small font-semibold uppercase tracking-[0.14em] text-primary">
                  {badge.title}
                </p>
                <p className="text-xs text-charcoal/70">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementBadge;