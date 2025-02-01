import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { languages } from "../../utails/data";
export default function DrapDownEN({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setIsOpen(!isOpen)}
        className={`border  px-5 py-2 flex items-center gap-2 ${
          scrolled ? "border-blue-500 text-blue-500" : "border-gray-50"
        } rounded-full`}
      >
        <TbWorld /> EN {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </a>

      <div
        className={`${
          isOpen
            ? "bg-white  absolute m-1 text-[#1a3657]  px-3 py-1 border rounded w-auto h-auto"
            : ""
        }`}
      >
        {isOpen &&
          languages.map((language) => (
            <li
              key={language.code}
              className="border-b py-1 hover:text-blue-700 border-gray-300"
            >
              {language.code} {language.label}
            </li>
          ))}
      </div>
    </>
  );
}
