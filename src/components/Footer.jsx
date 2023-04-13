import { motion } from "framer-motion";
import { GitHub, Linkedin, Instagram, Mail } from "react-feather";

const Footer = () => {
  return (
    <footer className="footer py-8 text-xs sm:text-sm ">
      <div className="flex flex-col justify-center items-center md:ml-20">
        <p>
          Made by{" "}
          <a
            href="https://github.com/nasrul-o7"
            target="_blank"
            className="text-slate-400 hover:text-gray-700"
          >
            Nasrullah
          </a>
          .
        </p>
        <p>
          <span className="text-slate-400">&copy;</span> 2023. All rights
          reserved.
        </p>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON SIDE OVER 768PX SCREEN RES */}
      <div className="social hidden md:block fixed top-[40%] z-10">
        <ul className="list-none flex flex-col">
          <motion.li
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.75 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/nasrul-o7" target="_blank">
              <GitHub size={30} />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/nas-bensaloji-947945271/"
              target="_blank"
            >
              <Linkedin size={30} />
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <a href="mailto:nbensaloji@gmail.com">
              <Mail size={30} />
            </a>
          </motion.li>
        </ul>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON BOTTOM UNDER 768PX SCREEN RES */}
      <div className="mini-social">
        <ul className="md:hidden flex flex-row justify-center">
          <li>
            <a href="https://github.com/nasrul-o7" target="_blank">
              <GitHub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nas-bensaloji-947945271/"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a href="mailto:nbensaloji@gmail.com">
              <Mail size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
