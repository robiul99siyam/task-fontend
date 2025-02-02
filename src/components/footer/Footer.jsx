import React from "react";
import logoImage from "../../assets/logo/logoImage.svg";

export default function Footer() {
  return (
    <>
      <div className="w-full h-36 px-28 bg-[#002045] border-b border-gray-700">
        <div className="flex justify-between items-center h-full px-8">
          <div>
            <img src={logoImage} alt="Logo" className="h-12" />
          </div>
          <div>
            <ul className="flex space-x-10 text-[#00E3E5] font-semibold">
              <li className="border-r px-2 border-gray-700 py-5">
                Our Solutions
              </li>
              <li className="py-5">AnyCaaS</li>
              <li className="py-5">AnyBaaS</li>
              <li className="py-5">AnyPaaS</li>
            </ul>
          </div>
        </div>

        <div
          className="w-full h-auto
       px-28 bg-[#002045]"
        ></div>
      </div>

      <div className="w-full h-14 py-5 px-28  bg-[#00152D] flex justify-between items-center ">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/robiul-islam-siyam/"
          className="text-blue-700 text-sm"
        >
          ©2025 All rights reserved.siyamrobiulislam@gmail.com
        </a>
        <p className="text-blue-700 text-sm text-end">Privacy Policy</p>
      </div>
    </>
  );
}
