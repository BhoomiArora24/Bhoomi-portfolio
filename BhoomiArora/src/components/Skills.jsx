import { useState } from "react";
import SkillAccordion from "./SkillsAccordion";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "Comfortable" },
      // { name: "Next.js", level: "Core" },
      { name: "JavaScript", level: "Core" },
      // { name: "TypeScript", level: "Learning" },
      { name: "Tailwind CSS", level: "Core" },
      // { name: "Framer Motion", level: "Comfortable" },
      { name: "Redux Toolkit", level: "Learning" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: "Comfortable" },
      { name: "Express.js", level: "Comfortable" },
      // { name: "Java", level: "Core" },
      // { name: "Spring Boot", level: "Learning" },
      { name: "REST APIs", level: "Comfortable" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", level: "Comfortable" },
      { name: "MySQL", level: "Core" },
      // { name: "Firebase", level: "Learning" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "VS Code", level: "Core" },
      { name: "Postman", level: "Comfortable" },
      { name: "Figma", level: "Comfortable" },
      // { name: "Docker", level: "Learning" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

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
          SKILLS
        </span>
      </h1>
    </div>

        <div className="space-y-5">

          {skills.map((skill, index) => (
            <SkillAccordion
              key={skill.title}
              data={skill}
              isOpen={active === index}
              onEnter={isDesktop ? () => setActive(index) : undefined}
              onClick={
                !isDesktop
                  ? () => setActive((prev) => (prev === index ? -1 : index))
                  : undefined
              }
            />
          ))}

        </div>
      </div>
    </section>
  );
}
