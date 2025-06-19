import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

import Step_8_1 from "../assets/step_8/step_8 (3).png";
import Step_8_2 from "../assets/step_8/step_8 (2).png";
import Step_8_3 from "../assets/step_8/step_8 (1).png";

const MobileQuizStep8 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "I feel it, but I'm managing", img: Step_8_1 },
    { title: "A lot, my savings are losing value fast", img: Step_8_2 },
    { title: "I don’t really think about it", img: Step_8_3 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("inflationConcern", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-3");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={7} totalSteps={18} />
      <QuizSteps currentStep={8} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          How much does inflation worry you today?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative space-x-2 py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute top-1/2 right-4 -translate-y-1/2 text-[#2189FF] text-lg size-6" />
              )}
              <img src={option.img} className="h-[40px]" alt={option.title} />
              <p className="w-[88%] pr-4 text-[16px] text-[#000] text-start font-[700]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep8;
