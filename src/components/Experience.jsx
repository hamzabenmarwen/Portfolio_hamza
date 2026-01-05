import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // Parallax for background blob
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -150])

  const experiences = [
    {
      title: 'End-of-Studies Internship',
      company: 'IT GATE',
      location: 'Tunisia',
      period: 'Feb 2024 - May 2024',
      description:
        'Developed a comprehensive medical office management web application called "Mon Cabinet" using the MERN stack.',
      achievements: [
        'Built full-stack application with MongoDB, Express, React, and Node.js',
        'Implemented patient management and appointment scheduling system',
        'Developed user role management and authentication features',
        'Collaborated with technical team using structured development approach',
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Improvement Internship',
      company: 'Ciments Jbel Oust',
      location: 'Tunisia',
      period: 'January 2023',
      description:
        'Developed an HR management web platform for the company\'s human resources department.',
      achievements: [
        'Built complete HR management platform with Laravel',
        'Implemented CRUD operations for employee management',
        'Developed secure authentication system',
        'Styled responsive UI with Tailwind CSS',
      ],
      tech: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Initiation Internship',
      company: 'Institut National de la Statistique',
      location: 'Tunisia',
      period: 'January 2022',
      description:
        'First professional experience in software development environment, working alongside senior developers.',
      achievements: [
        'Discovered professional software development practices',
        'Collaborated with senior developers on real projects',
        'Applied coding best practices and standards',
        'Gained exposure to enterprise development workflows',
      ],
      tech: ['JavaScript', 'HTML', 'CSS', 'SQL'],
    },
  ]

  const education = [
    {
      degree: 'Master - Computer Systems & Networks (DSIR)',
      institution: 'ISET Sfax',
      period: '2024 - Present',
      description: 'Specializing in development of computer systems and networks.',
    },
    {
      degree: 'Bachelor - Information Technology',
      institution: 'ISET Kairouan',
      period: '2021 - 2024',
      description: 'Specialization in Information Systems Development.',
    },
    {
      degree: 'Baccalauréat - Computer Science',
      institution: 'Lycée Cité Nozha Zaghouan',
      period: '2021',
      description: 'High school diploma with focus on computer science.',
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      <motion.div 
        style={{ y: blobY }}
        className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full blur-[200px] opacity-10" 
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
            04. EXPERIENCE & EDUCATION
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="text-3xl">💼</span> Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] glow" />

                  <div className="gradient-border p-6 rounded-2xl hover:scale-[1.02] transition-transform">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-display font-bold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-[var(--color-primary)] font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-gray-400 text-sm font-mono mt-2 md:mt-0">
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-[var(--color-accent)] mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-black/30 text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="text-3xl">🎓</span> Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="gradient-border p-6 rounded-2xl mb-6"
              >
                <h4 className="text-lg font-display font-bold text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-[var(--color-primary)] font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm font-mono mb-3">
                  {edu.period}
                </p>
                <p className="text-gray-400 text-sm">{edu.description}</p>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl font-display font-bold text-white mb-6 mt-10 flex items-center gap-3"
            >
              <span className="text-3xl">📜</span> Certifications
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {[
                { name: 'AWS Certified Developer', issuer: 'Amazon', year: '2023' },
                { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2022' },
                { name: 'Node.js Certification', issuer: 'OpenJS', year: '2022' },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-xl">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-white font-medium">{cert.name}</h5>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
