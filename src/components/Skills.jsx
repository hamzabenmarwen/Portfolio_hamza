import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Next.js'],
    backend: ['Node.js', 'Laravel', 'Express.js', 'PHP', '.NET', 'Symfony'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'Postman'],
  }

  const techStack = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Laravel', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Flutter', level: 70 },
    { name: 'PostgreSQL', level: 75 },
  ]

  return (
    <section
      id="skills"
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
          <span className="text-[#c9a227] text-xs tracking-[0.2em] uppercase font-mono">03</span>
          <span className="text-[#555] text-xs tracking-[0.2em] uppercase">Skills</span>
          <div className="flex-1 h-px bg-[#222]" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Technologies
            <span className="text-[#888] italic"> I work with</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative py-12 -mx-6 md:-mx-12 overflow-hidden border-y border-[#222]">
          <motion.div 
            style={{ x: marqueeX }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, index) => (
              <span 
                key={index} 
                className="text-5xl md:text-7xl font-light text-[#1a1a1a] select-none tracking-[-0.02em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-[#c9a227] text-[10px] tracking-[0.2em] uppercase mb-6 font-mono">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-[#888] text-sm hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <h3 className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-12">
            Proficiency
          </h3>
          
          <div className="space-y-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">{tech.name}</span>
                  <span className="text-[#555] text-xs font-mono">{tech.level}%</span>
                </div>
                <div className="h-px bg-[#222] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#c9a227]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

