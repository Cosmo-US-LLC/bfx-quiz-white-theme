import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_5_1 from "../assets/step_5/step_5 (2).png";
import Step_5_2 from "../assets/step_5/step_5 (1).png";
import Step_5_3 from "../assets/step_5/step_5 (4).png";
import Step_5_4 from "../assets/step_5/step_5 (3).png";

const QuizStep5 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Yes, more than once", img: Step_5_1 },
    { title: "No, I usually wait things out", img: Step_5_2 },
    { title: "Maybe, but I prefer to play it safe", img: Step_5_3 },
    { title: "I’m not active in crypto yet", img: Step_5_4 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("regretAnswer", option.title);
    setTimeout(() => {
      navigate("/quiz/step=6");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={5} totalSteps={18} />
      <QuizSteps currentStep={6} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-12">
        <h1 className="text-[30px] font-bold leading-[116%] mb-1 text-center">
          Have you ever missed a good crypto <br /> opportunity and regretted it?
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

export default QuizStep5;
