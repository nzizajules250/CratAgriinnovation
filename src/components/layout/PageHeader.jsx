import { Link } from 'react-router-dom'
import { ChevronRight, Home as HomeIcon } from 'lucide-react'

function PageHeader({
  title,
  subtitle,
  breadcrumb,
  backgroundImage = 'https://i.ibb.co/BVBb3M0z/hero-bg.png',
}) {
  return (
    <div className="relative bg-primary-dark overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/70" />

      {/* Signature vein-line motif, echoes hero + CTA banner */}
      <svg
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 h-72 text-accent/10 pointer-events-none hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M10 190 C 40 140, 90 140, 100 90 S 150 40, 190 10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M100 90 L 130 70" stroke="currentColor" strokeWidth="1.5" />
        <path d="M65 120 L 95 105" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Content */}
      {/* Content */}
      <div className="relative z-10 container-custom min-h-[60vh] flex flex-col justify-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center text-sm text-white/60 mb-4 font-body">
            <Link to="/" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/30" />
            <span className="text-accent font-medium">{breadcrumb}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/70 text-base md:text-lg mt-3 max-w-xl font-body">
            {subtitle}
          </p>
        )}
      </div>

      {/* Soft fade at the base into the page content below */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  )
}

export default PageHeader