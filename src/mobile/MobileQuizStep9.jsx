import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_9 from "../assets/step_9/step_9.png";

const MobileQuizStep9 = () => {
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
    navigate("/quiz/step=8");
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
        <QuizHeader currentStep={"Facts"} totalSteps={28} />
        <QuizSteps currentStep={9} totalSteps={28} />

        <div className="max-w-[1240px] w-[100%] animate-fade-in-up">
          <div className="w-full text-center ">
            <h1 className="text-[28px] leading-[120%] text-[#000] font-[700] !mb-4 ">
              Your cash is losing <br /> value every year
            </h1>
            <p className="text-[16px] font-[400] text-[#000] mb-[2rem] ">
             The average global inflation rate ranges between 6% and 8% per year. This means that holding cash in a bank account could result in a loss of up to 50% of its value over just 9 to 10 years. In the U.S., for example, $100 in 2013 now has the same purchasing power as about $65 in 2025. Because of this, financial experts recommend diversifying your income streams to protect your wealth.
            </p>
          </div>
          <div className="mb-[3rem]">
            <button
              onClick={handleNext}
              style={{
                borderRadius: "10px",
                background: "#2189FF",
              }}
              className={`py-[13px] w-[100%] text-[#fff] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase`}
            >
              Continue
            </button>
          </div>
          <div className="bg-[#D9D9D9] mb-[2rem] mx-auto max-w-[260px] h-[240px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
            <img src={Step_9} className="max-h-[320px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep9;
