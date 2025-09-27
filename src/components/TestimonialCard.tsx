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
      className="p-8 rounded-xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)'
      }}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative mb-6">
        <img
          className="h-20 w-20 rounded-full border-4 border-golden-amber/20"
          src={avatar}
          alt={`${name}'s avatar`}
        />
        <div className="absolute -bottom-2 -right-2 bg-golden-amber text-white rounded-full p-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-bold text-charcoal-black">{name}</h4>
        <div className="flex items-center justify-center mt-2">
          <div className="bg-emerald-green text-white px-3 py-1 rounded-full text-sm font-semibold">
            Band Score: {bandScore}
          </div>
        </div>
      </div>
      
      <p className="text-dark-gray font-medium leading-relaxed italic">
        "{review}"
      </p>
      
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 text-golden-amber fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;