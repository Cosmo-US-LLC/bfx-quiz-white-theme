import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import step_2img1 from "../assets/step_2/step_2 (6).png";
import step_2img2 from "../assets/step_2/step_2 (5).png";
import step_2img3 from "../assets/step_2/step_2 (4).png";
import step_2img4 from "../assets/step_2/step_2 (1).png";
import step_2img5 from "../assets/step_2/step_2 (2).png";
import step_2img6 from "../assets/step_2/step_2 (3).png";

const QuizStep2 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Grow wealth", img: step_2img1 },
    { title: "Passive income", img: step_2img2 },
    { title: "Financial freedom", img: step_2img3 },
    { title: "Be my own boss", img: step_2img4 },
    { title: "Travel the world", img: step_2img5 },
    { title: "Retire wealthy", img: step_2img6 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("mainGoal", option.title);
    setTimeout(() => {
      navigate("/quiz/step=3");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={2} totalSteps={18} />
      <QuizSteps currentStep={2} totalSteps={28} />

      <div className="w-full max-w-[1240px] mx-auto mt-6">
        <h1 className="text-[30px] font-bold leading-[120%] mb-1 text-center">
          What is your main goal?
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative pr-4 flex items-center justify-between rounded-[8px] cursor-pointer  ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute top-1/2 right-4 -translate-y-1/2 text-[#2189FF] text-lg size-6" />
              )}
              <img src={option.img} className="h-[100px]" alt={option.title} />
              <p className="w-[60%] text-black font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep2;
