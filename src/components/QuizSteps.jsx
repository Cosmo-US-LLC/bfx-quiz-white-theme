import { Link } from "react-router-dom"

const QuizSteps = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex w-full ">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex-1">
            <div
              className={`h-1 l ${
                index < currentStep ? "bg-[#2189FF]" : "bg-[#434343]"
              } transition-all duration-300`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizSteps
