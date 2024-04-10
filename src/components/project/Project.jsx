import Heading from "../heading/Heading";
import projects from "../../utils/Projects";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
// import { useState } from "react";

const Project = () => {
  const variants = {
    initial: { opacity: 0, x: "0" },
    animate: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  // const [currentPage, setCurrentPage] = useState(0);
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(6);
  // const [isTransitioning, setIsTransitioning] = useState(true);

  // const totalPages = Math.ceil(projects.length / 6);
  // console.log(totalPages);
  // const handleNextPageButton = () => {
  //   setIsTransitioning(false);
  //   if (currentPage < totalPages - 1) {
  //     setCurrentPage(currentPage + 1);
  //     setStartIndex(startIndex + 6);
  //     setEndIndex(endIndex + 6);
  //     setIsTransitioning(true);
  //   }
  // };

  // const handlePreviousPageButton = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //     setStartIndex(startIndex - 6);
  //     setEndIndex(endIndex - 6);
  //   }
  // };

  return (
    <div className="pt-10 px-8">
      <Heading text={"My Recent Works"} />
      <div className="flex relative">
        {/* <div
          className="top-1/2 absolute cursor-pointer left-4 z-10"
          onClick={handlePreviousPageButton}
        >
          <GrFormPrevious className="h-[50px] w-[50px]" />
        </div> */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto cursor-pointer mt-12"
          whileInView="animate"
          variants={variants}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="w-full card"
              variants={variants}
              whileHover={{ scale: 1.05 }}
            >
              <img className="w-full h-full" src={project.imgUrl} />
              <div className="info">
                <h1 className="font-bold text-lg md:text-2xl">
                  {project.title}
                </h1>
                <p className="mt-2 text-sm md:text-base">
                  {project.description}
                </p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="block mt-5 text-center px-8 bg-sky-500 rounded-lg py-2 font-normal text-sm md:text-base w-[100px]"
                >
                  visit
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* <div
          className="top-1/2 absolute right-10 cursor-pointer z-10"
          onClick={handleNextPageButton}
        >
          <GrFormNext className="h-[50px] w-[50px]" />
        </div> */}
      </div>
    </div>
  );
};

export default Project;
