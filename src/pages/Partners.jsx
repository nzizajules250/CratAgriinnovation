import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building, GraduationCap, BookOpen, Handshake, Users, Briefcase, TrendingUp, Sprout } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
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
    { name: 'LEXAMBURG', logo: 'https://i.ibb.co/PscMqV23/LUXEMBOURG-AID-DEVELOPMENT-LOGO-RGB-NO-BORDER.png' },
    { name: 'ILO', logo: 'https://i.ibb.co/20dm1hcP/W-3-removebg-preview.png' },
    { name: 'ICT CHAMBER', logo: 'https://i.ibb.co/3mY7T0FJ/W-2-removebg-preview.png' },
    { name: 'CRAT', logo: 'https://i.ibb.co/nstBtmMk/LOGO-CTRAT-OG-1.png' },
    { name: 'CBG', logo: 'https://i.ibb.co/pvknzj9N/CBG.png' },
    { name: 'HBLAB', logo: 'https://i.ibb.co/DHyskcyF/logo-Cg-Qv-Tw-G1.png' },
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
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Partner Ecosystem
            </h2>
            <p className="text-text-body text-lg mt-4">
              We collaborate with a diverse network of partners to drive agricultural innovation and impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {partnerCategories.map((category, index) => (
              <Card
                key={index}
                hover
                className="p-6 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <IconBadge icon={category.icon} className="mx-auto mb-4" size="md" />
                <span className="text-sm font-medium leading-snug block">{category.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section
        ref={ref2}
        className="py-20 bg-bg-light relative overflow-hidden"
      >
        {/* subtle agricultural texture: scattered leaf marks */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <Sprout className="absolute -left-6 top-10 w-32 h-32 text-primary-dark rotate-12" />
          <Sprout className="absolute right-10 bottom-0 w-40 h-40 text-primary-dark -rotate-12" />
          <Sprout className="absolute left-1/2 top-1/2 w-24 h-24 text-primary-dark rotate-45" />
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Network</span>
            <h2 className="text-3xl font-bold mt-2">Trusted Partners</h2>
          </div>
        </div>

        <PartnerMarquee partners={partnerLogos} />
      </section>

      {/* Join Us */}
      <section ref={ref3} className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/40" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white/30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Involved</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Join Us in Transforming Agriculture
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Partner with CBG Agri Innovation Hub to drive agricultural innovation, create sustainable
              impact, and build a better future for farming communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={ArrowRight}>
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

/**
 * A single partner tile: logo + name, used inside the marquee.
 * Falls back to an initials badge if the logo file is missing or
 * fails to load, so a broken path never shows as an empty box.
 */
function PartnerTile({ partner }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="marquee-tile flex items-center gap-4 shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm px-7 py-5 mx-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/30">
      <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-bg-light/70 overflow-hidden">
        {!failed ? (
          <img
            src={partner.logo}
            alt={partner.name}
            title={partner.name}
            className="max-h-15 max-w-15 object-contain transition-all duration-300 marquee-tile-logo"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-primary-dark font-bold text-lg">
            {partner.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap tracking-tight">
        {partner.name}
      </span>
    </div>
  )
}

/**
 * Single-direction, infinitely-looping marquee of partner tiles.
 * The track is duplicated once and slid exactly -50%, so the loop
 * point is invisible. Pauses on hover/focus, and freezes entirely
 * for users who've asked for reduced motion.
 */
function PartnerMarquee({ partners }) {
  // Duration scales with item count so the perceived speed per-tile stays constant.
  const duration = Math.max(partners.length * 4.5, 24)

  return (
    <div className="relative w-full overflow-hidden group/marquee">
      {/* edge fades so tiles dissolve into the section background instead of clipping */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-bg-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-bg-light to-transparent" />

      <div
        className="marquee-track flex w-max py-2"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <PartnerTile key={index} partner={partner} />
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .group\\/marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-tile:hover .marquee-tile-logo {
          filter: grayscale(0);
          opacity: 1;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Partners