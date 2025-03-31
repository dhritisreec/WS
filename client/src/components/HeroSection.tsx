import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypedText from "./TypedText";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-16 mt-12">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            ref={ref}
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-lg text-primary mb-2 font-mono"
              variants={itemVariants}
            >
              &lt; Hello World /&gt;
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              I am{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Dhritisree Chhabra
              </span>
            </motion.h1>
            <motion.div
              className="h-12 md:h-16 overflow-hidden"
              variants={itemVariants}
            >
              <TypedText
                className="text-xl md:text-3xl text-gray-300 font-light"
                texts={[
                  "Engineer",
                  "AI & ML Enthusiast",
                  "Data Analyst & Visualizer",
                  "Cloud Computing Explorer",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={1500}
              />
            </motion.div>
            <motion.p
              className="mt-6 text-gray-300 max-w-md"
              variants={itemVariants}
            >
              Recent Computer Science graduate specializing in AI and ML, passionate about
              leveraging data analysis and cloud technologies to build innovative solutions.
            </motion.p>
            <motion.div
              className="mt-8 flex space-x-4"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300 shadow-[0_0_15px_rgba(138,43,226,0.0)] hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] hover:-translate-y-1"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-md transition duration-300 shadow-[0_0_15px_rgba(138,43,226,0.0)] hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] hover:-translate-y-1"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-full blur-2xl"></div>
              <div className="rounded-full object-cover w-full h-full z-10 relative border-4 border-primary bg-[#121212] flex items-center justify-center">
                <motion.svg
                  width="60%"
                  height="60%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M12 3L20.5 17H3.5L12 3Z"
                    stroke="rgba(138, 43, 226, 0.8)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="14"
                    r="6"
                    stroke="rgba(0, 255, 255, 0.8)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10"
                    stroke="rgba(138, 43, 226, 0.8)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-primary hover:text-cyan-400 transition-colors"
        >
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
