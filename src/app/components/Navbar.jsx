"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our Products",
    path: "/Products",
  },
  {
    title: "About Us",
    path: "/About_us",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogoClick = () => {
    // Ricarica la pagina quando il logo viene cliccato
    window.location.href = "/";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 ${navbarOpen ? 'bg-black' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between container lg:py-4 mx-auto px-1 py-2">
        <div className="flex items-center">
          <a className="py-2 sm:text-xl rounded hover:text-white cursor-pointer" onClick={handleLogoClick}>
            <img src="/image/Photo/Logo.png" alt="MxLine Logo" className="h-auto w-24 px-1" />
          </a>
        </div>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
               <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;


