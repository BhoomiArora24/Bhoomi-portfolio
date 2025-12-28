import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
      className="w-full"
    >
      <div id="work" className="rounded-lg w-full">
        <img
          className="w-full h-auto rounded-md object-cover"
          src={imgSrc}
          alt={title}
        />

        <div className="mt-4">
          <h1 className="text-white text-lg md:text-xl font-semibold">
            {title}
          </h1>

          <Button
            className="w-28 h-10 md:w-32 md:h-12 mt-3"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-10">
      <AnimatedCard
        imgSrc="farmiz.png"
        title="Smart Farming E-commerce Website"
        link="http://farmpractice.free.nf"
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
