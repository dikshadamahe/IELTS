import React, { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-brand ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-lg py-2 shadow-card'
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="container flex h-[72px] max-w-content-bleed items-center justify-between">
        <a
          href="#home"
          className={`flex items-center gap-3 font-headings text-xl transition-colors duration-200 ease-brand ${
            isScrolled ? 'text-white' : 'text-primary'
          }`}
        >
          <img
            src="/assets/ielts-logo.svg"
            alt="IELTS Precision & Progress"
            className="h-10 w-auto drop-shadow-lg"
          />
          <span
            className={`hidden sm:inline ${
              isScrolled ? 'text-white/90' : 'text-primary/80'
            }`}
          >
            Precision &amp; Progress
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-small uppercase tracking-[0.08em] transition-all duration-200 ease-brand ${
                isScrolled
                  ? 'text-white/80 hover:text-white focus-visible:text-white'
                  : 'text-primary/80 hover:text-primary focus-visible:text-primary'
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute inset-x-0 -bottom-1 mx-auto block h-0.5 w-0 origin-center transition-all duration-300 ease-brand group-hover:w-full group-focus-visible:w-full ${
                  isScrolled ? 'bg-secondary' : 'bg-emerald'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#resources"
            className={`hidden rounded-full px-5 py-2 text-small font-semibold transition-all duration-200 ease-brand md:inline-flex ${
              isScrolled
                ? 'border border-white/30 text-white/80 hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white'
                : 'border border-primary/30 text-primary hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary'
            }`}
          >
            Download Brochure
          </a>
          <a
            href="#contact"
            className="rounded-full bg-secondary px-6 py-2 text-small font-semibold uppercase tracking-[0.08em] text-white shadow-card transition-all duration-200 ease-brand hover:-translate-y-0.5 hover:bg-emerald/90 hover:shadow-[0_0_18px_rgba(255,181,71,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            Book a Demo
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;