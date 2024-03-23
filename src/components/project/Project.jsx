import Heading from "../heading/Heading";
import projects from "../../utils/Projects";
import { motion } from "framer-motion";

const Project = () => {
  const variants = {
    initial: { opacity: 0, x: "300px" },
    animate: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="pt-10"
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      <Heading text={"My Recent Works"} />
      <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto cursor-pointer mt-12">
        {projects.projectTab1.map((project, i) => (
          <div key={i} className="w-full card">
            <img className="w-full h-full" src={project.imgUrl} />
            <div className="info">
              <h1 className="font-bold text-2xl">{project.title}</h1>
              <p className="mt-2 text-base">{project.description}</p>
              <a
                href={project.projectLink}
                target="_blank"
                className="block mt-5 px-8 bg-sky-500 rounded-lg py-2 font-normal text-base w-[100px]"
              >
                visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
