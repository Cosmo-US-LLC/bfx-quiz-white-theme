import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_15_1 from "../assets/step_15/step_15 (3).png";
import Step_15_2 from "../assets/step_15/step_15 (2).png";
import Step_15_3 from "../assets/step_15/step_15 (1).png";

const MobileQuizStep15 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      title: "From crypto or other investments",
      img: Step_15_1,
    },
    {
      title: "No, but I want to",
      img: Step_15_2,
    },
    {
      title: "I didn’t know that was even possible",
      img: Step_15_3,
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
    localStorage.setItem("passiveIncome", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-no=4");
    }, 600);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={12} totalSteps={18} />
      <QuizSteps currentStep={15} totalSteps={28} />

      <div className="w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          Do you currently earn any passive income?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
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

export default MobileQuizStep15;
