import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import AchievementBadge from './components/AchievementBadge';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
  {
    icon: '🗣️',
    title: 'Speaking Practice',
    description:
      'Live mentor-led labs simulate IELTS speaking rooms with targeted drills and instant scoring tips.',
  },
  {
    icon: '�',
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

function App() {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      <ProgressBar />
      <main className="pt-24">
        <Hero />

        <motion.section
          id="courses"
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

        <Testimonials />

        <AchievementBadge />

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
