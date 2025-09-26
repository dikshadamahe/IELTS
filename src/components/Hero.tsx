import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: easing,
      },
    }),
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-24 hidden h-72 w-72 rounded-full bg-emerald/20 blur-3xl lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 hidden h-64 w-64 rounded-full bg-amber/25 blur-3xl md:block" aria-hidden="true" />

      <div className="relative container flex max-w-content-bleed flex-col gap-12 py-section-gap lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="max-w-xl space-y-6">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary/80"
          >
            IELTS Excellence Program
          </motion.span>
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="font-headings text-h1 text-primary"
          >
            <span className="bg-gradient-to-r from-primary via-primary to-emerald bg-clip-text text-transparent">
              Master IELTS with
            </span>
            <span className="block text-amber">Precision &amp; Progress</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="max-w-xl text-body text-charcoal/75"
          >
            Guided by expert mentors, personalised study plans, and smart analytics that highlight your growth at every checkpoint. Let’s accelerate your journey to the band score you deserve.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3 text-small font-semibold uppercase tracking-[0.15em] text-white shadow-card transition-transform duration-300 ease-brand hover:-translate-y-1 hover:scale-[1.02] hover:bg-emerald/90 hover:shadow-[0_0_22px_rgba(255,181,71,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Book a Free Demo
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-10 py-3 text-small font-semibold uppercase tracking-[0.12em] text-primary transition-all duration-300 ease-brand hover:-translate-y-1 hover:scale-[1.02] hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download Brochure
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4"
          >
            {[
              { stat: '12k+', label: 'Learners Coached' },
              { stat: '96%', label: 'Band 7+ Success' },
              { stat: '4.8/5', label: 'Learner Rating' },
              { stat: '24/7', label: 'Mentor Support' },
            ].map(({ stat, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                className="rounded-2xl border border-neutral-medium/40 bg-white p-4 text-center shadow-[0_14px_32px_rgba(26,43,109,0.08)] transition-transform duration-300"
              >
                <div className="font-headings text-2xl font-semibold text-primary">{stat}</div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate/80">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative rounded-[32px] border border-neutral-medium/40 bg-white/95 p-6 shadow-[0_32px_60px_rgba(26,43,109,0.14)] backdrop-blur">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: easing }}
              className="absolute -top-8 right-6 inline-flex items-center gap-2 rounded-full border border-amber/60 bg-white px-4 py-2 text-small font-semibold text-primary shadow-[0_12px_30px_rgba(26,43,109,0.1)]"
            >
              <span className="text-lg">⭐</span>
              <span>Top Rated Institute</span>
            </motion.div>
            <motion.img
              src="/assets/hero-illustration.svg"
              alt="Student preparing for IELTS with confidence"
              className="mx-auto w-full max-w-sm"
              initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: easing }}
            />
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: easing }}
              className="mt-6 rounded-2xl border border-neutral-medium/30 bg-neutral-light p-5 text-neutral-dark"
            >
              <h3 className="font-headings text-lg text-primary">Personal Progress Snapshot</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate/80">
                <li className="flex items-center justify-between">
                  <span>Listening Mastery</span>
                  <span className="font-semibold text-primary">85%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Speaking Confidence</span>
                  <span className="font-semibold text-primary">78%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Mock Test Average</span>
                  <span className="font-semibold text-emerald">Band 7.5</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: easing }}
            className="absolute -bottom-10 left-1/2 hidden w-40 -translate-x-1/2 rounded-3xl border border-emerald/60 bg-white/90 p-4 text-center shadow-[0_18px_36px_rgba(29,185,84,0.25)] lg:block"
          >
            <p className="text-xs uppercase tracking-[0.15em] text-emerald">New</p>
            <p className="mt-2 font-headings text-sm text-primary">AI Band Predictor</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;