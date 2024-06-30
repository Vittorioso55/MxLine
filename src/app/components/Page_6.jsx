import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page_6 = () => {
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
        y: 20
      });
    }
  }, [controls, inView]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center  bg-black">
      {/* Riga vuota sopra */}
      <div className="w-full h-screen"></div>

      {/* Seconda riga con banner al centro */}
      <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/Photo/Mx_Sfondo.png')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center" ref={ref}>
          <div className="mt-0">
            <motion.h2
              className="text-7xl lg:text-6xl font-extrabold text-green-500"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.5 }}
            >
              CUSTOM
            </motion.h2>
            <motion.p
              className="text-6xl lg:text-8xl font-extrabold text-white mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 1 }}
            >
              NOW!
            </motion.p>
            <motion.a
              href="mailto:albertomxline@gmail.com?subject=Custom Inquiry&body=I am interested in your custom services."
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </div>

      {/* Riga vuota sotto */}
      <div className="w-full h-screen"></div>
    </section>
  );
}

export default Page_6;
