import { motion } from "framer-motion";
import { ExternalLink, GitHub } from "react-feather";
import TodolistImg from "../assets/portfolio/todolist.png";
import WeatherImg from "../assets/portfolio/weatherApp.png";

const projects = [
  {
    id: "todolist",
    title: "Todo list",
    thumbnail: TodolistImg,
    description: "A todo list application built with React",
    technologies: "CSS / Firebase / ReactJS / NodeJS",
    url: "https://nas-todo.netlify.app/",
    github: "https://github.com/nasrul-o7/React-todolist-app",
  },
  {
    id: "weatherapp",
    title: "Weather app",
    thumbnail: WeatherImg,
    description: "A weather dashboard application built with OpenWeather API",
    technologies: "CSS / RapidApi / ReactJS / NodeJS",
    url: "https://nas-weather-app.netlify.app/",
    github: "https://github.com/nasrul-o7/react-weather-app",
  },
];

const animateProject = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75,
      duration: 0.4,
      type: "tween",
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const animateProjectItem = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
};

const Project = () => {
  return (
    <motion.div
      className="w-full grid md:grid-cols-2 gap-8"
      variants={animateProject}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          className="relative group"
          variants={animateProjectItem}
          viewport={{ once: true }}
        >
          <div className="w-full h-max aspect-auto overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all shadow-lg dark:shadow-gray-900 cursor-pointer">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full"
            />

            <div className="flex rounded-lg justify-center items-center transition-all duration-700 opacity-0 bg-gradient-to-t from-[#222222] via-slate-600 to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                <div className="flex-row text-center p-6">
                  <h3 className="mb-2 font-semibold text-white  text-2xl uppercase drop-shadow-md tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm tracking-tight leading-snug drop-shadow-md">
                    {project.description}
                  </p>
                  <p className="font-['Source_Code_Pro'] text-sky-200 text-xs py-2">
                    {project.technologies}
                  </p>
                  <div className="text-center">
                    <a href={project.url} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300">
                        <ExternalLink size={20} />
                      </button>
                    </a>
                    <a href={project.github} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300">
                        <GitHub size={20} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default Project;
