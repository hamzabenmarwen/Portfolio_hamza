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
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'SQL', 'HTML/CSS'] },
    { category: 'Frontend', items: ['React', 'Angular', 'Flutter', 'Three.js', 'Tailwind CSS', 'Material UI'] },
    { category: 'Backend', items: ['Node.js/Express', 'FastAPI', 'Spring Boot', 'Laravel', 'Symfony'] },
    { category: 'AI & Data', items: ['LangChain', 'FAISS', 'Gemini API', 'Prophet', 'scikit-learn'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle DB', 'Prisma ORM'] },
    { category: 'Tools', items: ['Git', 'Docker', 'GitHub', 'Postman', 'Socket.IO', 'Figma', 'Linux'] },
  ]

  const education = [
    {
      degree: "Master DSIR",
      full: "Développement des Systèmes Informatiques et Réseaux",
      school: "ISET Sfax",
      period: "2024 — 2026",
    },
    {
      degree: "Licence en Technologies de l'Informatique",
      full: "Spécialité DSI",
      school: "ISET Kairouan",
      period: "2021 — 2024",
    },
    {
      degree: "Baccalauréat Sciences de l'Informatique",
      full: "",
      school: "Lycée Cité Nozha, Zaghouan",
      period: "2021",
    },
  ]

  const experience = [
    {
      title: 'Full-Stack / AI Developer',
      company: 'Assiette Gourmande Sfaxienne',
      period: 'Feb 2026 - Jun 2026',
      description: 'Developed an intelligent catering management platform with 6 microservices (Node.js + FastAPI), 4 PostgreSQL databases, and 5 AI modules (RAG chatbot, Prophet demand forecasting, dish recommendation, OCR, kitchen optimization). Implemented React/TypeScript frontend and Socket.IO real-time communication.',
    },
    {
      title: 'Full Stack Developer',
      company: 'IT GATE',
      period: 'Feb 2024 - May 2024',
      description: 'Built "Mon Cabinet", a medical office management platform using the MERN stack (React, Node.js, MongoDB) for patient folders, RBAC roles, and appointments scheduling.',
    },
    {
      title: 'Web Developer',
      company: 'Ciments Jbel Oust',
      period: 'January 2023',
      description: 'Developed an HR management platform with secure authentication, employee profiles, and leaves tracking using Laravel, Tailwind CSS, and MySQL.',
    },
    {
      title: 'Junior Developer',
      company: 'Institut National de la Statistique',
      period: 'January 2022',
      description: 'First professional experience learning software development practices, workflows, and collaborative coding.',
    },
  ]

  const certifications = [
    {
      name: 'Cisco CCNA',
      detail: 'Modules 1, 2 & 3',
      icon: '🏅',
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
                src="/Portfolio_hamza/hamzaaaa.png"
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
              <span className="text-[#c9a227] text-xs">5+ Years</span>
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
                Hello! I'm <span className="text-white">Hamza Ben Marouen</span>, a Full-Stack & AI Developer based in Tunisia. I specialize in creating modern, responsive web applications that deliver exceptional user experiences.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through clean code and thoughtful design. My journey in web development started with curiosity and has evolved into a deep passion for crafting digital solutions.
              </p>
              <p>
                Holder of a <span className="text-[#c9a227]">Master's degree in Computer Systems & Networks (DSIR)</span> from ISET Sfax, with 3 professional internships including building an AI-powered microservices platform. Available immediately for full-time opportunities.
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
                <p className="text-white text-lg">Master's Graduate (DSIR)</p>
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-32"
        >
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education <span className="text-[#c9a227] italic">& Certifications</span>
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative pl-8 border-l border-[#222] hover:border-[#c9a227] transition-colors"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#222] group-hover:bg-[#c9a227] transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl text-white group-hover:text-[#c9a227] transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.full && (
                      <p className="text-[#888] text-sm">{edu.full}</p>
                    )}
                  </div>
                  <p className="text-[#555] text-sm mt-1 md:mt-0">{edu.period}</p>
                </div>
                
                <p className="text-[#c9a227] text-sm">{edu.school}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-[#222]"
          >
            <h3 className="text-[#555] text-xs tracking-[0.2em] uppercase mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 border border-[#222] rounded-full hover:border-[#c9a227] transition-colors"
                >
                  <span className="text-lg">{cert.icon}</span>
                  <div>
                    <span className="text-white text-sm">{cert.name}</span>
                    <span className="text-[#555] text-sm ml-2">— {cert.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
