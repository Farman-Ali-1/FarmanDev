import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default Page;
