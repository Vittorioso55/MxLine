"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page_1 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/image/Photo/Sfondo.png",
    "/image/Photo/Home_Photo.jpg",
    "/image/Photo/Sfondo_1.jpg"
  ];

  const handlePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          opacity: 0.45,
          transition: 'background-image 0.5s ease-in-out'
        }}/>
        <motion.div
        className="relative z-10 max-w-5xl mx-auto text-white text-center lg:text-CENTER"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div className="text-4xl lg:text-8xl font-extrabold">
          IF YOU CAN
          <motion.p
            className="text-7xl lg:text-8xl font-extrabold text-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            DREAM
          </motion.p>
          WE CAN
          <motion.p
            className="text-7xl lg:text-8xl font-extrabold text-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            MAKE
          </motion.p>
          IT
        </motion.div>
      </motion.div>
      
      <div className="hidden lg:block absolute left-10">
        <button onClick={handlePrevious} className="p-2 bg-transparent text-white rounded-full">
          &lt;
        </button>
      </div>
      <div className="hidden lg:block absolute right-10">
        <button onClick={handleNext} className="p-2 bg-transparent text-white rounded-full">
          &gt;
        </button>
      </div>
      
    </section>
  );
};

export default Page_1;
