import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

emailjs.init('0Zu8VS_SoNrtGcsFQ')

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const formRef = useRef(null)
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await emailjs.send(
        'service_viquypq',
        'template_z1ml1jl',
        {
          to_email: 'hamzabenmarwen@gmail.com',
          from_name: formState.name,
          from_email: formState.email,
          subject: `Portfolio Contact from ${formState.name}`,
          message: formState.message,
        }
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const lineVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        duration: 1,
        delay: i * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  return (
    <section
      id="contact"
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
          <span className="text-[#c9a227] text-xs tracking-[0.2em] uppercase font-mono">05</span>
          <span className="text-[#555] text-xs tracking-[0.2em] uppercase">Contact</span>
          <div className="flex-1 h-px bg-[#222]" />
        </motion.div>

        {/* Big Title */}
        <div className="mb-20">
          <div className="overflow-hidden">
            <motion.h2
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-[-0.03em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's work
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-[#c9a227] leading-[0.9] tracking-[-0.03em] italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              together
            </motion.h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Email */}
            <div className="group">
              <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-3">Email</p>
              <a
                href="mailto:hamzabenmarwen@gmail.com"
                className="text-xl md:text-2xl text-white font-light hover:text-[#c9a227] transition-colors duration-500"
              >
                hamzabenmarwen@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="group">
              <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-3">Phone</p>
              <a
                href="tel:+21653180702"
                className="text-xl md:text-2xl text-white font-light hover:text-[#c9a227] transition-colors duration-500"
              >
                +216 53 180 702
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-3">Location</p>
              <p className="text-xl md:text-2xl text-white font-light">Zaghouan, Tunisia</p>
            </div>

            {/* Socials */}
            <div className="pt-8 border-t border-[#222]">
              <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-4">Follow</p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/hamzabenmarwen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-[#c9a227] text-sm tracking-wider uppercase transition-colors duration-300"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-[#c9a227] text-sm tracking-wider uppercase transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
              <span className="text-[#888] text-sm">Available for new projects</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formState.name
                    ? 'text-[10px] text-[#c9a227] -top-5 tracking-[0.2em] uppercase'
                    : 'text-[#555] top-4'
                }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-transparent border-b border-[#222] py-4 text-white focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formState.email
                    ? 'text-[10px] text-[#c9a227] -top-5 tracking-[0.2em] uppercase'
                    : 'text-[#555] top-4'
                }`}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-transparent border-b border-[#222] py-4 text-white focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' || formState.message
                    ? 'text-[10px] text-[#c9a227] -top-5 tracking-[0.2em] uppercase'
                    : 'text-[#555] top-4'
                }`}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#222] py-4 text-white focus:border-[#c9a227] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-8 flex items-center gap-4"
              >
                <span className="text-[#888] text-xs tracking-[0.15em] uppercase group-hover:text-[#c9a227] transition-colors duration-500">
                  {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
                </span>
                <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#c9a227] transition-colors duration-500">
                  {isSubmitted ? (
                    <svg className="w-4 h-4 text-[#c9a227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-[#888] group-hover:text-[#c9a227] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

