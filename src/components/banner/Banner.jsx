import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../projectCard/ProjectCard";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designing", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const picVariants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  // const sliderVariants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: "220%",
  //     transform: {
  //       repeat: Infinity,
  //       duration: 20,
  //     },
  //   },
  // };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row justify-between items-center gap-5 bg-gradient-to-r from-[#0c0c1d] to-[#111132] px-[50px] overflow-hidden">
      <motion.div
        className="relative p-5 md:max-w-md xl:max-w-2xl order-2 md:order-1"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="my-5 mb-10">
          <motion.span
            variants={textVariants}
            className="bg-gradient-to-r from-blue-100 to-blue-400 text-black text-sm md:text-lg font-extrabold p-2 md:p-[15px] rounded-md cursor-pointer"
          >
            Welcome&nbsp;to&nbsp;my&nbsp;Portfolio
          </motion.span>
        </div>
        <motion.h1
          variants={textVariants}
          className="text-2xl my-5"
        >{`Hi I'm Ayush...`}</motion.h1>
        <div className="h-[100px]">
          <motion.h1
            variants={textVariants}
            className="text-xl md:text-2xl lg:text-6xl font-bold my-5"
          >
            {text}
          </motion.h1>
        </div>
        <motion.p
          variants={textVariants}
          className="text-sm md:text-base lg:text-lg leading-6 md:leading-8"
        >
          Enthusiastic and highly motivated Web Developer with a passion for
          creating visually appealing and user-friendly websites. Proficient in
          front-end technologies like HTML, CSS, JavaScript, and React JS, with
          a strong foundation in responsive web design. A quick learner and a
          team player, committed to staying up-to-date with the latest industry
          trends and best practices.
        </motion.p>
      </motion.div>
      {/* <div className="absolute text-[20vh] bottom-0 whitespace-nowrap text-[#ffffff09] tracking-widest">
        Web Designer
      </div> */}
      <motion.div
        animate="animate"
        initial="initial"
        variants={picVariants}
        className="relative md:right-14 p-5 md:order-2"
      >
        <div className="rounded-full border-4 z-10 bg-sky-950">
          <img
            className=" w-[400px] z-0 rounded-full brightness-50"
            src="/profile_pic.png"
            alt="hero"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
