import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Use requestAnimationFrame for smooth cursor movement
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      
      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`
      }
      
      requestAnimationFrame(animate)
    }

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .magnetic-btn, .project-card')
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    animate()
    
    setTimeout(addHoverListeners, 1000)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        width: isHovering ? '48px' : '32px',
        height: isHovering ? '48px' : '32px',
        border: '2px solid white',
        borderRadius: '50%',
        transition: 'width 0.2s, height 0.2s',
        willChange: 'transform',
      }}
    />
  )
}

export default CustomCursor
