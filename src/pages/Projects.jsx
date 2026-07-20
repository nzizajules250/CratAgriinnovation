import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, X, Tag } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useScrollReveal()

  const filters = ['All', 'Smart Farming', 'IoT', 'Research', 'Training']

  const projects = [
    {
      id: 1,
      title: 'Smart Irrigation Pilot Project',
      category: 'Smart Farming',
      excerpt: 'Implementing IoT-based irrigation systems to optimize water usage in smallholder farms.',
      image: 'https://i.pinimg.com/736x/05/b3/d9/05b3d9cd5470116bace35bb4ac1df75b.jpg',
      date: '2024-01-15',
      location: 'Gikondo, Kigali'
    },
    {
      id: 2,
      title: 'IoT Sensor Network Deployment',
      category: 'IoT',
      excerpt: 'Deploying a network of IoT sensors for real-time farm monitoring and data collection.',
      image: 'https://i.ibb.co/fGd5CPYv/Gemini-Generated-Image-i7ovyti7ovyti7ov.png',
      date: '2024-01-10',
      location: 'Eastern Province'
    },
    {
      id: 3,
      title: 'Climate-Smart Agriculture Research',
      category: 'Research',
      excerpt: 'Research on climate-resilient farming practices and crop varieties for changing weather patterns.',
      image: 'https://i.pinimg.com/736x/65/28/52/652852c3a0db6da69386bfed7b4bdfb8.jpg',
      date: '2024-01-05',
      location: 'Multiple Sites'
    },
    {
      id: 4,
      title: 'Youth Agripreneurship Program',
      category: 'Training',
      excerpt: 'Training program empowering youth with agricultural entrepreneurship and digital skills.',
      image: 'https://i.pinimg.com/736x/fa/b5/31/fab5313c555ea2c4265eebb22646861d.jpg',
      date: '2024-01-01',
      location: 'Kigali'
    },
    {
      id: 5,
      title: 'Digital Farmer Registry System',
      category: 'Smart Farming',
      excerpt: 'Developing a digital registry system to track farmer profiles and agricultural activities.',
      image: 'https://i.ibb.co/4RxRJH42/fb556be4-23b3-48e0-ae5d-5968c3d230c0.png',
      date: '2023-12-20',
      location: 'National Level'
    },
    {
      id: 6,
      title: 'Greenhouse Automation Pilot',
      category: 'IoT',
      excerpt: 'Testing automated greenhouse systems for optimal crop production and resource efficiency.',
      image: 'https://i.pinimg.com/1200x/bd/99/1b/bd991b97f1f8442ef7a4f0a9f8c3ad1e.jpg',
      date: '2023-12-15',
      location: 'Gikondo, Kigali'
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const countFor = (filter) =>
    filter === 'All' ? projects.length : projects.filter(p => p.category === filter).length

  return (
    <div>
      <PageHeader
        title="Our Projects"
        breadcrumb="Projects"
        backgroundImage="https://i.ibb.co/gMQHcK1Q/Chat-GPT-Image-Jul-20-2026-09-45-46-AM.png"
      />

      <section ref={ref} className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'bg-bg-light text-text-body hover:bg-bg-light/80'
                }`}
              >
                {filter}
                <span
                  className={`text-xs rounded-full px-1.5 py-0.5 leading-none ${
                    activeFilter === filter ? 'bg-white/20' : 'bg-black/5'
                  }`}
                >
                  {countFor(filter)}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden group flex flex-col">
                <div className="relative h-48 overflow-hidden bg-bg-light">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-body text-sm mb-4 flex-1">{project.excerpt}</p>
                  <div className="flex items-center text-xs text-text-body/70 space-x-4 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-dark transition-colors group/link self-start"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" icon={false}>
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Our Work?"
        subtitle="Partner with us to scale impactful agricultural projects."
        buttonText="Partner With Us"
        buttonLink="/partners"
      />

      <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

/**
 * Full-detail overlay for a project. Mounts only when a project is
 * selected, closes on Escape, backdrop click, or the X button, and
 * locks page scroll while open.
 */
function ProjectOverlay({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-overlay-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm overlay-backdrop"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl overlay-panel">
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-primary-dark shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-56 md:h-72 overflow-hidden bg-bg-light rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-4 left-6 inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Tag className="w-3 h-3" />
            {project.category}
          </span>
        </div>

        <div className="p-6 md:p-8">
          <h3 id="project-overlay-title" className="text-2xl md:text-3xl font-bold mb-3">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-body/70 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(project.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
          </div>

          <p className="text-text-body leading-relaxed mb-8">
            {project.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" onClick={onClose}>
              <Button variant="primary" icon={ArrowRight}>
                Discuss a Similar Project
              </Button>
            </Link>
            <Button variant="secondary" icon={false} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .overlay-backdrop {
          animation: overlay-fade-in 0.25s ease-out;
        }
        .overlay-panel {
          animation: overlay-pop-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes overlay-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes overlay-pop-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .overlay-backdrop, .overlay-panel {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Projects