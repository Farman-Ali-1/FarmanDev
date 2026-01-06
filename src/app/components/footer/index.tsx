// import Image from "next/image";
import React from "react";
// import logo from "./../../../../assets/Logo.png";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const whatsappNumber = "923084401935";
  const message = "Hello, I would like to get in touch!";

  return (
    <footer className="flex flex-col gap-10 w-full bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 text-gray-300 py-10">
      {/* Logo Section */}
      {/* <div className="flex justify-center">
        <Image src={logo} alt="logo" width={250} className="w-auto h-auto md:w-72 lg:w-80" />
      </div> */}

      {/* Navigation Links */}
      <div className="flex justify-center">
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm sm:text-base md:text-lg">
          <Link href="/" className="text-gray-200 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-gray-200 hover:underline">
            About Me
          </Link>
          <Link href="/services" className="text-gray-200 hover:underline">
            Services
          </Link>
          <Link href="/projects" className="text-gray-200 hover:underline">
            Projects
          </Link>
          <Link href="/testimonial" className="text-gray-200 hover:underline">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-200 hover:underline">
            Contact
          </Link>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="https://www.facebook.com/profile.php?id=100076971773487">
          <FaFacebook className="text-gray-300 hover:text-blue-600 text-3xl sm:text-4xl transition  duration-300 hover:animate-shake" />
        </Link>
        <Link href="https://www.instagram.com/farman_khan9t/">
          <FaInstagram className="text-gray-300 hover:text-pink-500 text-3xl sm:text-4xl transition  duration-300 hover:animate-shake" />
        </Link>
        <Link href="https://www.linkedin.com/in/farman-khan-792b73240/">
          <FaLinkedin className="text-gray-300 hover:text-blue-500 text-3xl sm:text-4xl transition  duration-300 hover:animate-shake" />
        </Link>
        <Link href="https://github.com/Farman-Ali-1">
          <FaGithub className="text-gray-300 hover:text-black text-3xl sm:text-4xl transition  duration-300 hover:animate-shake" />
        </Link>
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-gray-300 hover:text-green-500 text-3xl sm:text-4xl transition duration-300 hover:animate-shake" />
        </Link>
        <Link href="mailto:engrfarmanali44@gmail.com" aria-label="Email me">
          <FaEnvelope className="text-gray-300 hover:text-red-500 text-3xl sm:text-4xl transition duration-300 hover:animate-shake" />
        </Link>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center h-10 w-full">
        <p className="text-gray-400 text-xs sm:text-base md:text-lg lg:text-xl">
          © 2024 <span className="text-orange-400">Farman Ali Developer</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
