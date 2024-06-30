"use client";
import React from "react";
import Link from "next/link";

const Sport_Menu = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row">
      {/* Container for all sections */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Section for MAN */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-man-sport">
          {/* Overlay for small screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 lg:bg-opacity-0">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Man_Sport">
                <span className="hover:text-green-500 cursor-pointer">MAN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section for WOMAN */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-woman-sport ">
          {/* Overlay for small screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 lg:bg-opacity-0">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Sport_Woman">
                <span className="hover:text-green-500 cursor-pointer">WOMAN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section for COACH */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-coach-sport ">
          {/* Overlay for small screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 lg:bg-opacity-0">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Sport_Coach">
                <span className="hover:text-green-500 cursor-pointer">COACH</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport_Menu;
