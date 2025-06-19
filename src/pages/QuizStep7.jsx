import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_7 from "../assets/step_7/step_7.webp";
import { BiRightArrowAlt } from "react-icons/bi";

const QuizStep7 = () => {
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
    <div className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={7} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%]">
        <div className="max-w-[500px] w-full flex flex-col justify-center items-center text-center animate-fade-in-up">
          <h1 className="text-[30px] text-[#000] font-[800] mb-4  leading-[140%]">
            We’ve all missed some major <br /> opportunities in crypto
          </h1>
          <p className="text-[16px] font-[400] text-[#000] mb-6 ">
            The earlier you get in, the cheaper the price. That <br /> means
            less risk and more growth potential. Bitcoin was <br /> once worth
            less than $1. <br />
            <br /> Many of today’s most successful crypto projects like <br />
            Ethereum, Solana, and BNB started with a presale. That’s <br />{" "}
            where early supporters saw the biggest gains.
          </p>
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 py-[13px] w-full max-w-[307px] bg-[#2189FF] text-white text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase rounded-[10px] transition transform active:scale-95 hover:bg-[#1f76db]"
          >
            Continue
            {/* <BiRightArrowAlt size={22} /> */}
          </button>
        </div>
        <div className="bg-[#D9D9D980] max-w-[520px] h-[400px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img src={Step_7} className="max-h-[580px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuizStep7;
