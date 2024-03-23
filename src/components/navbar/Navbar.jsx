import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
    closed: { opacity: 0, x: "100%", transition: "spring" },
  };

  // const varients = {
  //   open: {
  //     clipPath: "circle(1200px at 50px 50px)",
  //     transition: {
  //       type: "spring",
  //       stiffness: 20,
  //     },
  //   },
  //   closed: {
  //     clipPath: "circle(30px at 50px 50px)",
  //     transition: {
  //       delay: 0.5,
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 40,
  //     },
  //   },
  // };

  return (
    <>
      <motion.div className="p-2 md:p-5 " variants={variants}>
        <div className="flex justify-between items-center text-lg md:text-2xl">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold cursor-pointer"
          >
            Ayush
          </motion.span>
          <div className="md:flex gap-5 text-xl hidden">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <motion.div className="relative bottom-3 md:hidden right-5">
            <div className="absolute">
              <GiHamburgerMenu onClick={() => setSidebar(true)} />
              <Sidebar
                sidebar={sidebar}
                setSidebar={setSidebar}
                variants={variants}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
