"use client";
import Link from "next/link";
import React, { useState } from "react";

const products = [
  { 
    title: 'T-SHIRT', 
    description: 'Comfortable and stylish.', 
    images: ['bg-Sport_Woman-1a', 'bg-Sport_Woman-1b', 'bg-Sport_Woman-1c'],
    features: 'Soft, Durable, Machine washable',
    fabric: 'Cotton blend',
    options: 'Various colors and sizes'
  },
  { 
    title: 'LITE JACKET', 
    description: 'Lightweight and versatile.', 
    images: ['bg-Sport_Woman-2a', 'bg-Sport_Woman-2b', 'bg-Sport_Woman-2c', 'bg-Sport_Woman-2d'],
    features: 'Quick-dry, Reflective strips',
    fabric: 'Polyester blend',
    options: 'Various colors and sizes'
  },
  { 
    title: 'POLO', 
    description: 'Classic and breathable.', 
    images: ['bg-Sport_Woman-3a', 'bg-Sport_Woman-3b', 'bg-Sport_Woman-3c', 'bg-Sport_Woman-3d'],
    features: 'Breathable, Stylish, Easy care',
    fabric: 'Cotton-Polyester blend',
    options: 'Various colors and sizes'
  },
];

const Sport_Collection_Woman = () => {
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
    className="bg-white text-black p-4 rounded-full transform hover:scale-110 transition duration-300" 
    onClick={() => handlePrev(index)}
  >
    <span className="text-3xl">&#8249;</span>
  </button>
</div>
<div className=" absolute right-0 top-1/2 transform -translate-y-1/2 ml-4 ">
  <button 
    className="bg-white text-black p-4  rounded-full transform hover:scale-110 transition duration-300" 
    onClick={() => handleNext(index)}
  >
    <span className="text-3xl">&#8250;</span>
  </button>
</div>
          </div>

          {/* Contenuto */}
          <div className="w-full h-full grid grid-cols-1">
            {/* Colonna con l'immagine visibile su schermi piccoli */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common`}>
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
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
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
              <div className="text-base mt-2">
                <strong>Options:</strong> {product.options}
              </div>
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
              <div className="text-xl lg:text-2xl mt-4">
                <strong>Options:</strong> {product.options}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Sport_Collection_Woman;
