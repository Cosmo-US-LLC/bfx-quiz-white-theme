import React from "react";
import multi1 from "../../assets/oneApp/Multi/multi_1_desk.svg";
import multi2 from "../../assets/oneApp/Multi/multi-2.svg";

export default function MultiAward() {

  return (
    <div className="pt-[60px] px-[80px] pb-[60px] bg-[#fff]">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="space-y-2 mx-auto text-center pb-[40px]">
          <h2 className="text-[48px] text-[#000] font-[600] leading-[120%] tracking-[-3.36px]">
          Multi-Awarded Trading Platform
          </h2>
        </div>
        <div className="px-[240px] space-x-[18px] flex items-center justify-center">
          <img className="object-cover" src={multi1} alt="Award 1" />
          <img className="object-cover" src={multi2} alt="Award 2" />
        </div>
      </div>
    </div>
  );
}
