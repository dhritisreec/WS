import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../lib/data";

const ProjectsSection = () => {
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

  return (
    <section
      id="projects"
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
          Featured Projects
          <span className="absolute left-0 bottom-[-8px] h-1 w-[70%] bg-gradient-to-r from-primary to-transparent"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index + 2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                <div className="absolute top-3 right-3 bg-primary px-2 py-1 rounded text-xs font-medium text-white">
                  {project.category}
                </div>
                
                <motion.svg
                  width="30%"
                  height="30%"
                  viewBox="0 0 24 24"
                  className="relative z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {project.category === "Security" && (
                    <path
                      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.7 0-1.3-.6-1.3-1.3v-3.5c0-.6.6-1.2 1.3-1.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z"
                      fill="rgba(138, 43, 226, 0.8)"
                    />
                  )}
                  {project.category === "Business Intelligence" && (
                    <path
                      d="M2 20H22M4 4H6V16H4V4ZM10 8H12V16H10V8ZM16 12H18V16H16V12Z"
                      stroke="rgba(0, 255, 255, 0.8)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  )}
                  {project.category === "Content Moderation" && (
                    <path
                      d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                      fill="rgba(138, 43, 226, 0.8)"
                    />
                  )}
                  {project.category === "Computer Vision" && (
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="rgba(0, 255, 255, 0.8)"
                    />
                  )}
                  {/* Default icon for any other category */}
                  {!["Security", "Business Intelligence", "Content Moderation", "Computer Vision"].includes(project.category) && (
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12"
                      stroke="rgba(138, 43, 226, 0.8)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  )}
                </motion.svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    className="text-primary hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.source}
                    className="text-primary hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <FaGithub className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={6}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <button className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] hover:-translate-y-1 transition duration-300">
            View All Projects{" "}
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
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
