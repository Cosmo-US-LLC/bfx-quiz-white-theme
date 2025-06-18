import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_16 from "../assets/step_16/step_16.png";

const MobileQuizStep16 = () => {
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
    navigate("/quiz/step=13");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={16} totalSteps={28} />

      <div className=" w-[100%]">
        <div className=" space-y-[15px] text-center mx-auto w-full mb-[2rem]">
          <h1 className="text-[28px] font-[800] leading-[140%] text-[#000] mb-4 ">
            It has never been easier to earn real passive income with crypto
          </h1>
          <p className="text-[16px] font-[400] leading-[170%] text-[black]  ">
            A notable example is BlockchainFX. People who buy the new $BFX token
            during the presale earn rewards every time someone trades on the
            platform. As $BFX holders, they receive a share of all trading fees
            in USDT without having to trade themselves. 
          </p>
        </div>
        <div className="flex justify-center mb-[3rem] ">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px]  w-[100%] text-[#fff] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase`}
          >
            Continue
          </button>
        </div>
        <div className="bg-[#D9D9D9] mx-auto mb-[3rem] max-w-[320px] h-[280px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img
            src={Step_16}
            className="max-h-[300px] w-[98%] object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep16;
