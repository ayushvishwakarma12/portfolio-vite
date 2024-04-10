import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Heading = ({ text }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        {/* <div className="relative">
          <IoIosArrowBack className="relative text-white w-[55px] h-[55px] z-10" />
          <div className="absolute top-[26px] left-5 h-2 z-0 w-[100px] bg-white"></div>
        </div> */}
        {/* <FaArrowLeftLong className="" /> */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold tracking-wider">
          {text}
        </h1>
        <FaLongArrowAltLeft className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] ml-5" />
      </div>
      {/* <h1 className="text-4xl font-bold">{text}</h1> */}
    </div>
  );
};

export default Heading;
