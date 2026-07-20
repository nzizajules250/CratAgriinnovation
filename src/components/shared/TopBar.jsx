import { Phone, Mail, MapPin } from 'lucide-react'
import { SOCIAL_ICONS, CONTACT_INFO } from '../../utils/constants'

function TopBar() {
  return (
    <div className="hidden md:block bg-primary-dark/95 text-white/80 text-sm border-b border-white/5">
      <div className="container-custom">
        <div className="flex justify-between items-center h-10">
          {/* Left - Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="flex items-center space-x-2 text-white/60">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{CONTACT_INFO.address}</span>
            </span>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center space-x-3">
            {SOCIAL_ICONS.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-accent transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar