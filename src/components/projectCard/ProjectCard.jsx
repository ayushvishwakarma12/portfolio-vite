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
      <div className="grid grid-cols-2 gap-5">
        <img
          className=" object-contain min-w-full rounded-lg"
          src={item.imgUrl}
        />
        <motion.div
          // style={{ y }}
          className="flex  flex-col min-w-full justify-center"
        >
          <h2 className="text-4xl font-bold">{item.title}</h2>
          <p className="mt-4 text-lg ">{item.description}</p>
          <button className="mt-8 text-start bg-orange-600 self-start px-10 rounded-xl py-2 text-lg font-bold">
            See Demo
          </button>
        </motion.div>
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
          className=" h-3 bg-white rounded-full z-50"
        ></motion.div>
      </div>
      <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto cursor-pointer">
        {projects.map((item, i) => (
          <SingleCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
