import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

const QuizStep13 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Less than $10,000" },
    { title: "$10,000 - $20,000" },
    { title: "$20,000 - $50,000" },
    { title: "$50,000 - $100,000" },
    { title: "$100,000 - $250,000" },
    { title: "$250,000 - $500,000" },
    { title: "$500,000 - $1,000,000" },
    { title: "More than $1,000,000" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("goalIncome", option.title);
    setTimeout(() => {
      navigate("/quiz/step=11");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={10} totalSteps={18} />
      <QuizSteps currentStep={13} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center mt-6">
        <h1 className="text-[30px] font-bold leading-[116%] mb-1 text-center">
          What monthly income do you want to achieve?
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-6 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-200 ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2189FF] text-lg" />
              )}
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

export default QuizStep13;
