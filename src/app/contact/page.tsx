"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Record<string, unknown> = { ...formData }; // Convert FormData to Record<string, unknown>

    emailjs
      .send(
        "service_kwl8oe8",
        "template_5y78n19",
        data,
        "IitkbIIMO6MIsSrjp"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.text);
          toast.success("Message sent successfully!");
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-slate-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-semibold text-white text-center">Get In Touch</h1>
        <p className="text-gray-300 text-center text-lg md:text-xl leading-relaxed mt-4">
          I’m Farman Ali, a passionate Full Stack Developer with over 1.5 years of experience.
          I specialize in building modern web applications using React, Node.js, and Next.js.
          <br /> I’ve successfully delivered more than 10 websites, providing high-quality solutions for businesses.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6 w-full mt-8">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="h-14 w-full md:w-1/2 rounded-md p-4 border border-gray-700 bg-slate-900/60 text-white placeholder-gray-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="h-14 w-full md:w-1/2 rounded-md p-4 border border-gray-700 bg-slate-900/60 text-white placeholder-gray-400 outline-none"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            className="h-36 w-full md:w-full rounded-md p-4 border border-gray-700 bg-slate-900/60 text-white placeholder-gray-400 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="h-14 px-8 text-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>

          {isSent && (
            <p className="text-green-400 mt-4">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;