const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "My Resume",
    link: "BHOOMI RESUME.docx.pdf",
    external: true,
  }
];

const expCards = [
  {
    review:
      "Developed and maintained the frontend of an online entrance exam platform using modern web technologies. Implemented responsive, interactive UI components and collaborated with backend and design teams to enhance cross-device user experience.",
    imgPath: "name.png",
    logoPath: "logo.png",
    title: "Frontend Developer",
    date: "February 2025 - August 2025",
    responsibilities: [
      "Developed a responsive front-end UI embedded in a PHP project using HTML, CSS, and JavaScript.",
      "Developed a dynamic web page to display relational data using SQL JOINs and implemented full CRUD operations with PHP.",
      "Developed a web-based PDF editor that allows users to upload, dynamically add and position text, and download the modified PDF using JavaScript and PDF manipulation libraries.",
      "Built a notes listing page with search, filter dropdown, and pagination for easy material discovery.",
      "Implemented secure user authentication and backend connectivity using API integration."
    ],
  },

  // ⭐ Newly Added Internship
  // ⭐ Gloomshine Pvt. Ltd. Internship — Updated
{
  review:
    "Currently working as a Software Development Engineer Intern, contributing to real production features, improving platform performance, and integrating secure and scalable solutions using modern web technologies.",
  imgPath: "gloomshine.png",
  logoPath: "gloomshine.png",
  title: "SDE Intern",
  date: "September 2025 – Present",
  responsibilities: [
    "Developing production-level full-stack features using React.js, Node.js/Express, and Tailwind CSS.",
    "Implementing robust API integrations and optimizing server-side logic for faster query execution and reduced loading time.",
    "Engineering secure Razorpay payment integration with proper order creation, verification, and error handling.",
    "Debugging and improving core application modules including filtering, pagination, and state management.",
    "Enhancing UI responsiveness, accessibility, and cross-browser compatibility for better user experiences.",
    "Collaborating closely with product managers and backend teams to deliver business-critical functionality within sprint deadlines."
  ],
},
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "logo.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export { navLinks, expCards, expLogos };
