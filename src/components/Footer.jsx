import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'GitHub', href: 'https://github.com/hamzabenmarwen' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'hamzabenmarwen@gmail.com', href: 'mailto:hamzabenmarwen@gmail.com' },
        { name: '+216 53 180 702', href: 'tel:+21653180702' },
        { name: 'Zaghouan, Tunisia', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative bg-[var(--color-darker)] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              className="text-3xl font-display font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {'<HBM />'}
            </motion.a>
            <p className="text-gray-400 mb-6">
              Full Stack Developer passionate about creating exceptional digital
              experiences with MERN, Laravel & Flutter.
            </p>
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-display font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors animated-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Hamza Ben Marouen. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed & Built with{' '}
              <span className="text-red-500">❤️</span> using React & Three.js
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
    </footer>
  )
}

export default Footer
