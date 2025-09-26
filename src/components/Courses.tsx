import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Mic, Edit, Laptop } from "lucide-react";
import { Button } from "./ui/Button";
import BookDemoModal from "./BookDemoModal";

const courses = [
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Comprehensive Reading",
    description: "Master skimming, scanning, and detailed reading techniques to tackle any text with confidence.",
  },
  {
    icon: <Edit className="w-8 h-8 text-white" />,
    title: "Academic & General Writing",
    description: "Learn to structure essays, craft compelling arguments, and meet the specific requirements of Task 1 and 2.",
  },
  {
    icon: <Mic className="w-8 h-8 text-white" />,
    title: "Fluent Speaking",
    description: "Improve your fluency, pronunciation, and confidence with mock interviews and expert feedback.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-white" />,
    title: "Full Mock Tests",
    description: "Simulate the real test environment to improve your time management and identify areas for improvement.",
  },
];

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

const Courses = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  return (
    <motion.section
      id="courses"
      className="py-20 sm:py-28 lg:py-32 bg-white/20 backdrop-blur-sm"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-royal-blue">
            Our Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal-black">
            Tailored programs designed to help you achieve your best score.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              className="bg-deep-royal-blue p-8 rounded-xl shadow-lg text-white flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-vibrant-emerald-green/20 w-16 h-16 rounded-full flex items-center justify-center">
                {course.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{course.title}</h3>
              <p className="mt-2 text-cool-gray-light flex-grow">
                {course.description}
              </p>
              <Button 
                variant="secondary" 
                className="mt-6"
                onClick={() => setIsBookDemoOpen(true)}
              >
                Book Demo
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isBookDemoOpen} 
        onClose={() => setIsBookDemoOpen(false)} 
      />
    </motion.section>
  );
};

export default Courses;
