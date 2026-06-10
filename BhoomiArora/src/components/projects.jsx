// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import Button from './button'

// const AnimatedCard = ({ imgSrc, title, link }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, margin: '-100px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 1.2, ease: 'easeOut' }}
//       className="w-full"
//     >
//       <div id="work" className="rounded-lg w-full">
//         <img
//           className="w-full h-auto rounded-md object-cover"
//           src={imgSrc}
//           alt={title}
//         />

//         <div className="mt-4">
//           <h1 className="text-white text-lg md:text-xl font-semibold">
//             {title}
//           </h1>

//           <Button
//             className="w-28 h-10 md:w-32 md:h-12 mt-3"
//             id="button"
//             text="See my Work"
//             link={link}
//           />
//         </div>
//       </div>
//     </motion.div>
//   )
// }



// const Projects = () => {
//   return (
//     <div className="w-full flex justify-center mt-10 px-4">

//       <div className="grid grid-cols-1 gap-10 w-full max-w-3xl">

//         <AnimatedCard
//           imgSrc="greenest.png"
//           title="Smart Farming E-commerce Website"
//           link="https://nursery-project-frontend.vercel.app/"
//         />

//         {/* <AnimatedCard
//           imgSrc="blogspace.png"
//           title="Blogging Web Application"
//           link="https://BhoomiArora24.github.io/blogwebsite"
//         /> */}

//       </div>
//     </div>
//   );
// };

// export default Projects

const FreelanceAstrologySection = () => {
  return (
    <section className="mx-auto">
      <div className="flex flex-col md:flex-row items-center  mt-40 gap-10 py-10 mx-20">
        {/* Left Image */}
        <div className="w-full md:w-[500px]">
          <img
            src="greenest.png"
            alt="E-commerce Project"
            className="w-full h-auto object-cover border-4 border-black"
          />

          <a
            href="https://nursery-project-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 font-medium border-2 border-black hover:bg-black hover:text-white transition duration-200"
          >
            View Project →
          </a>
        </div>


        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            E-COMMERCE
            <br />PROJECT
          </h2>

          <ul className="list-disc ml-5 mt-4 space-y-2 text-[15px] leading-relaxed">
            <li>
              Developed a full-stack nursery e-commerce platform with separate Admin Panel and Client Portal managing 100+
              products, users, and order workflows.
            </li>
            <li>
              Implemented core e-commerce functionalities including authentication, cart, wishlist, reviews, ratings, and order
              management systems.
            </li>
            <li>
              Built dynamic admin modules for inventory handling, category management, user moderation, and review approval
              workflows.
            </li>
            <li>
              Integrated real-time notifications and chatbot support features, improving customer engagement and user
              interaction.
            </li>
            <li>
              Developed a scalable Admin Panel for managing products, categories,
              inventory, customer orders, seller profiles, and user inquiries within
              the e-commerce platform.
            </li>

            <li>
              Implemented complete CRUD operations for product listings, order
              management, and seller dashboards with optimized database structure for
              efficient data handling.
            </li>

            <li>
              Ensured secure data management, optimized MySQL queries, and maintained
              scalable backend architecture using PHP and MySQL to support smooth
              e-commerce operations.
            </li>
          </ul>


        </div>
      </div>
    </section>
  );
};

export default FreelanceAstrologySection;

