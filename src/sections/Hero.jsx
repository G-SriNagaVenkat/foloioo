import { Link } from 'react-scroll'
import './Hero.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import ParticlesBackground from '../components/ParticlesBackground'

const Hero = () => {
  const contentRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px'
  });
  
  return (
    <section id="hero" className="hero">
      {/* Original Particles Background */}
      <ParticlesBackground />
      
      <div className="container hero-container">
        <div ref={contentRef} className="hero-content scroll-animation">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">G SRI naga venkat</span>
          </h1>
          <h2 className="hero-subtitle">
            Front-end Developer & UI/UX Designer
          </h2>
          <p className="hero-description">
            I create beautiful, functional, and responsive websites with 
            modern technologies. Passionate about crafting engaging user 
            experiences and clean code.
          </p>
          <div className="hero-buttons">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="btn primary-btn"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="btn secondary-btn"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
