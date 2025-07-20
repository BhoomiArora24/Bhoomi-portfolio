import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Background from './background'
import Button from './button'

const AnimatedCard = ({ imgSrc, title, link }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="rounded-lg">
        <img className="w-130" src={imgSrc} alt={title} />
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl mt-4">{title}</h1>
          <Button
            className="md:w-24 md:h-12 w-20 h-10 mt-4 mr-31"
            id="button"
            text="See my Work"
            link={link}
          />
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-45 mr-45 mt-10">
      <AnimatedCard 
        imgSrc="farmiz.png" className='h-180'
        title="Smart Farming E-commerce Website"
        link="http://farmpractice.free.nf"
      />
      <AnimatedCard
        imgSrc="taskify.png"
        title="Task Management Application"
        link="http://Taskify.free.nf"
      />
      <AnimatedCard
        imgSrc="blogspace.png"
        title="Blogging Web Application"
        link="https://BhoomiArora24.github.io/blogwebsite"
      />
    </div>
  )
}

export default Projects
