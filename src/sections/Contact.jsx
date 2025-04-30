import { useState } from 'react'
import './Contact.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import ContactParticles from '../components/ContactParticles'

const Contact = () => {
  // Create refs for animated elements
  const titleRef = useScrollAnimation();
  const infoRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-20px'
  });
  const formRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-20px'
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      })
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    // In a real application, you would send the form data to a server
    // For demo purposes, we'll simulate a successful form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully!'
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        })
      }, 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      {/* Original gradient background for Contact section */}
      <div className="section-background contact-bg"></div>
      
      {/* Custom particle background for Contact section */}
      <ContactParticles />
      
      <div className="container contact-container">
        <h2 ref={titleRef} className="section-title scroll-animation">Contact Me</h2>
        
        <div className="contact-content">
          <div ref={infoRef} className="contact-info scroll-animation">
            <div className="info-item">
              <h3>Email</h3>
              <p>gsnvenkat13@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 8147062297</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Hydrabad, India</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/G-SriNagaVenkat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/sri-naga-venkat-g-94ba78314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {/* <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Twitter
                </a> */}
              </div>
            </div>
          </div>
          
          <div ref={formRef} className="contact-form scroll-animation">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name<span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email<span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message<span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact