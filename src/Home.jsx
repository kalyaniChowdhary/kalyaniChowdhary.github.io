import { useState, useRef, useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  return (
    <div
      id="Home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:gap-4 z-20">
        {/* <WaveBackground /> */}
        {/* <div className="md:w-1/3">
          <img src={""} alt="My profile" className="hidden md:block" />
        </div> */}

        <div className="flex flex-col h-full justify-center text-center  md:w-2/3">
          <h2 className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-indigo-100),var(--color-sky-400),var(--color-fuchsia-400),var(--color-sky-400),var(--color-indigo-100),var(--color-indigo-400))] bg-size-[200%_auto] animate-gradient font-heading text-4xl md:text-6xl uppercase">
            Hi! I'm Kalyani
          </h2>
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase text-lime-600">
            a web developer
          </h3>
          <p className="text-gray-400 text-2xl py-4">
            Based in Bengaluru. Passionate about creating digital solutions that
            empower people and businesses.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
