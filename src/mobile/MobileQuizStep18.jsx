import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_18_1 from "../assets/step_18/step_18 (3).png";
import Step_18_2 from "../assets/step_18/step_18 (2).png";
import Step_18_3 from "../assets/step_18/step_18 (1).png";

const MobileQuizStep18 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { title: "Yes, but I don’t know how", img: Step_18_1 },
    { title: "I’m already retired", img: Step_18_2 },
    { title: "I haven’t thought about retirement", img: Step_18_3 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("retirementPlan", option.title);
    setTimeout(() => {
      navigate("/quiz/step=15");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={14} totalSteps={18} />
      <QuizSteps currentStep={18} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          Do you want to retire wealthy?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-4 px-6 gap-3 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#D9D9D980]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2189FF] text-lg" />
              )}
              <img src={option.img} className="h-[40px]" alt={option.title} />
              <p className="w-[88%] text-[16px] text-black text-start font-medium">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep18;
