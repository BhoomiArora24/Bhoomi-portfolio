import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef([]);

  iconsRef.current = [];
  const addIcon = (el) => {
    if (el && !iconsRef.current.includes(el))
      iconsRef.current.push(el);
  };

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",

        },
      });

      tl.from(titleRef.current, {
        x: -120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        .fromTo(
          imageRef.current,
          {
            x: 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "<"
        )

        .from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )

        .from(
          iconsRef.current,
          {
            y: 60,
            scale: 0,
            rotation: -180,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "back.out(2.5)",
          },
          "-=0.4"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      px-5
      sm:px-8
      md:px-12
      lg:px-16
      py-16
      md:py-20
      "
    >
      <div className="
      margin-auto
      w-full
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-10
      lg:gap-16
      items-center
      ">

        {/* LEFT */}

        <div className="text-center lg:text-left">

          <p className="uppercase tracking-[6px] text-violet-400 text-sm mb-4">
            About Me
          </p>

          <h1 ref={titleRef} className="font-['Bebas_Neue']
              text-white
              leading-none
              tracking-[-0.03em]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              shrink-0">
            WHO AM I?
          </h1>

          <p ref={textRef} className="
              mt-4
              text-gray-400
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              max-w-xl
              mx-auto
              lg:mx-0
              ">
            I'm a Full Stack Developer passionate about building modern,
            responsive, and scalable web applications. I enjoy transforming
            ideas into seamless digital experiences by developing intuitive
            frontend interfaces and backend solutions using modern
            web technologies.

            <br />
            <br />

            Currently, I'm strengthening my problem-solving skills through
            Java DSA while continuously expanding my expertise in full-stack
            development, exploring new technologies, and building projects
            that deliver real-world impact.
          </p>

          {/* Tech */}

          <div
            className="
            flex
            flex-wrap
            justify-center
            lg:justify-start
            gap-6
            sm:gap-8
            mt-10
            text-3xl
            sm:text-4xl
            text-gray-300
            "
          >

            <div ref={addIcon}>
              <FaReact className="hover:text-cyan-400 duration-300 cursor-pointer" />
            </div>

            <div ref={addIcon}>
              <SiJavascript className="hover:text-yellow-400 duration-300 cursor-pointer" />
            </div>

            <div ref={addIcon}>
              <SiTailwindcss className="hover:text-cyan-300 duration-300 cursor-pointer" />
            </div>

            <div ref={addIcon}>
              <FaNodeJs className="hover:text-green-400 duration-300 cursor-pointer" />
            </div>

            <div ref={addIcon}>
              <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            </div>

            <div ref={addIcon}>
              <FaFigma className="hover:text-pink-400 duration-300 cursor-pointer" />
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center mt-10 lg:mt-0">

          <div
            ref={imageRef}
            className="
            relative
            w-full
            max-w-[380px]
            aspect-[3/4]
            rounded-3xl
            overflow-hidden
            border
            border-violet-500/20
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(139,92,246,0.15)]
            transition-all
            duration-500
            hover:scale-105
            hover:border-violet-400
            hover:shadow-[0_0_80px_rgba(139,92,246,0.4)]
            "
          >

            {/* Glow */}

            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-violet-500 blur-[120px] opacity-40"></div>

            <img
              src="aboutMe.png"
              alt="Profile"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}
