import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)

  useEffect(() => {
    // Simple timeout - faster loading
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transform = 'translateY(-100%)'
        loaderRef.current.style.transition = 'transform 0.5s ease-in-out'
        setTimeout(onComplete, 500)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-[var(--color-darker)] flex flex-col items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold gradient-text mb-4"
        >
          Hello
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 font-mono"
        >
          Loading...
        </motion.p>
        
        {/* Simple progress bar */}
        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden mx-auto mt-6">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
