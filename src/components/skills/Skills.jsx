import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import Heading from "../heading/Heading";
import SkillCard from "../skillCard/SkillCard";
import { skills } from "../../utils/Skills";

const variants = {
  initial: { opacity: 0, y: -40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 80,
    },
  },
};

const Skills = () => {
  return (
    <section>
      <div className="mt-8 mb-8 px-10">
        <Heading text={"My Skills"} />
      </div>
      <div className="flex flex-wrap items-center">
        {skills.map((e) => (
          <div className="px-4 lg:px-12 ">
            <h1 className="text-xl lg:text-2xl font-semibold my-2 mt-4 lg:my-4 ">
              {e.category}
            </h1>
            <motion.div
              className="flex-wrap lg:flex justify-between space-y-4 gap-4 md:gap-8 lg:gap-12"
              variants={variants}
              initial="initial"
              whileInView={"animate"}
            >
              {e.skillsName.map((e) => (
                <SkillCard
                  variants={variants}
                  skillName={e.name}
                  SkillIcon={e.skillIcon}
                  percentage={e.percentage}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
