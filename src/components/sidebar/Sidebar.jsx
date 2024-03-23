import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import Links from "./links/Links";

const Sidebar = ({ sidebar, setSidebar, variants }) => {
  return (
    <motion.div
      animate={sidebar ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      variants={variants}
      className="flex flex-col items-center z-20 justify-center bg-white text-black w-[220px] sm:w-[400px] right-0 fixed -top-2 h-[110vh] "
    >
      <div className=" absolute top-4 right-2">
        <IoIosClose className="w-8 h-8" onClick={() => setSidebar(false)} />
      </div>
      <Links />
    </motion.div>
  );
};

export default Sidebar;
