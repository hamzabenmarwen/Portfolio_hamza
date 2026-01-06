import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 80)

    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(onComplete, 1000)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'inset(0 0 100% 0)',
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col justify-between"
          style={{ clipPath: 'inset(0 0 0 0)' }}
        >
          {/* Top */}
          <div className="p-8 md:p-12 flex justify-between items-start">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-[#555] text-[10px] tracking-[0.2em] uppercase"
            >
              Portfolio 2024
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-[#555] text-[10px] tracking-[0.2em] uppercase"
            >
              Loading
            </motion.span>
          </div>

          {/* Center Content */}
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center">
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[-0.03em]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Hamza<span className="text-[#c9a227]">.</span>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-[#555] text-xs tracking-[0.3em] uppercase mt-6"
              >
                Full Stack Developer
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress */}
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-end mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#555] text-[10px] tracking-[0.2em] uppercase"
              >
                Please wait
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-4xl md:text-5xl font-light tracking-[-0.03em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {Math.min(Math.round(progress), 100)}
                <span className="text-[#c9a227] text-2xl">%</span>
              </motion.span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-[1px] bg-[#222] overflow-hidden">
              <motion.div
                className="h-full bg-[#c9a227]"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader

