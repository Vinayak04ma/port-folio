import React from "react";
import imag from "../images/heroImage.png"
const Hero = () => {
  return (
    <>
    <section className="hidden md:flex bg-c text-white ">
      <div className="flex flex-col mt-[130px] ml-[100px]  text-white">
        <h1 className="font-bold text-[40px]">Hi, I'm Ada</h1>
        <p className="py-4 ">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vinayakmaheshwari57@gmail.com" className="inline p-2 w-[110px] my-3 font-bold border-3 border-solid bg-[#576CBC] rounded-lg">
          Contact Me
        </a>
      </div>
      <img
        src={imag}
        alt="Hero image of me"
        className=""
      />
      <div className=""/>
      <div className="" />
    </section>
    {/* mobile */}
    <sectio className="md:hidden flex flex-col-reverse bg-c text-white ">
    <div className="flex flex-col justify-center items-center m-3  text-white">
      <h1 className="font-bold text-[40px]">Hi, I'm Ada</h1>
      <p className="py-4 ">
        I'm a full-stack developer with 5 years of experience using React and
        NodeJS. Reach out if you'd like to learn more!
      </p>
      <a href="mailto:vinayakmaheshwari57@gmail.com" className="inline p-2 w-[110px] my-3 font-bold border-3 border-solid bg-[#576CBC] rounded-lg">
        Contact Me
      </a>
    </div>
    <div className="flex flex-col justify-center items-center m-3">
    <img
      src={imag}
      alt="Hero image of me"
      className="w-[360px] "/>
    <div className=""/>
    <div className="" />
    </div>
  </sectio>
  </>
  );
};
export default Hero;