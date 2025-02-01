import { useState } from "react";

export default function DrapDownSolution({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Trigger */}
      <a
        className={`px-2 py-2 cursor-pointer z-10 ${
          scrolled && "text-blue-500"
        }`}
      >
        Solutions
      </a>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-white absolute m-1 text-[#1f3b5a] px-3 py-1 border rounded w-48 h-auto">
          <ul>
            <li className="py-2 hover:text-blue-700 border-gray-300 cursor-pointer">
              AnyCaaS
            </li>
            <li className="py-2 hover:text-blue-700 border-gray-300 cursor-pointer">
              AnyBaaS
            </li>
            <li className="py-2 hover:text-blue-700 border-gray-300 cursor-pointer">
              AnyPaaS
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
