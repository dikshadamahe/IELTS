import React from 'react';

interface TestimonialCardProps {
  name?: string;
  score?: string;
  quote?: string;
  avatar?: string;
  role?: string;
}

const renderAvatar = (avatar: string | undefined) => {
  if (!avatar) {
    return <span className="text-2xl">🎓</span>;
  }

  if (avatar.includes('/')) {
    return (
      <img
        src={avatar}
        alt="student portrait"
        className="h-full w-full rounded-full object-cover"
      />
    );
  }

  return <span className="text-2xl">{avatar}</span>;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name = "Sarah Johnson", 
  score = "8.5", 
  quote = "The structured approach and personalised feedback helped me achieve my target score. Highly recommended for serious IELTS preparation!",
  avatar = "👩‍🎓",
  role = "Graduate, Band 8"
}) => {
  return (
    <figure className="group relative overflow-hidden rounded-3xl border border-neutral-medium/30 bg-white p-8 shadow-[0_18px_36px_rgba(26,43,109,0.08)] transition-all duration-300 ease-brand hover:-translate-y-2 hover:border-emerald/50 hover:shadow-[0_26px_48px_rgba(26,43,109,0.14)]">
      <span className="pointer-events-none absolute -left-1 top-6 text-7xl font-serif text-emerald/10">“</span>
      <div className="absolute right-6 top-6 rounded-full bg-amber px-4 py-1 text-small font-semibold text-neutral-dark shadow-glow">
        Band {score}
      </div>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-primary/10 bg-primary/5">
          {renderAvatar(avatar)}
        </div>
        <figcaption>
          <div className="font-headings text-lg text-primary">{name}</div>
          <p className="text-small uppercase tracking-[0.12em] text-slate/70">{role}</p>
        </figcaption>
      </div>
      <blockquote className="mt-6 border-l-4 border-emerald/40 pl-6 text-quote font-accent italic text-charcoal/80">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;