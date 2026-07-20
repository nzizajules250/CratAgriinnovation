import { Link } from 'react-router-dom'
import { ArrowRight, Building, GraduationCap, BookOpen, Handshake, Users, Briefcase, TrendingUp } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import CTASection from '../components/ui/CTASection'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Partners() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  const partnerCategories = [
    { icon: Building, label: 'Government Institutions' },
    { icon: GraduationCap, label: 'Universities & TVET Schools' },
    { icon: BookOpen, label: 'Research Institutions' },
    { icon: Handshake, label: 'Development Partners' },
    { icon: Users, label: 'NGOs' },
    { icon: Briefcase, label: 'Private Sector Companies' },
    { icon: Users, label: 'Farmer Cooperatives' },
    { icon: TrendingUp, label: 'Investors & Innovation Ecosystems' },
  ]

  const partnerLogos = [
    { name: 'Rwanda Agriculture Board', logo: 'https://www.rab.gov.rw/fileadmin/user_upload/RAB/Icon_logos/RAB_Logo2.png' },
    { name: 'University of Rwanda', logo: '/images/logo-ur.png' },
    { name: 'IFAD', logo: '/images/logo-ifad.png' },
    { name: 'Mastercard Foundation', logo: '/images/logo-mastercard.png' },
    { name: 'World Food Programme', logo: '/images/logo-wfp.png' },
    { name: 'Kigali Innovation City', logo: '/images/logo-kic.png' },
    { name: 'Rwanda Development Board', logo: '/images/logo-rdb.png' },
    { name: 'Catholic Relief Services', logo: '/images/logo-crs.png' },
  ]

  return (
    <div>
      <PageHeader 
        title="Our Partners" 
        breadcrumb="Partners"
        backgroundImage="https://i.ibb.co/b5SXKVk2/Chat-GPT-Image-Jul-20-2026-09-47-19-AM.png"
      />

      {/* Partner Categories */}
      <section ref={ref1} className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Partner Ecosystem
            </h2>
            <p className="text-text-body text-lg mt-4">
              We collaborate with a diverse network of partners to drive agricultural innovation and impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => (
              <Card key={index} hover className="p-6 text-center">
                <IconBadge icon={category.icon} className="mx-auto mb-3" size="md" />
                <span className="text-sm font-medium">{category.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section ref={ref2} className="py-16 bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Network</span>
            <h2 className="text-3xl font-bold mt-2">Trusted Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0"
              >
                <div className="w-32 h-16 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary-dark font-bold text-xl">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-text-body">{partner.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section ref={ref3} className="py-20 bg-primary-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Us in Transforming Agriculture
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Partner with CBG Agri Innovation Hub to drive agricultural innovation, create sustainable 
              impact, and build a better future for farming communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Become a Partner
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={false}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners