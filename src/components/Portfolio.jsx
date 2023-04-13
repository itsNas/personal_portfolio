import { motion } from "framer-motion";
import Project from "../constant/Project";
const Portfolio = () => {
  return (
    <section
      id="projects"
      className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <Project />
    </section>
  );
};

export default Portfolio;
