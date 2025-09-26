import React, { useEffect, useState } from 'react';

const segments = [
  {
    label: 'Study',
    description: 'Foundation classes & strategy workshops',
  },
  {
    label: 'Practice',
    description: 'Skill drills with mentor feedback',
  },
  {
    label: 'Test',
    description: 'Mock exams & performance analysis',
  },
  {
    label: 'Success',
    description: 'Official IELTS test readiness',
  },
];

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="sticky top-16 z-40 bg-white/70 backdrop-blur">
      <div className="mx-auto w-full max-w-content-bleed px-4 py-4">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-primary/70">
          <span>Progress Tracker</span>
          <span>{progress.toFixed(0)}% complete</span>
        </div>
        <div className="relative h-3 overflow-hidden rounded-full bg-neutral-medium/30">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-secondary via-emerald to-amber transition-[width] duration-300 ease-brand"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => {
            const threshold = ((index + 1) / segments.length) * 100;
            const active = progress >= threshold - 5;

            return (
              <div
                key={segment.label}
                className={`rounded-2xl border px-4 py-3 transition-all duration-300 ease-brand ${
                  active
                    ? 'border-emerald/60 bg-emerald/10 text-primary'
                    : 'border-neutral-medium/40 bg-white/70 text-slate/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-headings text-sm font-semibold uppercase tracking-[0.12em]">
                    {segment.label}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      active ? 'bg-secondary shadow-glow' : 'bg-neutral-medium'
                    }`}
                  />
                </div>
                <p className="mt-2 text-xs text-slate/70">{segment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;