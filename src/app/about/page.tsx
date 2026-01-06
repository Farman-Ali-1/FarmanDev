"use client";
import Image from "next/image";
import Link from "next/link";
import profile from "./../../../assets/mypic.png";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";



function About() {
  const whatsappNumber = "923084401935";
  const message = "Hello, I would like to get in touch!";

  return (
    <div className="flex flex-row justify-center w-full lg:h-screen xl:h-screen md:h-screen h-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="w-1/2 hide-on-md-sm h-full flex flex-col gap-12 xl:justify-center xl:items-center lg:items-center xl:p-8 lg:p-16 md:px-8 md:py-4">
        <div className="relative xl:w-2/5 xl:h-[45%] lg:h-1/2 lg:w-2/3 md:w-full md:h-[60%] rounded-full border-orange-500 border-8 shadow-2xl shadow-orange-500 animate-circleSlide">
          <Image
            src={profile} // Update the image path
            className="absolute xl:-bottom-1 lg:-bottom-1 md:bottom-0 w-full rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100076971773487"
              aria-label="Facebook"
            >
              <FaFacebook className="text-gray-600 hover:text-blue-600 text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
            <Link
              href="https://www.instagram.com/farman_khan9t/"
              aria-label="Instagram"
            >
              <FaInstagram className="text-gray-600 hover:text-pink-500 text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/farman-khan-792b73240/"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-600 hover:text-blue-500 text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
            <Link href="https://github.com/Farman-Ali-1" aria-label="GitHub">
              <FaGithub className="text-gray-600 hover:text-black text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-gray-600 hover:text-green-500 text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
            <Link href="mailto:engrfarmanali44@gmail.com" aria-label="Email">
              <FaEnvelope className="text-gray-600 hover:text-red-500 text-4xl sm:text-3xl transition duration-300 hover:animate-shake" />
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex flex-col xl:gap-6 xl:p-16 lg:px-6 md:px-8 gap-4 p-8">
        <h1 className="font-semibold xl:text-6xl lg:text-4xl md:text-4xl text-3xl text-white">
          About Me {" "}
        </h1>
        <p className="text-gray-300">
          I am a Full-Stack Developer with over 1.5 years of experience in
          building robust web and mobile applications, specializing in the MERN
          stack and React Native. I create responsive, user-centric solutions
          with clean code, focusing on frontend technologies like React,
          Next.js, and Tailwind CSS, and backend development with Node.js and
          Express. Passionate about delivering high-quality, cross-platform
          solutions, I stay updated with the latest technologies to make a
          meaningful impact through my work.
        </p>
      </div>
    </div>
  );
}

export default About;