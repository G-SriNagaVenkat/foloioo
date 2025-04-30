import './Skills.css';
import { useRef, useEffect } from 'react';
import SkillsParticles from '../components/SkillsParticles';

const Skills = () => {
  const skillCategoryRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const skillItemRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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
      { threshold: 0.3 }
    );

    skillCategoryRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    skillItemRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      skillCategoryRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      skillItemRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="section-background skills-bg"></div>
      <SkillsParticles />
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div
          className="skill-category scroll-animation"
          ref={skillCategoryRefs[0]}
        >
          <h3 className="category-title">Frontend Development</h3>
          <div className="skills-list">
            <div className="skill-item" ref={skillItemRefs[0]}>
              <h4 className="skill-name">HTML5</h4>
              <span className="skill-percentage">95%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[1]}>
              <h4 className="skill-name">CSS3</h4>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[2]}>
              <h4 className="skill-name">JavaScript</h4>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[3]}>
              <h4 className="skill-name">React</h4>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[4]}>
              <h4 className="skill-name">TypeScript</h4>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[5]}>
              <h4 className="skill-name">Tailwind CSS</h4>
              <span className="skill-percentage">85%</span>
            </div>
          </div>
        </div>

        <div
          className="skill-category scroll-animation"
          ref={skillCategoryRefs[1]}
        >
          <h3 className="category-title">Backend Development</h3>
          <div className="skills-list">
            <div className="skill-item" ref={skillItemRefs[6]}>
              <h4 className="skill-name">Node.js</h4>
              <span className="skill-percentage">70%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[7]}>
              <h4 className="skill-name">Express</h4>
              <span className="skill-percentage">65%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[8]}>
              <h4 className="skill-name">MongoDB</h4>
              <span className="skill-percentage">60%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[9]}>
              <h4 className="skill-name">REST API</h4>
              <span className="skill-percentage">75%</span>
            </div>
          </div>
        </div>

        <div
          className="skill-category scroll-animation"
          ref={skillCategoryRefs[2]}
        >
          <h3 className="category-title">UI/UX Design</h3>
          <div className="skills-list">
            <div className="skill-item" ref={skillItemRefs[10]}>
              <h4 className="skill-name">Figma</h4>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[11]}>
              <h4 className="skill-name">Adobe XD</h4>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[12]}>
              <h4 className="skill-name">Wireframing</h4>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[13]}>
              <h4 className="skill-name">Prototyping</h4>
              <span className="skill-percentage">75%</span>
            </div>
          </div>
        </div>

        <div
          className="skill-category scroll-animation"
          ref={skillCategoryRefs[3]}
        >
          <h3 className="category-title">Tools & Software</h3>
          <div className="skills-list">
            <div className="skill-item" ref={skillItemRefs[14]}>
              <h4 className="skill-name">Git & GitHub</h4>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[15]}>
              <h4 className="skill-name">Visual Studio Code</h4>
              <span className="skill-percentage">95%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[16]}>
              <h4 className="skill-name">Docker</h4>
              <span className="skill-percentage">65%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[17]}>
              <h4 className="skill-name">Webpack</h4>
              <span className="skill-percentage">70%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[18]}>
              <h4 className="skill-name">Jest Testing Framework</h4>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-item" ref={skillItemRefs[19]}>
              <h4 className="skill-name">CI/CD Pipelines</h4>
              <span className="skill-percentage">60%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
