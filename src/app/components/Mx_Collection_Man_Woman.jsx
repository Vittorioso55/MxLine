"use client";
import React, { useState } from "react";

const products = [
  { 
    title: 'MX-1 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-1a', 'bg-Mx-1b'],
    fabric: '100% Poliestere',
    features: 'Maglia Standard con manica Raglan e collo a “V',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-2 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-2a', 'bg-Mx-2b'],
    features: 'Maglia Standard con manica Raglan, fianchi e spalline in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-3 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-3a', 'bg-Mx-3b', 'bg-Mx-3c'],
    features: 'Maglia Standard con manica Raglan e collo a “V” parte posteriore in materiale ventilato',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-4 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-4a', 'bg-Mx-4b'],
    features: 'Maglia Standard con manica Raglan e collo a “V” parte posteriore in materiale ventilato',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-5 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-5a', 'bg-Mx-5b', 'bg-Mx-5c'],
    features: 'Maglia Standard con manica Raglan, collo a giro e polso America',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-6 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-6a', 'bg-Mx-6b'],
    features: 'Maglia Standard con manica Raglan, fianchi e sottomanica in rete e colletto a “V” con speciale inserto sul davanti',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-7 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-7a', 'bg-Mx-7b'],
    features: 'Maglia Standard con manica a giro e collo a “V”',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-8 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-8a', 'bg-Mx-8b', 'bg-Mx-8c'],
    features: 'Maglia Standard con manica Raglan, fianchi e sottomaniche in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-9 JERSEY', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-9a', 'bg-Mx-9b', 'bg-Mx-9c'],
    features: 'Maglia Standard con manica Raglan, fianchi e sottomaniche in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: 'Polyester blend',
    // options: 'Various colors and sizes'
  },
  { 
    title: 'MX-10 SLIM', 
    // description: 'Lightweight and versatile.', 
    images: ['bg-Mx-10a', 'bg-Mx-10b', 'bg-Mx-10c'],
    features: 'Maglia Standard con manica a giro, fornita di fianchetti in lycra e collo America',
    fabric: '100% Poliestere',
    // options: 'Various colors and sizes'
  },
];

const Mx_Collection = () => {
  const [currentIndexes, setCurrentIndexes] = useState(products.map(() => 0));

  const handlePrev = (index) => {
    setCurrentIndexes((prevIndexes) => 
      prevIndexes.map((currentIndex, i) => 
        i === index ? (currentIndex === 0 ? products[index].images.length - 1 : currentIndex - 1) : currentIndex
      )
    );
  };

  const handleNext = (index) => {
    setCurrentIndexes((prevIndexes) => 
      prevIndexes.map((currentIndex, i) => 
        i === index ? (currentIndex === products[index].images.length - 1 ? 0 : currentIndex + 1) : currentIndex
      )
    );
  };

  return (
    <>
      {products.map((product, index) => (
        <section key={index} className="relative w-full h-screen flex items-center justify-center">
          {/* Immagine di sfondo visibile su schermi grandi */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common relative`}>
            {/* Freccette per cambiare immagine */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-8">
              <button 
                className="bg-white text-black p-4 rounded-full transform hover:scale-110 transition duration-300" 
                onClick={() => handlePrev(index)}
              >
                <span className="text-3xl">&#8249;</span>
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <button 
                className="bg-white text-black p-4 rounded-full transform hover:scale-110 transition duration-300" 
                onClick={() => handleNext(index)}
              >
                <span className="text-3xl">&#8250;</span>
              </button>
            </div>
          </div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1">
            {/* Colonna con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-auto bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common mt-2`}>
              {/* Freccette per cambiare immagine */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black bg-opacity-50 text-white p-4 rounded-full " 
                  onClick={() => handlePrev(index)}
                >
                  <span className="text-3xl">&#8249;</span>
                </button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button 
                  className="bg-black bg-opacity-50 text-white p-4 rounded-full " 
                  onClick={() => handleNext(index)}
                >
                  <span className="text-3xl">&#8250;</span>
                </button>
              </div>
            </div>

            {/* Testo sotto l'immagine su schermi piccoli */}
            <div className="absolute top-auto bottom-20 inset-x-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
              <div className="text-4xl font-extrabold leading-snug">
                {product.title}
              </div>
              <div className="text-base mt-2">
                {product.description}
              </div>
              <div className="text-base mt-2">
                <strong>Features:</strong> {product.features}
              </div>
              <div className="text-base mt-2">
                <strong>Fabric:</strong> {product.fabric}
              </div>
              {/* <div className="text-base mt-2">
                <strong>Options:</strong> {product.options}
              </div> */}
            </div>

            {/* Testo accanto all'immagine su schermi grandi */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-black bg-opacity-75 p-10 text-center text-white w-full h-full">
              <div className="text-4xl lg:text-8xl font-extrabold leading-snug mb-4">
                {product.title}
              </div>
              <div className="text-2xl lg:text-4xl">
                {product.description}
              </div>
              <div className="text-xl lg:text-2xl mt-4">
                <strong>Features:</strong> {product.features}
              </div>
              <div className="text-xl lg:text-2xl mt-4">
                <strong>Fabric:</strong> {product.fabric}
              </div>
              {/* <div className="text-xl lg:text-2xl mt-4">
                <strong>Options:</strong> {product.options}
              </div> */}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Mx_Collection;
