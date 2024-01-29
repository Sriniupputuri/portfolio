// use client

import Imageport from "@/components/Imageport";
import Navbar from "@/components/Navbar";
import About from "./about/page";

export default function Home() {
  return (
      <div className="h-full">
        <Navbar />
        <Imageport />
        <About />
      </div>
  )
}
