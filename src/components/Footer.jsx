import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Tunis'
      })
      setLocalTime(`${timeString} UTC+2`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const socials = [
    { name: 'Email', href: 'mailto:hamzabenmarwen@gmail.com' },
    { name: 'Linkdin', href: 'https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/' },
    { name: 'Whatsapp', href: 'https://wa.me/21612345678' },
    { name: 'Github', href: 'https://github.com/hamzabenmarwen' },
  ]

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-8 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="container-custom">
        <div className="flex flex-wrap justify-between items-start gap-x-16 gap-y-8 mb-32">
          {/* Links Column */}
          <div>
            <h4 className="text-[#555] text-xs tracking-widest uppercase mb-6">
              LINKS
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#888] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-[#555] text-xs tracking-widest uppercase mb-6">
              SOCIALS
            </h4>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#888] transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Time Column */}
          <div>
            <h4 className="text-[#555] text-xs tracking-widest uppercase mb-6">
              LOCAL TIME
            </h4>
            <p className="text-white text-sm font-medium">{localTime}</p>
          </div>

          {/* Version Column */}
          <div>
            <h4 className="text-[#555] text-xs tracking-widest uppercase mb-6">
              VERSION
            </h4>
            <p className="text-white text-sm">{currentYear} © Edition</p>
          </div>

          {/* Contact Buttons - Right Side */}
          <div className="flex flex-col sm:flex-row gap-3 ml-auto">
            <a
              href="tel:+21612345678"
              className="px-6 py-3 rounded-full bg-[#1a1a1a] text-white text-sm hover:bg-[#222] transition-colors whitespace-nowrap"
            >
              +21612345678
            </a>
            <a
              href="mailto:hamzabenmarwen@gmail.com"
              className="px-6 py-3 rounded-full border border-[#333] text-white text-sm hover:border-[#555] transition-colors whitespace-nowrap"
            >
              hamzabenmarwen@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Large Name at Bottom */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative"
        >
          <h2 
            className="text-[20vw] md:text-[22vw] font-bold text-white leading-[0.85] tracking-[-0.02em] select-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            HAMZA
          </h2>
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-black border border-[#333] flex items-center justify-center hover:border-[#555] transition-colors group"
      >
        <svg 
          className="w-5 h-5 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
    </footer>
  )
}

export default Footer

