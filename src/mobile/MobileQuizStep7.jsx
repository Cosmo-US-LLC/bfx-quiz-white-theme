import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_7 from "../assets/step_7/step_7.webp";

const MobileQuizStep7 = () => {
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
    navigate("/quiz/step=7");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={7} totalSteps={28} />

      <div className=" w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-[#000] font-bold mb-4  leading-[130%]">
            We’ve all missed some major opportunities in crypto
          </h1>
          <p className="text-[16px] font-[400] text-[#000] mb-[2rem] ">
            The earlier you get in, the cheaper the price. That means less risk
            and more growth potential. Bitcoin was once worth less than $1.{" "}
            <br />
            <br /> Many of today’s most successful crypto projects like
            Ethereum, Solana, and BNB started with a presale. That’s where early
            supporters saw the biggest gains.
          </p>
        </div>
        <div className="mb-[4rem]">
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
        <div className="bg-[#D9D9D9] mb-[3rem] mt-[2rem] h-[230px] max-w-[260px] mx-auto w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img src={Step_7} className="max-h-[340px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep7;
