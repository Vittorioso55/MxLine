"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link"; // Assicurati di importare Link da next/link se stai usando Next.js

const Page_4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
          backgroundImage: `url('/image/Photo/screen.png')`,
           // Posiziona l'immagine dietro tutto
          opacity: 0.2, // Opacità dell'immagine
        }}
      />

      {/* Testo e contenuto in primo piano */}
      <div className="text-white text-center p-8 z-10">
        <motion.h1
          className="font-extrabold text-green-500 text-4xl lg:text-7xl leading-snug mb-10"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInEffect}
        >
          OUR PRODUCTS
        </motion.h1>

        <div className="w-full border-t border-gray-500 my-4"></div>

        <div className="font-extrabold text-4xl lg:text-6xl leading-snug hover:text-green-500 cursor-pointer">
          <Link href="./SportWear">SPORT WEAR</Link>
        </div>

        <div className="w-full border-t border-gray-500 my-4"></div>

        <div className="font-extrabold text-4xl lg:text-6xl leading-snug hover:text-green-500 cursor-pointer">
          <Link href="./RaceWear">RACE WEAR</Link>
        </div>
      </div>
    </section>
  );
};

export default Page_4;
