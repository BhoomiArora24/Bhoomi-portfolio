import { motion, AnimatePresence } from "framer-motion";

export default function SkillAccordion({
    data,
    isOpen,
    onEnter,
    onClick,
}) {
    return (
        <div
            onMouseEnter={onEnter}
            onClick={onClick}
            className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-br
      from-zinc-950
      to-black
      cursor-pointer
      "
        >
            <div className="flex items-center justify-between p-8">

                <h3 className="text-xl font-semibold">
                    {data.title}
                </h3>

                <motion.span
                    animate={{
                        rotate: isOpen ? 90 : 0,
                    }}
                    transition={{ duration: .25 }}
                    className="text-3xl"
                >
                    ›
                </motion.span>

            </div>

            <AnimatePresence>

                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: .35,
                        }}
                    >
                        <div className="border-t border-zinc-800 px-8 pb-8 pt-6">

                            <div className="flex flex-wrap gap-4">

                                {data.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="
    relative
    h-auto
    rounded-2xl
    border
    border-[#2A2D3A]
    bg-[#151822]
    px-6
    py-5
    transition-all
    duration-300
    hover:border-violet-500/50
    hover:bg-[#1A1D28]
  "
                                    >
                                        {/* Level Badge
                                        <span
                                            className={`
      absolute
      top-4
      right-4
      rounded-full
      px-3
      py-1
      text-[8px]
      font-light
      uppercase
      tracking-[1.5px]
      ${item.level === "Core"
                                                    ? "border border-zinc-500 text-zinc-300"
                                                    : item.level === "Comfortable"
                                                        ? "border border-sky-500/40 text-sky-400 bg-sky-500/10"
                                                        : "border border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                                                }
    `}
                                        >
                                            {item.level === "Core"
                                                ? "CORE"
                                                : item.level === "Comfortable"
                                                    ? "COMFY"
                                                    : "LRN"}
                                        </span> */}

                                        {/* Skill Name */}
                                        <h3 className=" text-md font-regular text-white">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}