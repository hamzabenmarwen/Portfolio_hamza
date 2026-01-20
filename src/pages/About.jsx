import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const AboutPage = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Laravel', 'PHP', '.NET'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code', 'Postman'] },
  ]

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'IT GATE',
      period: 'Feb 2024 - May 2024',
      description: 'Built "Mon Cabinet", a comprehensive medical office management platform using the MERN stack.',
    },
    {
      title: 'Web Developer',
      company: 'Ciments Jbel Oust',
      period: 'January 2023',
      description: 'Developed an HR management platform with authentication and responsive UI using Laravel.',
    },
    {
      title: 'Junior Developer',
      company: 'Institut National de la Statistique',
      period: 'January 2022',
      description: 'First professional experience learning software development practices and workflows.',
    },
  ]

  return (
    <main className="min-h-screen bg-black pt-32 pb-20" ref={sectionRef}>
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111]"
            >
              <img
                src="/Portfolio_hamza/hamza.png"
                alt="Hamza Ben Marouen"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-20 w-20 h-20 border border-[#c9a227] rounded-full flex items-center justify-center"
            >
              <span className="text-[#c9a227] text-xs">4+ Years</span>
            </motion.div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Me
            </h1>
            
            <div className="space-y-6 text-[#888] text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white">Hamza Ben Marouen</span>, a passionate Full Stack Developer based in Tunisia. I specialize in creating modern, responsive web applications that deliver exceptional user experiences.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through clean code and thoughtful design. My journey in web development started with curiosity and has evolved into a deep passion for crafting digital solutions.
              </p>
              <p>
                Currently pursuing my <span className="text-[#c9a227]">Master's in Computer Systems & Networks</span> at ISET Sfax, I'm constantly learning and staying up-to-date with the latest technologies and best practices in the industry.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Location</p>
                <p className="text-white text-lg">Zaghouan, Tunisia</p>
              </div>
              <div>
                <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:hamzabenmarwen@gmail.com" className="text-white text-lg hover:text-[#c9a227] transition-colors">
                  hamzabenmarwen@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Education</p>
                <p className="text-white text-lg">Master's Student</p>
              </div>
              <div>
                <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Languages</p>
                <p className="text-white text-lg">Arabic, French, English</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href={`${import.meta.env.BASE_URL}hamza_ben_Marouen_cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 border border-[#c9a227] text-[#c9a227] rounded-full hover:bg-[#c9a227] hover:text-black transition-all duration-500"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-32"
        >
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills & <span className="text-[#c9a227] italic">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="p-6 border border-[#222] rounded-2xl hover:border-[#333] transition-colors"
              >
                <h3 className="text-[#c9a227] text-sm uppercase tracking-wider mb-6">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-[#888] hover:text-white transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work <span className="text-[#c9a227] italic">Experience</span>
          </h2>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative pl-8 border-l border-[#222] hover:border-[#c9a227] transition-colors"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#222] group-hover:bg-[#c9a227] transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-white group-hover:text-[#c9a227] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-[#c9a227]">{exp.company}</p>
                  </div>
                  <p className="text-[#555] text-sm mt-2 md:mt-0">{exp.period}</p>
                </div>
                
                <p className="text-[#888] leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default AboutPage
