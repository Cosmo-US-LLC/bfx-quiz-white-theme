import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_21_1 from "../assets/Step18_28/step18_28_1.png";
import Step_21_2 from "../assets/Step18_28/step18_28_2.png";
import Step_21_3 from "../assets/Step18_28/step18_28_3.png";
import Step_21_4 from "../assets/Step18_28/step18_28_4.png";
import Step_21_5 from "../assets/Step18_28/step18_28_5.png";
import Step_21_6 from "../assets/Step18_28/step18_28_6.png";

const QuizStep18_28 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { title: "Buy a House", img: Step_21_1 },
    { title: "A perfect wedding", img: Step_21_2 },
    { title: "Vacation", img: Step_21_3 },
    { title: "Buy a car", img: Step_21_4 },
    { title: "Worry free retirement", img: Step_21_5 },
    { title: "Other", img: Step_21_6 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = (option) => {
    setSelectedOption(option.title);
    localStorage.setItem("specialWish", option.title);
    setTimeout(() => {
      navigate("/quiz/fact-check-no=7_1");
    }, 200);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 quiz-container"
      style={{ backgroundColor: "#ffff" }}
    >
      <QuizHeader currentStep={18} totalSteps={18} />
      <QuizSteps currentStep={21} totalSteps={28} />

      <div className="max-w-[1050px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[116%] text-center">
          Is there something special <br /> you wish to achieve?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 my-8">
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

export default QuizStep18_28;
