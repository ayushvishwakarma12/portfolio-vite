import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVarients = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Projects",
    "Contact",
    "About",
  ];
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a variants={itemVarients} href={`#${item}`} key={item}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
