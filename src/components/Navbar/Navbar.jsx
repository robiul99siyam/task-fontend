import { FaGreaterThan } from "react-icons/fa6";
import logo from "../../assets/logo/logo.svg";
import logoImage from "../../assets/logo/logoImage.svg";

import DrapDownEN from "./DrapDownEN";
import DrapDownSolution from "./DrapDownSolution";

export default function Navbar({ scrolled }) {
  return (
    <nav
      // className="py-4 px-28 bg-cover bg-center"
      className={`px-28   transition-all duration-300  ${
        scrolled
          ? "bg-white shadow-lg fixed w-full  z-50 text-gray-900 py-6 "
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center gap-10 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {scrolled ? (
            <img className="h-7" src={logo} alt="Logo" />
          ) : (
            <img className="h-7" src={logoImage} alt="Logo" />
          )}
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex text-[16px] text-white font-semibold items-center space-x-6">
            <li>
              {/* work place */}
              <DrapDownSolution scrolled={scrolled} />
            </li>
            <li>
              <a
                className={`px-2 py-2 border-b-2 border-transparent ${
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
              {/* work place */}

              <DrapDownEN scrolled={scrolled} />
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <button
          className={`flex items-center gap-2 px-8 py-3 border border-gray-50 rounded-md text-white font-bold text-lg ${
            scrolled
              ? "bg-[#FE8B53]  hover:bg-[#E76F2F] shadow-xl"
              : "hover:bg-white hover:text-[#0C69D5]"
          } opacity-80 transition-all`}
        >
          Contact Us <FaGreaterThan className="text-[8px] mt-1" />
        </button>
      </div>
    </nav>
  );
}
