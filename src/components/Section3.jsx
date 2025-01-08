import React from "react";
import EatingPicture from "../assets/eating.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section3 = () => {
  return (
    // Main div
    <div className="flex mx-[8.90vw] md:mt-[10.27vh] mt-[5.5vh] font-Abel">
      {/* div 1 */}
      <div className=" md:w-[27.36vw] md:h-[32vh] lg:w-[35vw] lg:h-[42.63vh] w-[29vw] h-[22vh] lg:mt-[30.72vh] mt-[1.85vh] mr-[13.8vw]">
        <div className="">
          <h1 className="text-[#351207] text-[3.75vw]">
            Order Your Best Food Any Time
          </h1>

          <div>
            <p className="text-[#351207] lg:text-[1.09vw] md:text-[1.3vw] text-[1.35vw] lg:my-[3.19vh] my-[2.5vh]">
              Whether you're a seasoned chef or a kitchen novice, our
              usor-friendly platform caters to all levels of exportiso, onsuring
              everyone can savor the joy of creating delicious meals.
            </p>

            <div className="lg:w-[20.70vw] lg:h-[9.30vh] md:w-[15.79vw] md:h-[3.75vh] landscape:h-[15vh] w-[17vw] h-[2vh] bg-[#FFC91CBF] text-[#351207] rounded-full flex items-center justify-center text-[1.87vw] cursor-pointer hover:bg-yellow-500">
              <h1>
                Order Now{" "}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div>
        <img src={EatingPicture} alt="" className="w-[45.62vw]" />
      </div>
    </div>
  );
};

export default Section3;
