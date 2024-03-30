import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import {
  HTML,
  CSS,
  TailwindCSS,
  ReactJS,
  NextJS,
  Redux,
  Bootstrap,
  JavaScript,
  Python,
  ExpressJS,
  NodeJS,
  MySql,
  MongoDB,
  Git,
  GitHub,
} from "../../utils/Icons";
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
    },
  },
};

const Skills = () => {
  return (
    <section>
      <div className="mt-8 mb-8 px-10">
        <Heading text={"My Skills"} />
      </div>
      {/* <motion.div
        className="grid grid-cols-8 gap-5 px-5"
        variants={variants}
        initial="initial"
        whileInView={"animate"}
      >
        <SkillCard
          variants={variants}
          SkillIcon={HTML}
          skillName={"HTML"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={CSS}
          skillName={"CSS"}
          percentage={95}
        />
        <SkillCard
          variants={variants}
          SkillIcon={TailwindCSS}
          skillName={"Tailwind CSS"}
          percentage={95}
        />
        <SkillCard
          variants={variants}
          SkillIcon={ReactJS}
          skillName={"React.JS"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={NextJS}
          skillName={"Next.JS"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={Redux}
          skillName={"Redux"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={Bootstrap}
          skillName={"Bootstap"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={JavaScript}
          skillName={"JavaScript"}
          percentage={90}
        />
        <SkillCard
          variants={variants}
          SkillIcon={Python}
          skillName={"Python"}
          percentage={80}
        />
        <SkillCard
          variants={variants}
          SkillIcon={ExpressJS}
          skillName={"Express.JS"}
          percentage={70}
        />
        <SkillCard
          variants={variants}
          SkillIcon={NodeJS}
          skillName={"Node.JS"}
          percentage={75}
        />
        <SkillCard
          variants={variants}
          SkillIcon={MySql}
          skillName={"MySql"}
          percentage={80}
        />
        <SkillCard
          variants={variants}
          SkillIcon={MongoDB}
          skillName={"MongoDB"}
          percentage={60}
        />
        <SkillCard
          variants={variants}
          SkillIcon={Git}
          skillName={"Git"}
          percentage={80}
        />
        <SkillCard
          variants={variants}
          SkillIcon={GitHub}
          skillName={"GitHub"}
          percentage={80}
        />
      </motion.div> */}
      <div className="flex flex-wrap items-center">
        {skills.map((e) => (
          <div className="px-4 lg:px-12 ">
            <h1 className="text-2xl font-semibold my-4 ">{e.category}</h1>
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
