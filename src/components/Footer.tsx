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
    <footer id="contact" className="mt-section-gap bg-primary text-white">
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
                      className="group relative inline-flex items-center transition-colors duration-200 ease-brand hover:text-emerald focus-visible:text-emerald"
                    >
                      <span>{link.label}</span>
                      <span className="absolute inset-x-0 -bottom-1 mx-auto block h-0.5 w-0 origin-center bg-emerald transition-all duration-300 ease-brand group-hover:w-full group-focus-visible:w-full" />
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
            <form className="mt-6 flex overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur">
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
                className="bg-secondary px-5 text-small font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 ease-brand hover:bg-emerald/90 hover:shadow-[0_0_18px_rgba(255,181,71,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 ease-brand hover:border-emerald hover:text-emerald focus-visible:border-emerald focus-visible:text-emerald"
                >
                  <span className="text-sm uppercase tracking-[0.18em]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/15 pt-6 text-center text-small text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} IELTS Precision &amp; Progress. All rights reserved.</p>
          <div className="mt-3 flex gap-6 sm:mt-0">
            <a href="#privacy" className="hover:text-emerald focus-visible:text-emerald">Privacy</a>
            <a href="#terms" className="hover:text-emerald focus-visible:text-emerald">Terms</a>
            <a href="#accessibility" className="hover:text-emerald focus-visible:text-emerald">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;