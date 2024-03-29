import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronsRight } from "react-feather";
import ParticlesBackground from "./ParticlesBackground";
import Developer from "../assets/background/developer.svg";
import DeveloperDark from "../assets/background/developer-dark.svg";

const Hero = ({ darkMode }) => {
  return (
    <section id="hero" className="w-full h-screen">
      <ParticlesBackground id="tsparticles" />
      <div className="flex flex-col sm:flex-row    absolute mt-20 md:mt-0">
        <div className="max-w-screen-md w-full h-full m-auto md:ml-20 lg:ml-48 px-8 flex flex-col justify-center items-start">
          <motion.h3
            className="font-medium  text-lg sm:text-2xl tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hello there, I'm
          </motion.h3>
          <motion.h1
            className="pt-1 font-semibold text-4xl sm:text-5xl  tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
          >
            Nasrullah Saloji
          </motion.h1>
          <motion.h3
            className="font-['Source_Code_Pro'] flex pt-4  text-2xl sm:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            A
            <TypeAnimation
              sequence={["React Developer", 2000, "Freelancer", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "14px" }}
            />
          </motion.h3>
          <motion.p
            className="py-4 max-w-[500px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            viewport={{ once: true }}
          >
            I am a frontend React developer based in Kedah, Malaysia who is
            passionate about technologies. I enjoy creating and designing web
            applications.
          </motion.p>

          <motion.div
            className="flex items-center justify-center sm:justify-between mt-1 sm:mt-8 w-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.75 }}
            viewport={{ once: true }}
          >
            <a
              href="/NASRULLAH_SALOJI.pdf"
              target="blank"
              rel="noopener noreferrer"
            >
              <button type="submit" className="group w-[160px]">
                Download CV
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
        <div>
          <motion.img
            className="w-full mt-0 sm:w-full text-right float-right absolute sm:relative h-64 md:h-screen"
            src={darkMode ? DeveloperDark : Developer}
            alt="Developer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
