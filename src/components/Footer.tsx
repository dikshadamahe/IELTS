import React from 'react';

const FOOTER_LINKS = {
  About: [
    { label: 'Our Story', href: '#about' },
    { label: 'Instructors', href: '#team' },
    { label: 'Success Stories', href: '#testimonials' },
  ],
  Courses: [
    { label: 'IELTS Academic', href: '#courses' },
    { label: 'IELTS General', href: '#courses' },
    { label: 'Speaking Mastery', href: '#courses' },
  ],
  Resources: [
    { label: 'Practice Tests', href: '#resources' },
    { label: 'Study Materials', href: '#resources' },
    { label: 'IELTS Blog', href: '#resources' },
  ],
};

const socials = [
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
  { label: 'YouTube', icon: 'yt', href: 'https://youtube.com' },
  { label: 'Instagram', icon: 'ig', href: 'https://instagram.com' },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="mt-section-gap bg-charcoal text-white">
      <div className="container max-w-content-bleed px-4 py-section-gap">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/ielts-logo.svg" alt="IELTS Precision & Progress" className="h-12" />
              <span className="font-headings text-lg text-white/80">Precision &amp; Progress</span>
            </div>
            <p className="mt-6 max-w-sm text-body text-white/70">
              Empowering ambitious learners to reach their dream IELTS band through mentorship, immersive practice, and progress tracking that celebrates every milestone.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-headings text-h4 text-white">{section}</h3>
              <ul className="mt-4 space-y-3 text-small text-white/60">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="relative inline-flex items-center transition-colors duration-200 ease-brand hover:text-secondary"
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-headings text-h4 text-white">Stay in the loop</h3>
            <p className="mt-4 text-small text-white/60">
              Receive weekly IELTS tips, practice resources, and invite-only masterclasses.
            </p>
            <form className="mt-6 flex overflow-hidden rounded-full border border-white/10 bg-white/10 backdrop-blur">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="name@email.com"
                className="flex-1 bg-transparent px-5 py-3 text-small text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-secondary px-5 text-small font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 ease-brand hover:bg-emerald/90"
              >
                Join
              </button>
            </form>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-200 ease-brand hover:border-secondary hover:text-secondary"
                >
                  <span className="text-sm uppercase tracking-[0.18em]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-center text-small text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} IELTS Precision &amp; Progress. All rights reserved.</p>
          <div className="mt-3 flex gap-6 sm:mt-0">
            <a href="#privacy" className="hover:text-secondary">Privacy</a>
            <a href="#terms" className="hover:text-secondary">Terms</a>
            <a href="#accessibility" className="hover:text-secondary">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;