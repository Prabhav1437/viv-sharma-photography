import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Gear from './components/Gear';
import SocialMedia from './components/SocialMedia';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Gallery />
        <Gear />
        <SocialMedia />
        <Awards />
      </main>
      <Footer />
    </>
  );
}

export default App;
