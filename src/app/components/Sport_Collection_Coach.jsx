"use client";
import React, { useState } from "react";

const products = [
  { 
    title: 'CLASSIC GILET', 
    description: 'Comfortable and stylish.', 
    images: ['bg-Sport_Coach-1a', 'bg-Sport_Coach-1b', 'bg-Sport_Coach-1c', 'bg-Sport_Coach-1d'] 
  },
  { 
    title: 'LITE JACKET', 
    description: 'Lightweight and versatile.', 
    features: 'Maglia Standard con manica Raglan, fianchi e spalline in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    images: ['bg-Sport_Coach-2a', 'bg-Sport_Coach-2b', 'bg-Sport_Coach-2c', 'bg-Sport_Coach-2d'] 
  },
  { 
    title: 'POLO', 
    description: 'Soft and breathable.', 
    features: 'Maglia Standard con manica Raglan, fianchi e spalline in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    images: ['bg-Sport_Coach-3a', 'bg-Sport_Coach-3b', 'bg-Sport_Coach-3c', 'bg-Sport_Coach-3d'] 
  },
  { 
    title: 'FACTORY GILET', 
    description: 'Durable and functional.', 
    features: 'Maglia Standard con manica Raglan, fianchi e spalline in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    images: ['bg-Sport_Coach-4a', 'bg-Sport_Coach-4b', 'bg-Sport_Coach-4c', 'bg-Sport_Coach-4d'] 
  },
  { 
    title: 'FACTORY JACKET', 
    description: 'Durable and functional.', 
    features: 'Maglia Standard con manica Raglan, fianchi e spalline in rete e colletto a giro con taglio rettangolare sul davanti',
    fabric: '100% Poliestere',
    images: ['bg-Sport_Coach-5a', 'bg-Sport_Coach-5b', 'bg-Sport_Coach-5c', 'bg-Sport_Coach-5d'] 
  },
];

const Sport_Collection_Coach = () => {
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
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4">
              <button 
                className=" text-white p-4 rounded-full transform hover:scale-110 transition duration-300" 
                onClick={() => handlePrev(index)}
              >
                <span className="text-5xl">&#8249;</span>
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 ml-4">
              <button 
                className=" text-white p-4 rounded-full transform hover:scale-110 transition duration-300" 
                onClick={() => handleNext(index)}
              >
                <span className="text-5xl">&#8250;</span>
              </button>
            </div>
          </div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1">
            {/* Colonna con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common`}>
              {/* Freccette per cambiare immagine */}
              
            </div>

            {/* Testo sotto l'immagine su schermi piccoli */}
            <div className="absolute inset-x-0 bottom-20 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
              <div className="text-4xl font-extrabold leading-snug">
                {product.title}
              </div>
              <div className="text-base mt-2">
                {product.description}
              </div>
              <div className="text-base mt-2">
                {product.fabric}
              </div>
              <div className="text-base mt-2">
                {product.features}
              </div>
              <a
                href="mailto:albertomxline@gmail.com?subject=Custom Inquiry&body=I am interested in your custom services."
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full block"
              >
                Contact Us
              </a>
              
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
              <a
                href="mailto:albertomxline@gmail.com?subject=Custom Inquiry&body=I am interested in your custom services."
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Sport_Collection_Coach;
