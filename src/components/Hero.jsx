import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronsRight } from "react-feather";
import HTML from "../assets/tech/html.png";
import CSS from "../assets/tech/css.png";
import JS from "../assets/tech/javascript.png";
import REACT from "../assets/tech/reactjs.png";
import TW from "../assets/tech/tailwind.png";
import NODE from "../assets/tech/nodejs.png";
import GIT from "../assets/tech/git.png";

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen">
      <div className="w-full h-screen absolute top-[70px] left-0">
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
            I am a frontend React developer living in Kedah, Malaysia with a
            passion for technologies. I love to build and design things like web
            application.
          </motion.p>
          <motion.div
            className=" flex flex-col gap-2 sm:flex-row items-center justify-start w-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <p>Tech stack | </p>
            <div className="flex gap-3 flex-wrap">
              <img src={HTML} alt="html" />
              <img src={CSS} alt="html" />
              <img src={JS} alt="html" />
              <img src={REACT} alt="html" />
              <img src={TW} alt="html" />
              <img src={NODE} alt="html" />
              <img src={GIT} alt="html" />
            </div>
          </motion.div>
          <motion.div
            className="mt-3 w-full flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.75 }}
            viewport={{ once: true }}
          >
            <a href="/nasrullah-CV.pdf">
              <button type="submit" className="group w-[160px]">
                Download CV
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
