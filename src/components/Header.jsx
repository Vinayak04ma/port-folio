import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header=()=>{
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const links=[
    {
      id:"1",
      name:"About"
    },
    {id:"2",
      name:"Experience"
    },
    {
      id:"3",
      name:"Project"
    },
    {
      id:"4",
      name:"Contact"
    }
  
  ]
  return(
    <div className="p-[30px] bg-c text-white">
      <div className="max-w-[1200px] mx-auto flex items-center font-semibold text-[18px]">
        <div className="w-[200px] ml-[70px]">
          <a href="/">Portfolio</a>
        </div>
        <nav className="hidden md:flex list-none gap-10 ml-auto mr-[35
        px] text-[18px] font-semibold ">
                  {
                    links.map(
                         (link,index)=>{
                           return <li key={index} className="cursor-pointer hover:text-[#fc8019] flex items-center gap-2">
                             {link.name}
                          </li>
                    })
                  }
          </nav>
          {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden absolute right-[35px]'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
     

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Portfolio</h1>

        {/* Mobile Navigation Items */}
        {links.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.name}
          </li>
        ))}
      </ul>

      </div>

    </div>

  );

}
export default Header;