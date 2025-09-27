import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import BookDemoModal from "./BookDemoModal";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-charcoal-black">
                IELTS Precision & Progress
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark-gray hover:bg-emerald-green/10 hover:text-emerald-green px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button 
              className="button-shimmer bg-emerald-green hover:bg-emerald-green/90 text-white border-none"
              onClick={() => setIsBookDemoOpen(true)}
            >
              Book Demo
            </Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-gray hover:text-emerald-green hover:bg-emerald-green/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-green transition-all"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div 
          className="md:hidden border-t border-border-light"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-gray hover:bg-emerald-green/10 hover:text-emerald-green block px-3 py-2 rounded-md text-base font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-border-light">
            <div className="flex items-center px-5">
              <Button 
                className="button-shimmer bg-emerald-green hover:bg-emerald-green/90 text-white border-none w-full"
                onClick={() => setIsBookDemoOpen(true)}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isBookDemoOpen} 
        onClose={() => setIsBookDemoOpen(false)} 
      />
    </header>
  );
};

export default Navbar;