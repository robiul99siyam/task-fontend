import { useState } from "react";
import { FaBars, FaGreaterThan, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.svg";
import logoImage from "../../assets/logo/logoImage.svg";

import DrapDownEN from "./DrapDownEN";
import DrapDownSolution from "./DrapDownSolution";

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`px-6 md:px-5 lg:px-20 transition-all duration-300 md:py-4 ${
        scrolled
          ? "bg-white shadow-lg fixed w-full z-50 text-gray-900 py-4 "
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {scrolled ? (
            <img className="h-7" src={logo} alt="Logo" />
          ) : (
            <img className="h-7" src={logoImage} alt="Logo" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          <ul
            className={`flex text-[16px] ${
              scrolled ? "text-gray-900" : "text-white"
            } font-semibold items-center space-x-6`}
          >
            <li>
              <DrapDownSolution scrolled={scrolled} />
            </li>
            <li>
              <a
                className={`px-2 py-2 border-b-2 border-transparent  ${
                  scrolled
                    ? "text-blue-500 hover:border-blue-500"
                    : "hover:border-gray-50"
                } transition-all duration-300`}
              >
                Service
              </a>
            </li>
            <li>
              <a
                className={`px-2 py-2 border-b-2 border-transparent ${
                  scrolled
                    ? "text-blue-500 hover:border-blue-500"
                    : "hover:border-gray-50"
                } transition-all duration-300`}
              >
                About Us
              </a>
            </li>
            <li>
              <DrapDownEN scrolled={scrolled} />
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <button
          className={`hidden md:flex items-center gap-2 px-6 md:px-2 py-2 md:py-2 border border-gray-50 rounded-md text-white font-bold text-base md:text-lg ${
            scrolled
              ? "bg-[#FE8B53] hover:bg-[#E76F2F] shadow-xl"
              : "hover:bg-white hover:text-[#0C69D5]"
          } opacity-80 transition-all`}
        >
          Contact Us <FaGreaterThan className="text-[8px] mt-1" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-radial bg-[radial-gradient(at_15%_75%,_#3c9dca,_#0054BF,_#4f46e5)] shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-900 font-semibold">
            <li>
              <DrapDownSolution scrolled={true} />
            </li>
            <li>
              <a className="lg:hover:text-blue-500 text-white transition-all duration-300">
                Service
              </a>
            </li>
            <li>
              <a className="lg:hover:text-blue-500 text-white transition-all duration-300">
                About Us
              </a>
            </li>
            <li>
              <DrapDownEN scrolled={true} />
            </li>
            <li>
              <button className="mt-4 px-6 py-2 bg-[#FE8B53] text-white font-bold rounded-md hover:bg-[#E76F2F] transition-all">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
