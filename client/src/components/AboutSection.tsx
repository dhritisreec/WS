import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
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

  return (
    <section
      id="about"
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
          About Me
          <span className="absolute left-0 bottom-[-8px] h-1 w-[70%] bg-gradient-to-r from-primary to-transparent"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            custom={2}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              Hi, I'm Dhriti and I'm from Hyderabad. As a data-driven problem solver and analytical thinker, I thrive at the intersection of technology and business. With experience in data analytics, software development, and machine learning, I am passionate about transforming raw data into actionable insights that drive decision-making and business growth.
            </p>
            <p className="text-gray-300 mb-4">
              My journey has taken me through roles in startups and global enterprises, where I've contributed to projects involving advanced analytics, process optimization, and end-to-end product development. I have a proven track record of identifying inefficiencies, implementing innovative solutions, and fostering collaboration across teams to deliver impactful results.
            </p>
            <p className="text-gray-300">
              What sets me apart is my ability to blend technical expertise with creative problem-solving and clear communication. I am constantly seeking opportunities to learn, grow, and contribute to cutting-edge solutions. Let's connect and explore how we can achieve great things together!
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-primary/30 ml-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Education</h4>
                  <p className="text-gray-300">
                    B.Tech in Computer Science with AI and ML specialization from JNTU Hyderabad (2020-2024)
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-primary/30 ml-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Professional Growth
                  </h4>
                  <p className="text-gray-300">
                    From Trainee Engineer at Rizzle to Engineer at Accenture, 
                    focusing on data analytics, cloud development, and ML implementation
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Current Focus
                  </h4>
                  <p className="text-gray-300">
                    Cloud development, ML, process automation, and building 
                    scalable database-driven applications with a focus on efficiency
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
