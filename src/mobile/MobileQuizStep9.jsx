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
     <div className="quiz-container  min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={9} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto mt-6 w-[100%]">
        <div className="w-full text-center ">
          <h1 className="text-[28px] text-center text-[#fff] font-bold !mb-4 ">
       Inflation reduces <br /> your real wealth
          </h1>
          <p className="text-[16px] text-center font-[400] text-[#fff] mb-6 ">
           The average global inflation rate  ranges between 6–8% per year. <br /><br/> That means if you keep $1,000 in cash, it could lose up to 50% its value in just 9–10 years. In the U.S. alone, $100 in 2013 now has the same buying power as about $65 in 2025.
          </p>
        </div>
          <div className="bg-[#252525] max-w-[300px] mx-auto mt-6 h-[300px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_9}
              className="max-h-[460px]"
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
            className={`py-[13px] w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MobileQuizStep9;
