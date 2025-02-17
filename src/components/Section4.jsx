import React from "react";
import cabinCrew from "../assets/cabincrew.svg";
import truck from "../assets/truck.svg";
import Package from "../assets/package.svg";

const Section4 = () => {
  return (
    <>
      <div className="font-Abel ">
        <h1 className="my-[7.5vw] text-[#351207] text-[3.75vw] text-center ">
          Our Food Process
        </h1>

        <div className=" flex lg:gap-[2.34vw] gap-[1vw]  mx-[8.98vw] justify-center ">
          {/* 1 */}
          <div className=" items-center flex flex-col text-center">
            <div className=" bg-[#FFD755] w-[11.32vw] h-[11.32vw] rounded-full flex justify-center items-center ">
              <img src={cabinCrew} alt="" className=" w-[5vw] h-[5vw]" />
            </div>

            <div className="my-[2vh] text-[#351207] text-[1.9vw] ">Prepare</div>

            <div className="text-[#351207] lg:text-[1.1vw] md:text-[1.3vw] text-[1.4vw]">
              Restaurants offer a variety of dining
            </div>
          </div>

          {/*  2*/}
          <div className="  border-t-4 border-dashed  border-[#6F2C16] w-[20vw]  h-[0px] lg:mt-[10.41vh]  md:mt-[3vh] mt-[2vh] "></div>
          {/* 3 */}
          <div className="items-center flex flex-col text-center">
            <div className="  bg-[#FFD755] w-[11.32vw] h-[11.32vw] rounded-full flex justify-center items-center">
              <img src={Package} alt="" className=" w-[5vw] h-[5vw]" />
            </div>

            <div className="my-[2vh] text-[#351207] text-[1.9vw] ">Packing</div>

            <div className="text-[#351207] lg:text-[1.1vw] md:text-[1.3vw] text-[1.4vw]">
              Catering companies specialize in providing
            </div>
          </div>
          {/*  4*/}
          <div className=" border-t-4 border-dashed  border-[#6F2C16] w-[20vw] h-[0px] lg:mt-[10.41vh]  md:mt-[3vh] mt-[2vh]  "></div>
          {/*  5*/}
          <div className="items-center flex flex-col text-center">
            <div className="  bg-[#FFD755] w-[11.32vw] h-[11.32vw] rounded-full flex justify-center items-center">
              <img src={truck} alt="" className=" w-[5vw] h-[5vw]" />
            </div>

            <div className="my-[2vh] text-[#351207] text-[1.9vw] ">
              Delivery
            </div>

            <div className="text-[#351207] lg:text-[1.1vw] md:text-[1.3vw] text-[1.4vw]">
              Catering companies specialize in providing
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
