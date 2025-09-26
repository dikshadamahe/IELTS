import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Courses from "./components/Courses";
import Outcomes from "./components/Outcomes";
import CallToAction from "./components/CallToAction";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10">
        <ProgressBar />
        <Navbar />
        <main>
          <Hero />
          <Courses />
          <Features />
          <Outcomes />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
