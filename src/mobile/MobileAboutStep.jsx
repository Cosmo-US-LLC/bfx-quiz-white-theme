import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_24 from "../assets/step_24/surge.webp";


const MobileAboutStep = () => {
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
    <div className="flex flex-col relative items-center p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"About BFX"} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />
          <div className="flex flex-col items-center justify-between mt-[15px] mb-6 w-[100%]">
      <div className="space-y-[15px] text-center w-[100%]">
        <h2 className="text-[30px] max-w-[350px] mx-auto w-full text-[#000] font-[700] mb-4 ">
          The BFX Price is about to Surge by 300%
        </h2>
        <p className="text-[16px] w-full max-w-[420px]  font-[700] text-[#000] mb-6 ">
          <span className="font-[400]">
            BlockchainFX’s $BFX token is still available in its presale phase
            for under $0.015, which is far below its upcoming launch price of
            $0.05 on major exchanges. This gives early buyers a significant
            opportunity for upside potential.
          </span>
        </p>
      </div>
      <div className="mt-6 max-w-[550px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
        <img
          src={Step_24}
          className="max-h-[580px] w-[98%] object-cover "
          alt=""
        />
      </div>
      <div className="flex justify-center pt-[30px] w-[100%]">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] w-[100%] text-[15px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
          >
            Unlock your Special Bonus (3/3)
          </button>
        </div>
    </div>
     

      
    </div>
  );
};
export default MobileAboutStep;
