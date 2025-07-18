import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/background'
import { motion } from "framer-motion";
import Intro from './components/intro'
import Projects from './components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className="relative">
      <Background/>
      <main className="relative z-10">
        <Intro/>
        <Projects/>
      </main>
      
      </div>
    </>
  )
}

export default App
