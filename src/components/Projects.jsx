import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const projects = [
    {
      id: 1,
      title: 'Mon Cabinet',
      category: 'Web Application',
      description: 'A comprehensive platform for managing medical offices with patient scheduling and role-based access.',
      tags: ['React', 'Node.js', 'MongoDB'],
      year: '2024',
      image: '/project1.jpg',
    },
    {
      id: 2,
      title: 'HR Platform',
      category: 'Enterprise System',
      description: 'Complete HR solution with employee management, authentication, and CRUD operations.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      year: '2023',
      image: '/project2.jpg',
    },
    {
      id: 3,
      title: 'Service APV',
      category: 'Management System',
      description: 'End-to-end service management with real-time tracking and reporting dashboard.',
      tags: ['.NET', 'React', 'SQL Server'],
      year: '2024',
      image: '/project3.jpg',
    },
    {
      id: 4,
      title: 'Portfolio',
      category: 'Personal Website',
      description: 'Modern portfolio with smooth animations and immersive user experience.',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      year: '2024',
      image: '/project4.jpg',
    },
  ]

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="text-[#c9a227] text-xs tracking-[0.2em] uppercase font-mono">02</span>
          <span className="text-[#555] text-xs tracking-[0.2em] uppercase">Selected Work</span>
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
            Featured
            <span className="text-[#888] italic"> projects</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href="#"
                className="block py-8 md:py-12 border-t border-[#222] group-hover:border-[#333] transition-colors duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left */}
                  <div className="flex items-baseline gap-6 md:gap-12 flex-1">
                    <span className="text-[#333] text-sm font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 
                        className="text-2xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-[#c9a227] transition-colors duration-500 tracking-[-0.02em]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-[#555] text-sm mt-2">{project.category}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6 md:gap-12 pl-12 md:pl-0">
                    <div className="hidden md:flex gap-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#555] tracking-[0.1em] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-[#333] text-sm font-mono">{project.year}</span>
                    
                    <div className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center group-hover:border-[#c9a227] group-hover:bg-[#c9a227]/5 transition-all duration-500">
                      <svg 
                        className="w-4 h-4 text-[#555] group-hover:text-[#c9a227] -rotate-45 group-hover:rotate-0 transition-all duration-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Hover Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0,
                  scale: hoveredProject === project.id ? 1 : 0.9,
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="fixed pointer-events-none z-50 hidden lg:block"
                style={{ 
                  left: mousePosition.x + 30,
                  top: mousePosition.y - 80,
                }}
              >
                <div className="w-56 h-32 bg-[#111] border border-[#222] flex items-center justify-center">
                  <span 
                    className="text-white text-xl tracking-[-0.02em]" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-[#222]"
        >
          <a
            href="https://github.com/hamzabenmarwen"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="text-[#888] text-xs tracking-[0.15em] uppercase group-hover:text-[#c9a227] transition-colors duration-500">
              View all on Github
            </span>
            <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#c9a227] transition-colors duration-500">
              <svg className="w-4 h-4 text-[#888] group-hover:text-[#c9a227] group-hover:-rotate-45 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

