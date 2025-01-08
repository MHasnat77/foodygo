import React from "react";
import Scotter from "../assets/Scotter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Section1 = () => {
  return (
    //  Main Div
    <div
      className="lg:mt-[7.22vh] lg:ml-[24.68vw] lg:mr-[10.93vw]
    md:mt-[5.22vh] md:ml-[4.68vw] md:mr-[11.93vw]
    mt-[2.22vh] ml-[17.68vw] mr-[14vw] font-Abel "
    >
      {/* Sub Div 1 */}
      <div className="flex ">
        {/* Sub Div 1 left*/}
        <div>
          <div className="lg:w-[20.70vw] lg:h-[9.30vh] md:w-[30vw] md:h-[4.75vh] w-[28vw] h-[2.75vh] landscape:h-[12vh]  bg-[#FFC91CBF] text-[#351207] rounded-full flex items-center justify-center text-[1.87vw] ">
            <h1>Feast Your Senses</h1>
          </div>
          <div className="lg:my-[4.58vh] md:my-[1.58vh] my-[0.58vh]">
            <p className="text-[#351207] text-[3.75vw]">Bon Appétit:</p>
            <p className="text-green-500 text-[3.75vw]">Explore Culinary</p>
            <p className="text-[#351207] text-[3.75vw]">Creations</p>
          </div>
          <div>
            <p className="text-[#351207] lg:text-[1.09vw] md:text-[1.3vw] text-[1.5vw] ">
              Your ultimate destination for all things food! Explore our
              extensive collection.of mouthwatenng recipes.
            </p>
          </div>
        </div>

        {/* Sub Div 1 right*/}
        <div>
          <img
            src={Scotter}
            alt="Logo"
            className="lg:w-[41.7vw]  md:w-[70vw]"
          />
        </div>
      </div>

      {/* Sub Div 2 */}
      <div className=" flex lg:flex-row  flex-col lg:mt-[4.58vh] md:mt-[1.8vh] mt-[0.5vh] gap-[3.12vw]">
        <div className="lg:w-[20.70vw] lg:h-[9.30vh] md:w-[28vw] md:h-[3.75vh] w-[21vw] landscape:h-[12vh] h-[2.75vh] bg-[#FFC91CBF] text-[#351207] rounded-full flex items-center justify-center text-[1.87vw] cursor-pointer hover:bg-yellow-500">
          <h1>
            Order Now{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              className="ml-[1.17vw]"
            />
          </h1>
        </div>
        <div className="lg:w-[20.70vw] lg:h-[9.30vh] md:w-[30vw] md:h-[3.75vh] w-[28vw] landscape:h-[12vh] h-[2.75vh] bg-[#FFC91CBF] text-[#351207] rounded-full flex items-center justify-center text-[1.87vw] cursor-pointer hover:bg-yellow-500">
          <h1>
            Watched Demo{"   "}
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              className="text-[#00fa11] ml-[1.17vw]"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
