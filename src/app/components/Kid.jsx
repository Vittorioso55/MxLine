"use client";
import React from "react";

const images = [
  { className: 'bg-Mx-Kid', text: 'MX-KIDS', description: 'Designed for young riders.' },
];

const Kid = () => {
  return (
    <>
      {images.map((image, index) => (
        <section key={index} className="relative w-full h-screen flex items-center justify-center">
          {/* Background image for large screens */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${image.className} bg-common`}></div>

          {/* Content */}
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left column with image for small screens */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${image.className} bg-common`}>
              {/* Text overlay for small screens */}
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
                <div className="text-4xl font-extrabold leading-snug">
                  {image.text}
                </div>
                <div className="text-base mt-2">
                  {image.description}
                </div>
              </div>
            </div>

            {/* Text beside the image for large screens */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-black bg-opacity-75 p-10 text-center text-white w-full h-full">
              <div className="text-4xl lg:text-8xl font-extrabold leading-snug mb-4">
                {image.text}
              </div>
              <div className="text-2xl lg:text-4xl">
                {image.description}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Kid;
