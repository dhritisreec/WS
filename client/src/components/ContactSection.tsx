import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/dhritisreec", label: "GitHub" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/dhritisree-chhabra/", label: "LinkedIn" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 px-4 bg-[#121212]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          custom={1}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-white"
        >
          Get In Touch
          <span className="absolute left-0 bottom-[-8px] h-1 w-[70%] bg-gradient-to-r from-primary to-transparent"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            custom={2}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">Email</div>
                  <div className="text-white">dschhabra2002@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">Location</div>
                  <div className="text-white">Hyderabad, India</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6 text-primary">
              Connect With Me
            </h3>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#0a0a0a] rounded-lg p-8 shadow-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Blog
            </h3>
            
            <p className="text-gray-300 mb-6">
              Check out my latest thoughts, tutorials, and insights on technology, 
              data science, and software development trends.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                  />
                </svg>
              </div>
              <div>
                <div className="text-white text-lg font-medium">Recent Post</div>
                <div className="text-gray-400">The Future of AI in Enterprise Solutions</div>
              </div>
            </div>

            <a 
              href="https://dhritisdigitaldiary.bearblog.dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] transition duration-300 w-full text-center"
            >
              Visit Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
