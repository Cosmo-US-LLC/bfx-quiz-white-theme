import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Step_17_1 from "../assets/step_17/step_17 (1).png";
import Step_17_2 from "../assets/step_17/step_17 (3).png";
import Step_17_3 from "../assets/step_17/step_17 (2).png";

const QuizStep17 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Very confident", img: Step_17_1 },
    { title: "Somewhat confident", img: Step_17_2 },
    { title: "Not confident at all", img: Step_17_3 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    setTimeout(() => {
      navigate("/quiz/step=14");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={13} totalSteps={18} />
      <QuizSteps currentStep={17} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[116%] mb-1 text-center">
          How confident are you about <br /> your financial future?
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

export default QuizStep17;
