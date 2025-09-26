import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-gradient text-white"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-60" aria-hidden="true" />
      <div className="absolute -right-32 top-16 hidden h-64 w-64 rounded-full bg-emerald/20 blur-3xl lg:block" aria-hidden="true" />
      <div className="relative container flex max-w-content-bleed flex-col gap-12 py-section-gap lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-white/90">
            IELTS Excellence Program
          </span>
          <h1 className="font-headings text-h1 text-white">
            Master IELTS with
            <span className="block text-amber"> Confidence &amp; Clarity</span>
          </h1>
          <p className="max-w-xl text-body text-white/80">
            Guided by expert mentors, personalised study plans, and smart analytics that highlight your growth every step of the way. Let’s accelerate your journey to a higher band score.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3 text-small font-semibold uppercase tracking-[0.15em] text-white shadow-card transition-transform duration-200 ease-brand hover:-translate-y-0.5 hover:bg-emerald/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Free Demo
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-10 py-3 text-small font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 ease-brand hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-6 sm:grid-cols-4">
            {[
              { stat: '12k+', label: 'Learners Coached' },
              { stat: '96%', label: 'Band 7+ Success' },
              { stat: '4.8/5', label: 'Learner Rating' },
              { stat: '24/7', label: 'Mentor Support' },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                <div className="font-headings text-2xl font-semibold text-white">{stat}</div>
                <p className="text-xs uppercase tracking-[0.12em] text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-6 backdrop-blur">
            <div className="absolute -top-6 right-8 inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-neutral-dark shadow-glow">
              <span className="text-lg">⭐</span>
              <span>Top Rated Institute</span>
            </div>
            <img
              src="/assets/hero-illustration.svg"
              alt="Student preparing for IELTS with confidence"
              className="mx-auto w-full max-w-sm animate-float"
            />
            <div className="mt-6 rounded-2xl bg-white/90 p-5 text-neutral-dark shadow-card">
              <h3 className="font-headings text-lg text-primary">Personal Progress Snapshot</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate">
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