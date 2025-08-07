import React from 'react'
import Background from './background'

const Intro = () => {
  return (
    <div>
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center group transition-all duration-700 mt-40">

  <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center 
                  group-hover:flex-row group-hover:items-center gap-x-25 transition-all duration-700 ease-in-out">
    
    {/* Profile Block */}
    <div className="flex flex-col items-center justify-center space-y-4 transition-all duration-700 ease-in-out group-hover:-translate-x-10">
      <img
        className="h-80 w-80 rounded-full object-cover shadow-lg transition-transform duration-700"
        src="nav5.jpg"
        alt="Navya"
      />
      <h1 className="text-5xl md:text-6xl font-light text-white/90 tracking-wider mt-4">
        Bhoomi Arora
      </h1>
    </div>

    {/* Hidden Content on Hover */}
    <div className="opacity-0 group-hover:opacity-100 max-w-xl text-left space-y-6 transition-opacity duration-700 delay-200">
      <div className="w-24 h-px bg-gradient-to-r from-transparent "></div>

      <p className="text-lg md:text-xl text-slate-300/70 font-light leading-relaxed">
        Hi, I'm Bhoomi Arora 👋  
Aspiring Full-Stack Developer | Frontend Specialist | Java DSA Learner <br/> 
Currently building real-world projects while mastering data structures through Java.
      </p>

      
    </div>
  </div>
</div>
    </div>
  )
}

export default Intro
