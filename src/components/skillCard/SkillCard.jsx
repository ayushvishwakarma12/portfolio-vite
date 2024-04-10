import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";

const SkillCard = ({ SkillIcon, skillName, percentage, variants }) => {
  return (
    <motion.div
      className="text-center py-8 lg:py-10 px-4 rounded-full border-2 border-white inline-block w-[90px] lg:w-28 mr-4"
      variants={variants}
    >
      <SkillIcon />
      <div className="text-sm lg:text-base text-center h-8 font-semibold my-2 lg:my-4 truncate">
        {skillName}
      </div>
      <CircularProgressbar
        className="w-14 h-14 inline-block"
        value={percentage}
        text={percentage}
        strokeWidth={10}
        styles={buildStyles({
          textSize: "25px",
          pathColor: "#4A9FD5",
          textColor: "white",
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
        })}
      />
    </motion.div>
  );
};

export default SkillCard;
