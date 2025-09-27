import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import { Button } from "./ui/Button";
import BookDemoModal from "./BookDemoModal";

const CallToAction = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const benefits = [
    {
      icon: <Star className="w-5 h-5" />,
      text: "Expert-led personalized coaching"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Flexible scheduling to fit your routine"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Small batch sizes for focused attention"
    }
  ];

  return (
    <motion.section
      className="py-20 sm:py-28 lg:py-32 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 43, 109, 0.85) 0%, rgba(16, 18, 20, 0.9) 100%)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 via-transparent to-emerald-green/20"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-golden-amber/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Achieve Your
            <span className="block gradient-text">IELTS Goals?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-cool-gray-light mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their target band scores with our proven methodology and expert guidance.
          </p>
          
          {/* Benefits */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-green/20 rounded-full flex items-center justify-center text-emerald-green">
                  {benefit.icon}
                </div>
                <span className="text-left text-cool-gray-dark">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="button-shimmer bg-emerald-green hover:bg-emerald-green/90 text-white border-none px-8 py-4 text-lg font-semibold"
              onClick={() => setIsBookDemoOpen(true)}
            >
              <span className="flex items-center">
                Book Your Free Demo Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Button>
            
            <div className="text-sm text-cool-gray-dark">
              <strong className="text-white">100% Free</strong> • No Credit Card Required • 30-Minute Session
            </div>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-cool-gray-dark">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-golden-amber fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 from 2,500+ students</span>
              </div>
              <div className="text-sm">
                <strong className="text-white">50,000+</strong> successful IELTS candidates
              </div>
              <div className="text-sm">
                Available in <strong className="text-white">15+</strong> countries
              </div>
            </div>
          </motion.div>
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

export default CallToAction;