"use client";
import ReactPlayer from "react-player";
import { usePathname } from "next/navigation";
import Parallax from "@/blocks/animation/parallex";

const Hero = () => {
  const pathname = usePathname();
  if (pathname !== "/") {
    return null;
  }
  return (
    <div className="relative w-full h-[100vh] bg-black">
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 z-30  bg-black bg-opacity-30 _center flex-col">
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
          style={{
            border: "none",
          }}
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
