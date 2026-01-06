import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const Experience = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'IT GATE',
      type: 'End-of-Studies Internship',
      period: 'Feb 2024 - May 2024',
      description: 'Built "Mon Cabinet", a medical office management platform using MERN stack with React, Node.js, and MongoDB for enterprise clients.',
    },
    {
      title: 'Web Developer',
      company: 'Ciments Jbel Oust',
      type: 'Improvement Internship',
      period: 'January 2023',
      description: 'Developed HR management platform with authentication and responsive UI using Laravel, PHP, and MySQL.',
    },
    {
      title: 'Junior Developer',
      company: 'Institut National de la Statistique',
      type: 'Initiation Internship',
      period: 'January 2022',
      description: 'First professional experience learning software development practices, workflows, and collaborative coding.',
    },
  ]

  // Update active index based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const index = Math.min(
        Math.floor(value * experiences.length * 1.2),
        experiences.length - 1
      )
      setActiveIndex(Math.max(0, index))
    })
    return () => unsubscribe()
  }, [scrollYProgress, experiences.length])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Curved Accent Element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[500px] md:h-[600px] pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 400 0 Q 200 150 300 300 Q 400 450 350 600 L 400 600 L 400 0 Z"
            fill="#c9a227"
          />
        </svg>
      </div>

      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Where I've Worked
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#333]">
            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#c9a227]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index}
                exp={exp}
                index={index}
                isActive={activeIndex >= index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Circle Decoration */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden lg:flex absolute left-[15%] top-1/2 w-24 h-24 rounded-full border border-[#333] items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>
    </section>
  )
}

const ExperienceItem = ({ exp, index, isActive }) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-8 md:pl-20"
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className={`absolute left-[-5px] md:left-[27px] top-2 w-[11px] h-[11px] rounded-full border-2 transition-all duration-500 ${
          isActive 
            ? 'bg-[#c9a227] border-[#c9a227] scale-125' 
            : 'bg-[#1a1a1a] border-[#555]'
        }`}
      />

      {/* Content */}
      <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
        {/* Period */}
        <div>
          <p className="text-[#555] text-sm mb-1">{exp.period}</p>
          <p className="text-[#444] text-xs">{exp.type}</p>
        </div>

        {/* Details */}
        <div>
          <h3 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-[#444]'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {exp.company}
          </h3>
          
          <h4 className={`text-lg md:text-xl mb-4 transition-colors duration-500 ${
            isActive ? 'text-[#888]' : 'text-[#444]'
          }`}>
            {exp.title}
          </h4>
          
          <p className={`text-base leading-relaxed max-w-xl transition-colors duration-500 ${
            isActive ? 'text-[#666]' : 'text-[#333]'
          }`}>
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience

