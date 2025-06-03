import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_24 from "../assets/step_24/step_24.png";

const QuizStep24 = () => {
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
    <div className="quiz-container min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%]">
        <div className="max-w-[500px] space-y-[15px ] w-full ">
          <h1 className="text-[30px] text-center text-[#000] font-bold mb-4 ">
      Get In Before the 300% Surge
          </h1>
          <p className="text-[16px] max-w-[400px] w-full mx-auto text-center font-[700] text-[#000] mb-6 "><span className="font-[400]">
            BlockchainFX’s $BFX token is still available in its presale phase for under $0.015. That’s far below its upcoming launch price of $0.05 on major exchanges, offering early buyers a guaranteed gain of more than 300% before it goes live.
          </span>
          </p>
         <div className="flex justify-center pt-[20px]">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] max-w-[307px] w-[100%] text-[#fff] font-[700]`}
          >
            Unlock Special Bonus
          </button>
         </div>
        </div>
          <div className="  max-w-[550px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_24}
              className="max-h-[580px] w-[98%] object-cover "
              alt=""
            />
        </div>
      </div>
    </div>
  );
};

export default QuizStep24;
