import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1
            className="text-[20vw] md:text-[15vw] font-light text-white leading-none tracking-[-0.03em] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
          <p className="text-[#888] text-lg md:text-xl mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-4 px-8 py-4 border border-[#c9a227] text-[#c9a227] rounded-full hover:bg-[#c9a227] hover:text-black transition-all duration-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
