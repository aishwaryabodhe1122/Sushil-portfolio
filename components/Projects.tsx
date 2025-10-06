'use client'

import { useState } from 'react'
import { Container, Row, Col, Card, Badge, Modal } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaRocket, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  technologies: string[]
  category: string
  features: string[]
  achievements: string[]
  githubUrl: string
  liveUrl: string
  status: string
  impact: string
  developmentProgress?: number
}

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showDevModal, setShowDevModal] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Binance Futures Tracker',
      shortDescription: 'Real-time cryptocurrency futures tracking with sentiment analysis',
      fullDescription: 'A comprehensive cryptocurrency tracking application that provides real-time price monitoring, delta changes, and market sentiment analysis. Built with modern web technologies to deliver instant market insights.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'Express', 'Socket.IO', 'WebSocket', 'RSS-Parser'],
      category: 'Full Stack',
      features: [
        'Custom WebSocket service for real-time price streaming',
        'Responsive React UI with color-coded tables',
        'Google News RSS integration with sentiment analysis',
        'Real-time broadcasting of top 50 Binance futures',
        'Predictive market trend analysis',
        'Production-ready deployment on Render.com and Netlify'
      ],
      achievements: [
        'Zero client-side polling for optimal performance',
        'Real-time sentiment analysis for market predictions',
        'Scalable WebSocket architecture',
        'Environment-driven configuration'
      ],
      githubUrl: 'https://github.com/aishwaryabodhe1122/binance-futures-tracker',
      liveUrl: 'https://binance-tracker-demo.netlify.app',
      status: 'Completed',
      impact: 'Improved trading decision-making with real-time data'
    },
    {
      id: 2,
      title: 'Personalized Content Aggregator',
      shortDescription: 'MERN stack platform for personalized content recommendations',
      fullDescription: 'An intelligent content aggregation platform that curates articles, videos, and social media feeds from multiple sources, delivering personalized recommendations to enhance user engagement.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Machine Learning', 'APIs'],
      category: 'Full Stack',
      features: [
        'Multi-source content aggregation from external APIs',
        'Custom recommendation algorithm implementation',
        'Dynamic React UI with minimal load times',
        'User preference learning and adaptation',
        'Social media feed integration',
        'Personalized content delivery system'
      ],
      achievements: [
        '25% increase in user engagement',
        'Intelligent content filtering and categorization',
        'Optimized performance with React optimization techniques',
        'Scalable recommendation engine'
      ],
      githubUrl: 'https://github.com/aishwaryabodhe1122/content-aggregator',
      liveUrl: 'https://content-aggregator-demo.netlify.app',
      status: 'In Development',
      impact: 'Enhanced user experience through personalized content',
      developmentProgress: 75
    },
    {
      id: 3,
      title: 'E-Commerce Analytics Dashboard',
      shortDescription: 'Advanced analytics dashboard for e-commerce insights',
      fullDescription: 'A comprehensive analytics dashboard providing deep insights into e-commerce performance, customer behavior, and sales trends with interactive visualizations and real-time data processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'AWS'],
      category: 'Data Visualization',
      features: [
        'Interactive data visualizations with D3.js',
        'Real-time sales and performance metrics',
        'Customer behavior analysis and segmentation',
        'Predictive analytics for inventory management',
        'Responsive dashboard design',
        'Export functionality for reports'
      ],
      achievements: [
        'Improved decision-making with data-driven insights',
        'Real-time performance monitoring',
        'Advanced filtering and drill-down capabilities',
        'Mobile-responsive design'
      ],
      githubUrl: 'https://github.com/aishwaryabodhe1122/customer-sentiment',
      liveUrl: 'https://ecommerce-analytics-demo.netlify.app',
      status: 'Completed',
      impact: 'Streamlined business intelligence and reporting'
    },
    {
      id: 4,
      title: 'Task Management System',
      shortDescription: 'Collaborative project management with real-time updates',
      fullDescription: 'A modern task management system designed for teams to collaborate effectively with real-time updates, file sharing, and comprehensive project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Tailwind CSS'],
      category: 'Productivity',
      features: [
        'Real-time collaborative editing',
        'Drag-and-drop task management',
        'Team member assignment and notifications',
        'File attachment and sharing',
        'Progress tracking and reporting',
        'Integration with popular tools'
      ],
      achievements: [
        'Improved team productivity by 40%',
        'Real-time synchronization across devices',
        'Intuitive user interface design',
        'Scalable architecture for growing teams'
      ],
      githubUrl: 'https://github.com/aishwaryabodhe1122/task-management',
      liveUrl: 'https://task-manager-demo.netlify.app',
      status: 'In Development',
      impact: 'Enhanced team collaboration and productivity',
      developmentProgress: 30
    }
  ]

  const categories = ['All', 'Full Stack', 'Data Visualization', 'Productivity']
  const statusFilters = ['All', 'Completed', 'In Development']
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeStatus, setActiveStatus] = useState('All')
  const [expandedFilter, setExpandedFilter] = useState<'category' | 'status' | null>(null)

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory
    const statusMatch = activeStatus === 'All' || project.status === activeStatus
    return categoryMatch && statusMatch
  })

  const handleProjectClick = (project: Project) => {
    if (project.status === 'Completed') {
      // Redirect to GitHub repo for completed projects
      window.open(project.githubUrl, '_blank')
    } else {
      // Show development popup for in-development projects
      setSelectedProject(project)
      setShowDevModal(true)
    }
  }

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProject(null)
  }

  const handleCloseDevModal = () => {
    setShowDevModal(false)
    setSelectedProject(null)
  }

  const toggleFilterExpansion = (filterType: 'category' | 'status') => {
    setExpandedFilter(expandedFilter === filterType ? null : filterType)
  }

  return (
    <section id="projects" className="section-padding bg-pattern">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-2 fw-bold mb-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="lead text-muted">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </Col>
        </Row>

        {/* Filter System */}
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <div className="filter-system text-center">
              {/* Main Filter Buttons */}
              <div className="main-filter-buttons mb-4">
                <button
                  className={`main-filter-btn ${expandedFilter === 'category' ? 'active' : ''}`}
                  onClick={() => toggleFilterExpansion('category')}
                >
                  🏷️ Filter by Category
                  <span className={`arrow ${expandedFilter === 'category' ? 'expanded' : ''}`}>▼</span>
                </button>
                <button
                  className={`main-filter-btn ${expandedFilter === 'status' ? 'active' : ''}`}
                  onClick={() => toggleFilterExpansion('status')}
                >
                  📊 Filter by Status
                  <span className={`arrow ${expandedFilter === 'status' ? 'expanded' : ''}`}>▼</span>
                </button>
              </div>

              {/* Category Filter - Expandable */}
              {expandedFilter === 'category' && (
                <div className="expandable-filter category-filter animate-slideDown">
                  <h6 className="filter-subtitle mb-3">Select Category</h6>
                  <div className="filter-buttons">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Status Filter - Expandable */}
              {expandedFilter === 'status' && (
                <div className="expandable-filter status-filter animate-slideDown">
                  <h6 className="filter-subtitle mb-3">Select Status</h6>
                  <div className="filter-buttons">
                    {statusFilters.map((status) => (
                      <button
                        key={status}
                        className={`status-btn ${activeStatus === status ? 'active' : ''}`}
                        onClick={() => setActiveStatus(status)}
                      >
                        {status === 'Completed' && '✅ '}
                        {status === 'In Development' && '🚧 '}
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4" ref={ref}>
          {filteredProjects.map((project, index) => (
            <Col lg={6} key={project.id}>
              <Card 
                className={`project-card card-custom h-100 hover-lift ${inView ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project.status === 'Completed' ? (
                        <>
                          <button 
                            className="action-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleViewDetails(project)
                            }}
                            title="View Details"
                          >
                            <FaEye />
                          </button>
                          <button 
                            className="action-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.githubUrl, '_blank')
                            }}
                            title="View Code"
                          >
                            <FaGithub />
                          </button>
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </>
                      ) : (
                        <button 
                          className="action-btn dev-project"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleProjectClick(project)
                          }}
                          title="Coming Soon"
                        >
                          <FaRocket />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="project-status">
                    <Badge 
                      bg={project.status === 'Completed' ? 'success' : 'warning'}
                      className="status-badge"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="h5 fw-bold mb-0">{project.title}</h4>
                    <Badge bg="primary" className="category-badge">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted mb-3">{project.shortDescription}</p>
                  
                  <div className="project-tech mb-3">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="project-impact">
                    <small className="text-muted d-flex align-items-center">
                      <FaRocket className="me-2" />
                      {project.impact}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0">
              <Modal.Title className="h4 fw-bold">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <div className="mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={300}
                  className="w-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <p className="text-muted mb-4">{selectedProject.fullDescription}</p>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2 d-flex align-items-center">
                  <FaCode className="me-2 text-primary" />
                  Key Features
                </h6>
                <ul className="feature-list">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2 d-flex align-items-center">
                  <FaChartLine className="me-2 text-success" />
                  Achievements
                </h6>
                <ul className="achievement-list">
                  {selectedProject.achievements.map((achievement: string, index: number) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Technologies Used</h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="d-flex gap-3">
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  <FaGithub className="me-2" />
                  View Code
                </a>
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  <FaExternalLinkAlt className="me-2" />
                  Live Demo
                </a>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      {/* Development Project Modal */}
      <Modal show={showDevModal} onHide={handleCloseDevModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 dev-modal-header">
              <Modal.Title className="h4 fw-bold d-flex align-items-center">
                <FaRocket className="me-2 text-warning" />
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 text-center">
              <div className="mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={300}
                  className="w-100 rounded"
                  style={{ objectFit: 'cover', filter: 'grayscale(20%)' }}
                />
              </div>
              
              <div className="development-badge mb-3">
                <Badge bg="warning" className="px-3 py-2 fs-6">
                  🚧 In Development
                </Badge>
              </div>
              
              <h5 className="fw-bold mb-3 text-primary">Coming Soon!</h5>
              <p className="text-muted mb-4">{selectedProject.fullDescription}</p>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Tech Stack</h6>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <span key={index} className="tech-tag-dev">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="development-status mb-4">
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${selectedProject.developmentProgress || 50}%` }}></div>
                  </div>
                  <small className="text-muted mt-2 d-block">Development Progress: {selectedProject.developmentProgress || 50}%</small>
                </div>
              </div>
              
              <div className="coming-soon-message">
                <div className="icon-container mb-3">
                  <FaCode className="text-primary fs-1" />
                </div>
                <h6 className="fw-bold text-dark">This project is currently under development</h6>
                <p className="text-muted mb-4">
                  I'm working hard to bring you an amazing experience. Stay tuned for the launch!
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button 
                    className="btn-outline-custom"
                    onClick={handleCloseDevModal}
                  >
                    Close
                  </button>
                  <button 
                    className="btn-primary-custom"
                    onClick={() => {
                      handleCloseDevModal()
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Get Notified
                  </button>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      <style jsx>{`
        .category-filter {
          margin-bottom: 2rem;
        }

        .category-btn {
          background: transparent;
          border: 2px solid rgba(99, 102, 241, 0.2);
          color: #6b7280;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 0 8px 8px 0;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: white;
          transform: translateY(-2px);
        }

        .filter-system {
          margin-bottom: 2rem;
        }

        .main-filter-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .main-filter-btn {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border: 2px solid rgba(99, 102, 241, 0.3);
          color: #374151;
          padding: 15px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 200px;
          justify-content: space-between;
        }

        .main-filter-btn:hover,
        .main-filter-btn.active {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-color: transparent;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .arrow {
          transition: transform 0.3s ease;
          font-size: 0.8rem;
        }

        .arrow.expanded {
          transform: rotate(180deg);
        }

        .expandable-filter {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 25px;
          margin-top: 20px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .filter-subtitle {
          color: #374151;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .status-btn {
          background: transparent;
          border: 2px solid rgba(139, 92, 246, 0.2);
          color: #6b7280;
          padding: 10px 20px;
          border-radius: 25px;
          margin: 0 8px 8px 0;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .status-btn:hover,
        .status-btn.active {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          border-color: transparent;
          color: white;
          transform: translateY(-2px);
        }

        .project-card {
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-actions {
          display: flex;
          gap: 15px;
        }

        .action-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          color: #1f2937;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.3s ease;
          transform: translateY(20px);
        }

        .project-card:hover .action-btn {
          transform: translateY(0);
        }

        .action-btn:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-5px) scale(1.1);
        }

        .project-status {
          position: absolute;
          top: 15px;
          right: 15px;
        }

        .status-badge {
          font-size: 0.75rem;
          padding: 6px 12px;
        }

        .category-badge {
          font-size: 0.75rem;
          padding: 4px 8px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .tech-tag.more {
          background: rgba(107, 114, 128, 0.1);
          color: #6b7280;
        }

        .feature-list,
        .achievement-list {
          list-style: none;
          padding-left: 0;
        }

        .feature-list li,
        .achievement-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: #6b7280;
        }

        .feature-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }

        .achievement-list li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: bold;
        }

        .dev-modal-header {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
        }

        .development-badge {
          display: inline-block;
        }

        .tech-tag-dev {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          color: #6366f1;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .progress-container {
          max-width: 300px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .coming-soon-message {
          background: rgba(99, 102, 241, 0.05);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }

        .icon-container {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .dev-project {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
        }

        .dev-project:hover {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          transform: translateY(-5px) scale(1.1);
        }

        @media (max-width: 768px) {
          .project-image {
            height: 200px;
          }
          
          .category-btn {
            padding: 8px 16px;
            font-size: 0.875rem;
          }

          .status-btn {
            padding: 8px 16px;
            font-size: 0.875rem;
            margin: 0 6px 6px 0;
          }

          .main-filter-btn {
            padding: 12px 20px;
            font-size: 0.875rem;
            min-width: 160px;
          }

          .expandable-filter {
            padding: 20px 15px;
          }

          .filter-subtitle {
            font-size: 0.875rem;
          }
          
          .action-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .display-2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects