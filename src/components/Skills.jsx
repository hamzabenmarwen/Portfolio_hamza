import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Flutter', level: 75 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Laravel', level: 85 },
        { name: 'Symfony', level: 70 },
        { name: 'Express.js', level: 80 },
        { name: '.NET', level: 65 },
      ],
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Oracle DB', level: 70 },
        { name: 'SQL', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Android Studio', level: 70 },
        { name: 'Odoo', level: 65 },
      ],
    },
  ]

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
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section relative py-32 overflow-hidden"
    >
      {/* Background effects with parallax */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[150px] opacity-10" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-[150px] opacity-10" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-primary)] font-mono text-sm tracking-wider">
            02. SKILLS & TECHNOLOGIES
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I've worked with a range of technologies in web development, from
            frontend to backend, databases to DevOps.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="gradient-border p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies list - simplified for performance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-center text-gray-500 text-sm font-mono mb-8">
            TECHNOLOGIES I WORK WITH
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Laravel', 'MongoDB', 'Express',
              'Flutter', 'Tailwind', 'Git', 'MySQL', 'PostgreSQL',
              'PHP', 'JavaScript', 'Symfony', '.NET'
            ].map((tech, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-display font-bold text-gray-700 hover:gradient-text transition-colors px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
