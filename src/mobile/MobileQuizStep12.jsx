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
    <div className="quiz-container min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={""} />
      <QuizSteps currentStep={12} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto mt-6 w-[100%]">
        <div className=" w-full text-center ">
          <h1 className="text-[28px] text-center text-[#fff] font-bold mb-4 ">
       How millionaires build <br /> generational wealth
          </h1>
          <p className="text-[16px] max-w-[380px] text-center mx-auto font-[400] text-[#fff] mb-6 ">
         Most millionaires and billionaires don’t rely on just one source of income. On average, they have 7 different income streams, including business earnings, investments, crypto, real estate, dividends, and more.
          </p>
        </div>
          <div className="bg-[#252525] mx-auto relative max-w-[300px] !mt-[40px] h-[300px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_12}
              className="max-h-[320px] mt-[-20px]"
              alt=""
            />
        </div>
        <div className="flex justify-center mt-12">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px]  w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep12;
