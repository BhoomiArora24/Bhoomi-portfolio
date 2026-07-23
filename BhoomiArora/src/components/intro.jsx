
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Side */}
          <div className="lg:mt-10">


            <h1
              className="
    mt-5 sm:mt-8 md:mt-10
    font-['Bebas_Neue']
    uppercase
    leading-[0.82]
    tracking-[-0.03em]
  "
            >
              <span
                className="
      block
      mb-3
      text-violet-400
      tracking-[-0.03em]
      text-[4.5rem]
      sm:text-[5.2rem]
      md:text-[6rem]
      lg:text-[8rem]
      xl:text-[13rem]
      [transform:scaleY(1.1)]
      md:[transform:scaleY(1.2)]
      xl:[transform:scaleY(1.45)]
      origin-left
    "
              >
                FULL STACK
              </span>

              <span
                className="
      block
      text-white
      tracking-[-0.04em]
      text-[5rem]
      sm:text-[6rem]
      md:text-[7rem]
      lg:text-[9rem]
      xl:text-[15rem]
    "
              >
                DEVELOPER
              </span>
            </h1>
            <h2 className="uppercase text-lg text-gray-300 mb-3 font-semibold">
              Hello I'm
            </h2>

            <p className="uppercase text-gray-400 md:text-3xl mb-3 text-2xl leading-8 tracking-[6px]">
              <Typewriter
                words={["Bhoomi Arora"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <p className="uppercase tracking-[6px] text-lg font-medium text-violet-400">
              <Typewriter
                words={[
                  "I CODE.",
                  "I CREATE.",
                  "I SOLVE.",
                  "I BUILD EXPERIENCES."
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </p>

            <div className="flex gap-5 pt-4">
              <a
                href="Bhoomi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-violet-200 transition inline-flex items-center justify-center"
              >
                View Resume
              </a>

              <a
                href="Bhoomi Resume.pdf"
                download="Bhoomi Resume.pdf"
                className="border border-violet-300 text-violet-300 px-7 py-3 rounded-full hover:bg-violet-400 hover:text-black font-semibold transition inline-flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[320px] md:w-[340px] lg:w-[450px] xl:w-[520px] object-contain hover:scale-105 transition duration-500 drop-shadow-[0_0_35px_rgba(196,181,253,0.45)]">

              {/* Lavender Glow */}
              <div className="absolute inset-0 bg-violet-400/20 blur-[130px] rounded-full"></div>

              <img
                src="Navyaimg.png"
                alt="Developer"
                className="relative w-[320px] md:w-[430px] lg:w-[520px] object-contain hover:scale-105 transition duration-500 drop-shadow-[0_0_35px_rgba(196,181,253,0.45)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;