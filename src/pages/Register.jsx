import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, UserPlus } from 'lucide-react'
import Button from '../components/ui/Button'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'farmer'
  })
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    if (!agreeTerms) {
      alert('Please agree to the Terms & Conditions')
      return
    }
    // Handle registration logic here
    console.log('Registration attempt:', formData)
  }

  const roles = [
    { value: 'farmer', label: 'Farmer' },
    { value: 'student', label: 'Student' },
    { value: 'partner', label: 'Partner' },
    { value: 'agripreneur', label: 'Agripreneur' },
    { value: 'extension', label: 'Extension Officer' }
  ]

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>
      <p className="text-text-body text-center mb-8">Join the CBG Agri Innovation Hub community</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-heading mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-heading mb-1">
            I am a...
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors bg-white"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-heading mb-1">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors pr-12"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-body/60 hover:text-text-body transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-heading mb-1">
            Confirm Password *
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors pr-12"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-body/60 hover:text-text-body transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
            required
          />
          <label htmlFor="terms" className="text-sm text-text-body">
            I agree to the{' '}
            <Link to="#" className="text-accent hover:text-accent-dark transition-colors">
              Terms & Conditions
            </Link>
            {' '}and{' '}
            <Link to="#" className="text-accent hover:text-accent-dark transition-colors">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          <UserPlus className="w-4 h-4 mr-2" />
          Register
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-text-body text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-accent font-medium hover:text-accent-dark transition-colors">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register