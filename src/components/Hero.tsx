import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import BookDemoModal from "./BookDemoModal";

const Hero = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  return (
    <motion.section
      id="home"
      className="relative bg-deep-royal-blue text-white py-20 sm:py-28 lg:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            variants={itemVariants}
          >
            <span className="block">Master the IELTS Exam with</span>
            <span className="block gradient-text">
              Precision & Progress
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cool-gray-light"
            variants={itemVariants}
          >
            Achieve your desired band score with our expert-led courses,
            personalized feedback, and state-of-the-art practice tools.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsBookDemoOpen(true)}
            >
              Book a Free Demo
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-16 lg:mt-24"
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              className="p-4 rounded-lg bg-white/10"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-warm-golden-amber">12k+</h3>
              <p className="mt-2 text-cool-gray-light">Learners Coached</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg bg-white/10"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-warm-golden-amber">96%</h3>
              <p className="mt-2 text-cool-gray-light">Band 7+ Success</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg bg-white/10"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-warm-golden-amber">4.8/5</h3>
              <p className="mt-2 text-cool-gray-light">Learner Rating</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg bg-white/10"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-warm-golden-amber">24/7</h3>
              <p className="mt-2 text-cool-gray-light">Mentor Support</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isBookDemoOpen} 
        onClose={() => setIsBookDemoOpen(false)} 
      />
    </motion.section>
  );
};

export default Hero;