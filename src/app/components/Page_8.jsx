"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_8 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima solo una volta quando diventa visibile
    threshold: 0.5, // Attiva l'animazione quando l'elemento è al 50% in vista
  });

  const fadeInEffect = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Immagine di sfondo opacizzata */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/photo/About_Us.png')`, // Assicurati che il percorso dell'immagine sia corretto
          opacity: 0.2, // Opacità dell'immagine di sfondo
        }}
      />

      {/* Contenuto testuale */}
      <div className="text-white text-center p-8 z-10">
        <motion.h1
          className="font-extrabold text-green-500 text-7xl lg:text-8xl leading-snug"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInEffect}
        >
          ABOUT
        </motion.h1>

        <motion.h1
          className="font-extrabold text-4xl lg:text-6xl leading-snug"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInEffect}
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
    </section>
  );
};

export default Page_8;
