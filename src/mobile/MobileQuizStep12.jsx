import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_12 from "../assets/step_12/step_12.png";

const MobileQuizStep12 = () => {
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
    navigate("/quiz/step=10");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={18} />
      <QuizSteps currentStep={12} totalSteps={28} />

      <div className="w-[100%] animate-fade-in-up">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-[#000] font-[700] leading-[120%] mb-4 ">
           How millionaires<br /> build generational wealth
          </h1>
          <p className="text-[16px] max-w-[380px] mx-auto font-[400] text-[#000] mb-[2rem] ">
           Most millionaires don’t rely on just one income stream. According to CNBC, 65% have at least three different sources of income, while nearly a third have five or more. These can include business earnings, real estate, dividends, crypto, stocks, and other passive income sources.
          </p>
        </div>
        <div className="mb-[3rem]">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] text-[#fff] w-[100%] text-[#fff] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase`}
          >
            Continue
          </button>
        </div>
        <div className="bg-[#D9D9D9] mb-[3rem] relative mx-auto max-w-[260px] h-[280px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img src={Step_12} className="max-h-[300px] mt-[-24px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep12;
