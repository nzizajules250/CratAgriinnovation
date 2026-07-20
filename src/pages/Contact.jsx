import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { CONTACT_INFO, SOCIAL_ICONS } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useScrollReveal()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        breadcrumb="Contact"
        backgroundImage="/images/contact-header.jpg"
      />

      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              {isSubmitted && (
                <div className="bg-accent/10 border border-accent text-accent px-4 py-3 rounded-lg mb-6">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label htmlFor="subject" className="block text-sm font-medium text-text-heading mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <Card className="p-6 md:p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-text-heading">Phone</h4>
                    <p className="text-text-body">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-text-heading">Email</h4>
                    <p className="text-text-body">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-text-heading">Address</h4>
                    <p className="text-text-body">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-sm text-text-heading mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    {SOCIAL_ICONS.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                          aria-label="Social media"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <div className="aspect-w-16 aspect-h-9 h-80 bg-bg-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.475610876574!2d30.074083914754!3d-1.970219498630069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6275c7e68a1%3A0x5a8dfba4a0b9c6e!2sGikondo%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1644323456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CBG Agri Innovation Hub Location"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner With Us"
        subtitle="Join our mission to transform agriculture through innovation and collaboration."
        buttonText="Become a Partner"
        buttonLink="/partners"
      />
    </div>
  )
}

export default Contact