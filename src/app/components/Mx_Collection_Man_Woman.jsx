"use client";
import Link from "next/link";
import React from "react";

const images = [
  { className: 'bg-Mx-1', text: 'MX-1 JERSEY', description: 'Comfortable and stylish.' },
  { className: 'bg-Mx-2', text: 'MX-2 JERSEY', description: 'Lightweight and versatile.' },
  { className: 'bg-Mx-3', text: 'MX-3 JERSEY', description: 'Soft and breathable.' },
  { className: 'bg-Mx-4', text: 'MX-4 JERSEY', description: 'Durable and functional.' },
  { className: 'bg-Mx-5', text: 'MX-5 JERSEY', description: 'Sleek and aerodynamic.' },
  { className: 'bg-Mx-6', text: 'MX-6 JERSEY', description: 'High-performance fabric.' },
  { className: 'bg-Mx-7', text: 'MX-7 JERSEY', description: 'Advanced moisture-wicking.' },
  { className: 'bg-Mx-8', text: 'MX-8 JERSEY', description: 'Designed for all-day comfort.' },
  { className: 'bg-Mx-9', text: 'MX-9 JERSEY', description: 'Modern and minimalist.' },
  { className: 'bg-Mx-10', text: 'MX-10 SLIM', description: 'Streamlined for speed.' },
  // Aggiungi altre immagini e testi qui
];

const Mx_Collection = () => {
  return (
    <>
      {images.map((image, index) => (
        <section key={index} className="relative w-full h-screen flex items-center justify-center">
          {/* Immagine di sfondo visibile su schermi grandi */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${image.className} bg-common`}></div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1">
            {/* Colonna sinistra con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${image.className} bg-common`}>
              {/* Testo sotto l'immagine su schermi piccoli */}
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
                <div className="text-4xl font-extrabold leading-snug">
                  {image.text}
                </div>
                <div className="text-base ">
                  {image.description}
                </div>
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

export default Mx_Collection;
