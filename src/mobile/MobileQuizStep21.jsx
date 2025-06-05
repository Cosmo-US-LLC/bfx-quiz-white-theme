import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_21_1 from "../assets/step_21/step_21 (3).png";
import Step_21_2 from "../assets/step_21/step_21 (1).png";
import Step_21_3 from "../assets/step_21/step_21 (4).png";
import Step_21_4 from "../assets/step_21/step_21 (2).png";

const MobileQuizStep21 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      title: "I act fast and secure my position",
      img: Step_21_1,
    },
    {
      title: "I usually need some time before making moves",
      img: Step_21_2,
    },
    {
      title: "I tend to wait too long and miss out",
      img: Step_21_3,
    },
    {
      title: "Depends on how strong the project looks",
      img: Step_21_4,
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate("/quiz/step=18_28");
  };



  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={17} totalSteps={18} />
      <QuizSteps currentStep={21} totalSteps={28} />

      <div className="max-w-[1050px] w-full text-center mt-6">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">
          When you get the chance to buy into early stage crypto projects that generate continuous income, how do you usually react?
        </h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
          {options.map((option) => (
            <div
              key={option}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
              }}
              className={`option-card space-x-2 py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={handleNext}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-[16px] text-white text-start font-medium">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep21;
