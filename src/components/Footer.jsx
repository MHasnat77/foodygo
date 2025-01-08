import React from "react";
import instgram from "../assets/instgram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import ticktok from "../assets/ticktok.svg";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:mt-[17vh] md:mt-[12vh] landscape:mt-[70vh]  mb-[0vh]">
      <div className=" flex gap-[2.5vw] ">
        <img src={ticktok} alt="" className="cursor-pointer   w-[3.5vw]" />
        <img src={facebook} alt="" className="cursor-pointer  w-[3.5vw]" />
        <img src={instgram} alt="" className=" cursor-pointer  w-[3.5vw]" />
        <img src={twitter} alt="" className=" cursor-pointer  w-[3.5vw]" />
      </div>
      <p className="font-Abel text-[#351207] lg:text-[1.2vw] md:text-[1.5vw] text-[2vw] my-[1.5vh]">
        Follow on
      </p>
    </div>
  );
};

export default Footer;
