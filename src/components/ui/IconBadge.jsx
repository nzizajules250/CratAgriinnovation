function IconBadge({ icon: Icon, className = '', size = 'lg' }) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  }

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  }

  return (
    <div className={`${sizes[size]} rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 ${className}`}>
      <Icon className={`${iconSizes[size]} text-accent`} />
    </div>
  )
}

export default IconBadge