import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import AchievementBadge from './components/AchievementBadge';

const features = [
  {
    icon: '🗣️',
    title: 'Speaking Practice',
    description:
      'Live mentor-led labs simulate IELTS speaking rooms with targeted drills and instant scoring tips.',
  },
  {
    icon: '�',
    title: 'Mock Tests',
    description:
      'Weekly full-length assessments with proctoring analytics so you refine pacing, accuracy, and stamina.',
  },
  {
    icon: '🤖',
    title: 'AI Band Score',
    description:
      'Smart insights break down each module, flagging grammar, fluency, and coherence gaps to close fast.',
  },
  {
    icon: '🤝',
    title: 'Mentor Support',
    description:
      'Dedicated IELTS strategists track your study plan, answer doubts 24/7, and celebrate every milestone.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    score: '8.5',
    quote:
      'The progress reviews kept me accountable and confident. I finally broke past Band 7.5 and secured my university admit.',
    avatar: '/assets/student-sarah.svg',
    role: 'Scholarship Winner, Canada',
  },
  {
    name: 'Ahmed Hassan',
    score: '7.5',
    quote:
      'Mentors simulated the IELTS speaking pressure perfectly. Their feedback translated into two band jump in a single attempt.',
    avatar: '/assets/student-ahmed.svg',
    role: 'Working Professional, UAE',
  },
  {
    name: 'Linh Tran',
    score: '8.0',
    quote:
      'I balanced a full-time job with this program thanks to flexible study pods and on-demand recordings. Highly recommend!',
    avatar: '/assets/student-linh.svg',
    role: 'Marketing Analyst, Vietnam',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      <ProgressBar />
      <main className="pt-24">
        <Hero />

        <section id="courses" className="bg-white py-section-gap">
          <div className="container max-w-content-bleed">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headings text-h2 text-primary">
                Why Learners Choose Precision &amp; Progress
              </h2>
              <p className="mt-4 text-body text-charcoal/70">
                A proven framework that balances expert-led lessons with intelligent analytics to keep you focused on consistent band uplift.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-neutral-light py-section-gap">
          <div className="container max-w-content-bleed">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headings text-h2 text-primary">Success Stories</h2>
              <p className="mt-4 text-body text-charcoal/70">
                Real learners, real progress. Hear from graduates who now study and work in their dream destinations.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <AchievementBadge />

        <section id="resources" className="bg-white py-section-gap">
          <div className="container max-w-content-bleed grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="rounded-full bg-royal-blue/10 px-4 py-2 text-small font-semibold uppercase tracking-[0.12em] text-primary">
                Learning Resources
              </span>
              <h2 className="mt-6 font-headings text-h2 text-primary">
                Study Pods tailored for every IELTS module
              </h2>
              <p className="mt-4 text-body text-charcoal/70">
                Access curated reading lists, vocabulary drills, speaking labs, and writing evaluations that mirror the actual exam conditions. Every resource comes with mentor notes and sample answers.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Weekly live masterclasses',
                  'Speaking mock interviews',
                  'Writing band 9 sample essays',
                  'Reading speed-builder playlists',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-neutral-medium/30 bg-neutral-light p-5 text-left">
                    <span className="text-small font-semibold uppercase tracking-[0.12em] text-primary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <img
                src="/assets/resources-overview.svg"
                alt="Mock test analytics dashboard"
                className="w-full rounded-3xl border border-neutral-medium/40 bg-neutral-light p-6 shadow-card"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
