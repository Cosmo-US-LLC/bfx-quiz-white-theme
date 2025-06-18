import React from "react";
import multi1 from "../../../assets/oneApp/Multi/multi_1.svg";
import multi2 from "../../../assets/oneApp/Multi/mobile-multi-2.svg";

export default function MobileMultiAward() {

  return (
    <div className="pt-[15px] pb-[20px] bg-[#fff]">
      <div className="w-full ">
        <div className="space-y-2 mx-auto text-center pb-[40px]">
          <h2 className="text-[30px] text-[#000] font-[700] leading-[120%] tracking-[-2.1px]">
          Multi-Awarded Trading Platform
          </h2>
        </div>
        <div className="flex flex-col gap-4">   
          <img className="object-cover w-full " src={multi1} alt="Award 1" />
          <img className="object-cover w-full" src={multi2} alt="Award 2" />
        </div>
      </div>
    </div>
  );
}
