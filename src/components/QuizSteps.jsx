import { Link } from "react-router-dom";

const QuizSteps = ({ currentStep, totalSteps }) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-[5px] bg-[#43434330] rounded-sm overflow-hidden">
        <div
          className="h-full bg-[#2189FF] transition-all duration-300 ease-in-out"
          style={{
            width: `${progressPercent}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default QuizSteps;
