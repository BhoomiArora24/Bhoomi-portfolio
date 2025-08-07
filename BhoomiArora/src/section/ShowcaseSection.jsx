import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

// 🎯 Import icons only here — keep constants clean
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const appShowcaseData = [
  {
    title: "Twitter",
    link: "https://x.com/Bhoomi2424",
    iconName: "FaTwitter",
    bgColor: "bg-[#FFEFDB]",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/bhoomi-arora-45aa24292/",
    iconName: "FaLinkedin",
    bgColor: "bg-[#FFEFDB]",
  },
  {
    title: "GitHub",
    link: "https://github.com/",
    iconName: "FaGithub",
    bgColor: "bg-[#FFEFDB]",
  },
];

// 🔁 Map string name to actual Icon component
const ICONS = {
  FaTwitter,
  FaGithub,
  FaLinkedin,
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    cardRefs.current.forEach((ref, idx) => {
      gsap.fromTo(
        ref,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2 * idx,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-12  ">
      <div className="max-w-5xl mx-auto px-4">
        <TitleHeader sub="💼 Find me Online" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {appShowcaseData.map((item, idx) => {
            const Icon = ICONS[item.iconName];
            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 ${item.bgColor}`}
              >
                <Icon size={48} className="text-[#222]" />
                <h2 className="mt-4 text-lg font-semibold text-[#222]">{item.title}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
