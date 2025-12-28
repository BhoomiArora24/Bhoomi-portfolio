const FreelanceAstrologySection = () => {
  return (
    <section className="mx-auto">
        <div className="flex flex-col md:flex-row items-center  mt-40 gap-10 py-10 mx-20">
      {/* Left Image */}
      <div className="w-full md:w-[500px]">
  <img
    src="AskManisha.png"
    alt="Freelance Astrology Project"
    className="w-full h-auto object-cover border-4 border-black"
  />

  <a
    href="https://www.askmanisha.com/index1.php"
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
          MY FREELANCE
          <br />ASTROLOGY PROJECT
        </h2>

        <ul className="list-disc ml-5 mt-4 space-y-2 text-[15px] leading-relaxed">
          <li>
            Developed a full-stack astrology and numerology web application for a
            professional astrologer to deliver digital spiritual services efficiently.
          </li>
          <li>
            Designed and implemented a responsive, client-centric UI/UX ensuring
            smooth access across mobile, tablet, and desktop devices.
          </li>
          <li>
            Built feature-rich modules including Daily, Weekly, Monthly, and Yearly
            Horoscope, Numerology Reports, and a Kundli Generation System.
          </li>
          <li>
            Integrated secure payment gateway, email notifications, and WhatsApp
            integration to automate bookings, report delivery, and customer
            communication.
          </li>
          <li>
            Developed a powerful Admin Panel to manage:
            <ul className="list-circle ml-6 mt-1 space-y-1">
              <li>Horoscope content</li>
              <li>Numerology services</li>
              <li>Blog management with categories</li>
              <li>Video gallery</li>
              <li>Online book shop</li>
              <li>User inquiries and service bookings</li>
            </ul>
          </li>
          <li>
            Implemented CRUD operations for all modules with structured database
            design to ensure smooth content and service management.
          </li>
          <li>
            Ensured secure data handling, optimized database queries, and scalable
            backend architecture using PHP and MySQL.
          </li>
        </ul>

        
      </div>
      </div>
    </section>
  );
};

export default FreelanceAstrologySection;
