import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  const lineVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        duration: 1,
        delay: i * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  const fadeVariants = {
    hidden: { opacity: 0, y: 40 },
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
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-black overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="text-[#c9a227] text-xs tracking-[0.2em] uppercase font-mono">01</span>
          <span className="text-[#555] text-xs tracking-[0.2em] uppercase">About</span>
          <div className="flex-1 h-px bg-[#222]" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text */}
          <div>
            {/* Big Headline */}
            <div className="mb-12">
              <div className="overflow-hidden">
                <motion.h2
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  A developer with
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  a passion for
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-[#c9a227] leading-[1.1] tracking-[-0.02em] italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  digital craft
                </motion.h2>
              </div>
            </div>

            {/* Description */}
            <motion.div
              custom={0.4}
              variants={fadeVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6 mb-12"
            >
              <p className="text-[#888] text-lg leading-relaxed">
                I'm Hamza Ben Marouen, a Full-Stack & AI Developer based in Zaghouan, Tunisia.
                Master's graduate in Computer Systems & Networks (DSIR) from ISET Sfax.
              </p>
              <p className="text-[#555] leading-relaxed">
                With 3 professional internships — including building an AI-powered catering platform 
                with 6 microservices and 5 AI modules — I specialize in modern web architectures 
                and intelligent applications. Available immediately for full-time opportunities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.6}
              variants={fadeVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-3 gap-8 py-8 border-t border-b border-[#222]"
            >
              {[
                { number: '5+', label: 'Years Coding' },
                { number: '8+', label: 'Projects Built' },
                { number: '3', label: 'Internships' },
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="text-3xl md:text-4xl text-white mb-2 tracking-[-0.02em]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[#555] text-[10px] tracking-[0.15em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={0.8}
              variants={fadeVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-12"
            >
              <a
                href={`${import.meta.env.BASE_URL}hamza_ben_Marouen_cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[#888] text-xs tracking-[0.15em] uppercase group-hover:text-[#c9a227] transition-colors duration-500">
                  Download Resume
                </span>
                <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#c9a227] transition-colors duration-500">
                  <svg className="w-4 h-4 text-[#888] group-hover:text-[#c9a227] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative lg:mt-24"
          >
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={isInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img 
                src={`${import.meta.env.BASE_URL}hamzaaaa.png`} 
                alt="Hamza Ben Marouen"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 md:left-auto md:-right-8 bg-black p-6"
            >
              <p className="text-[#c9a227] text-xs tracking-[0.2em] uppercase mb-2">Location</p>
              <p className="text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Zaghouan, Tunisia
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32"
        >
          <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-12">What I Do</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222]">
            {[
              { title: 'Web Development', desc: 'Full-stack applications with React, Node.js, Spring Boot & Laravel' },
              { title: 'Mobile Apps', desc: 'Cross-platform development with Flutter & biometrics' },
              { title: 'Database Design', desc: 'Scalable databases with PostgreSQL, MongoDB & MySQL' },
              { title: 'AI Integration', desc: 'Advanced AI features (RAG chatbot, forecasting, OCR)' },
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-black p-8 hover:bg-[#0d0d0d] transition-colors duration-500"
              >
                <span className="text-[#c9a227] text-xs font-mono mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-white text-xl mb-3 group-hover:text-[#c9a227] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

