import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
  distance = 60
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directions[direction].x,
    y: isInView ? 0 : directions[direction].y
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
