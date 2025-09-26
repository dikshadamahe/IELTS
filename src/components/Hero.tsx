import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
  <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-24 hidden h-72 w-72 rounded-full bg-emerald/15 blur-3xl lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 hidden h-64 w-64 rounded-full bg-amber/20 blur-3xl md:block" aria-hidden="true" />

      <div className="relative container flex max-w-content-bleed flex-col gap-12 py-section-gap lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary/80">
            IELTS Excellence Program
          </span>
          <h1 className="font-headings text-h1 text-primary">
            Master IELTS with
            <span className="block text-amber">Precision &amp; Progress</span>
          </h1>
          <p className="max-w-xl text-body text-charcoal/80">
            Guided by expert mentors, personalised study plans, and smart analytics that highlight your growth at every checkpoint. Let’s accelerate your journey to the band score you deserve.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3 text-small font-semibold uppercase tracking-[0.15em] text-white shadow-card transition-all duration-200 ease-brand hover:-translate-y-0.5 hover:bg-emerald/90 hover:shadow-[0_0_18px_rgba(255,181,71,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Book a Free Demo
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 px-10 py-3 text-small font-semibold uppercase tracking-[0.12em] text-primary transition-all duration-200 ease-brand hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
            {[
              { stat: '12k+', label: 'Learners Coached' },
              { stat: '96%', label: 'Band 7+ Success' },
              { stat: '4.8/5', label: 'Learner Rating' },
              { stat: '24/7', label: 'Mentor Support' },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-2xl border border-neutral-medium/40 bg-white p-4 text-center shadow-[0_12px_30px_rgba(26,43,109,0.08)]">
                <div className="font-headings text-2xl font-semibold text-primary">{stat}</div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative rounded-[32px] border border-neutral-medium/40 bg-white p-6 shadow-card">
            <div className="absolute -top-8 right-6 inline-flex items-center gap-2 rounded-full border border-amber/60 bg-white px-4 py-2 text-small font-semibold text-primary shadow-[0_12px_30px_rgba(26,43,109,0.1)]">
              <span className="text-lg">⭐</span>
              <span>Top Rated Institute</span>
            </div>
            <img
              src="/assets/hero-illustration.svg"
              alt="Student preparing for IELTS with confidence"
              className="mx-auto w-full max-w-sm animate-float"
            />
            <div className="mt-6 rounded-2xl border border-neutral-medium/30 bg-neutral-light p-5 text-neutral-dark">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;