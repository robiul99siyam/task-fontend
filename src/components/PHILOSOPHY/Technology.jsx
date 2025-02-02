import React from "react";
import Slider from "./Slider";
export default function Technology() {
  return (
    <div className="lg:py-36 lg:px-28 py-10 px-2">
      <h1 className="text-[#1F80F0] tracking-widest font-bold text-center">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <h1 className="text-[#0B305B]  lg:leading-[70px] leading-none font-semibold text-[35px] lg:text-[65px] text-center">
        The future of finance
      </h1>

      <Slider />
    </div>
  );
}
