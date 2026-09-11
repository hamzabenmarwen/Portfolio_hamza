import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [time, setTime] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  // Live time in Tunisia timezone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Tunis'
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Desktop navigation links
  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Work', href: '/work', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Contact', href: '#contact', isRoute: false },
  ]

  const scrollToSection = (href) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-white/10 py-4'
            : 'bg-transparent border-white/5 py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Brand & Availability */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="text-lg md:text-xl font-light text-white tracking-[-0.02em] hover:text-[#c9a227] transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hamza<span className="text-[#c9a227]">.</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-[#aaa] tracking-[0.12em] uppercase font-mono">
                Available for work
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 font-medium ${
                    location.pathname === link.href
                      ? 'text-[#c9a227]'
                      : 'text-[#888] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#888] hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Local Time & Menu Button */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center gap-2.5">
              <span className="text-[#666] text-[10px] tracking-[0.15em] uppercase font-mono">
                Local Time
              </span>
              <span className="text-white text-xs font-mono bg-white/[0.05] px-2.5 py-1 rounded border border-white/10">
                {time || '05:45 PM'}
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#888] hover:text-white transition-colors py-1 px-2.5 rounded border border-white/5 hover:border-white/20"
              aria-label="Toggle menu"
            >
              <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
              <div className="w-5 h-3.5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-px bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-px bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-px bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile/Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center"
          >
            <div className="container-custom">
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="overflow-hidden">
                    {link.isRoute ? (
                      <Link to={link.href} onClick={() => setIsMenuOpen(false)}>
                        <motion.span
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          exit={{ y: '100%' }}
                          transition={{
                            delay: index * 0.05,
                            duration: 0.6,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          className="block text-5xl md:text-7xl font-light text-white hover:text-[#c9a227] transition-colors tracking-[-0.02em]"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.6,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="block text-5xl md:text-7xl font-light text-white hover:text-[#c9a227] transition-colors tracking-[-0.02em]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-0 right-0"
            >
              <div className="container-custom flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="text-[#555] text-sm space-y-1">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#444] mb-2">
                    Get in touch
                  </p>
                  <p className="hover:text-white transition-colors">
                    hamzabenmarwen@gmail.com
                  </p>
                </div>
                <div className="flex gap-6 text-sm">
                  <a
                    href="https://github.com/hamzabenmarwen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555] hover:text-[#c9a227] transition-colors"
                  >
                    Github
                  </a>
                  <a
                    href="https://linkedin.com/in/hamzabenmarwen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555] hover:text-[#c9a227] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
