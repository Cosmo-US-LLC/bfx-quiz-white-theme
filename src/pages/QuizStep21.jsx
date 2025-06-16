import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_21_1 from "../assets/step_21/step_21 (3).png";
import Step_21_2 from "../assets/step_21/step_21 (1).png";
import Step_21_3 from "../assets/step_21/step_21 (4).png";
import Step_21_4 from "../assets/step_21/step_21 (2).png";

const QuizStep21 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { title: "I act fast and secure my position", img: Step_21_1 },
    { title: "I usually need some time before making moves", img: Step_21_2 },
    { title: "I tend to wait too long and miss out", img: Step_21_3 },
    { title: "Depends on how strong the project looks", img: Step_21_4 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = (option) => {
    setSelectedOption(option.title);
    setTimeout(() => {
      navigate("/quiz/step=18_28");
    }, 200);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 quiz-container">
      <QuizHeader currentStep={17} totalSteps={18} />
      <QuizSteps currentStep={21} totalSteps={28} />

      <div className="max-w-[1050px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[116%] mb-1 text-center">
          When you get the chance to buy into early stage<br /> crypto projects, how do you usually react?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option.title}
              onClick={() => handleNext(option)}
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
              <p className="w-[88%] text-black text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep21;
