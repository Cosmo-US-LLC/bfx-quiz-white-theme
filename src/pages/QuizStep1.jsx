import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import peopleimg from "../assets/Peoplehave/people_img.webp";

const QuizStep1 = () => {
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
   
    navigate("/quiz/step=2");
  };

 

  return (
    <div className="p-4">
       <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />
    <div className="quiz-container max-w-[1240px] mx-auto min-h-screen overflow-hidden flex flex-col items-center p-4">
     

      <div className="flex items-center justify-between w-[100%]">
        <div className="max-w-[600px] w-full  mt-[6rem]">
          <h1 className="text-[30px] text-[#000] font-bold mb-1 uppercase">
            76,000,000 People have joined{" "}
          </h1>
          <p className="text-[16px] font-[400] text-[#000] mb-6 ">
            76 million people invested in crypto for the first time
            in 2024. From January to December, the market grew by over 75
            percent, outperforming stocks, real estate, ETFs, and every other
            major financial market by a wide margin.
          </p>
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] max-w-[307px] w-[100%] text-[#fff] font-[500]`}
          >
            Continue
          </button>
        </div>
          <div className=" w-[100%] ">
            <img
              src={peopleimg}
              className="absolute max-w-[550px] bottom-[0%] right-[0%]"
              alt=""
            />
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuizStep1;
