import Link from "next/link";
import React from "react";

const images = [
  {
    className: 'bg-Sport-1',
    text: 'T-SHIRT',
    description: 'Comfortable and stylish.',
    features: 'Soft, Durable, Machine washable',
    fabric: 'Cotton blend',
    options: 'Various colors and sizes'
  },
  {
    className: 'bg-Sport-2',
    text: 'SWEATSHIRT',
    description: 'Warm and cozy.',
    features: 'Fleece lined, Ribbed cuffs, Durable',
    fabric: 'Polyester blend',
    options: 'Various colors and sizes'
  },
  {
    className: 'bg-Sport-3',
    text: 'POLO',
    description: 'Classic and versatile.',
    features: 'Breathable, Stylish, Easy care',
    fabric: 'Cotton-Polyester blend',
    options: 'Various colors and sizes'
  },
  {
    className: 'bg-Sport-4',
    text: 'LITE JACKET',
    description: 'Lightweight and breathable.',
    features: 'Quick-dry, Reflective strips',
    fabric: 'Polyester blend',
    options: 'Various colors and sizes'
  }
];

const Sport_Man_Collection = () => {
  return (
    <>
      {images.map((image, index) => (
        <section key={index} className="relative w-full h-screen flex items-center justify-center whitespace-nowrap">
          {/* Immagine di sfondo visibile su schermi grandi */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${image.className} bg-common`}></div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1 ">
            {/* Colonna sinistra con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${image.className} bg-common`}>
              {/* Testo sotto l'immagine su schermi piccoli */}
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 p-4 text-lg sm:text-xl md:text-2xl font-extrabold leading-snug text-center">
                <div className="text-white">
                  {image.text}
                </div>
                <div className="text-white opacity-75 text-light whitespace-nowrap">
                  {image.description}
                </div>
                <div className="text-white mt-2 text-base sm:text-lg md:text-xl">
                  <strong>Features:</strong> {image.features}
                </div>
                <div className="text-white mt-2 text-base sm:text-lg md:text-xl">
                  <strong>Fabric:</strong> {image.fabric}
                </div>
                <div className="text-white mt-2 text-base sm:text-lg md:text-xl">
                  <strong>Options:</strong> {image.options}
                </div>
              </div>
            </div>

            {/* Colonna destra con il testo, visibile su tutti gli schermi */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-black bg-opacity-75 w-full text-4xl lg:text-8xl font-extrabold leading-snug text-center">
              <div className="text-white">
                {image.text}
              </div>
              <div className="text-white opacity-75 text-2xl lg:text-4xl mt-4">
                {image.description}
              </div>
              <div className="text-white mt-4 text-xl lg:text-2xl">
                <strong>Features:</strong>
                <div className="text-white opacity-75 text-2xl lg:text-4xl mt-4">
                  {image.features}
                </div>
              </div>
              <div className="text-white mt-4 text-xl lg:text-2xl">
                <strong>Fabric:</strong>
                <div className="text-white opacity-75 text-2xl lg:text-4xl mt-4">
                  {image.fabric}
                </div>
              </div>
              <div className="text-white mt-4 text-xl lg:text-2xl">
                <strong>Options:</strong>
                <div className="text-white opacity-75 text-2xl lg:text-4xl mt-4">
                  {image.options}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Sport_Man_Collection;
