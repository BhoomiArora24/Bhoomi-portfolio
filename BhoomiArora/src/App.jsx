import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Background from './components/background'
import { motion } from "framer-motion"
import Intro from './components/intro'
import Projects from './components/Projects'
import Button from './components/button'
import Navbar from './components/NavBar'
import Experience from "./section/expSection"
import Skills from './section/SkillSection'
import Contact from './section/ContactSection'
import Showcase from './section/ShowcaseSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className="relative">
      <Background/>
      <main className="relative z-10">
        <Navbar/>
        <Intro/>
        <Projects/>
        <Experience />
        <Skills />
        <Showcase />
        <Contact />
        
        
      </main>
      
      </div>
    </>
  )
}

export default App
