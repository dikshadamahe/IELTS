import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="bg-cool-gray-light">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
