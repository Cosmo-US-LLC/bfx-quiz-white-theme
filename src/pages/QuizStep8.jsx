import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Step_8_1 from "../assets/step_8/step_8 (3).png";
import Step_8_2 from "../assets/step_8/step_8 (2).png";
import Step_8_3 from "../assets/step_8/step_8 (1).png";

const QuizStep8 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "I feel it, but I'm managing", img: Step_8_1 },
    { title: "A lot, my savings are losing value fast", img: Step_8_2 },
    { title: "I don’t really think about it", img: Step_8_3 },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("inflationConcern", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-3");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={7} totalSteps={18} />
      <QuizSteps currentStep={8} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-12">
        <h1 className="text-[30px] font-bold leading-[116%] mb-1 text-center">
          How much does inflation <br /> worry you today?
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

export default QuizStep8;
