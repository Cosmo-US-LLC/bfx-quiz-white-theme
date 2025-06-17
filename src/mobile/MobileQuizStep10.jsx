import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

import Step_10_1 from "../assets/step_10/step_10 (4).png";
import Step_10_2 from "../assets/step_10/step_10 (1).png";
import Step_10_3 from "../assets/step_10/step_10 (5).png";
import Step_10_4 from "../assets/step_10/step_10 (2).png";
import Step_10_5 from "../assets/step_10/step_10 (3).png";

const MobileQuizStep10 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Not enough income", img: Step_10_1 },
    { title: "Lack of time", img: Step_10_2 },
    { title: "No access to the right opportunities", img: Step_10_3 },
    { title: "I just need something that actually works", img: Step_10_4 },
    { title: "Fear of losing money", img: Step_10_5 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("lifeBarrier", option.title);
    setTimeout(() => {
      navigate("/quiz/step=9");
    }, 600);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={8} totalSteps={18} />
      <QuizSteps currentStep={10} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          What’s holding you back <br /> from living the life you want?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option, index) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-4 px-6 gap-3 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute top-1/2 right-4 -translate-y-1/2 text-[#2189FF] text-lg size-6" />
              )}
              <img
                src={option.img}
                className={`${
                  index === 3 ? "h-[32px]" : "h-[36px]"
                } object-cover`}
                alt={option.title}
              />
              <p className="w-[88%] text-[16px] text-[#000] text-start font-[700]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep10;
