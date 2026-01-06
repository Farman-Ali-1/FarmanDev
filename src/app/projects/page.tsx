"use client";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGlobe, FaCode } from "react-icons/fa";

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  liveLink: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      category: "Web",
      title: "Get Simple",
      description:
        "A comprehensive tax management platform built with modern web technologies for seamless financial operations.",
      liveLink: "https://app.simpple.tax/",
      tags: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      category: "Web",
      title: "Employee Doc Verification",
      description:
        "HR management system for document verification and employee onboarding with real-time validation.",
      liveLink: "https://employee-doc-verification.vercel.app/Hr-Panel",
      tags: ["React", "Vercel", "Authentication"],
    },
    {
      id: 3,
      category: "Web",
      title: "ISA Consulting",
      description:
        "Professional consulting website with modern design and client portfolio showcase.",
      liveLink: "https://isaconsulting.com/",
      tags: ["Next.js", "Responsive", "SEO"],
    },
    {
      id: 4,
      category: "WordPress",
      title: "Ayyan Mobile Shop",
      description:
        "Full-featured e-commerce platform for mobile devices with payment integration and inventory management.",
      liveLink: "https://ayyanmobile.com/",
      tags: ["WooCommerce", "E-commerce", "Payment Gateway"],
    },
    {
      id: 5,
      category: "Web",
      title: "Deventia Tech Portfolio",
      description:
        "Corporate portfolio website showcasing services, projects, and team expertise with interactive elements.",
      liveLink: "https://deventiatech.com/",
      tags: ["React", "Animation", "Modern UI"],
    },
    {
      id: 6,
      category: "WordPress",
      title: "Mobile Tyres Thurrock",
      description:
        "Service-based website for mobile tyre fitting with online booking and service area coverage.",
      liveLink: "https://mobiletyresthurrock.co.uk/",
      tags: ["WordPress", "Booking System", "Local SEO"],
    },
  ];

  const categories: string[] = ["All", "Web", "App", "WordPress"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      Web: "from-blue-500 to-cyan-500",
      WordPress: "from-purple-500 to-pink-500",
      App: "from-green-500 to-emerald-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 md:px-8 lg:px-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm bg-orange-400/10 px-4 py-2 rounded-full">
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest work across web development, mobile apps, and
            WordPress solutions. Each project represents a unique challenge
            solved with creativity and technical expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/50"
                  : "bg-slate-800/50 text-gray-400 border border-gray-700 hover:border-orange-500 hover:text-orange-400"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-50"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                  {/* Project Preview (iframe) */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <iframe
                      src={project.liveLink}
                      className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                      title={project.title}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <FaGlobe className="text-white text-5xl mb-2" />
                        <p className="text-white text-sm">View Live Site</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Category Badge */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(
                        project.category
                      )} text-white`}
                    >
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full flex items-center gap-1 border border-gray-600"
                        >
                          <FaCode className="text-orange-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl transform transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                    >
                      <span>View Live</span>
                      <FaExternalLinkAlt className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating project number */}
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${getCategoryColor(
                    project.category
                  )} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-300 ${
                    hoveredId === project.id
                      ? "scale-110 rotate-12"
                      : "scale-100 rotate-0"
                  }`}
                >
                  {project.id}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl">
                No projects available in this category.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lets collaborate and create something amazing together. I am always
            excited to work on new and challenging projects.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <FaExternalLinkAlt className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;
