import { useRef, useMemo, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

// Animated floating sphere with distortion - OPTIMIZED
const AnimatedSphere = () => {
  const meshRef = useRef()
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>
    </Float>
  )
}

// Floating particles - OPTIMIZED (reduced count)
const Particles = ({ count = 80 }) => {
  const points = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 2
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [count])

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

// Glowing ring - OPTIMIZED
const GlowRing = () => {
  const ringRef = useRef()
  
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.2, 0.02, 8, 48]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
    </mesh>
  )
}

// 3D Scene Component - OPTIMIZED with performance settings
const Scene3D = ({ isVisible }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="absolute inset-0"
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
      frameloop={isVisible ? 'always' : 'never'}
      performance={{ min: 0.5 }}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <AnimatedSphere />
        <Particles />
        <GlowRing />
        <Stars radius={50} depth={50} count={300} factor={4} saturation={0} fade speed={0.5} />
      </Suspense>
    </Canvas>
  )
}

const Hero = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  // Track if hero section is visible to pause 3D animation when scrolled past
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D isVisible={isVisible} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-dark)] z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)] via-transparent to-[var(--color-dark)] opacity-50 z-10" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-[var(--color-accent)]">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 leading-tight">
            <span className="block">I'm</span>
            <span className="gradient-text">Hamza Ben Marouen</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="overflow-hidden mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gray-300">
            Full Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-body"
        >
          Master's student in Computer Systems & Networks, specialized in full-stack web development.
          Building modern web applications with MERN, and Flutter.
        </motion.p>

        {/* Tech stack badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['React', 'Node.js', 'Laravel', 'MongoDB', 'PostgreSQL', 'Flutter'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full glass text-sm font-mono text-gray-300 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <motion.a
          href="https://github.com/hamzabenmarwen"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="text-gray-500 hover:text-white transition-colors text-sm font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/hamza-ben-marouen-29b6172a6/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1 }}
          className="text-gray-500 hover:text-white transition-colors text-sm font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          LinkedIn
        </motion.a>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.a
          href="mailto:hamzabenmarwen@gmail.com"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="text-gray-500 hover:text-white transition-colors text-sm font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          hamzabenmarwen@gmail.com
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
