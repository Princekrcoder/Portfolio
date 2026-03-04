import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
      {/* Background Ambient Glow Images */}
      {/* Fixed position images matching the dark background aesthetics */}
      <img src="/gradient-bottom.png" alt="" role="presentation" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-[1920px] -z-10 pointer-events-none opacity-90" />


      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Articles />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
