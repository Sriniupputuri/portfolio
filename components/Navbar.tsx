import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="h-20 bg-[#E8DAFF] flex justify-between items-center px-8 relative">
      <div className="">
        <p className="text-lg font-bold text-[30px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" >Srinivas Upputuri</p>
      </div>
      <div className="">
        <ul className="hidden md:flex">
          <li className="mr-8 hover:text-cyan-500 text-lg font-normal text-[#1e0942]">
            <Link href="">Contact</Link>
          </li>
          <li className="mr-8 hover:text-cyan-500 text-lg font-normal text-[#1e0942]">
            <Link href="">profile</Link>
          </li>
          <li className="mr-8 hover:text-cyan-500 text-lg font-normal text-[#1e0942]">
            <Link href="">project</Link>
          </li>
          <li className="ml-16 ">
            <Link href=""></Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-[-30px] right-10 px-6 py-4 rounded-full bg-blue-500">
        <p>jj</p>
      </div>
    </div>
  );
};

export default Navbar;
