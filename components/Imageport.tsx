// use client
"use client";
import React from "react";
import Image from "next/image";
import img from "../Images/srini.jpeg";

const Imageport: React.FC = () => {
  return (
    <div className="h-screen pt-20 bg-zinc-100">
      <div className="sm:flex justify-around p-6">
        <div className="image flex justify-center">
          <Image
            src={img}
            alt="pet"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center text-center py-6 sm:py-0">
          <h2 className="text-slate-500 text-[20px]">
            {`I'm a`}{" "}
            <span className="px-2 text-lg font-bold text-[40px] bg-gradient-to-r from-pink-800 to-blue-500 bg-clip-text text-transparent">
              React Developer
            </span>{" "}
          </h2>
        </div>
      </div>
      <div className="flex justify-center text-justify gap-4 p-10">
        <h2 className="font-bold text-cyan-900">Skills: </h2>
        <ul className="flex flex-wrap gap-6">
          <li className="text-slate-700">HTML</li>
          <li className="text-neutral-700">CSS</li>
          <li className="text-red-700">BOOTSTRAP</li>
          <li className="text-zinc-700">TAILWIND</li>
          <li className="text-cyan-700">JAVASCRIPT</li>
          <li className="text-lime-900">REACT</li>
          <li className="text-blue-700">REDUX</li>
          <li className="text-fuchsia-500">REACT-QUERY</li>
          <li className="text-orange-700">REDUX</li>
          <li className="text-teal-400">MUI</li>
          <li className="text-lime-500">NEXT</li>
          <li className="text-yellow-500">TYPESCRIPT</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Imageport;
