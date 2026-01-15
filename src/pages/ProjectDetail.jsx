import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectDetail = () => {
  const { id } = useParams()

  const projects = {
    'mon-cabinet': {
      title: 'Mon Cabinet',
      category: 'Web Application',
      year: '2024',
      client: 'IT GATE',
      role: 'Full Stack Developer',
      duration: '4 months',
      description: 'A comprehensive platform for managing medical offices with patient scheduling, role-based access, and real-time notifications. This project was built during my end-of-studies internship at IT GATE.',
      longDescription: `Mon Cabinet is a full-featured medical office management system designed to streamline healthcare administration. The platform enables medical professionals to efficiently manage their practice, from patient appointments to medical records.

Key features include:
• Patient management with complete medical history
• Appointment scheduling with calendar integration
• Role-based access control for doctors, nurses, and administrators
• Real-time notifications for upcoming appointments
• Secure document storage for medical records
• Analytics dashboard for practice insights`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
      images: [
        '/Portfolio_hamza/project1.jpg',
        '/Portfolio_hamza/project1-2.jpg',
        '/Portfolio_hamza/project1-3.jpg',
      ],
      video: '/Portfolio_hamza/project1-demo.mp4',
      liveUrl: '#',
      githubUrl: 'https://github.com/hamzabenmarwen',
      color: '#c9a227',
    },
    'hr-platform': {
      title: 'HR Platform',
      category: 'Enterprise System',
      year: '2023',
      client: 'Ciments Jbel Oust',
      role: 'Web Developer',
      duration: '1 month',
      description: 'Complete HR solution with employee management, authentication, attendance tracking, and CRUD operations. Built during my improvement internship.',
      longDescription: `This HR management platform was developed to modernize the human resources operations at Ciments Jbel Oust. The system replaced manual processes with a digital solution that improved efficiency and accuracy.

Key features include:
• Employee database with comprehensive profiles
• Attendance tracking and leave management
• Performance evaluation tools
• Document management for contracts and policies
• Reporting and analytics for HR metrics
• Secure authentication with role-based permissions`,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
      images: [
        '/Portfolio_hamza/project2.jpg',
        '/Portfolio_hamza/project2-2.jpg',
        '/Portfolio_hamza/project2-3.jpg',
      ],
      video: null,
      liveUrl: '#',
      githubUrl: 'https://github.com/hamzabenmarwen',
      color: '#4a9eff',
    },
    'service-apv': {
      title: 'Service APV',
      category: 'Management System',
      year: '2024',
      client: 'Enterprise Client',
      role: 'Full Stack Developer',
      duration: '3 months',
      description: 'End-to-end service management with real-time tracking, reporting dashboard, and customer management.',
      longDescription: `Service APV is a comprehensive after-sales service management system designed to optimize service operations and improve customer satisfaction.

Key features include:
• Service ticket management and tracking
• Real-time status updates for customers
• Technician assignment and scheduling
• Inventory management for spare parts
• Customer communication portal
• Performance analytics and reporting`,
      technologies: ['.NET', 'React', 'SQL Server', 'Azure', 'SignalR', 'Entity Framework'],
      images: [
        '/Portfolio_hamza/project3.jpg',
        '/Portfolio_hamza/project3-2.jpg',
        '/Portfolio_hamza/project3-3.jpg',
      ],
      video: '/Portfolio_hamza/project3-demo.mp4',
      liveUrl: '#',
      githubUrl: 'https://github.com/hamzabenmarwen',
      color: '#ff6b6b',
    },
    'portfolio': {
      title: 'Portfolio',
      category: 'Personal Website',
      year: '2024',
      client: 'Personal Project',
      role: 'Designer & Developer',
      duration: 'Ongoing',
      description: 'Modern portfolio with smooth animations, immersive user experience, and responsive design.',
      longDescription: `This portfolio website showcases my work and skills as a developer. Built with modern technologies and a focus on user experience, it features smooth animations and a clean, professional design.

Key features include:
• Smooth page transitions and scroll animations
• Responsive design for all devices
• Dark theme with elegant typography
• Project showcase with detailed pages
• Contact form integration
• Background music player`,
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'EmailJS'],
      images: [
        '/Portfolio_hamza/project4.jpg',
        '/Portfolio_hamza/project4-2.jpg',
        '/Portfolio_hamza/project4-3.jpg',
      ],
      video: null,
      liveUrl: 'https://hamzabenmarwen.github.io/Portfolio_hamza/',
      githubUrl: 'https://github.com/hamzabenmarwen/Portfolio_hamza',
      color: '#50c878',
    },
  }

  const project = projects[id]

  if (!project) {
    return (
      <main className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project not found</h1>
          <Link to="/work" className="text-[#c9a227] hover:underline">
            Back to Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-custom">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/work"
            className="inline-flex items-center gap-3 text-[#888] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Work</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[#555] text-sm uppercase tracking-wider">{project.category}</span>
            <span className="text-[#333]">•</span>
            <span className="text-[#555] text-sm">{project.year}</span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-8xl font-light text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: project.color }}
          >
            {project.title}
          </h1>
          
          <p className="text-[#888] text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-8 border-y border-[#222]"
        >
          <div>
            <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Client</p>
            <p className="text-white text-lg">{project.client}</p>
          </div>
          <div>
            <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Role</p>
            <p className="text-white text-lg">{project.role}</p>
          </div>
          <div>
            <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Duration</p>
            <p className="text-white text-lg">{project.duration}</p>
          </div>
          <div>
            <p className="text-[#555] text-sm uppercase tracking-wider mb-2">Year</p>
            <p className="text-white text-lg">{project.year}</p>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20 rounded-2xl overflow-hidden aspect-video bg-[#111]"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-16 mb-20"
        >
          <div className="lg:col-span-2">
            <h2 
              className="text-3xl text-white mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About the Project
            </h2>
            <div className="text-[#888] text-lg leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </div>
          </div>
          
          <div>
            <h3 className="text-[#c9a227] text-sm uppercase tracking-wider mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-[#333] text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-12 space-y-4">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#c9a227] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View Live Site</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#c9a227] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 
              className="text-3xl text-white mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Project Demo
            </h2>
            <div className="rounded-2xl overflow-hidden aspect-video bg-[#111]">
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
                poster={project.images[0]}
              />
            </div>
          </motion.div>
        )}

        {/* More Images */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 
              className="text-3xl text-white mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div 
                  key={index}
                  className="rounded-2xl overflow-hidden aspect-video bg-[#111]"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center pt-20 border-t border-[#222]"
        >
          <p className="text-[#555] text-sm uppercase tracking-wider mb-4">Next Project</p>
          <Link
            to="/work"
            className="inline-block text-4xl md:text-5xl text-white hover:text-[#c9a227] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default ProjectDetail
