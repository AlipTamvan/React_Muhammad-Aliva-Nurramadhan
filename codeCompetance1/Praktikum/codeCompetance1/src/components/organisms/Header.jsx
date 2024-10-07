import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link dari react-scroll
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import Link dari react-router-dom
import avIcon from "../../assets/icons/AV-Icon.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      // Jika sudah di halaman home, scroll ke Contact
      document
        .getElementById("contact-section")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      // Jika di halaman lain, pindah ke Home dan scroll ke Contact
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact-section")
          .scrollIntoView({ behavior: "smooth" });
      }, 100); // Timeout untuk memastikan halaman Home sudah termuat
    }
  };

  return (
    <header className="bg-dark-black shadow">
      <nav className="container mx-auto px-6 md:px-0 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-2xl flex text-soft-white md:text-left font-montserrat font-bold">
            <img src={avIcon} alt="Logo" className="w-12 h-auto mr-4 " />
            Aliva.
          </div>

          {/* Button untuk menu pada perangkat mobile */}
          <div className="items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-soft-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Dropdown */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:w-auto md:flex justify-center items-center space-x-4 space-y-3 md:space-y-0 my-2 font-roboto text-center`}
          >
            <RouterLink
              to="/"
              className="text-soft-white px-4 py-2 font-montserrat rounded"
            >
              Home
            </RouterLink>
            <RouterLink to="/about" className="text-soft-white font-montserrat">
              About
            </RouterLink>
            <button
              onClick={handleContactClick}
              className="text-soft-white font-montserrat pl-2"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
