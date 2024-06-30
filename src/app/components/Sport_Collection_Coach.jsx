"use client";
import Link from "next/link";
import React from "react";

const images = [
  { className: 'bg-Sport_Coach-1', text: 'CLASSIC GILET', description: 'Comfortable and stylish.' },
  { className: 'bg-Sport_Coach-2', text: 'LITE JACKET', description: 'Lightweight and versatile.' },
  { className: 'bg-Sport_Coach-3', text: 'T-SHIRT', description: 'Soft and breathable.' },
  { className: 'bg-Sport_Coach-4', text: 'TRACK GILET', description: 'Durable and functional.' },
];

const Sport_Collection_Coach = () => {
  return (
    <>
      {images.map((image, index) => (
        <section key={index} className="relative w-full h-screen flex items-center justify-center">
          {/* Immagine di sfondo visibile su schermi grandi */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${image.className} bg-common`}></div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1 ">
            {/* Colonna con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${image.className} bg-common`}></div>

            {/* Testo sotto l'immagine su schermi piccoli */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
              <div className="text-4xl font-extrabold leading-snug">
                {image.text}
              </div>
              <div className="text-base mt-2">
                {image.description}
              </div>
            </div>

            {/* Testo accanto all'immagine su schermi grandi */}
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

export default Sport_Collection_Coach;
