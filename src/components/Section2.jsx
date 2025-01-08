import React from "react";
import FastFood from "../assets/fastfood.svg";
import Chinese from "../assets/chinese.svg";
import Drink from "../assets/drink.svg";
import Salad from "../assets/salad.svg";

const Section2 = () => {
  return (
    <div className="font-Abel text-center mt-[3.52vh]">
      <h1 className="text-[#351207] text-[3.75vw] mb-[2vw]">Top Categories</h1>

      <div className="bg-[#FFC91CBF] w-full flex items-center justify-center lg:h-[50.55vh] md:h-[28vh] landscape:h-[55vh] h-[18vh] gap-[3vw]">
        <div className="bg-[#00000026] w-[20vw] lg:h-[40vh] md:h-[22vh] landscape:h-[38vh] h-[10.19vh]    rounded-[1.95vw] flex flex-col justify-center items-center  hover:bg-[#FFFFFF59]  hover:lg:h-[43.88vh] hover:md:h-[25vh] landscape:hover:h-[43vh] hover:h-[12vh] cursor-pointer">
          <img src={FastFood} alt="" className="w-[9.76vw]" />
          <h1 className="text-[#351207] text-[1.87vw] lg:mt-[5.41vh] md:mt-[3vh] mt-[1.5vh] lg:mb-[5.55vh] ">
            Fast Food
          </h1>
        </div>

        <div className="bg-[#00000026] w-[20vw] lg:h-[40vh] md:h-[22vh] landscape:h-[38vh] h-[10vh]     rounded-[1.95vw] flex flex-col justify-center items-center  hover:bg-[#FFFFFF59] hover:lg:h-[43.88vh] hover:md:h-[25vh] landscape:hover:h-[43vh] hover:h-[12vh] cursor-pointer">
          <img src={Salad} alt="" className="w-[9.76vw]" />
          <h1 className="text-[#351207] text-[1.87vw] lg:mt-[5.41vh] md:mt-[3vh] mt-[1.5vh]  lg:mb-[5.55vh] ">
            Salad
          </h1>
        </div>
        <div className="bg-[#00000026] w-[20vw] lg:h-[40vh] md:h-[22vh] landscape:h-[38vh] h-[10vh]    rounded-[1.95vw] flex flex-col justify-center items-center  hover:bg-[#FFFFFF59]  hover:lg:h-[43.88vh] hover:md:h-[25vh] landscape:hover:h-[43vh] hover:h-[12vh] cursor-pointer">
          <img src={Chinese} alt="" className="w-[9.76vw] " />
          <h1 className="text-[#351207] text-[1.87vw] lg:mt-[5.41vh] md:mt-[3vh] mt-[1.5vh] lg:mb-[5.55vh] ">
            Chinese
          </h1>
        </div>

        <div className="bg-[#00000026] w-[20vw] lg:h-[40vh] md:h-[22vh] landscape:h-[38vh] h-[10vh]     rounded-[1.95vw] flex flex-col justify-center items-center  hover:bg-[#FFFFFF59]  hover:lg:h-[43.88vh]  hover:md:h-[25vh] landscape:hover:h-[43vh] hover:h-[12vh] cursor-pointer">
          <img src={Drink} alt="" className="w-[5vw] " />
          <h1 className="text-[#351207] text-[1.87vw] lg:mt-[5.41vh] md:mt-[3vh] mt-[1.5vh] lg:mb-[5.55vh]  ">
            Drinks
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section2;
