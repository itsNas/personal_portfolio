import { motion } from "framer-motion";
import AboutImg from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0">
          <motion.img
            src={AboutImg}
            className="shadow-lg dark:shadow-gray-900 rounded-full"
            alt="Hi, I'm Nas!"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true }}
          />
        </div>
        <div>
          <motion.p
            className="pb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
            I'm a self-taught junior frontend developer specializing in React.
            With a strong passion for coding and its potential to solve
            real-world problems, I am committed to staying up-to-date with the
            latest advancements in the field. You'll find here a showcase of my
            proficiency in React, attention to detail, and problem-solving
            skills.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            viewport={{ once: true }}
          >
            Outside of coding, I have a love for travel and music. Exploring new
            places and immersing myself in different cultures is a great joy. I
            also find solace in playing guitar, which is my creative escape.
            Playing music is a form of meditation for me and often inspires my
            coding projects.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
