import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import Step_24 from "../../assets/step_24/step_24.png";

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
      <div className="max-w-[600px] space-y-[15px ] w-[50%]">
        <h1 className="text-[30px] max-w-[350px] w-full text-[#000] font-bold mb-4 ">
          The BFX Price is about to Surge by 300%
        </h1>
        <p className="text-[16px] w-full max-w-[420px]  font-[700] text-[#000] mb-6 ">
          <span className="font-[400]">
            BlockchainFX’s $BFX token is still available in its presale phase
            for under $0.015. That’s far below its upcoming launch price of
            $0.05 on major exchanges, offering early buyers a guaranteed gain of
            more than 300% before it goes live.
          </span>
        </p>
        <div className="flex pt-[20px]">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] max-w-[307px] w-[100%] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
          >
            Claim Exclusive Bonus Code
          </button>
        </div>
      </div>
      <div className="  max-w-[550px] w-[50%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
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
