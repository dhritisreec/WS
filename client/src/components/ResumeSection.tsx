import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCertificate, FaDownload } from "react-icons/fa";
import { experiences, education, certifications } from "../lib/data";

// Define types for our resume data
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
}

const ResumeSection = () => {
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

  const downloadResume = () => {
    // Open resume in a new tab
    window.open("https://drive.google.com/file/d/1S1hnET5Y1i6TsTwM3yosJ4fxSuYXaSar/view?usp=sharing", "_blank");
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-16 px-4 bg-[#0a0a0a]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          custom={1}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-white"
        >
          Resume & Experience
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
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative pl-8 ${
                    index < experiences.length - 1
                      ? "border-l-2 border-primary/30"
                      : ""
                  }`}
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 text-white font-bold">{exp.title}</div>
                  <div className="mb-1 text-primary">{exp.company}</div>
                  <div className="mb-2 text-gray-300 text-sm">
                    {exp.period}
                  </div>
                  {exp.description && <p className="text-gray-300 mb-2">{exp.description}</p>}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="text-gray-300 space-y-2 list-disc pl-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative pl-8 ${
                    index < education.length - 1
                      ? "border-l-2 border-primary/30"
                      : ""
                  }`}
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="mb-1 text-white font-bold">{edu.degree}</div>
                  <div className="mb-1 text-primary">{edu.institution}</div>
                  <div className="text-gray-300 whitespace-pre-line">{edu.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center">
                    <FaCertificate className="text-primary mr-3" />
                    <div>
                      <div className="text-white font-medium">{cert.name}</div>
                      <div className="text-gray-300 text-sm">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <button
            onClick={downloadResume}
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300 animate-pulse"
          >
            <FaDownload className="mr-2 inline" /> Download Full Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
