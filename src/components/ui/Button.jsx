import { ArrowRight } from 'lucide-react'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon = true,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    secondary: 'bg-white/10 text-white border border-white/30 hover:bg-white/20',
    ghost: 'bg-transparent text-text-body border border-gray-300 hover:bg-bg-light',
    dark: 'bg-primary-dark text-white hover:bg-primary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && variant === 'primary' && (
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  )
}

export default Button