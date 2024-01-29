"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className="h-20 bg-zinc-100 flex justify-between items-center px-8 fixed drop-shadow-md w-full">
        <div className="">
          <p className="text-lg font-bold text-[30px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            <Link href="/">Srinivas Upputuri</Link>
          </p>
        </div>
        <div className="">
          <ul className="hidden md:flex">
            <li className="mr-8 hover:text-cyan-500 text-lg font-normal text-[#1e0942]">
              <Link href="/about">Contact</Link>
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
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? "=" : "X"}
        </div>

        {/* <div className="absolute bottom-[-30px] right-10 px-6 py-4 rounded-full bg-blue-500">
        <p>jj</p>
      </div> */}
      </div>
      {/* {toggle ? (
        <div className={`md:flex md:items-center md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] w-full h-screen absolute md:w-auto md:pl-0 left-0 pl-9 transition-all duration-500 ease-in ${toggle ? 'top-20 opacity-100' : 'top-[-490px]'} opacity-0`}>
          <p>dfsh</p>
          <p>dfsh</p>
          <p>dfsh</p>
        </div>
      ) : null} */}
    </>
  );
};

export default Navbar;
