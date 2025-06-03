import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_7 from "../assets/step_7/step_7.webp";

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
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={7} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%]">
        <div className="max-w-[500px] w-full text-center ">
          <h1 className="text-[30px] text-[#000] font-bold mb-4  leading-[130%]">
          We’ve all missed some major <br /> opportunities in crypto
          </h1>
          <p className="text-[16px] font-[400] text-[#000] mb-6 ">
           The earlier you get in, the cheaper the price. That means less risk and more growth potential. Bitcoin was once worth less than $1. <br /><br /> Many of today’s most successful crypto projects like Ethereum, Solana, and BNB started with a presale. That’s where early supporters saw the biggest gains.
          </p>
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] text-[#fff] max-w-[307px] w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
        </div>
          <div className="bg-[#D9D9D980] max-w-[520px] h-[400px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_7}
              className="max-h-[580px]"
              alt=""
            />
        </div>
      </div>
    </div>
  );
};

export default QuizStep7;
