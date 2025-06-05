
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_18_1 from "../assets/step_18/step_18 (3).png"
import Step_18_2 from "../assets/step_18/step_18 (2).png"
import Step_18_3 from "../assets/step_18/step_18 (1).png"

const MobileQuizStep18 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Yes, but I don’t know how", 
      img:Step_18_1
    },
     {
      title:"I’m already retired", 
      img:Step_18_2
    },
     {
      title:"I haven’t thought about retirement", 
      img:Step_18_3
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
    navigate("/quiz/step=15")
  }

  

  return (
    <div className="quiz-container min-h-screen  flex flex-col items-center p-4">
      <QuizHeader currentStep={14} totalSteps={18} />
      <QuizSteps currentStep={18} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">Do you want to retire wealthy?</h1>
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
              <p className="w-[88%] text-[16px] text-white text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep18
