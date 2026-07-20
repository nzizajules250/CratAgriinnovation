import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Users, GraduationCap, Briefcase, Award } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import SplitSection from '../components/ui/SplitSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import { TRAINING_AUDIENCES, TRAINING_THEMES } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Training() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const upcomingTrainings = [
    {
      id: 1,
      title: 'Agripreneurship Workshop',
      date: '2024-03-01',
      location: 'Kigali',
      excerpt: 'Business development and entrepreneurship training for agricultural innovators.',
      image: 'https://i.ibb.co/JwKgKL6s/CBG-19-jpg.jpg'
    }
  ]

  return (
    <div>
      <PageHeader 
        title="Training & Capacity Building" 
        breadcrumb="Training"
        backgroundImage="https://i.ibb.co/V0xJx7js/Chat-GPT-Image-Jul-20-2026-09-59-16-AM.png"
      />

      {/* Overview */}
      <section ref={ref1} className="section-padding">
        <div className="container-custom">
          <SplitSection 
            image="https://i.ibb.co/B5PsSPrc/Whats-App-Image-2026-07-20-at-2-42-10-PM.jpg"
            imageAlt="Training Session"
            imagePosition="right"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Capacity Building</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Empowering Through Education
            </h2>
            <p className="text-text-body mb-4">
              Our training and capacity building programs are designed to equip individuals and 
              communities with the skills, knowledge, and tools needed to succeed in the modern 
              agricultural landscape.
            </p>
            <p className="text-text-body">
              We offer hands-on, practical training that bridges the gap between traditional farming 
              practices and cutting-edge agricultural technologies.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Who We Train */}
      <section ref={ref2} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Audience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Who We Train
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TRAINING_AUDIENCES.map((audience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-3">
                  <audience.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="text-sm font-medium">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Themes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Themes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Training Themes
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TRAINING_THEMES.map((theme, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-accent/10 text-accent rounded-full text-base font-medium hover:bg-accent/20 transition-colors"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section ref={ref3} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Schedule</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Upcoming Trainings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTrainings.map((training) => (
              <Card key={training.id} hover className="overflow-hidden">
                <div className="h-48 bg-bg-light overflow-hidden">
                  <img 
                    src={training.image} 
                    alt={training.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{training.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-text-body">
                      <Calendar className="w-4 h-4 mr-2 text-accent" />
                      {new Date(training.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center text-sm text-text-body">
                      <MapPin className="w-4 h-4 mr-2 text-accent" />
                      {training.location}
                    </div>
                  </div>
                  <p className="text-text-body text-sm mb-4">{training.excerpt}</p>
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-accent font-medium text-sm hover:text-accent-dark transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="p-8 max-w-2xl mx-auto border-2 border-accent/20">
              <h3 className="text-2xl font-semibold mb-2">Interested in Our Training Programs?</h3>
              <p className="text-text-body mb-6">
                Contact us to learn more about our upcoming training opportunities and how you can participate.
              </p>
              <Link to="/contact">
                <Button variant="primary">Apply for Training</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner on a Training Program"
        subtitle="Collaborate with us to deliver impactful training programs."
        buttonText="Partner With Us"
        buttonLink="/partners"
      />
    </div>
  )
}

export default Training