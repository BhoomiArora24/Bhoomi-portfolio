import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.from(".contact-left", {
      x: -120,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(
      ".contact-right",
      {
        x: 120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "<"
    );
  }, []);
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-10 py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="contact-left text-center lg:text-left">
            <h2
              className="font-['Bebas_Neue']
              uppercase
              leading-none
              text-violet-400
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl"
            >
              Contact Me
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-8 max-w-lg mx-auto lg:mx-0">
              Let's build something amazing together.
              <br />
              Whether it's an internship, freelance project,
              full-time opportunity, or simply a conversation
              about technology, I'd love to hear from you.
            </p>
          </div>

          {/* RIGHT */}
          <div className="contact-right flex justify-center lg:justify-end">
            <div className="space-y-12 text-left">

              {/* Email */}
              <div>
                <h3 className="uppercase tracking-[5px] text-violet-400 text-sm">
                  Email
                </h3>

                <a
                  href="mailto:bhoomiarora64@gmail.com"
                  className="mt-2 inline-block break-all text-base sm:text-lg text-white hover:text-violet-400 transition"
                >
                  bhoomiarora64@gmail.com
                </a>
              </div>

              {/* Socials */}
              <div>
                <h3 className="uppercase tracking-[5px] text-violet-400 text-sm">
                  Socials
                </h3>

                <div className="flex flex-col gap-4 mt-3">

                  <a
                    href="https://github.com/BhoomiArora24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base sm:text-lg text-gray-300 hover:text-violet-400 transition"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bhoomi-arora-45aa24292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base sm:text-lg text-gray-300 hover:text-violet-400 transition"
                  >
                    <FaLinkedin className="text-lg" />
                    LinkedIn
                  </a>

                  {/*
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base sm:text-lg text-gray-300 hover:text-violet-400 transition"
                  >
                    <FaInstagram className="text-lg" />
                    Instagram
                  </a>
                  */}

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        {/* Footer */}
        <p className="mt-4 text-center text-xs sm:text-sm text-gray-500">
          © 2026 Bhoomi Arora. Crafted with React, Tailwind CSS & GSAP.
        </p>

      </div>
    </section>
  );
}