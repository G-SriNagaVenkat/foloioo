import './Projects.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useRef, useEffect } from 'react'
import ProjectsParticles from '../components/ProjectsParticles'

const Projects = () => {
  // Create refs for animated elements
  const titleRef = useScrollAnimation();
  const projectRefs = useRef([]);
  
  // Reset project refs array
  projectRefs.current = [];
  
  // Add to refs array
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };
  
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'https://via.placeholder.com/600x400',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop interface, filtering, and user authentication.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/600x400',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application showing current conditions and forecasts for any location worldwide.',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      image: 'https://via.placeholder.com/600x400',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing skills, projects, and professional experience.',
      technologies: ['React', 'Vite', 'Framer Motion', 'CSS3'],
      image: 'https://via.placeholder.com/600x400',
      liveLink: 'https://example.com',
      codeLink: 'https://github.com'
    }
  ]
  
  // Setup intersection observers for projects
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
        rootMargin: '-50px'
      }
    );

    projectRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="projects">
      {/* Original blurred background for Projects section */}
      <div className="section-background projects-bg"></div>
      
      {/* Custom particle background for Projects section */}
      <ProjectsParticles />
      
      <div className="container projects-container">
        <h2 ref={titleRef} className="section-title scroll-animation">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card scroll-animation" 
              ref={addToRefs}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects