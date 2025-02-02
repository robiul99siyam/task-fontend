import React from "react";
import { bankImageData } from "../../utails/data";

export default function BankLogo() {
  return (
    <div className=" px-28">
      <div className="flex flex-wrap justify-center items-center">
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
  );
}
