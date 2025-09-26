import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      <ProgressBar />
      <main className="pt-24">
        <Hero />
        <Features />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
