import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react'
import Button from '../ui/Button'
import { SOCIAL_ICONS, CONTACT_INFO, NAV_LINKS } from '../../utils/constants'

/**
 * Footer — CRAT Agri Innovation Hub
 *
 * Design notes:
 * - Palette: brand tokens only —
 *     --color-primary-dark #173628  (footer bg)
 *     --color-primary      #1F4D3A  (secondary dark-green surfaces / divider bg)
 *     --color-accent        #8CC63F (CTAs, icons, links, active states)
 *     --color-accent-dark   #6FA82E (hover state for accent elements)
 *     --color-white         #FFFFFF (text on dark backgrounds)
 * - Type: serif for the wordmark & section labels (almanac / ledger feel),
 *   monospace for the contact block, so it reads like entries in a field log.
 * - Signature element: the "furrow lines" SVG divider at the top — rows of a
 *   plowed field rendered as a page divider instead of a flat border.
 * - For full fidelity, add "Fraunces" (display serif) and "IBM Plex Mono" to
 *   your index.html <head> or font loader. Falls back gracefully without them.
 */

function FurrowDivider() {
  return (
    <svg
      viewBox="0 0 1200 64"
      className="w-full h-10 sm:h-14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${12 + i * 11} C 200 ${2 + i * 11}, 400 ${22 + i * 11}, 600 ${12 + i * 11} S 1000 ${2 + i * 11}, 1200 ${12 + i * 11}`}
          fill="none"
          stroke="#8CC63F"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity={0.55 - i * 0.09}
        />
      ))}
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-[#173628] text-white">
      {/* Signature: plowed-field divider */}
      <div className="bg-[#1F4D3A]">
        <FurrowDivider />
      </div>

      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10 py-14 lg:py-16">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-5 group w-fit">
              {/* Replace src with your actual logo path, e.g. /logo.png in
                  your public/ folder, or an imported asset. The circular
                  bg-white plate keeps a light logo legible on the dark
                  footer — drop the wrapper if your logo already reads well
                  on #173628. */}
              {/* <div className="w-11 h-11  bg-white flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300"> */}
                <img
                  src="https://i.ibb.co/HT6qqSjz/CBG-AGRI-1.png"
                  alt="CRAT Agri Innovation Hub logo"
                  className="w-50 h-24 object-contain"
                />
              {/* </div> */}
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Cultivating Rwanda's agricultural future through technology,
              research and hands-on capacity building — from the field to the
              lab and back.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_ICONS.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#8CC63F] hover:border-[#8CC63F] hover:text-[#173628] transition-colors duration-200"
                    aria-label="Social media"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[#8CC63F] mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/75 hover:text-[#8CC63F] transition-colors text-sm flex items-center gap-1.5 group w-fit"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8CC63F] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — logged like field-notes */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[#8CC63F] mb-5">
              Reach Us
            </h3>
            <ul className="space-y-4 font-mono text-[13px]">
              <li className="flex items-start space-x-3 text-white/75">
                <Phone className="w-4 h-4 text-[#8CC63F] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-white/75">
                <Mail className="w-4 h-4 text-[#8CC63F] shrink-0 mt-0.5" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start space-x-3 text-white/75">
                <MapPin className="w-4 h-4 text-[#8CC63F] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-[#8CC63F] mb-5">
              Field Notes
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Sow your email, we'll send the harvest — programs, events and
              research, a few times a month.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[#1F4D3A] border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#8CC63F] transition-colors"
                required
              />
              <Button
                variant="primary"
                className="w-full !bg-[#8CC63F] !text-[#173628] hover:!bg-[#6FA82E] font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} CRAT Agri Innovation Hub — growing
            Rwanda's agriculture, together.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-[#8CC63F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8CC63F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer