import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="p-6 rounded-xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)'
      }}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0px 20px 40px rgba(29, 185, 84, 0.15)",
      }}
    >
      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-green text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-charcoal-black mb-3">{title}</h3>
      <p className="text-dark-gray leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;