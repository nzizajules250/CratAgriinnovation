import Button from './Button'

function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink = '#',
  className = '',
}) {
  return (
    <div className={`bg-primary-dark ${className}`}>
      <div className="container-custom py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <Button variant="primary" as="a" href={buttonLink}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default CTASection