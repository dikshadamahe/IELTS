import { motion } from "framer-motion";
import { TrendingUp, Target, Award, Users } from "lucide-react";

const outcomes = [
  {
    icon: <TrendingUp className="w-10 h-10 text-vibrant-emerald-green" />,
    value: "98%",
    label: "Success Rate",
    description: "Of students achieving their target band score.",
  },
  {
    icon: <Target className="w-10 h-10 text-vibrant-emerald-green" />,
    value: "1.5+",
    label: "Average Score Improvement",
    description: "Points increase in the overall band score.",
  },
  {
    icon: <Award className="w-10 h-10 text-vibrant-emerald-green" />,
    value: "Top 1%",
    label: "Instructor Quality",
    description: "Our instructors are in the top percentile of IELTS experts.",
  },
  {
    icon: <Users className="w-10 h-10 text-vibrant-emerald-green" />,
    value: "10,000+",
    label: "Students Trained",
    description: "We have helped thousands of students worldwide.",
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

const Outcomes = () => {
  return (
    <motion.section
      id="outcomes"
      className="py-20 sm:py-28 lg:py-32 bg-cool-gray-light"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-black">
            Measurable Outcomes, Real Results
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-dark-gray">
            Our data-driven approach ensures that every student makes
            significant and quantifiable progress.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {outcomes.map((outcome) => (
            <motion.div
              key={outcome.label}
              className="bg-white p-8 rounded-xl shadow-lg border border-border-light hover:shadow-xl hover:shadow-emerald-green/10 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="flex justify-center items-center mb-4">{outcome.icon}</div>
              <p className="text-4xl lg:text-5xl font-extrabold text-emerald-green mb-2">
                {outcome.value}
              </p>
              <h3 className="text-xl font-bold text-charcoal-black mb-2">
                {outcome.label}
              </h3>
              <p className="text-base text-dark-gray">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Outcomes;
