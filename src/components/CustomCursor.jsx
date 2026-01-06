import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Dot follows immediately
      if (dot) {
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    // Smooth outline animation
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12
      
      if (outline) {
        outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`
      }
      
      requestAnimationFrame(animateOutline)
    }

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    animateOutline()
    
    setTimeout(addHoverListeners, 500)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c9a227] pointer-events-none z-[9999] hidden md:block transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ willChange: 'transform' }}
      />
      
      {/* Outline */}
      <div
        ref={outlineRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block transition-all duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          border: `1px solid ${isHovering ? '#c9a227' : 'rgba(255,255,255,0.2)'}`,
          borderRadius: '50%',
          willChange: 'transform',
          marginLeft: isHovering ? '-10px' : '0',
          marginTop: isHovering ? '-10px' : '0',
        }}
      />
    </>
  )
}

export default CustomCursor


