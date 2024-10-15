import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-xl text-gray-700 flex-1 text-center md:text-left font-roboto font-medium">
            Simple header
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "grid grid-cols-1" : "hidden"
            } w-full md:w-auto md:flex justify-center items-center space-x-4 space-y-3 md:space-y-0 my-2 font-roboto`}
          >
            <Link to="/" className="  px-4 py-2 rounded">
              Home
            </Link>
            <Link
              to="/product-management"
              className="text-gray-800 hover:text-blue-500"
            >
              Product
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
