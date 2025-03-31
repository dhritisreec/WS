import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0.7)", "rgba(10, 10, 10, 0.95)"]
  );
  const headerPadding = useTransform(scrollY, [0, 50], ["1rem", "0.5rem"]);
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 20px rgba(0, 0, 0, 0.2)"]
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Close mobile menu on window resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: headerBg,
        padding: headerPadding,
        boxShadow: headerShadow,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            D
          </span>
          <span className="text-white">hritisree</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-white hover:text-primary transition-colors capitalize"
            >
              <span className="nav-link">{item}</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-[#121212] absolute w-full left-0 top-16 py-4 px-4 shadow-lg overflow-hidden"
      >
        <nav className="flex flex-col space-y-4">
          {["about", "skills", "projects", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-primary px-2 py-1 transition-colors capitalize text-left"
            >
              {item}
            </button>
          ))}
        </nav>
      </motion.div>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: hsl(275, 80%, 50%);
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
