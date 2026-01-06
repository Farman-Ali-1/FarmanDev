"use client";
import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import {
  FaAppStore,
  FaWordpress,
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss } from "react-icons/si";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  gradient: string;
  features: string[];
  technologies: { name: string; icon: JSX.Element }[];
}

const servicesData: Service[] = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance web applications using cutting-edge technologies like React, Next.js, and TypeScript.",
    icon: <CgWebsite className="text-5xl" />,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "React & Next.js Applications",
      "Responsive UI/UX Design",
      "API Integration & Development",
      "Performance Optimization",
      "SEO Best Practices",
      "Progressive Web Apps",
    ],
    technologies: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
  },
  {
    title: "SaaS Solutions",
    description:
      "Creating scalable Software-as-a-Service platforms with robust backend architecture, secure authentication, and seamless payment integration.",
    icon: <FaRocket className="text-5xl" />,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Payment Gateway Integration",
      "Real-time Data Sync",
      "Admin Dashboards",
      "Cloud Deployment",
    ],
    technologies: [
      { name: "Node.js", icon: <FaServer className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    ],
  },
  {
    title: "WordPress Development",
    description:
      "Designing and developing custom WordPress sites with powerful themes, plugins, and e-commerce solutions tailored to your business needs.",
    icon: <FaWordpress className="text-5xl" />,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Custom Theme Development",
      "WooCommerce E-commerce",
      "Plugin Development & Integration",
      "SEO Optimization",
      "Performance Tuning",
      "Maintenance & Support",
    ],
    technologies: [
      { name: "WordPress", icon: <FaWordpress className="text-purple-400" /> },
      { name: "WooCommerce", icon: <CgWebsite className="text-purple-300" /> },
      { name: "PHP", icon: <FaLaptopCode className="text-purple-500" /> },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Creating native and cross-platform mobile applications that deliver seamless user experiences on both iOS and Android platforms.",
    icon: <FaAppStore className="text-5xl" />,
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "Native Features Integration",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: [
      { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { name: "Native APIs", icon: <FaAppStore className="text-blue-500" /> },
    ],
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 md:px-8 lg:px-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm bg-orange-400/10 px-4 py-2 rounded-full">
              What I Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I offer a comprehensive range of development services to transform your 
            digital vision into reality. From stunning websites to powerful SaaS 
            platforms, I deliver solutions that drive results and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon container */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  {/* Technology badges */}
                  <div className="flex gap-2">
                    {service.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-2 bg-slate-700/50 rounded-lg border border-gray-600 transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="text-xl">{tech.icon}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 text-sm transform transition-all duration-300"
                        style={{
                          transitionDelay: `${idx * 100}ms`,
                          opacity: hoveredIndex === index ? 1 : 0.7,
                          transform:
                            hoveredIndex === index
                              ? "translateX(0)"
                              : "translateX(-10px)",
                        }}
                      >
                        <div
                          className={`mt-1 p-1 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                        >
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg`}
                  >
                    <span>Get Started</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-20 p-10 bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-3xl border border-gray-700">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Me?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, creative problem-solving, 
              and a commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Certified Professional",
                description: "Certified software engineer with proven expertise in modern web technologies",
                icon: <FaCheck className="text-3xl" />,
              },
              {
                title: "50+ Projects Delivered",
                description: "Successfully completed numerous projects for satisfied clients worldwide",
                icon: <FaRocket className="text-3xl" />,
              },
              {
                title: "Modern Tech Stack",
                description: "Using the latest technologies to build scalable and maintainable solutions",
                icon: <FaLaptopCode className="text-3xl" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-800/50 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-orange-400 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lets collaborate and bring your ideas to life with innovative solutions 
            tailored to your specific needs. I am here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923084401935?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:engrfarmanali44@gmail.com"
              className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Services;
