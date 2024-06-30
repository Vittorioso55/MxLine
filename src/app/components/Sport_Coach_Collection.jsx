"use client";
import React from "react";


const Sport_Coach_Collection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover ">

<div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/image/Photo/Mx_Sfondo.png')`,
        backgroundSize: 'container',
        opacity: 0.45, // Opacità del 50%
      }}
    />
    
        <div className="relative z-10 max-w-5xl mx-auto text-white text-center lg:text-CENTER">
          <div className="text-4xl lg:text-8xl font-extrabold">
           SPORT WEAR
           </div>
           <div className="text-3xl lg:text-6xl font-extrabold opacity-80">
           COACH COLLECTION
           </div>
        </div>
    </section>
  );
};

export default Sport_Coach_Collection;
