import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const Work = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const projects = [
    {
      id: 'mon-cabinet',
      title: 'Mon Cabinet',
      category: 'Web Application',
      description: 'A comprehensive platform for managing medical offices with patient scheduling, role-based access, and real-time notifications.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      year: '2024',
      image: '/Portfolio_hamza/project1.jpg',
      color: '#c9a227',
    },
    {
      id: 'hr-platform',
      title: 'HR Platform',
      category: 'Enterprise System',
      description: 'Complete HR solution with employee management, authentication, attendance tracking, and CRUD operations.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      year: '2023',
      image: '/Portfolio_hamza/project2.jpg',
      color: '#4a9eff',
    },
    {
      id: 'service-apv',
      title: 'Service APV',
      category: 'Management System',
      description: 'End-to-end service management with real-time tracking, reporting dashboard, and customer management.',
      tags: ['.NET', 'React', 'SQL Server', 'Azure'],
      year: '2024',
      image: '/Portfolio_hamza/project3.jpg',
      color: '#ff6b6b',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      category: 'Personal Website',
      description: 'Modern portfolio with smooth animations, immersive user experience, and responsive design.',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
      year: '2024',
      image: '/Portfolio_hamza/project4.jpg',
      color: '#50c878',
    },
  ]

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-custom" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16"
        >
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Work
          </h1>
          <p className="text-[#888] text-lg md:text-xl max-w-2xl leading-relaxed">
            Discover my latest projects where design, technology, and creativity come together to craft engaging digital experiences. Below is a collection of my favourites.
          </p>
        </motion.div>

        {/* Marquee Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden bg-[#111] py-6 mb-20 -mx-8 md:-mx-20"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center mx-8">
                <div className="w-16 h-10 bg-[#222] rounded-lg mr-4" />
                <span className="text-white text-lg tracking-wider uppercase">
                  FEATURED PROJECT
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link 
                to={`/work/${project.id}`}
                className="group block"
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                  {/* Project Image */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl aspect-video bg-[#111]">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                    
                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 rounded-full bg-white flex items-center justify-center"
                      >
                        <span className="text-black text-sm font-medium">View</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#555] text-sm">{project.category}</span>
                      <span className="text-[#333]">•</span>
                      <span className="text-[#555] text-sm">{project.year}</span>
                    </div>
                    
                    <h2 
                      className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 group-hover:text-[#c9a227] transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h2>
                    
                    <p className="text-[#888] text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 border border-[#333] text-[#888] text-sm rounded-full group-hover:border-[#555] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="mt-8 flex items-center gap-4 text-[#555] group-hover:text-[#c9a227] transition-colors">
                      <span className="text-sm tracking-wider uppercase">View Project</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  )
}

export default Work
