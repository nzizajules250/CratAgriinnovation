function StatBlock({ number, label, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-primary-dark">
        {number}
      </div>
      <div className="text-sm text-text-body mt-1">{label}</div>
    </div>
  )
}

export default StatBlock