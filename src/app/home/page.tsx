"use client";
import Image from "next/image";
import React from "react";
import softwareengineer from "./../../../assets/softwareengineer.png";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaLaptopCode,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

const Home: React.FC = () => {
  const whatsappNumber = "923084401935";
  const message = "Hello, I would like to discuss a project with you!";

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100076971773487",
      icon: FaFacebook,
      label: "Facebook",
      hoverColor: "hover:text-blue-600",
    },
    {
      href: "https://www.instagram.com/farman_khan9t/",
      icon: FaInstagram,
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/in/farman-khan-792b73240/",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500",
    },
    {
      href: "https://github.com/Farman-Ali-1",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:text-black",
    },
    {
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      icon: FaWhatsapp,
      label: "WhatsApp",
      hoverColor: "hover:text-green-500",
    },
    {
      href: "mailto:engrfarmanali44@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      hoverColor: "hover:text-red-500",
    },
  ];

  const techStack = [
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { icon: FaNode, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-300" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-12 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptMi0ydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptMiAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-0 gap-16 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 z-10 text-center md:text-left max-w-2xl">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-orange-400 mb-2 justify-center md:justify-start">
              <FaCode className="text-2xl animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Certified Software Engineer
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-light text-gray-300 animate-fade-in">
              Hi, I am
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Farman Ali
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaLaptopCode className="text-orange-400 text-3xl" />
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Full Stack
              </h3>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              Developer
            </h3>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Certified software engineer specializing in building scalable, clean, 
            and user-friendly web applications and SaaS solutions. I deliver 
            fully functional websites that solve real business problems using 
            modern technologies.
          </p>

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105"
                >
                  <tech.icon className={`text-xl ${tech.color}`} />
                  <span className="text-gray-300 text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex flex-col items-center gap-8 z-10 max-w-md">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Main profile container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-slate-900 rounded-full p-2">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl shadow-orange-500/50">
                    <Image
                      src={softwareengineer}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      alt="Farman Ali - Full Stack Developer"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce animation-delay-1000">
                50+ Projects
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.label === "WhatsApp" ? "_blank" : undefined}
                rel={link.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="group"
              >
                <div className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <link.icon
                    className={`text-3xl text-gray-400 ${link.hoverColor} transition-colors duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                40+
              </div>
              <div className="text-gray-400 text-sm">Clients</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-400 text-sm">Years</div>
            </div>
          </div>

          {/* Specialization badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 text-xs rounded-full font-semibold">
              <FaDatabase className="inline mr-1" />
              SaaS Solutions
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-xs rounded-full font-semibold">
              <FaCode className="inline mr-1" />
              WordPress Expert
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
