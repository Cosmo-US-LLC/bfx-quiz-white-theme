
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_11_1 from "../assets/step_11/step_11 (4).png"
import Step_11_2 from "../assets/step_11/step_11 (1).png"
import Step_11_3 from "../assets/step_11/step_11 (2).png"
import Step_11_4 from "../assets/step_11/step_11 (3).png"
const MobileQuizStep11 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"None", 
      img:Step_11_1
    },
     {
      title:"Just one", 
      img:Step_11_2
    },
     {
      title:"Two", 
      img:Step_11_3
    },
     {
      title:"Three or more", 
      img:Step_11_4
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
    navigate("/quiz/fact-check-no=3")
  }

  

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={9} totalSteps={18} />
      <QuizSteps currentStep={11} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">How many sources of income do you currently have?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
            {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card space-x-2 py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
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

export default MobileQuizStep11
