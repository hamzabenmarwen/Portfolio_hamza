import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Play on first user interaction
    const playOnInteraction = async () => {
      if (!hasStarted && audioRef.current) {
        try {
          audioRef.current.muted = false
          await audioRef.current.play()
          setIsPlaying(true)
          setHasStarted(true)
        } catch (error) {
          console.log('Play error:', error)
        }
      }
      // Remove listeners after first play
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
      document.removeEventListener('scroll', playOnInteraction)
      document.removeEventListener('keydown', playOnInteraction)
    }

    // Listen for any user interaction
    document.addEventListener('click', playOnInteraction, { once: true })
    document.addEventListener('touchstart', playOnInteraction, { once: true })
    document.addEventListener('scroll', playOnInteraction, { once: true })
    document.addEventListener('keydown', playOnInteraction, { once: true })

    return () => {
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
      document.removeEventListener('scroll', playOnInteraction)
      document.removeEventListener('keydown', playOnInteraction)
    }
  }, [hasStarted])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Play error:', error)
        })
        setIsPlaying(true)
      }
    }
  }

  const handleEnded = () => {
    // Restart the song when it ends
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        muted
      >
        <source src="/Portfolio_hamza/Pufino - Feeling Good.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        onClick={togglePlayPause}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-black border border-[#333] flex items-center justify-center hover:border-[#c9a227] transition-colors group"
      >
        {isPlaying ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </motion.button>
    </motion.div>
  )
}

export default AudioPlayer
