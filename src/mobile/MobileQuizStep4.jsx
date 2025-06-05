
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_4_1 from "../assets/step_4/step_4 (1).png"
import Step_4_2 from "../assets/step_4/step_4 (2).png"
import Step_4_3 from "../assets/step_4/step_4 (3).png"
import Step_4_4 from "../assets/step_4/step_4 (4).png"

const MobileQuizStep4 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Daily", 
      img:Step_4_1
    },
     {
      title:"Rarely", 
      img:Step_4_2
    },
     {
      title:"Few times a week", 
      img:Step_4_3
    },
     {
      title:"I haven’t started investing yet, but I want to", 
      img:Step_4_4
    },
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    navigate("/quiz/step=5")
  }

  

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={4} totalSteps={18} />
      <QuizSteps currentStep={4} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">How often do you check <br /> crypto prices or make trades?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
            {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card py-4 space-x-2 px-6 flex items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={handleNext}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-white text-[16px] text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep4
