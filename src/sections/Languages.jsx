import './Languages.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useRef, useEffect } from 'react'
import LanguagesParticles from '../components/LanguagesParticles'

const Languages = () => {
  // Create refs for animated elements
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-10px'
  });
  const languageRefs = useRef([]);
  
  // Reset refs array
  languageRefs.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !languageRefs.current.includes(el)) {
      languageRefs.current.push(el);
    }
  };
  
  const languages = [
    {
      name: 'English',
      level: 'Native',
      proficiency: 100
    },
    {
      name: 'Spanish',
      level: 'Fluent',
      proficiency: 85
    },
    {
      name: 'French',
      level: 'Intermediate',
      proficiency: 65
    },
    {
      name: 'German',
      level: 'Basic',
      proficiency: 40
    }
  ]
  
  // Setup intersection observers for language cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate chart when card comes into view
            setTimeout(() => {
              const chart = entry.target.querySelector('.chart-inner');
              if (chart) {
                const language = languages[languageRefs.current.indexOf(entry.target)];
                chart.style.background = `conic-gradient(var(--primary) ${language.proficiency}%, 
                  rgba(15, 23, 42, 0.3) 0%)`;
              }
            }, 300);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-30px'
      }
    );

    languageRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      languageRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="languages" className="languages">
      {/* Original gradient background for Languages section */}
      <div className="section-background languages-bg"></div>
      
      {/* Custom particle background for Languages section */}
      <LanguagesParticles />
      
      <div className="container languages-container">
        <h2 ref={titleRef} className="section-title scroll-animation">Languages</h2>
        
        <div className="languages-content">
          <div className="languages-cards">
            {languages.map((language, index) => (
              <div 
                key={index} 
                className="language-card scroll-animation" 
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="language-info">
                  <h3 className="language-name">{language.name}</h3>
                  <span className="language-level">{language.level}</span>
                </div>
                <div className="language-chart">
                  <div className="chart-outer">
                    <div className="chart-inner" style={{ 
                      background: `conic-gradient(var(--primary) 0%, 
                      rgba(15, 23, 42, 0.3) 0%)` 
                    }}>
                      <div className="chart-center">
                        <span className="proficiency-text">{language.proficiency}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={textRef} className="languages-text scroll-animation">
            <h3>Language Skills</h3>
            <p>
              I'm a multilingual professional with experience in international environments.
              My language skills allow me to communicate effectively with clients and teams
              from different countries and cultural backgrounds. I've developed these skills
              through formal education, living abroad, and professional work experience.
            </p>
            <p>
              I constantly improve my language abilities through regular practice, including
              reading international publications, watching foreign media, and participating
              in language exchange programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages