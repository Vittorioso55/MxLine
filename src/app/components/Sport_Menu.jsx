"use client";
import React from "react";
import Link from "next/link";

const Sport_Menu = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row">
      {/* Container for all sections */}
      <div className="hidden lg:flex flex-col lg:flex-row w-full h-full">
        {/* Section for MAN */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-man-sport">
          {/* Overlay for large screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Man_Sport">
                <span className="hover:text-green-500 cursor-pointer">MAN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section for WOMAN */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-woman-sport">
          {/* Overlay for large screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Sport_Woman">
                <span className="hover:text-green-500 cursor-pointer">WOMAN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section for COACH */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-coach-sport">
          {/* Overlay for large screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Sport_Coach">
                <span className="hover:text-green-500 cursor-pointer">COACH</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Small screens layout */}
      <div className="lg:hidden flex flex-col items-center justify-center h-full">
        {/* Text for MAN */}
        <div className="text-center text-4xl font-extrabold text-white p-4">
          <Link href="./Man_Sport">
            <span className="hover:text-green-500 cursor-pointer">MAN</span>
          </Link>
        </div>
        <hr className="border-t border-white w-1/2 my-2" />
        {/* Text for WOMAN */}
        <div className="text-center text-4xl font-extrabold text-white p-4">
          <Link href="./Sport_Woman">
            <span className="hover:text-green-500 cursor-pointer">WOMAN</span>
          </Link>
        </div>
        <hr className="border-t border-white w-1/2 my-2" />
        {/* Text for COACH */}
        <div className="text-center text-4xl font-extrabold text-white p-4">
          <Link href="./Sport_Coach">
            <span className="hover:text-green-500 cursor-pointer">COACH</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sport_Menu;
