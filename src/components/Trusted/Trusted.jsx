import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function Trusted() {
  const [years, setYears] = useState(0);
  const [institutions, setInstitutions] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(yearsInterval);
        return prev;
      });
    }, 100);

    const institutionsInterval = setInterval(() => {
      setInstitutions((prev) => {
        if (prev < 40) return prev + 1;
        clearInterval(institutionsInterval);
        return prev;
      });
    }, 50);

    const customersInterval = setInterval(() => {
      setCustomers((prev) => {
        if (prev < 200) return prev + 5; // Increase by 5 for smoother animation
        clearInterval(customersInterval);
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(institutionsInterval);
      clearInterval(customersInterval);
    };
  }, []);

  return (
    <div className="py-4 px-60">
      <h1 className="text-[#1F80F0] tracking-widest font-bold text-center">
        TRUSTED BY THE BEST
      </h1>

      <div className="flex justify-center items-center gap-36">
        {/* Years of Experience */}
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="flex justify-center items-center font-bold text-8xl text-[#1573DF]">
            <FaGreaterThan className="text-[8px] text-7xl mt-2 font-extrabold text-[#1573DF]" />
            {years}
          </p>
          <p className="text-lg text-[#0B305B]">Years of Experience</p>
        </div>

        {/* Financial Institutions */}
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="flex justify-center items-center font-bold text-8xl text-[#1573DF]">
            {institutions}+
          </p>
          <p className="text-lg text-[#0B305B]">Financial Institutions</p>
        </div>

        {/* Customers Each */}
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="flex justify-center items-center font-bold text-8xl text-[#1573DF]">
            <FaGreaterThan className="text-[8px] text-7xl mt-2 font-extrabold text-[#1573DF]" />
            {customers}m
          </p>
          <p className="text-lg text-[#0B305B]">Customers Each</p>
        </div>
      </div>
    </div>
  );
}
