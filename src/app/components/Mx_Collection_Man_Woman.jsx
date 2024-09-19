"use client";
import React, { useState } from "react";

const products = [
  { 
    title: 'T-SHIRT', 
    images: ['bg-Sport-1a', 'bg-Sport-1b', 'bg-Sport-1c'],
    features: 'Soft, Durable, Machine washable',
    fabric: 'Cotton blend',
  },
  { 
    title: 'POLO', 
    images: ['bg-Sport-3a', 'bg-Sport-3b', 'bg-Sport-3c', 'bg-Sport-3d'],
    features: 'Breathable, Stylish, Easy care',
    fabric: 'Cotton-Polyester blend',
  },
  { 
    title: 'SWEATSHIRT', 
    images: ['bg-Sport-2a', 'bg-Sport-2b', 'bg-Sport-2c', 'bg-Sport-2d'],
    features: 'Fleece lined, Ribbed cuffs, Durable',
    fabric: 'Polyester blend',
  },
  { 
    title: 'LITE JACKET', 
    images: ['bg-Sport-4a', 'bg-Sport-4b', 'bg-Sport-4c', 'bg-Sport-4d'],
    features: 'Quick-dry, Reflective strips',
    fabric: 'Polyester blend',
  },
  { 
    title: 'FACTORY JACKET', 
    images: ['bg-Sport-5a', 'bg-Sport-5b', 'bg-Sport-5c', 'bg-Sport-5d'],
    features: 'Quick-dry, Reflective strips',
    fabric: 'Polyester blend',
  }
];

const Sport_Man_Collection = () => {
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
          {/* Background image for large screens */}
          <div className={`hidden lg:block w-full h-full bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common relative`}>
            {/* Arrows to navigate through images */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-8">
              <button 
                className=" text-white p-4   transform hover:scale-110 transition duration-300" 
                onClick={() => handlePrev(index)}
              >
                <span className="text-5xl">&#8249;</span>
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <button 
                className=" text-white p-4   transform hover:scale-110 transition duration-300" 
                onClick={() => handleNext(index)}
              >
                <span className="text-5xl">&#8250;</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="w-full h-full grid grid-cols-1">
            {/* Column with image for small screens */}
            <div className={`relative lg:hidden w-full h-screen bg-cover bg-center ${product.images[currentIndexes[index]]} bg-common`}>
              {/* Arrows to navigate through images */}
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

            {/* Text under the image for small screens */}
            <div className="absolute inset-x-0 bottom-20 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden">
              <div className="text-4xl font-extrabold leading-snug">
                {product.title}
              </div>
              <div className="text-base mt-2">
                {product.features}
              </div>
              <div className="text-base mt-2">
                <strong>Fabric:</strong> {product.fabric}
              </div>
              <a
                href="mailto:albertomxline@gmail.com?subject=Custom Inquiry&body=I am interested in your custom services."
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full block"
              >
                Contact Us
              </a>
            </div>

            {/* Text next to the image for large screens */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-black bg-opacity-75 p-10 text-center text-white w-full h-full">
              <div className="text-4xl lg:text-8xl font-extrabold leading-snug mb-4">
                {product.title}
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

export default Sport_Man_Collection;
