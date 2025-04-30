import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Languages from './sections/Languages'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './animations.css' // Import animations CSS
import './section-backgrounds.css' // Import section backgrounds CSS

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure all components are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App