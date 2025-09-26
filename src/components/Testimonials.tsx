import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    score: '8.5',
    quote:
      'The progress reviews kept me accountable and confident. I finally broke past Band 7.5 and secured my university admit.',
    avatar: '/assets/student-sarah.svg',
    role: 'Scholarship Winner, Canada',
  },
  {
    name: 'Ahmed Hassan',
    score: '7.5',
    quote:
      'Mentors simulated the IELTS speaking pressure perfectly. Their feedback translated into two band jump in a single attempt.',
    avatar: '/assets/student-ahmed.svg',
    role: 'Working Professional, UAE',
  },
  {
    name: 'Linh Tran',
    score: '8.0',
    quote:
      'I balanced a full-time job with this program thanks to flexible study pods and on-demand recordings. Highly recommend!',
    avatar: '/assets/student-linh.svg',
    role: 'Marketing Analyst, Vietnam',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  const easing = useMemo(() => [0.22, 1, 0.36, 1] as const, []);

  const paginate = (nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((prev) => {
      const nextIndex = prev + nextDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : nextOffset(dir),
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : nextOffset(-dir),
      transition: {
        duration: 0.6,
        ease: easing,
      },
    }),
  };

  function nextOffset(dir: number) {
    return dir > 0 ? 80 : -80;
  }

  return (
    <section id="testimonials" className="bg-neutral-light py-section-gap">
      <div className="container max-w-content-bleed">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easing }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary/80">
            Results that speak
          </span>
          <h2 className="mt-6 font-headings text-h2 text-primary">Success Stories</h2>
          <p className="mt-4 text-body text-charcoal/70">
            Real learners, real progress. Hear from graduates who now study and work in their dream destinations.
          </p>
        </motion.div>

        <div className="relative mt-12 flex flex-col items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-6 -left-8 hidden w-32 text-[180px] font-serif text-emerald/10 lg:block"
          >
            “
          </div>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[activeIndex].name}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative w-full max-w-3xl"
            >
              <TestimonialCard {...testimonials[activeIndex]} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-200 ease-brand hover:border-emerald hover:bg-emerald/10"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => paginate(index - activeIndex)}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ease-brand ${
                    index === activeIndex ? 'bg-emerald shadow-[0_0_12px_rgba(29,185,84,0.5)]' : 'bg-neutral-medium/50'
                  }`}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-200 ease-brand hover:border-emerald hover:bg-emerald/10"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
