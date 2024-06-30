import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_5 = () => {
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
    <section className="relative w-full h-screen flex flex-col items-center justify-center  bg-black">
      <div className="text-white text-center p-8">
        <h1 className="font-extrabold text-4xl lg:text-6xl leading-snug">
          MXLINE{" "}
          <br />
          <motion.span
            ref={ref}
            className="inline-block"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "inline-block" }}
          >
            <motion.span
              className="text-7xl lg:text-8xl font-extrabold text-green-500"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ display: "inline-block" }}
            >
              IS NOT
            </motion.span>
          </motion.span>{" "}
          <br />
          JUST A BRAND
        </h1>
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

export default Page_5;
