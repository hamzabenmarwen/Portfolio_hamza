import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="container-custom py-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="text-lg font-light text-white tracking-[-0.02em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hamza<span className="text-[#c9a227]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-[11px] uppercase tracking-[0.15em] text-[#888] hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#888] hover:text-white transition-colors"
          >
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Menu */}
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
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Work', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                      className="block text-5xl md:text-7xl font-light text-white hover:text-[#c9a227] transition-colors tracking-[-0.02em]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {link.name}
                    </motion.a>
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
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#333] mb-2">Get in touch</p>
                  <p className="hover:text-white transition-colors">hamzabenmarwen@gmail.com</p>
                </div>
                <div className="flex gap-6 text-sm">
                  <a href="https://github.com/hamzabenmarwen" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#c9a227] transition-colors">Github</a>
                  <a href="https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#c9a227] transition-colors">LinkedIn</a>
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

