import React, { useEffect, useRef, useState } from "react";
import { SliderContent } from "../../utails/data";

export default function Slider() {
  const [sliderId, setSliderId] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new MutationObserver(() => {
      const activeSlider = document.querySelector(".slide-visible");

      if (activeSlider) {
        const activeId = activeSlider.getAttribute("data-id");

        setSliderId(Number(activeId));
      }
    });

    observer.observe(ref.current, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [setSliderId]);
  return (
    <>
      <div className="flex justify-center items-center gap-36 py-8">
        {SliderContent.map((slider) => (
          <button
            className={`${
              slider.id === sliderId
                ? "bg-[#B9D9FF] text-[#1F80F0] px-8 py-2 font-bold rounded-full"
                : "text-[#1F80F0] tracking-widest font-bold"
            }`}
            key={slider.id}
          >
            {slider.tags}
          </button>
        ))}
      </div>
      <div
        ref={ref}
        className="mt-16 swiffy-slider slider-nav-round slider-nav-animation slider-nav-animation-fadein slider-item-first-visible slider-nav-autoplay"
        data-slider-nav-autoplay-interval="5000"
      >
        <ul className="slider-container">
          {SliderContent.map((slider) => (
            <li
              // onChange={() => setSliderId(slider.id)}
              key={slider.id}
              data-id={slider.id}
              className={slider.id === sliderId ? "slide-visible" : ""}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Text Section */}
                  <div className="flex justify-centers  items-start px-4 md:px-6 lg:px-8 ">
                    <div>
                      <p className="text-[#1F80F0] mb-2 tracking-widest font-bold">
                        {slider.tags.toUpperCase()}
                      </p>
                      <h2 className="text-[#0B305B]   font-semibold text-5xl ">
                        {slider.title}
                      </h2>
                      <p className="text-[#0B305B] tracking-normal font-semibold text-lg mt-3">
                        {slider.description}
                      </p>
                      <p className="text-[#0B305B] mt-3">{slider.motive}</p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="hidden md:block">
                    <img
                      src={slider.images}
                      className="w-full h-96 object-cover rounded-lg"
                      loading="lazy"
                      alt="slider"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
