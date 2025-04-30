import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} 
          </p>
          <div className="social-links">
            <a 
              href="https://github.com/G-SriNagaVenkat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sri-naga-venkat-g-94ba78314/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer