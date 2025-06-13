import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

import Step_11_1 from "../assets/step_11/step_11 (4).png";
import Step_11_2 from "../assets/step_11/step_11 (1).png";
import Step_11_3 from "../assets/step_11/step_11 (2).png";
import Step_11_4 from "../assets/step_11/step_11 (3).png";

const MobileQuizStep11 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "None", img: Step_11_1 },
    { title: "Just one", img: Step_11_2 },
    { title: "Two", img: Step_11_3 },
    { title: "Three or more", img: Step_11_4 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("incomeSources", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-no=3");
    }, 600);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={9} totalSteps={18} />
      <QuizSteps currentStep={11} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          How many sources of income do you currently have?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative space-x-2 py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-300 ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute top-1/2 right-4 -translate-y-1/2 text-[#2189FF] text-lg size-6" />
              )}
              <img src={option.img} className="h-[40px]" alt={option.title} />
              <p className="w-[88%] text-[16px] font-[700] text-[#000] text-start">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep11;
