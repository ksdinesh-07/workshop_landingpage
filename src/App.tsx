import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Schedule from './components/Schedule';
import Committee from './components/Committee';
import Institution from './components/Institution';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyRegister from './components/StickyRegister';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Schedule />
        <Committee />
        <Institution />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyRegister />
    </div>
  );
}
