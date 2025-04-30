import { useEffect, useState, useRef } from 'react'
import './ParticlesBackground.css'

// Enhanced implementation with parallax scrolling effect
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);
  const backgroundRef = useRef(null);
  
  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Handle parallax effect on scroll
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        const yPos = -(scrollY * 0.2); // Adjust the multiplier for faster/slower parallax
        backgroundRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="particles-container">
      <div id="tsparticles" style={{ backgroundColor: '#0f172a' }}>
        <svg 
          ref={backgroundRef}
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
          className="parallax-bg"
        >
          {particles.map(particle => (
            <circle
              key={particle.id}
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill="#3b82f6"
              fillOpacity={particle.opacity}
            />
          ))}
          
          {/* Add some connection lines */}
          {particles.slice(0, 20).map((particle, index) => {
            if (index < particles.length - 1) {
              const nextParticle = particles[index + 1];
              return (
                <line
                  key={`line-${index}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={nextParticle.x}
                  y2={nextParticle.y}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
              );
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
};

export default ParticlesBackground