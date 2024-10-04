import React, { useState, useEffect } from "react";
import About from "../../assets/img/About.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Mengaktifkan animasi ketika komponen di-mount
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="container py-16 mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row text-center">
          <img
            src={About}
            alt="Profil"
            className={`w-1/2 md:w-1/3 h-auto object-cover mx-auto rounded-full 
                       transition-all duration-1000 ease-in-out transform ${
                         isVisible
                           ? "opacity-100 scale-100"
                           : "opacity-0 scale-95"
                       }`}
          />
          <div className="flex flex-col justify-center p-6 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-white transition-colors duration-300 font-montserrat">
              About Me
            </h2>
            <p className="mb-2 text-soft-white">
              Hi! I’m Aliva, a passionate frontend developer with experience in
              HTML, CSS, JavaScript, and React.
            </p>
            <p className="mb-2 text-soft-white">
              I enjoy creating responsive and user-friendly websites and
              applications. I’m also learning about clean code principles and
              atomic design to improve my coding skills.
            </p>
            <p className="text-soft-white">
              In my free time, I love to explore new technologies and contribute
              to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
