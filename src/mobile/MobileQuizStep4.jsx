import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_4_1 from "../assets/step_4/step_4 (1).png";
import Step_4_2 from "../assets/step_4/step_4 (2).png";
import Step_4_3 from "../assets/step_4/step_4 (3).png";
import Step_4_4 from "../assets/step_4/step_4 (4).png";

const MobileQuizStep4 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Daily", img: Step_4_1 },
    { title: "Rarely", img: Step_4_2 },
    { title: "Few times a week", img: Step_4_3 },
    {
      title: "I haven’t started investing yet, but I want to",
      img: Step_4_4,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("checkFrequency", option.title);
    setTimeout(() => {
      navigate("/quiz/step=5");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={4} totalSteps={18} />
      <QuizSteps currentStep={4} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          How often do you check <br /> crypto prices or make trades?
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
              <p className="w-[88%] text-[16px] text-black text-start font-[700]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep4;
