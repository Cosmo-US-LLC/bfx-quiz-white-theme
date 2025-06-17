import React from "react";
import { useTranslation } from "react-i18next";

import icn1 from "../../../assets/oneApp/KYCVerified/coinsult.svg";
import icn2 from "../../../assets/oneApp/KYCVerified/certik.svg";
import icn3 from "../../../assets/oneApp/KYCVerified/certik.svg";

function MobileKYCVerified() {
  const { t } = useTranslation();

  const cardItems = [
    {
      img: icn1,
      title: "External Audit by Coinsult",
      description: (
        <p>
          BlockchainFX has been fully audited by Coinsult, a trusted auditing
          firm from the Netherlands, and confirmed to be 100% secure.
        </p>
      ),
    },
    {
      img: icn2,
      title: "External Audit by CertiK",
      description: (
        <p>
          CertiK, the world’s leading blockchain security company, audited
          BlockchainFX and confirm edit meets the highest security standards.
        </p>
      ),
    },
    {
      img: icn3,
      title: "Team KYC Verified by Solidproof",
      description: (
        <p>
          CThe BlockchainFX team has been successfully verified by Solid proof, a
          reputable auditing company from Germany.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-[#fff]">
      <div className=" pt-[15px] w-[100%] mx-auto relative">
        <h2 className="text-[30px] text-[#000] font-[700] leading-[155.556%] text-center">
          Security Verified by Industry Experts
        </h2>
        <div className="pt-[25px] w-[100%] mx-auto">
          <div className="flex flex-col gap-y-[19px]">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="pl-[16px] pr-[12px] w-[100%] flex flex-col justify-between pt-[20px] pb-[24px] max-h-[200.384px] min-h-[200.384px] bg-[#fff] rounded-[16px]"
                style={{
                  border: "1px solid #D9D9D9",
                }}
              >
                <div className="flex justify-between pb-[15px] items-center">
                  <img
                    src={item.img}
                    className="h-[40px]"
                    alt="Security_Verified"
                  />
                  <p
                    style={{
                      background: "rgba(0, 124, 45, 0.16)",
                    }}
                    className="py-[3px] rounded-[5px] px-[8px] text-[#01BA48] text-[14px] font-[500]"
                  >
                    completed
                  </p>
                </div>
                <div>
                  <div className="min-h-[30px] flex justify-start pb-[10px] items-center">
                    <h3 className="text-[20px] text-[#000] font-[600] break-normal leading-[109.316%]">
                      {item.title}
                    </h3>
                  </div>
                  <h4 className="text-[15px] text-[#000] font-[400] leading-[135.796%]">
                    {item.description}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileKYCVerified;
