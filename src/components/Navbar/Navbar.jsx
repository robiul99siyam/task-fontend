import { FaGreaterThan } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import logoImage from "../../assets/logo/logoImage.svg";

export default function Navbar() {
  return (
    <nav className="py-4 px-28 bg-cover bg-center sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-7" src={logoImage} alt="Logo" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex text-[16px] text-white font-semibold items-center space-x-6">
            <li>
              <a className="px-2 py-2 border-b-[1px] border-transparent hover:border-gray-50 transition-all duration-300">
                Solutions
              </a>
            </li>
            <li>
              <a className="px-2 py-2 border-b-2 border-transparent hover:border-gray-50 transition-all duration-300">
                Service
              </a>
            </li>
            <li>
              <a className="px-2 py-2 border-b-2 border-transparent hover:border-gray-50 transition-all duration-300">
                About Us
              </a>
            </li>
            <li>
              <a className="border px-5 py-2 flex items-center gap-2 border-gray-50 rounded-full">
                <TbWorld /> EN
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <button className="flex items-center gap-2 px-8 py-3 border border-gray-50 rounded-md text-white font-bold text-lg hover:bg-white hover:text-[#0C69D5] opacity-80 transition-all">
          Contact Us <FaGreaterThan className="text-[8px]" />
        </button>
      </div>
    </nav>
  );
}
