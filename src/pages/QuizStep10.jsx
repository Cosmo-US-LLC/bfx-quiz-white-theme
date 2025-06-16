import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_10_1 from "../assets/step_10/step_10 (4).png";
import Step_10_2 from "../assets/step_10/step_10 (1).png";
import Step_10_3 from "../assets/step_10/step_10 (5).png";
import Step_10_4 from "../assets/step_10/step_10 (2).png";
import Step_10_5 from "../assets/step_10/step_10 (3).png";

const QuizStep10 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Not enough income", img: Step_10_1 },
    { title: "Lack of time", img: Step_10_2 },
    { title: "No access to the right opportunities", img: Step_10_3 },
    { title: "I just need something that actually works", img: Step_10_4 },
    { title: "Fear of losing money", img: Step_10_5 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("lifeBarrier", option.title);
    setTimeout(() => {
      navigate("/quiz/step=9");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={8} totalSteps={18} />
      <QuizSteps currentStep={10} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-bold leading-[116%]  text-center">
          What’s holding you back <br /> from living the life you want?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-2 mt-6">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-200 ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2189FF] text-lg" />
              )}

              <img src={option.img} className="h-[40px]" alt={option.title} />
              <p className="w-[88%] text-[#000] text-start font-medium">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep10;
