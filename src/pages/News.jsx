import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, X } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function News() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedArticle, setSelectedArticle] = useState(null)
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

  const todayDateline = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <div>
      <PageHeader
        title="News & Updates"
        breadcrumb="News"
        backgroundImage="/images/news-header.jpg"
      />

      <section ref={ref} className="section-padding">
        <div className="container-custom">

          {/* Masthead strip */}
          <div className="border-t-4 border-b border-primary-dark pt-3 pb-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-serif text-sm tracking-wide text-primary-dark">
              The CBG Agri Innovation Hub Bulletin
            </span>
            <span className="text-xs uppercase tracking-widest text-text-body/60">
              {todayDateline}
            </span>
          </div>

          {/* Filter Tabs — editorial section nav rather than pill buttons */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-14 border-b border-black/10 pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative pb-3 text-sm uppercase tracking-widest font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'text-primary-dark'
                    : 'text-text-body/50 hover:text-text-body'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Featured Article — the lead story */}
          <div className="mb-16">
            <Card hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-bg-light overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-black/10">
                  <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                    <span className="w-4 h-px bg-accent" />
                    Lead Story · {featuredArticle.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-text-body mb-5 leading-relaxed first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-primary-dark first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85]">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-body/70 mb-5 border-t border-black/5 pt-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors group self-start"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Articles Grid — column layout with hairline rules, print-style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group">
                <div className="h-44 bg-bg-light overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </span>
                <h3 className="font-serif text-lg font-semibold mt-2 mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-text-body text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs text-text-body/60 space-x-4 mb-4 pb-4 border-b border-black/10">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-dark transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 pt-8 border-t border-black/10">
            <nav className="flex items-center space-x-1 text-sm">
              <button className="px-3 py-2 text-text-body/60 hover:text-primary-dark transition-colors">
                ← Previous
              </button>
              <button className="w-9 h-9 flex items-center justify-center font-semibold text-white bg-primary-dark">1</button>
              <button className="w-9 h-9 flex items-center justify-center text-text-body hover:bg-bg-light transition-colors">2</button>
              <button className="w-9 h-9 flex items-center justify-center text-text-body hover:bg-bg-light transition-colors">3</button>
              <button className="px-3 py-2 text-text-body/60 hover:text-primary-dark transition-colors">
                Next →
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center border-t border-b border-primary-dark/20 py-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Stay in the loop</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mt-3 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-text-body mb-8">
              Stay updated with our latest news, events, and agricultural innovations.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
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

      <ArticleOverlay article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  )
}

/**
 * Read-article overlay, mirroring the interaction pattern used on the
 * Projects page. Mounts only when an article is selected; closes on
 * Escape, backdrop click, or the X button; locks body scroll while open.
 */
function ArticleOverlay({ article, onClose }) {
  useEffect(() => {
    if (!article) return

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
  }, [article, onClose])

  if (!article) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-overlay-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm overlay-backdrop"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl overlay-panel">
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-primary-dark shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-56 md:h-72 overflow-hidden bg-bg-light">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 md:p-10">
          <span className="text-accent text-xs font-bold uppercase tracking-widest">
            {article.category}
          </span>
          <h3 id="article-overlay-title" className="font-serif text-2xl md:text-3xl font-bold mt-3 mb-4 leading-tight">
            {article.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-body/70 mb-6 border-y border-black/10 py-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </span>
          </div>

          <p className="text-text-body leading-relaxed mb-8 first-letter:font-serif first-letter:text-4xl first-letter:font-bold first-letter:text-primary-dark first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8]">
            {article.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" onClick={onClose}>
              <Button variant="primary" icon={ArrowRight}>
                Get In Touch
              </Button>
            </Link>
            <Button variant="secondary" icon={false} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .overlay-backdrop { animation: overlay-fade-in 0.25s ease-out; }
        .overlay-panel { animation: overlay-pop-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes overlay-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes overlay-pop-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .overlay-backdrop, .overlay-panel { animation: none; }
        }
      `}</style>
    </div>
  )
}

export default News