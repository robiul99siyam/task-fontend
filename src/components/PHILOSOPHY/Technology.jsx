import { motion } from "motion/react";
import React from "react";
import Slider from "./Slider";
export default function Technology() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="lg:py-36 lg:px-20 py-10 px-2"
    >
      <h1 className="text-[#1F80F0] tracking-widest font-bold text-center">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <h1 className="text-[#0B305B]  lg:leading-[60px] leading-none font-semibold text-[35px] lg:text-[65px] text-center">
        The future of finance
      </h1>

      <Slider />
    </motion.div>
  );
}
