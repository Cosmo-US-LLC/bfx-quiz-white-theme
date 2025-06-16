import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_3_1 from "../assets/step_3/step_3 (1).png";
import Step_3_2 from "../assets/step_3/step_3 (3).png";
import Step_3_3 from "../assets/step_3/step_3 (4).png";
import Step_3_4 from "../assets/step_3/step_3 (2).png";

const QuizStep3 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Beginner", img: Step_3_1 },
    { title: "Intermediate", img: Step_3_2 },
    { title: "Expert", img: Step_3_3 },
    { title: "I don't trade, but I follow the space", img: Step_3_4 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("experienceLevel", option.title);
    setTimeout(() => {
      navigate("/quiz/step=4");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={3} totalSteps={18} />
      <QuizSteps currentStep={3} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-bold leading-[120%] mb-1 text-center">
          How would you describe your crypto experience?
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
              <p className="w-[88%] text-black text-start font-medium">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep3;

