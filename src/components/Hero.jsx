import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96])

  // Text animation variants
  const lineVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        duration: 1.1,
        delay: 0.2 + i * 0.12,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 25 },
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
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 bg-black overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#080808] to-[#121212]" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full container-custom my-auto flex flex-col justify-center"
      >
        {/* Main Title Stack */}
        <div className="space-y-1 md:space-y-3">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[9.5vw] lg:text-[8vw] font-light text-white leading-[0.88] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hamza
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden flex items-baseline gap-4 md:gap-8 flex-wrap">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[9.5vw] lg:text-[8vw] font-light text-white leading-[0.88] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ben
            </motion.h1>
            <motion.span
              custom={0.6}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-[#c9a227] text-base md:text-xl lg:text-2xl italic font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              — Full-Stack & AI Developer
            </motion.span>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden">
            <motion.h1
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[12vw] md:text-[9.5vw] lg:text-[8vw] font-light text-[#777] leading-[0.88] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Marouen
            </motion.h1>
          </div>
        </div>

        {/* Bottom Hero Details Row */}
        <motion.div
          custom={0.8}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 md:mt-16 lg:mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-white/10"
        >
          <p className="max-w-xl text-[#999] text-base md:text-lg leading-relaxed font-light">
            Full-Stack & AI developer with 3 professional internships.
            Building intelligent web applications with microservices
            and modern AI architectures. Based in Tunisia.
          </p>

          <a
            href="#projects"
            className="group flex items-center gap-4 py-2"
          >
            <span className="text-[#aaa] text-xs md:text-sm tracking-[0.18em] uppercase group-hover:text-[#c9a227] transition-colors duration-300 font-medium">
              View Work
            </span>
            <div className="w-11 h-11 md:w-13 md:h-13 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c9a227] group-hover:bg-[#c9a227]/10 transition-all duration-300">
              <svg
                className="w-4 h-4 text-[#aaa] group-hover:text-[#c9a227] rotate-90 transition-all duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Side Vertical Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20"
      >
        <a
          href="https://github.com/hamzabenmarwen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666] hover:text-[#c9a227] transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          Github
        </a>
        <div className="w-px h-8 bg-white/10" />
        <a
          href="https://linkedin.com/in/hamzabenmarwen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#666] hover:text-[#c9a227] transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block z-20"
      >
        <a
          href="mailto:hamzabenmarwen@gmail.com"
          className="text-[#666] hover:text-[#c9a227] transition-colors duration-300 text-[10px] tracking-[0.2em] font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          hamzabenmarwen@gmail.com
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
