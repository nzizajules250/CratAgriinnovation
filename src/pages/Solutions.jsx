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
  Users,
  CheckCircle2,
  Sprout,
  Wheat,
  Tractor,
  Leaf
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import CTASection from '../components/ui/CTASection'
import { SMART_FARMING_TECH, FOCUS_AREAS } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Rotating icon set for focus areas, in place of mixed-rendering emoji.
const FOCUS_AREA_ICONS = [Sprout, Wheat, Tractor, Leaf, Droplets]

// Small tech chips that orbit the IMARA mockup, hinting at what the
// platform connects under the hood without adding more copy.
const ORBIT_CHIPS = [
  { icon: Wifi, label: 'Connected', position: 'top-4 -left-6' },
  { icon: Cloud, label: 'Cloud-synced', position: 'top-1/3 -right-8' },
  { icon: Database, label: 'Data-driven', position: 'bottom-10 -left-8' },
  { icon: Shield, label: 'Secure', position: 'bottom-0 right-2' },
]

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
      <section ref={ref1} className="section-padding bg-primary-dark relative overflow-hidden">
        {/* ambient glow, kept behind everything */}
        <div className="pointer-events-none absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <Card variant="dark" className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Flagship Solution</span>
                  <span className="h-px w-8 bg-accent/50" />
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide">{imaraFeatures.length} Core Modules</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                  IMARA
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  Digital Agriculture Platform for Smart Farming
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-9">
                  {imaraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Discover IMARA
                </Button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-72">
                  {/* soft ring behind the device */}
                  <div className="absolute inset-0 -m-6 rounded-[2.5rem] border border-white/10" />
                  <div className="absolute inset-0 -m-3 rounded-[2rem] bg-white/5 blur-sm" />

                  <div className="relative rounded-[1.75rem] border border-white/15 bg-white/5 p-2 shadow-2xl">
                    <img
                      src="/images/imara-mockup.png"
                      alt="IMARA Platform"
                      className="w-full h-auto rounded-[1.25rem]"
                    />
                  </div>

                  {/* orbiting capability chips */}
                  {ORBIT_CHIPS.map((chip, index) => (
                    <div
                      key={index}
                      className={`hidden md:flex absolute ${chip.position} items-center gap-1.5 bg-white/95 backdrop-blur rounded-full pl-1.5 pr-3 py-1.5 shadow-lg`}
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <chip.icon className="w-3.5 h-3.5 text-primary-dark" />
                      </span>
                      <span className="text-xs font-semibold text-primary-dark whitespace-nowrap">{chip.label}</span>
                    </div>
                  ))}
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
              <Card
                key={index}
                hover
                className="p-6 group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <IconBadge icon={tech.icon} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{tech.description}</p>
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
            {FOCUS_AREAS.map((area, index) => {
              const AreaIcon = FOCUS_AREA_ICONS[index % FOCUS_AREA_ICONS.length]
              return (
                <div
                  key={index}
                  className="bg-bg-light rounded-xl p-5 text-center border border-transparent hover:border-accent/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <AreaIcon className="w-5 h-5 text-primary-dark" />
                  </div>
                  <span className="text-sm font-medium text-text-heading leading-snug">{area}</span>
                </div>
              )
            })}
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