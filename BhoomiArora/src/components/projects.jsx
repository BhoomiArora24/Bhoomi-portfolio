import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    cardsRef.current = cardsRef.current.filter(Boolean);

    // Place every card except the first below the screen
    gsap.set(cardsRef.current.slice(1), {
      yPercent: 100,
    });

    const scrollPerCard = 180; // Adjust as needed

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${projects.length * scrollPerCard}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return;

      tl.to(
        card,
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
        },
        index
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (

    <div>
    <div className="bg-black pt-20 md:pt-28 lg:pt-22 pb-10">
      <h1 className="text-center font-['Bebas_Neue'] uppercase leading-[0.8]">
        <span
          className="
            block
            text-violet-400
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            xl:text-[10rem]
            tracking-[-0.03em]
          "
        >
          Projects
        </span>
      </h1>
    </div>

    <section
      ref={sectionRef}
      className=" relative min-h-screen bg-black overflow-hidden"
    >

      <div className="flex justify-center ">
</div>
      <div className="relative w-full h-full max-w-7xl mx-auto pt-8 md:pt-16">

        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute inset-0 flex items-start justify-center px-4 py-6 md:p-8"
            style={{
              zIndex: index + 1,
              top: window.innerWidth < 768 ? `${index * 20}px` : `${index * 40}px`,
              transform: `scale(${1 - index * 0.02})`,
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}

      </div>
    </section>
    </div>
  );
}