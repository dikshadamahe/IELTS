import React from 'react';

interface FeatureCardProps {
  icon?: string;
  title?: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon = "📚", 
  title = "Expert Training", 
  description = "Learn from certified IELTS instructors with proven track records of student success." 
}) => {
  return (
    <article className="group relative rounded-3xl border border-neutral-medium/20 bg-white p-8 shadow-card transition-all duration-300 ease-brand hover:-translate-y-2 hover:border-amber/40 hover:shadow-glow">
      <div className="absolute inset-x-6 -top-3 h-1 rounded-full bg-gradient-to-r from-amber/0 via-amber/70 to-amber/0 opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100" />
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber/15 text-3xl text-amber">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="font-headings text-h3 text-primary">{title}</h3>
      <p className="mt-4 text-body text-slate/80">{description}</p>
      <a
        href="#courses"
        className="mt-6 inline-flex items-center text-small font-semibold text-secondary transition-all duration-200 ease-brand hover:text-emerald"
      >
        Learn More
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </article>
  );
};

export default FeatureCard;