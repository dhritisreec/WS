import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                D
              </span>
              <span className="text-white">hritisree</span>
            </a>
            <p className="text-gray-300 mt-2">
              Engineer & Data Science Enthusiast
            </p>
          </div>

          <motion.div
            className="text-gray-300 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Dhritisree Chhabra. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
