import { Link } from 'react-router-dom'
import { Play, Droplets, Thermometer, Wind } from 'lucide-react'
import Button from '../components/ui/Button'
import IconBadge from '../components/ui/IconBadge'
import StatBlock from '../components/ui/StatBlock'
import SplitSection from '../components/ui/SplitSection'
import CTASection from '../components/ui/CTASection'
import Card from '../components/ui/Card'
import CheckmarkList from '../components/shared/CheckmarkList'
import { WHAT_WE_DO_ITEMS, IMPACT_STATS } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Home() {
  const heroRef = useScrollReveal()
  const featuresRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const imaraRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/BVBb3M0z/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />

        {/* Signature vein-line motif — leaf venation doubling as circuit trace */}
        <svg
          className="absolute top-0 right-0 w-[60%] h-full text-accent/[0.08] pointer-events-none"
          viewBox="0 0 500 800"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M500 100 C 380 150, 350 250, 250 300 S 150 420, 80 500" stroke="currentColor" strokeWidth="2" />
          <path d="M250 300 L 320 340" stroke="currentColor" strokeWidth="1.5" />
          <path d="M180 380 L 250 400" stroke="currentColor" strokeWidth="1.5" />
          <path d="M120 460 L 190 470" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 container-custom py-20">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold font-body">
                Agri-Tech Innovation Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Smart Solutions for a{' '}
                <span className="text-accent">Sustainable</span> Agricultural
                Future
              </h1>
              <p className="text-lg text-white/80 max-w-lg font-body">
                Empowering farmers, youth, and communities through innovative
                agricultural technology and capacity building in Rwanda.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/solutions">
                  <Button variant="primary" size="lg">
                    Explore Our Solutions
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" icon={false}>
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Right Content — Live sensor readouts, styled like real telemetry */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-card rounded-2xl p-6 text-center backdrop-blur-glass">
                  <Droplets className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-mono font-semibold text-white">45%</div>
                  <div className="text-xs uppercase tracking-wide text-white/60 mt-1">Soil Moisture</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center backdrop-blur-glass transform sm:translate-y-4">
                  <Thermometer className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-mono font-semibold text-white">26°C</div>
                  <div className="text-xs uppercase tracking-wide text-white/60 mt-1">Temperature</div>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center backdrop-blur-glass transform sm:translate-y-8">
                  <Wind className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-mono font-semibold text-white">68%</div>
                  <div className="text-xs uppercase tracking-wide text-white/60 mt-1">Humidity</div>
                </div>
              </div>

              <div className="mt-6 glass-card rounded-2xl p-6 backdrop-blur-glass">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {IMPACT_STATS.map((stat, i) => (
                    <StatBlock key={i} number={stat.number} label={stat.label} dark />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — Icon Grid */}
      <section ref={featuresRef} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-body">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Driving Agricultural Innovation
            </h2>
            <p className="text-text-body text-lg font-body">
              We provide comprehensive solutions to transform agriculture
              through technology, training, and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WHAT_WE_DO_ITEMS.map((item, index) => (
              <Card key={index} hover className="p-6 md:p-8 text-center">
                <IconBadge icon={item.icon} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text-body text-sm font-body">{item.description}</p>
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center text-accent font-medium text-sm mt-4 hover:text-accent-dark transition-colors font-body group"
                >
                  Read More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section ref={aboutRef} className="section-padding">
        <div className="container-custom">
          <SplitSection
            image="https://i.ibb.co/LzTQN74C/Gemini-Generated-Image-3clvoz3clvoz3clv.png"
            imageAlt="CBG Agri Innovation Hub"
            imagePosition="right"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-body">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Who We Are</h2>
            <p className="text-text-body mb-6 font-body">
              CBG Agri Innovation Hub is a leading agricultural technology and
              innovation center based at College Baptiste GACUBA (CBG) in
              Gikondo, Kigali, Rwanda. We are committed to transforming
              agriculture through innovation, technology, and capacity
              building.
            </p>
            <CheckmarkList
              items={[
                'Innovation Driven',
                'Youth Empowerment',
                'Practical Solutions',
                'Sustainable Impact',
              ]}
              columns={2}
              className="mb-6"
            />
            <Link to="/about">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </SplitSection>
        </div>
      </section>

      {/* IMARA Platform */}
      <section ref={imaraRef} className="section-padding bg-primary-dark">
        <div className="container-custom">
          <Card variant="dark" className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <svg
              className="absolute -right-10 -bottom-10 w-64 h-64 text-accent/10 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M10 190 C 40 140, 90 140, 100 90 S 150 40, 190 10" stroke="currentColor" strokeWidth="2" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider font-body">
                  Flagship Solution
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  IMARA Digital Agriculture Platform
                </h2>
                <p className="text-white/80 mb-6 font-body">
                  A comprehensive digital platform empowering farmers with
                  real-time data, AI-powered insights, and market linkages.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Smart Farm Monitoring',
                    'Crop & Soil Management',
                    'Weather & Environmental Monitoring',
                    'AI-Powered Advisory Services',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-white/90 font-body">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/solutions">
                  <Button variant="primary">Discover IMARA</Button>
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-auto">
                  <img
                    src="/images/imara-mockup.png"
                    alt="IMARA Platform Mobile App"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Strip */}
      <section ref={statsRef} className="py-12 bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <StatBlock key={index} number={stat.number} label={stat.label} />
            ))}
            <StatBlock number="200+" label="Jobs Created" />
            <StatBlock number="15+" label="Ongoing Projects" />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Agriculture?"
        subtitle="Join us in building a sustainable agricultural future for Rwanda and beyond."
        buttonText="Get In Touch"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home
