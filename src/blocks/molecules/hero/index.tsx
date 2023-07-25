"use client";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import Parallax from "@/blocks/animation/parallex";

const Hero = () => {
  const pathname = usePathname();
  if (pathname !== "/") {
    return null;
  }
  return (
    <div className="relative w-full h-[100vh] bg-black">
      <motion.button
        animate={{
          y: [0, 50],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="absolute bottom-1/4 left-[calc(50%-31px)] transform -translate-x-1/2 text-white text-center z-40 bg-black bg-opacity-50 rounded-full p-5 "
      >
        <FiChevronDown color="white" size={22} className="stroke-white " />
      </motion.button>
      <div className="absolute w-full h-full top-0 left-0 z-30  bg-black bg-opacity-40 _center flex-col">
        <div className="p-10 rounded-md max-w-[800px] bg-opacity-50">
          <Parallax>
            <h1 className="text-white md:text-3xl text-xl text-center font-heading mb-2">
              "Don’t wait to buy real estate.
              <br /> Buy real estate and wait."
            </h1>
          </Parallax>
        </div>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          playing
          loop
          muted
          url="video_new.mov"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
export default Hero;
