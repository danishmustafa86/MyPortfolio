"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import myImage from "@/app/components/images/myimage.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between relative z-50 shadow-lg">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Logo and Profile Image */}
        <div className="flex items-center space-x-4">
          <Image
            src={myImage}
            alt="Profile image of Danish Mustafa"
            width={50}
            height={50}
            className="rounded-full border-2 border-teal-400 hover:border-white transition-all duration-300"
          />
          <div className="text-xl font-bold text-teal-400 hover:text-white transition-colors duration-300">
            Danish Mustafa
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:items-center md:justify-end list-none m-0 p-0 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="md:mx-2">
            <Link
              href="/"
              className="block py-2 px-4 text-center md:inline-block hover:text-teal-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="md:mx-2">
            <Link
              href="/about"
              className="block py-2 px-4 text-center md:inline-block hover:text-teal-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li className="md:mx-2">
            <Link
              href="/projects"
              className="block py-2 px-4 text-center md:inline-block hover:text-teal-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="md:mx-2">
            <Link
              href="/contact"
              className="block py-2 px-4 text-center md:inline-block hover:text-teal-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;