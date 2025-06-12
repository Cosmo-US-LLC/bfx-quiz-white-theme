import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Step_15_1 from "../assets/step_15/step_15 (3).png";
import Step_15_2 from "../assets/step_15/step_15 (2).png";
import Step_15_3 from "../assets/step_15/step_15 (1).png";

const QuizStep15 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "From crypto or other investments", img: Step_15_1 },
    { title: "No, but I want to", img: Step_15_2 },
    { title: "I didn’t know that was even possible", img: Step_15_3 },
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
      navigate("/quiz/fact-check-no=4");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={12} totalSteps={18} />
      <QuizSteps currentStep={15} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center mt-12">
        <h1 className="text-[30px] font-[700] leading-[116%] mb-1 text-center">
          Do you currently earn any passive income?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              className={`relative py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-200 ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2189FF] text-lg" />
              )}
              <img src={option.img} className="h-[40px]" alt="" />
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

export default QuizStep15;
