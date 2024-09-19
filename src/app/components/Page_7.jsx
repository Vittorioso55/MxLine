"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_7 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima solo una volta quando diventa visibile
    threshold: 0.5, // Attiva l'animazione quando l'elemento è al 50% in vista
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/photo/About_Us.png')`,
          opacity: 0.2,
        }}
      />

      {/* Text Content */}
      <div className="text-white text-center p-8" ref={ref}>
        <motion.h1
          className="font-extrabold text-7xl lg:text-8xl leading-snug text-green-500"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          ABOUT
        </motion.h1>
        <motion.h1
          className="font-extrabold text-4xl lg:text-6xl leading-snug"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }} // Ritardo per il secondo titolo
        >
          US
        </motion.h1>
        <div className="mt-4 mx-auto max-w-lg">
          <p className="text-lg lg:text-xl">
            Noi di Mx Line ci definiamo come una famiglia di professionisti e
            appassionati, mettendo al primo posto le esigenze del cliente per
            instaurare un rapporto di co-creazione e fiducia.
          </p>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="fixed bottom bottom  bottom-0 w-full bg-black bg-opacity-75 text-white py-4 px-3 lg:px-8 flex flex-col lg:flex-row justify-between items-center space-y-1 lg:space-y-0 ">
        <div className=" font-bold text-center lg:text-lg ">
          Contattaci: <a href="mailto:info@mxline.com" className="underline">info@mxline.com</a> 
          <div> 
            <a href="tel:+123456789" className="underline">+1 234 567 89</a> 
          </div>
          
        </div>
        <div className="text-base lg:text-lg text-center">
        Via Spercenigo 31, Treviso, Italy 31030
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/mxline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/mxlineapparel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Instagram
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Page_7;
