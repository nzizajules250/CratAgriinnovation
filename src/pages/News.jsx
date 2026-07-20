import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function News() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useScrollReveal()

  const filters = ['All', 'Events', 'Announcements', 'Research']

  const featuredArticle = {
    id: 1,
    title: 'CBG Agri Innovation Hub Launches New Digital Farming Initiative',
    category: 'Announcements',
    date: '2024-01-20',
    author: 'John Mugisha',
    excerpt: 'The new initiative aims to connect 10,000 farmers with digital tools and resources to enhance agricultural productivity and sustainability.',
    image: '/images/news-featured.jpg'
  }

  const articles = [
    {
      id: 2,
      title: 'Smart Irrigation Workshop Draws 200+ Farmers',
      category: 'Events',
      date: '2024-01-18',
      author: 'Sarah Uwimana',
      excerpt: 'Farmers from across Rwanda gathered to learn about IoT-based irrigation systems and water conservation techniques.',
      image: '/images/news-workshop.jpg'
    },
    {
      id: 3,
      title: 'Research on Climate-Resilient Crops Shows Promise',
      category: 'Research',
      date: '2024-01-15',
      author: 'Dr. Jean Pierre',
      excerpt: 'Early results from our climate-smart agriculture research indicate significant potential for drought-resistant crop varieties.',
      image: '/images/news-research.jpg'
    },
    {
      id: 4,
      title: 'Youth Agripreneurship Program Graduates 50 Students',
      category: 'Events',
      date: '2024-01-12',
      author: 'Grace Uwimana',
      excerpt: 'Fifty young agripreneurs completed our intensive training program and are now starting their own agricultural businesses.',
      image: '/images/news-graduation.jpg'
    },
    {
      id: 5,
      title: 'New Partnership with University of Rwanda Announced',
      category: 'Announcements',
      date: '2024-01-10',
      author: 'John Mugisha',
      excerpt: 'Collaboration to strengthen agricultural research and training programs across Rwanda.',
      image: '/images/news-partnership.jpg'
    },
    {
      id: 6,
      title: 'IoT Sensors Deployed in 50 Farms Across Eastern Province',
      category: 'Research',
      date: '2024-01-08',
      author: 'Dr. Jean Pierre',
      excerpt: 'The deployment marks a significant milestone in our efforts to bring smart farming technologies to smallholder farmers.',
      image: '/images/news-sensors.jpg'
    }
  ]

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeFilter)

  return (
    <div>
      <PageHeader 
        title="News & Updates" 
        breadcrumb="News"
        backgroundImage="/images/news-header.jpg"
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

          {/* Featured Article */}
          <div className="mb-12">
            <Card hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64 lg:h-auto bg-bg-light overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <span className="text-accent text-sm font-semibold mb-2">{featuredArticle.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{featuredArticle.title}</h3>
                  <p className="text-text-body mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-text-body/70 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </span>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors group"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} hover className="overflow-hidden">
                <div className="h-48 bg-bg-light overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase">{article.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{article.title}</h3>
                  <p className="text-text-body text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-text-body/70 space-x-4 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </span>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-dark transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-bg-light transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-accent text-white">1</button>
              <button className="px-4 py-2 rounded-lg hover:bg-bg-light transition-colors">2</button>
              <button className="px-4 py-2 rounded-lg hover:bg-bg-light transition-colors">3</button>
              <button className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-bg-light transition-colors">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-text-body mb-8">
              Stay updated with our latest news, events, and agricultural innovations.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <Button variant="primary" className="sm:flex-shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTASection 
        title="Have a Story to Share?"
        subtitle="We'd love to hear about agricultural innovations and successes in your community."
        buttonText="Contact Our Media Team"
        buttonLink="/contact"
      />
    </div>
  )
}

export default News