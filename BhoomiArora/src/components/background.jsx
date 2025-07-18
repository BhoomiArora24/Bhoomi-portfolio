import React, { useEffect, useState } from 'react';

function BackgroundParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">

      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-slate-600/30 rotate-45 animate-pulse"
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-slate-500/20 rounded-full animate-pulse"
           style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-slate-700/25 rotate-12 animate-pulse"
           style={{ animationDuration: '6s', animationDelay: '2s' }} />

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <path 
          d="M0,300 Q250,100 500,300 T1000,300" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <path 
          d="M0,600 Q300,400 600,600 T1000,600" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <path 
          d="M0,800 Q200,600 400,800 T1000,800" 
          stroke="url(#lineGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '4s' }}
        />
      </svg>

      {/* Ambient Light Spots */}
      <div 
        className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-purple-500/4 rounded-full blur-3xl"
        style={{
          bottom: '25%',
          right: '15%',
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div 
        className="absolute w-72 h-72 bg-slate-400/3 rounded-full blur-3xl"
        style={{
          top: '50%',
          left: '60%',
          transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      {/* Minimal Dots Pattern */}
      



      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDAwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
    </div>
  );
}

export default BackgroundParticles;