'use client'

import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaGraduationCap, FaBriefcase, FaCode, FaAward, FaUsers, FaRocket } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { icon: FaBriefcase, number: '3', label: 'Years Experience' },
    { icon: FaCode, number: '10+', label: 'Web Applications' },
    { icon: FaUsers, number: '98%', label: 'User Satisfaction' },
    { icon: FaRocket, number: '30%', label: 'Performance Boost' },
  ]

  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'Education Excellence',
      description: 'BE in Information Technology (CGPA: 8.37) and pursuing MBA in AI & ML (CGPA: 8.78)',
    },
    {
      icon: FaBriefcase,
      title: 'Professional Growth',
      description: 'Software Engineer at Accenture with expertise in MEAN/MERN stack development',
    },
    {
      icon: FaCode,
      title: 'Technical Expertise',
      description: 'Full-stack development with modern frameworks, cloud solutions, and Agile methodologies',
    },
    {
      icon: FaAward,
      title: 'Proven Results',
      description: 'Improved data-handling efficiency by 30% and increased user engagement by 20%',
    },
  ]

  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-2 fw-bold mb-3">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="lead text-muted">
              Passionate software engineer with a drive for innovation and excellence
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className={`animate-fadeInLeft ${inView ? 'animate-fadeInUp' : ''}`} ref={ref}>
              <h3 className="h2 fw-bold mb-4">
                Crafting Digital Solutions with{' '}
                <span className="gradient-text">Precision</span>
              </h3>

              <p className="text-muted mb-4">
                Certified (C-DAC) with hands-on internship experience in Java, Spring Boot. Proven track record of building scalable
                backend systems and delivering enterprise-grade microservices.Successfully led project Payment Integration using Java,
                Spring Boot, and REST APIs—driving a 30%+ boost in client conversion rates. Proficient in designing RESTful APIs,
                integrating payment gateways, and deploying secure, high-performance services using Java, Spring Boot, and AWS. Skilled
                in system design, data structures, Redis caching, OAuth 2.0 authentication, and DevOps tools for CI/CD pipelines. Adept
                at Agile methodologies and cross-functional team collaboration to deliver robust, maintainable code.
              </p>

              <p className="text-muted mb-4">
                My passion lies in creating innovative solutions that not only meet business
                objectives but also deliver exceptional user experiences. I thrive in collaborative
                environments and have successfully led cross-functional teams to deliver projects
                on schedule while maintaining high code quality standards.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                  Full Stack Development
                </span>
                <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                  Cloud Architecture
                </span>
                <span className="badge bg-info-subtle text-info px-3 py-2 rounded-pill">
                  Agile Leadership
                </span>
                <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill">
                  Java Expert
                </span>
              </div>

              <a href="#contact" className="btn-primary-custom">
                Let's Work Together
              </a>
            </div>
          </Col>

          <Col lg={6}>
            <Row className="g-4">
              {stats.map((stat, index) => (
                <Col sm={6} key={index}>
                  <Card className={`card-custom text-center h-100 hover-lift ${inView ? 'animate-fadeInUp' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <stat.icon className="fs-1 gradient-text" />
                      </div>
                      <h3 className="h2 fw-bold mb-2 gradient-text">{stat.number}</h3>
                      <p className="text-muted mb-0">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="g-4">
          {highlights.map((highlight, index) => (
            <Col lg={6} key={index}>
              <Card className={`card-custom h-100 hover-lift ${inView ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="icon-wrapper">
                        <highlight.icon className="fs-3 gradient-text" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="h5 fw-bold mb-3">{highlight.title}</h4>
                      <p className="text-muted mb-0">{highlight.description}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        .badge {
          font-weight: 500;
          font-size: 0.875rem;
        }

        .bg-primary-subtle {
          background-color: rgba(99, 102, 241, 0.1) !important;
        }

        .text-primary {
          color: #6366f1 !important;
        }

        .bg-success-subtle {
          background-color: rgba(34, 197, 94, 0.1) !important;
        }

        .text-success {
          color: #22c55e !important;
        }

        .bg-info-subtle {
          background-color: rgba(6, 182, 212, 0.1) !important;
        }

        .text-info {
          color: #06b6d4 !important;
        }

        .bg-warning-subtle {
          background-color: rgba(245, 158, 11, 0.1) !important;
        }

        .text-warning {
          color: #f59e0b !important;
        }

        @media (max-width: 768px) {
          .display-2 {
            font-size: 2rem;
          }
          
          .icon-wrapper {
            width: 50px;
            height: 50px;
          }
          
          .badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About