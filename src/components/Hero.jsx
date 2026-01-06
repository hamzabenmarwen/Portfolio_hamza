import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const sectionRef = useRef(null)
  const [time, setTime] = useState('')
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Africa/Tunis'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Text animation variants
  const lineVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        duration: 1.2,
        delay: 0.8 + i * 0.15,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0d0d0d]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full container-custom"
      >
        {/* Top Row */}
        <motion.div
          custom={0}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-start mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
            <span className="text-[#888] text-xs tracking-[0.15em] uppercase">
              Available for work
            </span>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[#555] text-xs tracking-[0.15em] uppercase mb-1">Local Time</p>
            <p className="text-white text-sm font-mono">{time}</p>
          </div>
        </motion.div>

        {/* Main Title */}
        <div className="space-y-4">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hamza
            </motion.h1>
          </div>
          
          {/* Line 2 */}
          <div className="overflow-hidden flex items-baseline gap-8">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ben
            </motion.h1>
            <motion.span
              custom={2}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:inline-block text-[#c9a227] text-lg md:text-xl italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              — Full Stack Developer
            </motion.span>
          </div>
          
          {/* Line 3 */}
          <div className="overflow-hidden">
            <motion.h1
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light text-[#888] leading-[0.9] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Marouen
            </motion.h1>
          </div>
        </div>

        {/* Bottom Row */}
        <motion.div
          custom={2.5}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <p className="max-w-md text-[#888] text-base leading-relaxed">
            Building thoughtful digital experiences with clean code 
            and modern technologies. Based in Tunisia.
          </p>
          
          <a
            href="#projects"
            className="group flex items-center gap-4"
          >
            <span className="text-[#888] text-xs tracking-[0.15em] uppercase group-hover:text-[#c9a227] transition-colors duration-500">
              View Work
            </span>
            <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#c9a227] group-hover:bg-[#c9a227]/10 transition-all duration-500">
              <svg 
                className="w-4 h-4 text-[#888] group-hover:text-[#c9a227] rotate-90 transition-all duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a227] to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <a
          href="https://github.com/hamzabenmarwen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#c9a227] transition-colors duration-500 text-[10px] tracking-[0.2em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Github
        </a>
        <div className="w-px h-8 bg-[#333]" />
        <a
          href="https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#c9a227] transition-colors duration-500 text-[10px] tracking-[0.2em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <a
          href="mailto:hamzabenmarwen@gmail.com"
          className="text-[#555] hover:text-[#c9a227] transition-colors duration-500 text-[10px] tracking-[0.2em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          hamzabenmarwen@gmail.com
        </a>
      </motion.div>
    </section>
  )
}

export default Hero


