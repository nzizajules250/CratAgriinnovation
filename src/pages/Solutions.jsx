import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Wifi, 
  Droplets, 
  Settings, 
  Cloud, 
  TrendingUp,
  Smartphone,
  Database,
  Shield,
  BarChart,
  Users
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import CTASection from '../components/ui/CTASection'
import { SMART_FARMING_TECH, FOCUS_AREAS } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Solutions() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const imaraFeatures = [
    'Smart Farm Monitoring',
    'Crop and Soil Management',
    'Weather and Environmental Monitoring',
    'Agricultural Data Analytics',
    'AI-Powered Advisory Services',
    'Farmer Digital Records',
    'Market Linkages'
  ]

  return (
    <div>
      <PageHeader 
        title="Our Solutions" 
        breadcrumb="Solutions"
        backgroundImage="https://i.ibb.co/5gXtG5Fm/Gemini-Generated-Image-p04uf4p04uf4p04u.png"
      />

      {/* IMARA Platform */}
      <section ref={ref1} className="section-padding bg-primary-dark">
        <div className="container-custom">
          <Card variant="dark" className="p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Flagship Solution</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                  IMARA
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Digital Agriculture Platform for Smart Farming
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {imaraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-white/90">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg">
                  Discover IMARA
                </Button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-72 h-auto">
                  <img 
                    src="/images/imara-mockup.png" 
                    alt="IMARA Platform" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Smart Farming Technologies */}
      <section ref={ref2} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Technologies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Smart Farming Technologies
            </h2>
            <p className="text-text-body text-lg mt-4">
              Our comprehensive suite of smart farming solutions designed to optimize agricultural production
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SMART_FARMING_TECH.map((tech, index) => (
              <Card key={index} hover className="p-6">
                <IconBadge icon={tech.icon} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-text-body text-sm">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section ref={ref3} className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Focus Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Focus Areas
            </h2>
            <p className="text-text-body text-lg mt-4">
              We focus on key areas that drive agricultural innovation and sustainable development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FOCUS_AREAS.map((area, index) => (
              <div 
                key={index}
                className="bg-bg-light rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">
                  {index % 2 === 0 ? '🌱' : '🚜'}
                </div>
                <span className="text-sm font-medium text-text-heading">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Farming?"
        subtitle="Discover how our solutions can help you achieve sustainable agricultural success."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Solutions