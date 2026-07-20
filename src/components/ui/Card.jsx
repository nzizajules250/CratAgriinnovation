function Card({ children, className = '', variant = 'default', hover = false }) {
  const variants = {
    default: 'bg-white',
    dark: 'bg-primary-dark text-white',
    light: 'bg-bg-light',
  }

  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''

  return (
    <div className={`rounded-2xl shadow-sm ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

export default Card