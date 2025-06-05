
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"


const MobileQuizStep13 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Less than $10,000", 
    },
     {
      title:"$10,000 - $20,000", 
    },
     {
      title:"$20,000 - $50,000", 
    },
     {
      title:"$50,000 - $100,000", 
    },
     {
      title:"$100,000 - $250,000", 
    },
     {
      title:"$500,000 - $1,000,000", 
    },
     {
      title:"$250,000 - $500,000", 
    },
      {
      title:"More than $1,000,000", 
    },
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // const handleNext = () => {
  //   navigate("/quiz/step=11")
  // }
const handleOptionClick = (option) => {
    setSelectedOption(option);
  localStorage.setItem("goalIncome", option.title);
  navigate("/quiz/step=11");
};
  

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={10} totalSteps={18} />
      <QuizSteps currentStep={13} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">What monthly income do you want to achieve?</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-8">
            {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card py-6 flex items-center justify-center rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              <p className="w-[144px] mx-auto text-[16px] text-center text-white  font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep13
