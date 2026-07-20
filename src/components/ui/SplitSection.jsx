function SplitSection({
  image,
  imageAlt = '',
  imagePosition = 'right',
  children,
  className = '',
  imageClassName = '',
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${className}`}>
      {imagePosition === 'left' && (
        <div className={`order-1 lg:order-1 ${imageClassName}`}>
          <img src={image} alt={imageAlt} className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
      )}
      
      <div className={`order-2 ${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
        {children}
      </div>
      
      {imagePosition === 'right' && (
        <div className={`order-1 lg:order-2 ${imageClassName}`}>
          <img src={image} alt={imageAlt} className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
      )}
    </div>
  )
}

export default SplitSection