"use client";
// import Image from "next/image";
import React, { useState } from "react";
// import logo from "./../../../../assets/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Use pathname instead of router

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path; // Check if path matches current route

  return (
    <header className=" bg-transparent pb-12 md:pb-0">
      <div className="w-fit gap-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 text-white">
        {/* Logo Section */}
        {/* <div className="flex items-center md:hidden">
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          </Link>
        </div> */}

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`md:flex space-x-8 md:space-x-2 ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row px-4 rounded-full absolute md:static bg-gradient-to-b from-transparent/70 to-black/40 w-full md:bg-transparent left-0 top-full md:top-auto z-10`}
        >
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-orange-400 font-semibold" : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-orange-500/10 hover:text-orange-400 hover:scale-105 hover:shadow-md`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about")
                ? "text-orange-400 font-semibold"
                : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-yellow-500/10 hover:text-yellow-400 hover:scale-105 hover:shadow-md`}
          >
            About Me
          </Link>
          <Link
            href="/services"
            className={`${
              isActive("/services")
                ? "text-orange-400 font-semibold"
                : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-green-500/10 hover:text-green-400 hover:scale-105 hover:shadow-md`}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`${
              isActive("/projects")
                ? "text-orange-400 font-semibold"
                : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500/10 hover:text-blue-400  hover:shadow-md`}
          >
            Projects
          </Link>
          <Link
            href="#"
            className={`${
              isActive("#") ? "text-orange-400 font-semibold" : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-purple-500/10 hover:text-purple-400 hover:scale-105 hover:shadow-md`}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact")
                ? "text-orange-400 font-semibold"
                : "text-gray-200"
            } px-3 py-2 md:text-base md:whitespace-nowrap rounded-md transition duration-300 ease-in-out transform hover:bg-red-500/10 hover:text-red-400 hover:scale-105 hover:shadow-md`}
          >
            Contact
          </Link>
        </nav>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/uc?export=download&id=1K0PUZFWdnBJg9ASbR4zfDuAz5h9cr2Og"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 md:text-sm md:whitespace-nowrap rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu - Download CV Button */}
      {isOpen && (
        <div className="md:hidden text-center py-6 bg-slate-900/95">
          <Link
            href="/path-to-cv.pdf"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Download CV
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
