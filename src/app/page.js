"use client"
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Page_1 from "./components/Page_1";
import Page_2 from "./components/Page_2";
import Page_3 from "./components/Page_3";
import Page_4 from "./components/Page_4";
import Page_5 from "./components/Page_5";
import Page_6 from "./components/Page_6";
import Page_7 from "./components/Page_7";


export default function Home() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>

    
     
    
   <Page_1/>
   <Page_2/>
   <Page_3/>
   <Page_4/>
   <Page_5/>
   <Page_6/>
   <Page_7/>
 


    
     <Navbar />
    </div>
 
   
  
   
    </main>

    </section>

  );
}

