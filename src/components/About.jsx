import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const stats = [
    { number: '3+', label: 'Internships Completed' },
    { number: '10+', label: 'Projects Built' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '2024', label: 'Graduation Year' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)] via-[var(--color-darker)] to-[var(--color-dark)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[var(--color-primary)] font-mono text-sm tracking-wider">
            01. ABOUT ME
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            Turning ideas into
            <span className="gradient-text block">digital reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
              {/* Profile image */}
              <img 
                src={`${import.meta.env.BASE_URL}hamza.png`} 
                alt="Hamza Ben Marouen"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating elements - simplified */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-xl glass flex items-center justify-center floating">
              <span className="text-4xl">⚛️</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-xl glass flex items-center justify-center floating" style={{ animationDelay: '1s' }}>
              <span className="text-3xl">🚀</span>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed mb-6"
            >
              Hello! I'm Hamza, a Full Stack Developer based in{' '}
              <span className="text-white font-semibold">Zaghouan, Tunisia</span>. Currently
              pursuing my Master's in Development of Computer Systems and Networks (DSIR) at ISET Sfax.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed mb-6"
            >
              I specialize in building modern web applications using the MERN stack,
              Laravel, and Flutter. Through my internships at IT GATE, Ciments Jbel Oust,
              and INS, I've gained hands-on experience in developing real-world solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed mb-8"
            >
              I'm passionate about creating clean, efficient code and building
              applications that make a difference. Always eager to learn new
              technologies and take on challenging projects.
            </motion.p>

            {/* Key highlights */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                What I bring to the table:
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  'MERN Stack Development',
                  'Laravel & PHP',
                  'Flutter Mobile Apps',
                  'Database Design',
                  'REST API Development',
                  'Team Collaboration',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-400">
                    <span className="text-[var(--color-primary)]">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 magnetic-btn"
              >
                <span>Download Resume</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl glass hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
