import React from "react";
import Group1 from "../assets/Group1.svg";

import stars from "../assets/stars.svg";

import user1 from "../assets/user1.svg";

const Section5 = () => {
  return (
    <>
      {/* main div */}
      <div className="lg:mt-[18.47vh] md:mt-[13vh] mt-[9vh] font-Abel flex ">
        {/* left div */}
        <div className="  flex flex-col ml-[9.69vw] w-[34vw] lg:h-[73vh] md:h-[25vh] h-[30vh]">
          <img src={Group1} alt="" />
        </div>

        {/* right div */}

        <div className="w-[34vw] lg:h-[73vh] md:h-[5vh] h-[30vh]  lg:ml-[27vw] lg:mr-[6.71vw] md:ml-[24vw] md:mr-[5.5vh] ml-[22vw] mr-[6vw] lg:mt-[8vh] md:mt-[3vh] ">
          <h1 className="text-[#351207] text-[3.75vw]">Customer Reviews</h1>
          <p className="text-[#351207] text-[1.09vw] ">
            {"  "}
            Overall my visit to FoodBox exceeded all expectations.
          </p>
          <p className="text-[#351207] text-[1.09vw] ">
            {"  "}
            lhighly recommend it to anyone.{"  "}
          </p>
          <p className="text-[#351207] text-[1.09vw]">
            looking for an extraordinary culinary aduenture.
          </p>
          <img
            src={stars}
            alt=""
            className="lg:mt-[9vh] md:mt-[2vh] w-[9.37vw]"
          />
          <div className="flex gap-[3.12vw]">
            <img src={user1} alt="" className="w-[8.20vw]" />
            <div>
              <h1 className="text-[#351207] text-[1.87vw] ">Samantha Smith</h1>
              <h1 className="text-[#351207] text-[1.17vw] ">Samantha Smith</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
