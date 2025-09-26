import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-deep-royal-blue text-white py-20 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block">Master the IELTS Exam with</span>
            <span className="block gradient-text">
              Precision & Progress
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cool-gray-light">
            Achieve your desired band score with our expert-led courses,
            personalized feedback, and state-of-the-art practice tools.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary">
              Book a Free Demo
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-3xl font-bold text-warm-golden-amber">12k+</h3>
              <p className="mt-2 text-cool-gray-light">Learners Coached</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-3xl font-bold text-warm-golden-amber">96%</h3>
              <p className="mt-2 text-cool-gray-light">Band 7+ Success</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-3xl font-bold text-warm-golden-amber">4.8/5</h3>
              <p className="mt-2 text-cool-gray-light">Learner Rating</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h3 className="text-3xl font-bold text-warm-golden-amber">24/7</h3>
              <p className="mt-2 text-cool-gray-light">Mentor Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;