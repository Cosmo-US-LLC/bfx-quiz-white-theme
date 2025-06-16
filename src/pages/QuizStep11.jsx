import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_11_1 from "../assets/step_11/step_11 (4).png";
import Step_11_2 from "../assets/step_11/step_11 (1).png";
import Step_11_3 from "../assets/step_11/step_11 (2).png";
import Step_11_4 from "../assets/step_11/step_11 (3).png";

const QuizStep11 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "None", img: Step_11_1 },
    { title: "Just one", img: Step_11_2 },
    { title: "Two", img: Step_11_3 },
    { title: "Three or more", img: Step_11_4 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("incomeSources", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-no=3");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={9} totalSteps={18} />
      <QuizSteps currentStep={11} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-bold leading-[116%] mb-1 text-center">
          How many sources of income <br /> do you currently have?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
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

export default QuizStep11;
