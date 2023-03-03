import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex flex-wrap">
      {/* Div 1 */}
      <div className="flex-1 portrait:flex-col landscape:flex justify-center border-2 py-3">
        <div className="mx-2 portrait:items-center portrait:px-2">
          <GoLocation className="w-[60px] h-[60px] text-lime-500 " />
        </div>
        <div className=" flex flex-col px-2">
          <h1 className="my-1">Our Office</h1>
          <p className="my2">123, Street Jaipur, India</p>
        </div>
      </div>

      {/* Div 2 */}
      <div className="flex-1 portrait:flex-col landscape:flex justify-center border-2 py-3">
        <div className="mx-2 portrait:items-center portrait:px-2">
          <AiOutlineMail className="w-[60px] h-[60px] text-lime-500 " />
        </div>
        <div className=" flex flex-col px-2">
          <h1 className="my-1">Email Us</h1>
          <p className="my2">surendra.singh.kamboj@hotmail.com</p>
        </div>
      </div>

      {/* Div 3 */}
      <div className="flex-1 portrait:flex-col landscape:flex justify-center border-2 py-3">
        <div className="mx-2 portrait:items-center portrait:px-2">
          <AiOutlinePhone className="w-[60px] h-[60px] text-lime-500 " />
        </div>
        <div className=" flex flex-col px-2">
          <h1 className="my-1">Contact Us</h1>
          <p className="my2">+91-8815203324</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
