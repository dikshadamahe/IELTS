import { motion, useReducedMotion, Easing } from 'framer-motion';

const Resources = () => {
  const reduceMotion = useReducedMotion();
  const easing: Easing | Easing[] = [0.22, 1, 0.36, 1];

  return (
    <motion.section
      id="resources"
      className="bg-white py-section-gap"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: easing }}
    >
      <div className="container max-w-content-bleed grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="rounded-full bg-royal-blue/10 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary">
            Learning Resources
          </span>
          <h2 className="mt-6 font-headings text-h2 text-primary">
            Study Pods tailored for every IELTS module
          </h2>
          <p className="mt-4 text-body text-charcoal/70">
            Access curated reading lists, vocabulary drills, speaking labs, and writing evaluations that mirror the actual exam conditions. Every resource comes with mentor notes and sample answers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Weekly live masterclasses',
              'Speaking mock interviews',
              'Writing band 9 sample essays',
              'Reading speed-builder playlists',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-medium/30 bg-neutral-light p-5 text-left">
                <span className="text-small font-semibold uppercase tracking-[0.12em] text-primary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easing }}
        >
          <img
            src="/assets/resources-overview.svg"
            alt="Mock test analytics dashboard"
            className="w-full rounded-3xl border border-neutral-medium/40 bg-neutral-light p-6 shadow-card"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resources;
