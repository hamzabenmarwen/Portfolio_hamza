import { useRef, useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import CustomCursor from './components/CustomCursor'
import AudioPlayer from './components/AudioPlayer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Pages
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'

// Context to track navigation
const NavigationContext = createContext({ hasNavigated: false, setHasNavigated: () => {} })

// Page name mapping
const getPageName = (pathname) => {
  if (pathname === '/') return 'Home'
  if (pathname === '/work') return 'Work'
  if (pathname === '/about') return 'About'
  if (pathname.startsWith('/work/')) {
    const id = pathname.split('/work/')[1]
    const names = {
      'mon-cabinet': 'Mon Cabinet',
      'hr-platform': 'HR Platform',
      'service-apv': 'Service APV',
      'portfolio': 'Portfolio',
    }
    return names[id] || 'Project'
  }
  return 'Page'
}

// Simple curtain reveal transition
const CurtainTransition = ({ pageName }) => {
  return (
    <>
      {/* Initial full overlay with page name - stays visible longer */}
      <motion.div
        className="fixed inset-0 bg-[#0a0a0a] z-[101] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[-0.03em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {pageName}<span className="text-[#c9a227]">.</span>
        </motion.h1>
      </motion.div>

      {/* Top curtain */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1/2 bg-[#0a0a0a] z-[100] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.9 }}
      />

      {/* Bottom curtain */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0a] z-[100] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.9 }}
      />
    </>
  )
}

// Page transition wrapper - only shows transition after first navigation
const PageTransition = ({ children, pageName, showTransition }) => {
  return (
    <>
      {showTransition && <CurtainTransition pageName={pageName} />}
      <motion.div
        initial={showTransition ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: showTransition ? 1.2 : 0 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.div>
    </>
  )
}

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation()
  const pageName = getPageName(location.pathname)
  const { hasNavigated, setHasNavigated } = useContext(NavigationContext)
  const prevPathRef = useRef(location.pathname)
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    if (hasNavigated && prevPathRef.current !== location.pathname) {
      setShowTransition(true)
    } else if (!hasNavigated) {
      setHasNavigated(true)
    }
    prevPathRef.current = location.pathname
  }, [location.pathname, hasNavigated, setHasNavigated])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition pageName="Home" showTransition={showTransition}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition pageName="Work" showTransition={showTransition}>
              <Work />
            </PageTransition>
          }
        />
        <Route
          path="/work/:id"
          element={
            <PageTransition pageName={pageName} showTransition={showTransition}>
              <ProjectDetail />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition pageName="About" showTransition={showTransition}>
              <About />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const appRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasNavigated, setHasNavigated] = useState(false)

  return (
    <Router basename="/Portfolio_hamza">
      <NavigationContext.Provider value={{ hasNavigated, setHasNavigated }}>
        <div ref={appRef} className="relative">
          <Loader onComplete={() => setIsLoading(false)} />
          <CustomCursor />
          <AudioPlayer />
          {!isLoading && (
            <>
              <Navbar />
              <main>
                <AnimatedRoutes />
              </main>
              <Footer />
            </>
          )}
        </div>
      </NavigationContext.Provider>
    </Router>
  )
}

export default App
