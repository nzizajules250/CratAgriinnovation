import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import TopBar from '../shared/TopBar'
import { NAV_LINKS } from '../../utils/constants'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50">
      <TopBar />

      <nav
        className={`bg-white transition-shadow duration-300 border-b ${
          scrolled ? 'shadow-md border-transparent' : 'shadow-none border-gray-100'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            {/* Logo — image-based */}
            <Link to="/" className="flex items-center space-x-2.5 shrink-0" onClick={closeMenu}>
              <img
                src="https://i.ibb.co/HT6qqSjz/CBG-AGRI-1.png"
                alt="CBG Agri Innovation Hub"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation — boxed links, solid accent fill on active */}
            <div className="hidden lg:flex items-center gap-1.5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 font-body border ${
                      isActive
                        ? 'bg-accent border-accent text-primary-dark'
                        : 'border-transparent text-text-body hover:border-accent/40 hover:text-primary-dark'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="hidden md:block text-sm text-text-body hover:text-primary-dark transition-colors font-body"
              >
                Log In
              </Link>
              <Link to="/contact" className="hidden lg:block">
                <Button variant="primary" size="sm">
                  Get In Touch
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-bg-light transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-primary-dark" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="fixed inset-0 bg-primary-dark/50 backdrop-blur-sm z-[60] mobile-backdrop lg:hidden"
        data-open={isOpen}
        onClick={closeMenu}
      />
      <div
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] mobile-drawer lg:hidden flex flex-col"
        data-open={isOpen}
      >
        <div className="flex justify-between items-center h-16 px-5 border-b border-gray-100">
          <span className="font-display font-bold text-primary-dark">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-bg-light transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col space-y-1 font-body">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent-dark'
                    : 'text-text-body hover:bg-bg-light hover:text-primary-dark'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && <ArrowRight className="w-4 h-4" />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="p-5 border-t border-gray-100 space-y-3">
          <Link to="/contact" onClick={closeMenu}>
            <Button variant="primary" className="w-full justify-center">
              Get In Touch
            </Button>
          </Link>
          <div className="flex items-center justify-center gap-4 font-body">
            <Link to="/login" onClick={closeMenu} className="text-sm text-text-body hover:text-primary-dark">
              Log In
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/register" onClick={closeMenu} className="text-sm text-accent-dark font-semibold hover:text-primary-dark">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar