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
      <QuizHeader currentStep={""} totalSteps={""} />
      <QuizSteps currentStep={12} totalSteps={28} />

      <div className="mt-4 w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-[#000] font-bold mb-4 ">
       How millionaires build <br /> generational wealth
          </h1>
          <p className="text-[16px] max-w-[380px] mx-auto font-[400] text-[#000] mb-[4rem] ">
         Most millionaires and billionaires don’t rely on just one source of income. On average, they have 7 different income streams, including business earnings, investments, crypto, real estate, dividends, and more.
          </p>
        </div>
          <div className="bg-[#252525] relative mx-auto max-w-[260px] h-[280px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_12}
              className="max-h-[300px] mt-[-24px]"
              alt=""
            />
        </div>
        <div className="mt-[4rem]">
           <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] text-[#fff] w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep12;

