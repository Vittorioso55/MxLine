"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_3 = () => {
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
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center  bg-black">
      <div className="text-white text-center p-4 md:p-8 max-w-3xl">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-snug" ref={ref}>
          MX LINE REPRESENTS THE{" "}
          <motion.span
            className="block text-6xl md:text-7xl lg:text-8xl font-extrabold text-green-500"
            variants={fadeInEffect}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            QUALITY
          </motion.span>{" "}
          OF MADE IN ITALY
        </h1>
        <div className="mt-4 mx-auto max-w-lg">
          <p>

            Da oltre 50 anni il nostro obiettivo è quello di creare capi e accessori del mondo MX con un alto livello di personalizzazione con estrema cura, per offrire stile, qualità e funzionalità.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Page_3;
