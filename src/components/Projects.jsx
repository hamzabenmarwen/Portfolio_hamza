import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend']

  const projects = [
    {
      id: 1,
      title: 'Mon Cabinet - Medical Office Management',
      description:
        'A comprehensive web application for managing medical offices, including patient records, appointments, and user roles. Built during my internship at IT GATE.',
      image: '/projects/medical.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 2,
      title: 'HR Management Platform',
      description:
        'A human resources management platform developed for Ciments Jbel Oust, featuring employee management, CRUD operations, and secure authentication.',
      image: '/projects/hr.jpg',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
      category: 'Full Stack',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 3,
      title: 'After-Sales Service Application',
      description:
        'A complete after-sales service management system with .NET backend API and React frontend. Handles service requests, tracking, and customer management.',
      image: '/projects/aftersales.jpg',
      tags: ['.NET', 'React', 'SQL Server', 'REST API'],
      category: 'Full Stack',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'Modern portfolio website with 3D animations, smooth scrolling, and interactive elements. Built with React and Three.js.',
      image: '/projects/portfolio.jpg',
      tags: ['React', 'Three.js', 'Tailwind'],
      category: 'Frontend',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 5,
      title: 'Flutter Mobile App',
      description:
        'Cross-platform mobile application built with Flutter, demonstrating mobile development skills and modern UI patterns.',
      image: '/projects/flutter.jpg',
      tags: ['Flutter', 'Dart', 'Firebase'],
      category: 'Frontend',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 6,
      title: 'RESTful API Service',
      description:
        'Backend API service with authentication, data validation, and comprehensive endpoints for web applications.',
      image: '/projects/api.jpg',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      category: 'Backend',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-orange-500 to-amber-500',
    },
    {
      id: 7,
      title: 'Symfony Web Application',
      description:
        'Web application built with Symfony framework, showcasing PHP backend development and MVC architecture.',
      image: '/projects/symfony.jpg',
      tags: ['Symfony', 'PHP', 'MySQL', 'Twig'],
      category: 'Backend',
      link: '#',
      github: 'https://github.com/hamzabenmarwen',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

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
      id="projects"
      ref={sectionRef}
      className="section relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-darker)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-primary)] font-mono text-sm tracking-wider">
            03. FEATURED PROJECTS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with
            attention to detail, performance, and user experience.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 60 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="project-card group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[var(--color-primary)]/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ transformOrigin: 'center center' }}
              >
                {/* Project image/gradient background */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  {/* Project image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Default icon when no image or not hovered */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                  </div>

                  {/* Action buttons overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-4"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/20"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/20"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="p-6 bg-[var(--color-gray-dark)] transition-all duration-300 group-hover:bg-[var(--color-gray-dark)]/90">
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-black/30 text-gray-300 font-mono group-hover:bg-[var(--color-primary)]/20 group-hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More on GitHub</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
