import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import projects from "../../utils/Projects";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const SingleProject = ({ e }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      ref={ref}
      className="h-screen flex justify-center items-center relative"
      style={{ perspective: "500px" }}
    >
      <div className="flex items-center">
        <img
          className="w-[400px] absolute top-0 right-0 left-0 bottom-0"
          src={e.imgUrl}
        />
        <motion.h2 style={{ y }}>{e.title}</motion.h2>
      </div>
    </section>
  );
};

const Projectt = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={ref} className="relative">
      <motion.div
        className="fixed top-0 bottom-0 left-0 right-0 h-3 bg-white"
        style={{ scaleX }}
      />
      <div>
        {projects.map((e, i) => (
          <SingleProject e={e} key={i} />
        ))}
      </div>
    </section>
  );
};

// const Projectt = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-5%"]);
//   return (
//     <div ref={ref} className="">
//       <div ref={ref} className="sticky top-0 flex h-screen overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-5">
//           {projects.map((e, i) => (
//             <div className="h-[900px] min-w-[900px] bg-white">
//               <img src={e.imgUrl} />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

export default Projectt;
