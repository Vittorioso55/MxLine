"use client";
import React, { useRef, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import Page_1 from "./components/Page_1";
import Page_2 from "./components/Page_2";
import Page_3 from "./components/Page_3";
import Page_4 from "./components/Page_4";
import Page_5 from "./components/Page_5";
import Page_6 from "./components/Page_6";
import Page_7 from "./components/Page_7";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = [
    { id: "section1", component: <Page_1 /> },
    { id: "section2", component: <Page_2 /> },
    { id: "section3", component: <Page_3 /> },
    { id: "section4", component: <Page_4 /> },
    { id: "section5", component: <Page_5 /> },
    { id: "section6", component: <Page_6 /> },
    { id: "section7", component: <Page_7 /> },
  ];

  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = containerRef.current.scrollTop;
      const sectionIndex = Math.round(scrollPosition / window.innerHeight);
      setCurrentIndex(sectionIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  return (
    <section className="w-full">
      <main
        className="flex min-h-screen flex-col items-left justify-between p-0"
        ref={containerRef}
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          // Altezza minima per forzare lo scroll su dispositivi mobili
          minHeight: "-webkit-fill-available",
        }}
      >
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`scroll-section ${index === currentIndex ? "active" : ""}`}
            style={{ minHeight: "100vh" }}
          >
            {section.component}
          </section>
        ))}
      </main>
      {!isMobileDevice() && (
        <Navbar>
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={`section${index + 1}`}
              smooth={true}
              duration={500}
              className={`nav-link ${index === currentIndex ? "active" : ""}`}
            >
              {`Section ${index + 1}`}
            </Link>
          ))}
        </Navbar>
      )}
      {isMobileDevice() && <Navbar />}
    </section>
  );
}
