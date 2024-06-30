"use client";
import Link from "next/link";
import React from "react";

const Race_Menu = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row">
      {/* Container for all sections */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Section for MAN & WOMAN */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-man-race-wear ">
          {/* Overlay for small screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 ">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Man_Woman_Race">
                <span className="hover:text-green-500 cursor-pointer">MAN <br /> WOMAN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section for KIDS */}
        <div className="relative w-full lg:w-1/3 h-screen bg-cover bg-center bg-no-repeat bg-kid-race-wear">
          {/* Overlay for small screens */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 ">
            <div className="text-white text-center p-4 text-4xl lg:text-8xl font-extrabold leading-snug">
              <Link href="./Kid">
                <span className="hover:text-green-500 cursor-pointer">KIDS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Race_Menu;
