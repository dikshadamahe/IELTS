import React from 'react';
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  bandScore: string;
  review: string;
  avatar: string;
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

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  bandScore,
  review,
  avatar,
}) => {
  return (
    <motion.div
      className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center"
      variants={itemVariants}
    >
      <img
        className="h-16 w-16 rounded-full"
        src={avatar}
        alt={`${name}'s avatar`}
      />
      <div className="mt-4">
        <h4 className="text-lg font-bold text-deep-royal-blue">{name}</h4>
        <div className="mt-2">
          <p className="ml-2 text-lg font-semibold text-charcoal-black">
            Band Score: {bandScore}
          </p>
        </div>
      </div>
      <p className="mt-6 text-lg text-charcoal-black">"{review}"</p>
      <div className="mt-6">
        <button className="text-sm font-medium text-deep-royal-blue">
          Read more
        </button>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;