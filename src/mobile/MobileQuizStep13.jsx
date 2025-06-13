import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

const MobileQuizStep13 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("goalIncome", option.title);
    setTimeout(() => {
      navigate("/quiz/step=11");
    }, 600);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={10} totalSteps={18} />
      <QuizSteps currentStep={13} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          What monthly income <br />
          do you want to achieve?
        </h1>

        <div className="grid grid-cols-2 gap-5 mt-8 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleOptionClick(option)}
              className={`relative py-6 flex items-center justify-center rounded-[8px] cursor-pointer transition-all duration-300 ${
                selectedOption === option.title
                  ? "border-2 border-[#2189FF] bg-white"
                  : "bg-[#EDEDED]"
              }`}
            >
              {selectedOption === option.title && (
                <FaCheckCircle className="absolute top-2 right-2 text-[#2189FF] text-lg" />
              )}
              <p className="w-[144px] mx-auto text-[16px] font-[700] text-center text-[#000]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep13;
