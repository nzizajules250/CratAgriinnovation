import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Wifi, 
  Droplets, 
  Settings, 
  Cloud, 
  TrendingUp,
  Users,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import SplitSection from '../components/ui/SplitSection'
import IconBadge from '../components/ui/IconBadge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { SMART_FARMING_TECH, TRAINING_AUDIENCES, TRAINING_THEMES } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

function WhatWeDo() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()
  const ref5 = useScrollReveal()

  return (
    <div>
      <PageHeader 
        title="What We Do" 
        breadcrumb="What We Do"
        backgroundImage="https://i.ibb.co/BVBb3M0z/hero-bg.png"
      />

      {/* Digital Agriculture Solutions */}
      <section ref={ref1} className="section-padding">
        <div className="container-custom">
          <SplitSection 
            image="https://i.ibb.co/5gXtG5Fm/Gemini-Generated-Image-p04uf4p04uf4p04u.png"
            imageAlt="Digital Agriculture"
            imagePosition="right"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Digital Agriculture</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Digital Agriculture Solutions
            </h2>
            <p className="text-text-body mb-4">
              We leverage cutting-edge digital technologies to transform traditional farming practices 
              into data-driven, efficient, and sustainable agricultural systems.
            </p>
            <p className="text-text-body">
              Our digital agriculture solutions help farmers make informed decisions, optimize 
              resource usage, and increase productivity while reducing environmental impact.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Smart Farming Technologies */}
      <section ref={ref2} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Smart Farming Technologies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SMART_FARMING_TECH.map((item, index) => (
              <Card key={index} hover className="p-6 md:p-8">
                <IconBadge icon={item.icon} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text-body text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section ref={ref3} className="section-padding">
        <div className="container-custom">
          <SplitSection 
            image="/images/research-innovation.jpg"
            imageAlt="Research and Innovation"
            imagePosition="left"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Research & Innovation</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Research & Innovation
            </h2>
            <p className="text-text-body mb-4">
              We conduct cutting-edge research and pilot projects to develop and test innovative 
              agricultural technologies and practices that address real-world challenges.
            </p>
            <p className="text-text-body">
              Our research focuses on climate-smart agriculture, sustainable farming practices, 
              and the integration of emerging technologies like AI, IoT, and data analytics 
              in agriculture.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Capacity Building */}
      <section ref={ref4} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Capacity Building</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Training & Capacity Building
            </h2>
            <p className="text-text-body text-lg mt-4">
              We equip individuals and communities with the skills and knowledge needed to thrive 
              in the digital agricultural era.
            </p>
          </div>

          {/* Who We Train */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">Who We Train</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {TRAINING_AUDIENCES.map((audience, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <audience.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{audience.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training Themes */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">Training Themes</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {TRAINING_THEMES.map((theme, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Incubation */}
      <section ref={ref5} className="section-padding">
        <div className="container-custom">
          <Card variant="dark" className="p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Incubation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Business Incubation
                </h2>
                <p className="text-white/80 mb-6">
                  We support agripreneurs and startups with mentorship, technical support, 
                  networking opportunities, and business development services.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>Mentorship from industry experts</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>Technical support and resources</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>Networking and partnership opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span>Business development services</span>
                  </li>
                </ul>
                <Button variant="primary">Learn More About Incubation</Button>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent">25+</div>
                    <div className="text-white/70 text-sm">Startups Incubated</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-white/70 text-sm">Jobs Created</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-white/70 text-sm">Active Ventures</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent">$2M</div>
                    <div className="text-white/70 text-sm">Investment Raised</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Explore Links */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/solutions" className="group">
              <Card hover className="p-8 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Explore Our Solutions</h3>
                <p className="text-text-body text-sm mb-4">
                  Discover our comprehensive agricultural technology solutions
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Card>
            </Link>
            <Link to="/training" className="group">
              <Card hover className="p-8 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">See Training Programs</h3>
                <p className="text-text-body text-sm mb-4">
                  View our capacity building and training opportunities
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Make an Impact?"
        subtitle="Join us in driving agricultural innovation and transformation."
        buttonText="Get Involved"
        buttonLink="/contact"
      />
    </div>
  )
}

export default WhatWeDo