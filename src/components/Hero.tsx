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
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 43, 109, 0.85) 0%, rgba(16, 18, 20, 0.9) 100%)'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/10 via-transparent to-emerald-green/10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-golden-amber/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            variants={itemVariants}
          >
            <span className="block text-white">Master the IELTS Exam with</span>
            <span className="block gradient-text font-black">
              Precision & Progress
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cool-gray-dark"
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
              className="button-shimmer bg-emerald-green hover:bg-emerald-green/90 text-white border-none px-8 py-4 text-lg font-semibold"
              onClick={() => setIsBookDemoOpen(true)}
            >
              Book a Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold"
            >
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
              className="p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-golden-amber mb-2">12k+</h3>
              <p className="text-cool-gray-dark font-medium">Learners Coached</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-golden-amber mb-2">96%</h3>
              <p className="text-cool-gray-dark font-medium">Band 7+ Success</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-golden-amber mb-2">4.8/5</h3>
              <p className="text-cool-gray-dark font-medium">Learner Rating</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-golden-amber mb-2">24/7</h3>
              <p className="text-cool-gray-dark font-medium">Mentor Support</p>
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