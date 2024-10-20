import React from "react";
import im1 from "../images/aboutImage.png"
import im2 from "../images/cursorIcon.png"
import im3 from "../images/serverIcon.png"
import im4 from "../images/uiIcon.png"
const About = () => {
  return (
    <div className=" bg-c text-white">
    <section className=" md:block hidden bg-[#0C0C0C99] text-[white] rounded-lg mx-[100px] py-5">
      <h2 className="font-bold text-4 m-[25px] text-[35px]">About</h2>
      <div className="flex">
        <img 
          src={im1}
          alt="Me sitting with a laptop"
          className="w-[300px] lg:w-[500px]"
        />
        <ul className="">
          <li className="flex items-center p-[50px] rounded-lg  hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im2}alt="Cursor icon" />
            <div className="">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="flex items-center p-[50px] rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im3} alt="Server icon" />
            <div className="">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="flex items-center p-[60px] rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im4} alt="UI icon" />
            <div className="">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    {/* mobile */}
    <section className="md:hidden w-full block  text-[white] rounded-lg  py-5">
      <h2 className="font-bold text-4 m-[25px] text-[35px]">About</h2>
      <div className="flex flex-col">
        <img 
          src={im1}
          alt="Me sitting with a laptop"
          className=""
        />
        <ul className="">
          <li className="flex items-center p-[50px] rounded-lg  hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im2}alt="Cursor icon" />
            <div className="">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="flex items-center p-[50px] rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im3} alt="Server icon" />
            <div className="">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="flex items-center p-[60px] rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
            <img src={im4} alt="UI icon" />
            <div className="">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};
export default About;