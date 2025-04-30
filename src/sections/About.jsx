import './About.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import AboutParticles from '../components/AboutParticles'

const About = () => {
  // Create refs for animated elements
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-10px'
  });
  const infoRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-10px'
  });
  
  return (
    <section id="about" className="about">
      {/* Custom particle background for About section */}
      <AboutParticles />
      
      <div className="container about-container">
        <h2 ref={titleRef} className="section-title scroll-animation">About Me</h2>
        <div className="about-content">
          <div ref={textRef} className="about-text scroll-animation">
            <p>
            I'm a versatile and proactive developer with hands-on experience in full-stack web development and Android app design. I specialize in React.js, having built several interactive web projects, including an event management platform with smooth navigation, role-based authentication, and admin/user dashboards. On the mobile side, I’ve developed an Android app that converts images to PDFs, supporting multi-image selection, file naming, and sharing through WhatsApp and Bluetooth
            </p>
            <p>
            In data science, I’ve created a Streamlit-based dashboard for diabetes risk analysis and am currently integrating a second predictive model using a separate dataset focused on TB and alcohol de-addiction. My approach balances strong front-end UI/UX design with backend logic and data-driven insights, and I'm always eager to tackle real-world problems with practical tech solutions.
            </p>
            <p>
              My approach combines technical expertise with a strong focus on user
              experience. I believe that great websites are not just visually
              appealing but also intuitive and accessible to all users.
            </p>
          </div>
          <div ref={infoRef} className="about-info stagger-animation scroll-animation">
            <div className="info-item">
              <h3>Name</h3>
              <p>G Sri naga venkat</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>gsnvenkat13@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Hydrabad, India</p>
            </div>
            <div className="info-item">
              <h3>Availability</h3>
              <p>Available for freelance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About