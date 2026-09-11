import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'Assiette Gourmande Sfaxienne',
    title: 'Full-Stack / AI Developer',
    type: "Master's End-of-Studies Internship",
    period: 'Feb 2026 — Jun 2026',
    description:
      'Engineered an intelligent catering management ecosystem powered by 6 microservices (Node.js + FastAPI), 4 isolated PostgreSQL databases, and 5 AI modules (RAG chatbot, Prophet demand forecasting, intelligent dish recommendation, OCR document parsing, and kitchen workflow optimization). Created a real-time React/TypeScript dashboard with Socket.IO.',
    tech: ['Node.js', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'RAG AI', 'Prophet', 'Socket.IO'],
  },
  {
    company: 'IT GATE',
    title: 'Full Stack Developer',
    type: "Licence End-of-Studies Internship",
    period: 'Feb 2024 — May 2024',
    description:
      'Built "Mon Cabinet", an enterprise medical clinic management suite utilizing the MERN stack (React, Node.js, Express, MongoDB). Implemented electronic patient records, role-based access control (RBAC), and automated appointment scheduling.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'RBAC Security'],
  },
  {
    company: 'Ciments Jbel Oust',
    title: 'Web Developer',
    type: 'Improvement Internship',
    period: 'Jan 2023 — Feb 2023',
    description:
      'Developed an automated Human Resources management portal featuring encrypted authentication, employee profiles, leave request approval workflows, and workforce tracking built with Laravel, Tailwind CSS, and MySQL.',
    tech: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'REST APIs'],
  },
  {
    company: 'Institut National de la Statistique',
    title: 'Junior Developer',
    type: 'Initiation Internship',
    period: 'Jan 2022 — Feb 2022',
    description:
      'First software engineering internship focusing on data processing workflows, backend API integration, statistical data modeling, and collaborative Git version control best practices.',
    tech: ['Python', 'SQL', 'Git', 'Data Processing'],
  },
]

const Experience = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const progressHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%'])

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a227] text-xs uppercase tracking-[0.25em] font-mono mb-3 block"
          >
            Professional Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore my journey & engineering craft.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Background vertical line (Desktop) */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-px bg-white/10 z-0"
            style={{ left: 'calc(50% - 0.5px)' }}
          />

          {/* Animated golden progress line (Desktop) */}
          <motion.div
            className="hidden md:block absolute top-0 w-[2px] bg-gradient-to-b from-[#c9a227] via-[#c9a227] to-amber-200 shadow-[0_0_12px_#c9a227] origin-top z-10"
            style={{ height: progressHeight, left: 'calc(50% - 1px)' }}
          />

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ exp, index }) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={itemRef} className="relative w-full">
      {/* Center Dot Node (Desktop) — pinpoint 50% line center */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex absolute top-2.5 w-4 h-4 rounded-full border-2 border-[#c9a227] bg-black z-20 items-center justify-center shadow-[0_0_10px_rgba(201,162,39,0.6)]"
        style={{ left: 'calc(50% - 8px)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
      </motion.div>

      {/* Mobile Dot Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="md:hidden absolute left-3 top-2 w-3 h-3 rounded-full border-2 border-[#c9a227] bg-black z-20 -translate-x-1/2"
      />

      {/* Grid Layout: Left / Right 2-Column System */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {isLeft ? (
          <>
            {/* Left Card Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="w-full pl-8 md:pl-0 md:pr-12 lg:pr-16 text-left"
            >
              <CardContent exp={exp} />
            </motion.div>

            {/* Empty Right Column */}
            <div className="hidden md:block" />
          </>
        ) : (
          <>
            {/* Empty Left Column */}
            <div className="hidden md:block" />

            {/* Right Card Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="w-full pl-8 md:pl-12 lg:pl-16 text-left"
            >
              <CardContent exp={exp} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

const CardContent = ({ exp }) => (
  <>
    {/* Period & Internship Tag */}
    <div className="flex items-center gap-3 mb-3 flex-wrap">
      <span className="text-[#c9a227] text-xs font-mono tracking-wider uppercase bg-[#c9a227]/10 px-2.5 py-1 rounded border border-[#c9a227]/20">
        {exp.period}
      </span>
      <span className="text-[#666] text-xs font-mono uppercase tracking-wider">
        {exp.type}
      </span>
    </div>

    {/* Company Name */}
    <h3
      className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-2 leading-tight hover:text-[#c9a227] transition-colors duration-300"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {exp.company}
    </h3>

    {/* Job Title */}
    <h4 className="text-lg md:text-xl font-light text-[#aaa] mb-3">
      {exp.title}
    </h4>

    {/* Description */}
    <p className="text-sm md:text-base text-[#888] leading-relaxed mb-5 font-light">
      {exp.description}
    </p>

    {/* Tech Stack Pills */}
    <div className="flex flex-wrap gap-2">
      {exp.tech.map((t, i) => (
        <span
          key={i}
          className="text-[11px] text-[#bbb] bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-full font-mono"
        >
          {t}
        </span>
      ))}
    </div>
  </>
)

export default Experience
