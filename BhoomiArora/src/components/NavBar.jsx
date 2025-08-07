import { useState, useEffect } from "react";
import { navLinks } from "../constants/index";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner bg-transparent">
        <a href="#hero" className="logo">
          Web Developer
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, external, download }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(download ? { download: true } : {})}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Resume Button (opens PDF in a new tab) */}
        

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;