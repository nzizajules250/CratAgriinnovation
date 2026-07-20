import { CheckCircle } from 'lucide-react'

function CheckmarkList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <span className="text-text-body">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default CheckmarkList