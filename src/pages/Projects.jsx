import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-bg-light text-text-body hover:bg-bg-light/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-bg-light">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-body text-sm mb-4">{project.excerpt}</p>
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
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-dark transition-colors group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
    </div>
  )
}

export default Projects