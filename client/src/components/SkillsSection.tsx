import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaBrain, FaTools, FaUsers } from "react-icons/fa";
import { skillCategories, proficiencies } from "../lib/data";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  };

  // Icons mapping for skill categories
  const getIconForCategory = (title: string) => {
    switch (title) {
      case "Programming":
        return <FaCode />;
      case "Data Science":
        return <FaBrain />;
      case "Tools & Frameworks":
        return <FaTools />;
      case "Soft Skills":
        return <FaUsers />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-16 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          custom={1}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-white"
        >
          Skills & Expertise
          <span className="absolute left-0 bottom-[-8px] h-1 w-[70%] bg-gradient-to-r from-primary to-transparent"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index + 2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-primary text-4xl mb-4">{getIconForCategory(category.title)}</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
