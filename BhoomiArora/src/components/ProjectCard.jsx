export default function ProjectCard({ project }) {
  return (
    <div className="w-full rounded-[28px] md:rounded-[42px] bg-zinc-800/80 border border-white/5 backdrop-blur-xl overflow-hidden p-5 sm:p-7 lg:p-10">

      {/* Top */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex items-center gap-4 sm:gap-6">

          <p
            className="
              font-['Bebas_Neue']
              text-violet-400
              leading-none
              tracking-[-0.03em]
              text-5xl
              sm:text-6xl
              lg:text-7xl
              [transform:scaleY(1.15)]
              shrink-0
            "
          >
            {project.id}
          </p>

          <h2 className="font-bold text-white leading-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl">
            {project.title}
          </h2>

        </div>

        {/* Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="
            self-start
            lg:self-center
            px-5
            py-3
            rounded-full
            bg-violet-400
            text-black
            font-semibold
            whitespace-nowrap
            hover:bg-violet-300
            transition
          "
        >
          Live Project →
        </a>

      </div>

      {/* Image */}
      <div className="mt-2 rounded-[24px] overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-56
            sm:h-72
            md:h-96
            lg:h-[430px]
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

      </div>

      {/* Bottom */}
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-zinc-700
                text-violet-300
                text-xs
                sm:text-sm
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Description */}
        <ul className="space-y-3 text-zinc-300 leading-7 text-sm sm:text-base">

          {project.description.slice(0, 4).map((point, index) => (
            <li key={index}>
              • {point}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}