import './Education.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useRef, useEffect } from 'react'
import EducationParticles from '../components/EducationParticles'

const Education = () => {
  // Create refs for animated elements
  const titleRef = useScrollAnimation();
  const educationRefs = useRef([]);
  
  // Reset refs array
  educationRefs.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !educationRefs.current.includes(el)) {
      educationRefs.current.push(el);
    }
  };
  
  const educationItems = [
    {
      degree: 'btech in Computer science engineering',
      institution: 'MallaReddy University ',
      location: 'Hydrabad,India',
      period: '2022 - Present',
      
    },
    {
      degree: 'Intermediate for scienceand maths',
      institution: 'Narayana Engineering College',
      location: 'Hydrabad,India',
      period: '2020 - 2022',
      // description: 'Focused on Software Development and Database Systems. Graduated with honors and received the Outstanding Student Award.'
    },
    {
      degree: 'CBSE',
      institution: 'SJS school',
      location: 'karnataka ,Bider',
      period: '2020',
      // description: 'Intensive 12-week program covering frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.'
    }
  ]
  
  // Setup intersection observers for education items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-30px'
      }
    );

    educationRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      educationRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="education" className="education">
      {/* Custom particle background for Education section */}
      <EducationParticles />
      
      <div className="container education-container">
        <h2 ref={titleRef} className="section-title scroll-animation">Education</h2>
        
        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="education-item scroll-animation" 
              ref={addToRefs}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="education-card">
                <div className="education-header">
                  <span className="education-period">{item.period}</span>
                  <h3 className="education-degree">{item.degree}</h3>
                  <h4 className="education-institution">
                    {item.institution}, <span>{item.location}</span>
                  </h4>
                </div>
                <p className="education-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education