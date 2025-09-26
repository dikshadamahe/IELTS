import React from 'react';

const badges = [
  {
    icon: '🏆',
    title: 'Excellence',
    score: 'Band 9.0',
    description: 'Perfect proficiency across modules.',
  },
  {
    icon: '🥇',
    title: 'Outstanding',
    score: 'Band 8.5',
    description: 'Commanding language mastery.',
  },
  {
    icon: '🎯',
    title: 'Target Achieved',
    score: 'Band 7.5',
    description: 'Ready for global universities.',
  },
];

const AchievementBadge: React.FC = () => {
  return (
    <section id="outcomes" className="bg-neutral-light py-section-gap">
      <div className="container max-w-content-bleed text-center">
        <h2 className="font-headings text-h2 text-primary">Celebrate Your IELTS Milestones</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body text-slate/70">
          Every milestone shines with its own amber glow. Hover to reveal the band score badges earned by our achievers.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {badges.map((badge) => (
            <button
              key={badge.title}
              type="button"
              className="badge-card rounded-full border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber/70"
              aria-label={`${badge.title} – ${badge.score}`}
            >
              <div className="badge-card-inner">
                <div className="badge-card-face flex h-40 w-40 flex-col items-center justify-center rounded-full bg-amber text-4xl text-neutral-dark shadow-glow">
                  <span>{badge.icon}</span>
                  <span className="mt-3 text-small font-semibold uppercase tracking-[0.15em]">
                    {badge.title}
                  </span>
                </div>
                <div className="badge-card-face badge-card-back flex h-40 w-40 flex-col items-center justify-center rounded-full bg-primary text-white shadow-glow">
                  <span className="text-lg font-semibold">{badge.score}</span>
                  <p className="mt-2 px-6 text-xs text-white/80">{badge.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementBadge;