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
      className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-vibrant-emerald-green text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-700">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;