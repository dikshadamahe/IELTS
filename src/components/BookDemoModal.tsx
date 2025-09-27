import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Mail, Phone, Target } from "lucide-react";
import { Button } from "./ui/Button";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  targetScore: string;
  currentLevel: string;
  preferredTime: string;
  message: string;
}

const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    targetScore: "",
    currentLevel: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        targetScore: "",
        currentLevel: "",
        preferredTime: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const successVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 min-h-screen"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-gray-200"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-green to-emerald-green text-white p-6 relative overflow-hidden">
              <div className="relative flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Book Your Free Demo</h2>
                  <p className="text-white/90">
                    Get personalized guidance from our IELTS experts
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-white/80 transition-colors p-1 rounded-full hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)] bg-white">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-charcoal-black flex items-center opacity-100">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          aria-describedby="name-help"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* IELTS Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-charcoal-black flex items-center opacity-100">
                      <Target className="w-5 h-5 mr-2" />
                      IELTS Goals
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                          Target Band Score *
                        </label>
                        <select
                          name="targetScore"
                          value={formData.targetScore}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                        >
                          <option value="">Select target score</option>
                          <option value="6.0">6.0</option>
                          <option value="6.5">6.5</option>
                          <option value="7.0">7.0</option>
                          <option value="7.5">7.5</option>
                          <option value="8.0">8.0</option>
                          <option value="8.5">8.5</option>
                          <option value="9.0">9.0</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                          Current Level
                        </label>
                        <select
                          name="currentLevel"
                          value={formData.currentLevel}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                        >
                          <option value="">Select current level</option>
                          <option value="Beginner">Beginner (4.0-5.0)</option>
                          <option value="Intermediate">Intermediate (5.5-6.5)</option>
                          <option value="Advanced">Advanced (7.0+)</option>
                          <option value="Not sure">Not sure</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-charcoal-black flex items-center opacity-100">
                      <Calendar className="w-5 h-5 mr-2" />
                      Preferred Demo Time
                    </h3>
                    
                      <div>
                        <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                          Best Time to Reach You
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all bg-white text-charcoal-black opacity-100"
                        >
                        <option value="">Select preferred time</option>
                        <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                        <option value="Afternoon (12PM-5PM)">Afternoon (12PM-5PM)</option>
                        <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                        <option value="Weekend">Weekend</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal-black mb-2 opacity-100">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:border-transparent transition-all resize-none bg-white text-charcoal-black opacity-100"
                      placeholder="Tell us about your IELTS preparation goals or any specific areas you'd like to focus on..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="px-6"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 bg-vibrant-emerald-green hover:bg-vibrant-emerald-green/90"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Booking Demo...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Free Demo
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-vibrant-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-royal-blue mb-2">
                    Demo Booked Successfully!
                  </h3>
                  <p className="text-charcoal-black mb-4">
                    Thank you for booking a demo with us. Our team will contact you within 24 hours to schedule your personalized IELTS consultation.
                  </p>
                  <p className="text-sm text-cool-gray">
                    Check your email for confirmation details.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookDemoModal;