import { motion } from "framer-motion";
import { Headphones, Mic, BookOpen, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Mic className="w-7 h-7" fill="currentColor" />,
    title: "Speaking Practice",
    description:
      "Engage in real-time speaking sessions with AI-powered feedback to improve your fluency and pronunciation.",
  },
  {
    icon: <Headphones className="w-7 h-7" fill="currentColor" />,
    title: "Listening Drills",
    description:
      "Sharpen your listening skills with a wide variety of accents and scenarios, mirroring the actual test environment.",
  },
  {
    icon: <BookOpen className="w-7 h-7" fill="currentColor" />,
    title: "Reading & Writing",
    description:
      "Access a vast library of reading materials and get your writing tasks evaluated by our expert mentors.",
  },
  {
    icon: <Users className="w-7 h-7" fill="currentColor" />,
    title: "Mentor Support",
    description:
      "Get personalized guidance and support from our team of experienced IELTS mentors, available 24/7.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="features"
      className="py-20 sm:py-28 lg:py-32"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-black">
            A Feature Set That Guarantees Success
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-dark-gray">
            Our platform is designed to provide you with a comprehensive and
            effective learning experience.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
