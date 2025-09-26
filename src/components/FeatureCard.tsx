import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-vibrant-emerald-green text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-deep-royal-blue">{title}</h3>
      <p className="mt-2 text-charcoal-black">{description}</p>
    </div>
  );
};

export default FeatureCard;