import { useEffect, useRef, useState } from 'react'

// Components
import CustomCursor from './components/CustomCursor'
import AudioPlayer from './components/AudioPlayer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const appRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div ref={appRef}>
      <Loader onComplete={() => setIsLoading(false)} />
      <CustomCursor />
      <AudioPlayer />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
