import React from 'react'
import Background from './background'

const Intro = () => {
  return (
    <div>
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center transition-all duration-700 mt-50 mb-40">

        <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center gap-y-6">

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-light text-white/90 tracking-wider">
            Bhoomi Arora
          </h1>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-slate-300/70 font-light leading-relaxed max-w-xl">
  Hi, I'm Bhoomi Arora 👋 <br/>
  Software Development Engineer Intern (SDE) | Full-Stack Developer <br/>
  Passionate about building scalable, user-focused applications with strong backend logic.<br/>
  Currently working on real-world production features while strengthening System Design and Java DSA skills.
</p>


        </div>
      </div>
    </div>
  )
}

export default Intro
