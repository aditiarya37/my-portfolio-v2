import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-6xl rounded-md transition-all duration-300 ${
        scrolled
          ? "bg-secondary-bg/20 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/5" // Increased translucency (20%)
          : "bg-transparent backdrop-blur-none border-transparent"
      }`}
    >
      <div className="px-6 h-16 flex justify-between items-center">
        {/* Logo - Scrolls to Top */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer text-2xl font-bold font-mono tracking-tighter bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          &lt;Aditi /&gt;
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100} // Adjusts for the fixed navbar height
              className="relative text-lg cursor-pointer text-base font-medium text-text-secondary hover:text-accent-1 transition-colors group flex items-center h-full"
            >
              {link.name}
              <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-accent-1 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/AditiAryaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-md font-mono font-bold text-accent-1 border border-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-accent-1/20"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary focus:outline-none flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-bg/95 backdrop-blur-xl border-t border-white/10 overflow-hidden rounded-b-md"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer text-lg text-text-primary hover:text-accent-1 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/AditiAryaResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-sm font-bold text-accent-1 border border-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
