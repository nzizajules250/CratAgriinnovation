import { Link } from 'react-router-dom'
import { Compass, Target, CheckCircle, ArrowRight } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import SplitSection from '../components/ui/SplitSection'
import IconBadge from '../components/ui/IconBadge'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import Card from '../components/ui/Card'
import CheckmarkList from '../components/shared/CheckmarkList'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()

  const whyChooseUsItems = [
    'Innovation-driven approach to agricultural challenges',
    'Youth-focused programs for sustainable employment',
    'Practical, hands-on training and solutions',
    'Strong partnerships with government and private sector',
    'Technology integration for modern agriculture',
    'Commitment to food security and climate resilience',
    'Data-driven decision making and impact measurement'
  ]

  return (
    <div>
      <PageHeader 
        title="About Us" 
        breadcrumb="About Us"
        backgroundImage= "https://i.ibb.co/BVBb3M0z/hero-bg.png"
      />

      {/* Intro Section */}
      <section ref={ref1} className="section-padding">
        <div className="container-custom">
          <SplitSection 
            image="https://i.ibb.co/rRw1F661/CBG-22-jpg.jpg"
            imageAlt="CBG Campus"
            imagePosition="right"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Empowering Agriculture Through Innovation
            </h2>
            <p className="text-text-body mb-4">
              CBG Agri Innovation Hub is a premier agricultural technology and innovation center 
              based at College Baptiste GACUBA (CBG) in Gisenyi, Rubavu, Rwanda. We are dedicated 
              to transforming agriculture by bridging the gap between technology and farming communities.
            </p>
            <p className="text-text-body mb-4">
              Our hub serves as a catalyst for agricultural innovation, providing cutting-edge solutions, 
              training, and support to farmers, youth, students, agripreneurs, and extension officers 
              across Rwanda and beyond.
            </p>
            <p className="text-text-body">
              Through our work, we aim to create a sustainable agricultural ecosystem that drives 
              economic growth, food security, and climate resilience.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Belief Statement */}
      <section ref={ref2} className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-accent opacity-30 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark leading-tight">
              We believe that technology and innovation are the keys to unlocking agriculture's 
              potential to feed the world, create jobs, and build resilient communities.
            </blockquote>
            <div className="mt-6 text-text-body">— CBG Agri Innovation Hub Team</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref3} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="p-8 md:p-10 border-2 border-accent/10">
              <IconBadge icon={Compass} className="mb-4" />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-text-body">
                To be the leading agricultural innovation hub in East Africa, driving sustainable 
                agricultural transformation through technology, research, and inclusive capacity building.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 md:p-10 border-2 border-accent/10">
              <IconBadge icon={Target} className="mb-4" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-text-body">
                To empower farmers, youth, and communities with innovative agricultural technologies, 
                knowledge, and skills that enhance productivity, ensure food security, and create 
                sustainable livelihoods.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={ref4} className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Your Partner in Agricultural Innovation
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <CheckmarkList 
              items={whyChooseUsItems}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Partner With Us"
        subtitle="Join us in transforming agriculture and building a sustainable future."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  )
}

export default About