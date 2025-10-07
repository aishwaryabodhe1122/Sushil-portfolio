'use client'

import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-4">
          {/* Brand and Description */}
          <Col lg={4} md={6}>
            <div className="footer-brand mb-4">
              <h4 className="h4 fw-bold text-white mb-3">Sushil Chaudhari</h4>
              <p className="text-white-75 mb-4">
                Full Stack Developer passionate about creating innovative solutions 
                and delivering exceptional user experiences through modern web technologies.
              </p>
              <div className="social-links">
                <a 
                  href="https://github.com/Sushil9731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sushil-chaudhari-54460319b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chaudharisushil96@gmail.com&su=Portfolio%20Contact&body=Hi%20Sushil,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <div className="footer-links">
              <h5 className="h6 fw-bold text-white mb-3">Quick Links</h5>
              <ul className="link-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(link.href)
                      }}
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <div className="footer-services">
              <h5 className="h6 fw-bold text-white mb-3">Services</h5>
              <ul className="link-list">
                <li><span className="footer-service">UI/UX Design</span></li>
                <li><span className="footer-service">Full Stack Web and Mobile Development</span></li>
                <li><span className="footer-service">React.js Development</span></li>
                <li><span className="footer-service">Node.js Backend</span></li>
                <li><span className="footer-service">AWS Cloud Solutions</span></li>
                <li><span className="footer-service">Database Design</span></li>
                <li><span className="footer-service">API Development</span></li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <div className="footer-contact">
              <h5 className="h6 fw-bold text-white mb-3">Get In Touch</h5>
              <div className="contact-info">
                <p className="text-white-75 mb-2">
                  <strong>Email:</strong><br />
                  chaudharisushil96@gmail.com
                </p>
                <p className="text-white-75 mb-2">
                  <strong>Phone:</strong><br />
                  +91 8830889788
                </p>
                <p className="text-white-75 mb-3">
                  <strong>Location:</strong><br />
                  Pune, Maharashtra, India
                </p>
                <div className="availability-badge">
                  <span className="status-dot"></span>
                  Available for new projects
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          padding: 60px 0 30px;
          position: relative;
          overflow: hidden;
        }

        .footer-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .text-white-75 {
          color: rgba(255, 255, 255, 0.75);
        }

        .text-white-50 {
          color: rgba(255, 255, 255, 0.5);
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 18px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: var(--gradient-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 8px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: #6366f1;
          padding-left: 5px;
        }

        .footer-service {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 8px;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        .footer-divider {
          border-color: rgba(255, 255, 255, 0.1);
          margin: 40px 0 30px;
        }

        .scroll-to-top {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: var(--gradient-primary);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .scroll-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 40px 0 20px;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .scroll-to-top {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
          
          .text-md-end {
            text-align: center !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
