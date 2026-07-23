import { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";
import Intro from "./components/intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills";
import Experience from "./components/expSection";
import Contact from "./components/ContactSection";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-black">
      <Intro />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;