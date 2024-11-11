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
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          opacity: 0.45,
          transition: 'background-image 0.5s ease-in-out'
        }}
      />

      {/* "IF YOU CAN DREAM WE CAN MAKE IT" in the top left */}
      <motion.div
        className="absolute top-40 lg:top-40 left-100 text-white text-4xl lg:text-3xl font-extrabold text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        IF YOU CAN
        <motion.p
          className="text-4xl lg:text-6xl font-extrabold text-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DREAM
        </motion.p>
        WE CAN
        <motion.p
          className="text-4xl lg:text-6xl font-extrabold text-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          MAKE
        </motion.p>
        IT
      </motion.div>
      

      {/* "COMING SOON" text in the center */}
      <motion.div
      className="absolute text-4xl lg:text-8xl font-extrabold text-white "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      style={{
      border: '1px solid green', // Bordo bianco intorno al testo
      padding: '10px', // Spazio tra il testo e il bordo
      borderRadius: '5px', // Angoli arrotondati (opzionale)
       }}
      >
      COMING SOON
      </motion.div>


      {/* Bottom text in Italian and English with white line separator */}
      <motion.div
        className="absolute bottom-10 w-full text-center text-1xl lg:text-3xl font-extrabold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="mb-0">ABBIGLIAMENTO GARA E DOPO GARA</p>
        <hr className="border-green-500 border-1 mx-auto w-1/2 mb-0" />
        <p className="border-green-500 border-1 mx-auto w-1/2 mb-20"> PERSONALIZED RACE AND CASUAL WEAR </p>
      </motion.div>

      {/* Navigation buttons for changing images */}
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
