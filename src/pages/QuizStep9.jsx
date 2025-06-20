import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_9 from "../assets/step_9/step_9.png";
import { BiRightArrowAlt } from "react-icons/bi";

const QuizStep9 = () => {
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
      <div className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container">
        <QuizHeader currentStep={"Facts"} totalSteps={28} />
        <QuizSteps currentStep={9} totalSteps={28} />

        <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%] animate-fade-in-up">
          <div className="max-w-[550px] w-full flex flex-col justify-center items-center text-center ">
            <h1 className="text-[30px] leading-[42px] text-[#000] font-[800] !mb-4 ">
              Your cash is losing value every year
            </h1>
            <p className="text-[16px] px-6 font-[400] text-[#000] mb-6 ">
              The average global inflation rate ranges between 6–8% per year. That means if you keep $1,000 in cash, it could lose up to
              50% its value in just 9–10 years. In the U.S. alone, $100 in 2013
              now has the same buying power as about $65 in 2025.
            </p>
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 py-[13px] w-full max-w-[307px] bg-[#2189FF] text-white text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase rounded-[10px] transition transform active:scale-95 hover:bg-[#1f76db]"
            >
              Continue
              {/* <BiRightArrowAlt size={22} /> */}
            </button>
          </div>
          <div className="bg-[#D9D9D980] max-w-[550px] h-[390px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
            <img src={Step_9} className="max-h-[680px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStep9;
