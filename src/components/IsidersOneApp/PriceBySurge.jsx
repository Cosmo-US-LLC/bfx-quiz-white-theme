import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import Step_24 from "../../assets/step_24/surge.webp";

const PriceBySurge = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate("/quiz/results");
  };

  return (
    <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[6rem] mb-6 w-[100%]">
      <div className="max-w-[600px] space-y-[15px] w-[50%]">
        <h2 className="text-[48px] max-w-[490px] tracking-[-3.36px] w-full text-[#000] font-[600] mb-4 ">
          The BFX Price is about to Surge by 300%
        </h2>
        <p className="text-[16px] w-full max-w-[490px]  font-[700] text-[#000] mb-6 ">
          <span className="font-[400]">
            BlockchainFX’s $BFX token is still available in its presale phase
            for under $0.015, which is far below its upcoming launch price of
            $0.05 on major exchanges. This gives early buyers a significant
            opportunity for upside potential.
          </span>
        </p>
        <div className="flex pt-[20px]">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] max-w-[350px] w-[100%] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
          >
            CLAIM YOUR PERSONAL BONUS
          </button>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
        <img
          src={Step_24}
          className="max-h-[580px] w-[98%] object-cover "
          alt=""
        />
      </div>
    </div>
  );
};

export default PriceBySurge;
