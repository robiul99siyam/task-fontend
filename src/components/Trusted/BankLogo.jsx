import React from "react";
import { bankImageData } from "../../utails/data";

export default function BankLogo() {
  return (
    <div className="px-28">
      <div className="hidden lg:block ">
        <div className="flex  flex-wrap justify-center items-center">
          {bankImageData.map((bank) => (
            <div key={bank.id} className="my-5 mx-5">
              <img
                className="w-44"
                src={bank.image}
                alt={`bank-logo-${bank.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="sm:block lg:hidden swiffy-slider slider-item-show-auto slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white shadow-lg py-3 lg:py-4"
        data-slider-nav-autoplay-interval="2000"
      >
        <div className="slider-container">
          {bankImageData.map((bank) => (
            <div key={bank.id} className="slider-item">
              <img src={bank.image} alt={`bank-logo-${bank.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
