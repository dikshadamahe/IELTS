import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah L.",
    bandScore: "8.5",
    review:
      "The personalized feedback on my writing tasks was a game-changer. I finally understood my mistakes and how to fix them. I couldn't have achieved my score without their help.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John D.",
    bandScore: "8.0",
    review:
      "The speaking practice sessions were incredibly helpful. I gained so much confidence and was able to express myself clearly and fluently on the test day.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily C.",
    bandScore: "9.0",
    review:
      "The mock tests were very realistic and helped me manage my time effectively. The detailed analysis of my performance was invaluable. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-20 sm:py-28 lg:py-32 bg-white/30 backdrop-blur-sm"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            Success Stories from Our Students
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
            Hear what our students have to say about their experience with
            IELTS Precision & Progress.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              bandScore={testimonial.bandScore}
              review={testimonial.review}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
