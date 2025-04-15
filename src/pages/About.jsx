import React from "react";
import bgLight from "../assets/bg.jpeg";

const About = () => {
  return (
    <div className="container mx-auto max-w-[1280px] min-h-[125px] flex items-center justify-center py-4 px-6 relative">
      <img src={bgLight} alt="Background" className="absolute top-[0]" />
      <div className="flex flex-col max-w-[649px]   items-center justify-center text-center p-4 relative z-10  ">
        <p className="text-base font-semibold tracking-widest leading-normal text-center text-white uppercase mt-[10px] ">SHORT STORY ABOUT US</p>
        <h2 className="text-6xl leading-[100%] font-bold leading-10 text-center text-white mb-[12px]">The big story behind, our beautyness center</h2>
        <button className="cursor-pointer text-sm font-extrabold tracking-widest leading-none text-center text-white uppercase  px-9 py-6 bg-gray-500 hover:bg-gray-600 transition">
          Make a reservation
        </button>
      </div>
    </div>
  );
};

export default About;
