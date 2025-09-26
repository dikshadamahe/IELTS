import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      id="contact"
      className="bg-deep-royal-blue text-white py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">IELTS Precision & Progress</h3>
            <p className="mt-4 text-cool-gray-light">
              Your journey to IELTS success starts here.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:text-vibrant-emerald-green">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-vibrant-emerald-green">
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-vibrant-emerald-green"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-4 text-cool-gray-light">
              123 Main Street, Anytown, USA
            </p>
            <p>Email: info@ieltsprecision.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-vibrant-emerald-green">
                <Facebook />
              </a>
              <a href="#" className="hover:text-vibrant-emerald-green">
                <Twitter />
              </a>
              <a href="#" className="hover:text-vibrant-emerald-green">
                <Instagram />
              </a>
              <a href="#" className="hover:text-vibrant-emerald-green">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-cool-gray-dark pt-8 text-center text-cool-gray-light">
          <p>
            &copy; {new Date().getFullYear()} IELTS Precision & Progress. All
            rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;