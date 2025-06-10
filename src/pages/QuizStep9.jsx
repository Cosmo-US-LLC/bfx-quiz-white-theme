import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_9 from "../assets/step_9/step_9.png";

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
      <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
        <QuizHeader currentStep={"Facts"} totalSteps={28} />
        <QuizSteps currentStep={9} totalSteps={28} />

        <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%]">
          <div className="max-w-[500px] w-full text-center ">
            <h1 className="text-[30px] text-[#000] font-bold !mb-4 ">
              Inflation reduces your real wealth
            </h1>
            <p className="text-[16px] font-[400] text-[#000] mb-6 ">
              The average global inflation rate ranges between 6–8% per year.{" "}
              <br />
              <br /> That means if you keep $1,000 in cash, it could lose up to
              50% its value in just 9–10 years. In the U.S. alone, $100 in 2013
              now has the same buying power as about $65 in 2025.
            </p>
            <button
              onClick={handleNext}
              style={{
                borderRadius: "10px",
                background: "#2189FF",
              }}
              className={`py-[13px] max-w-[307px] text-[#fff] w-[100%] text-[#000] font-[500]`}
            >
              Continue
            </button>
          </div>
          <div className="bg-[#D9D9D980] max-w-[550px] h-[390px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img src={Step_9} className="max-h-[680px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStep9;
