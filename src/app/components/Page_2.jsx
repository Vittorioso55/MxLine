import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
      });
    }
  }, [controls, inView]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-opacity-60"
        style={{
          backgroundImage: `url('/image/Photo/Page_2_spalle.png')`,
          backgroundSize: "cover",
        }}
      />
      
      <div className="absolute top-0 left-1/3 w-1/3 h-full flex items-center justify-center">
        <div className="text-white text-center p-8" ref={ref}>
          <motion.h1 className="font-extrabold text-4xl lg:text-8xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 1 }} // Delay di 1 secondo per l'animazione iniziale
            >
              COMPETENCE
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 2 }} // Ritardo di 1.5 secondi per il secondo elemento
            >
              QUALITY
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 3 }} // Ritardo di 2 secondi per il terzo elemento
            >
              PRECISION
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Page_2;
