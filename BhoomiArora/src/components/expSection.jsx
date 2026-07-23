import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../data/projects";
import TitleHeader from "./TitleHeader";
import GlowCard from "./GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate the left card and right text together per wrapper
    // using a timeline so both arrive at the same time
    document.querySelectorAll(".exp-card-wrapper").forEach((wrapper) => {
      const left = wrapper.querySelector(".leftCard");
      const right = wrapper.querySelector(".expText");

      if (!left || !right) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(left, {
        x: -150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        right,
        {
          x: 150,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<" // start both animations together
      );
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.set(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-330 h-full md:px-20 px-5">
        <h1 className="text-center font-['Bebas_Neue'] uppercase leading-[0.8]">
          <span className="block
            text-violet-400
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            xl:text-[8rem]
            tracking-[-0.03em]">
            Professional Work Experience
          </span>
        </h1>
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 leftCard">
                  <GlowCard card={card}>
                    <div className="space-y-4 text-left">
                      

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {card.company}
                        </h3>

                        <p className="text-violet-400 font-semibold">
                          {card.role}
                        </p>

                        <p className="text-gray-400 text-sm mt-1">
                          📅 {card.duration}
                        </p>

                        <p className="text-gray-400 text-sm">
                          📍 {card.location}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {card.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo w-16 h-16 rounded-full overflow-hidden border border-violet-500">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-2 flex flex-col gap-3 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;