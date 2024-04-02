import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import projects from "../../utils/Projects";

const SingleCard = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 50]);
  return (
    <section ref={ref} className="mt-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <img className="h-[300px] object-cover" src={item.imgUrl} />
          <motion.div
            className="flex flex-col flex-1 justify-end"
            style={{ y }}
          >
            <h2 className="text-4xl font-bold" style={{ y }}>
              {item.title}
            </h2>
            <p className="mt-4 text-lg max-w-md">{item.description}</p>
            <button className="mt-8 text-start bg-orange-600 self-start px-10 rounded-xl py-2 text-lg font-bold">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 50]);
  return (
    <section ref={ref} className=" mt-20">
      <div className="flex items-center justify-center">
        <div className="flex gap-12 m-auto max-w-7xl">
          <img
            className="flex-1 max-w-md object-cover h-1/2"
            src={item.imgUrl}
          />
          <motion.div
            className="flex flex-col flex-1 justify-end"
            style={{ y }}
          >
            <h2 className="text-6xl font-bold" style={{ y }}>
              {item.title}
            </h2>
            <p className="mt-4 text-lg max-w-md">{item.description}</p>
            <button className="mt-8 text-start bg-orange-600 self-start px-10 rounded-xl py-2 text-lg font-bold">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="">
      <div className="sticky top-0 left-0 pt-[50px] text-center text-orange-500">
        <h1 className="text-4xl text-white font-bold">Feature Works</h1>
        <motion.div
          style={{ scaleX }}
          className=" h-3 bg-white rounded-full z-20"
        ></motion.div>
      </div>
      {Object.keys(projects).map((key, i) => (
        <div
          key={i}
          className="grid grid-cols-3 gap-10 max-w-6xl mx-auto cursor-pointer"
        >
          {projects[key].map((item, i) => (
            <SingleCard key={i} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
