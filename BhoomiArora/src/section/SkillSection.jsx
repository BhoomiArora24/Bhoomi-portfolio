import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
  { name: "Figma", icon: <SiFigma className="text-rose-500 text-3xl" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-4 shadow-md 
              transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
