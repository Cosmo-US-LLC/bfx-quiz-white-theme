
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_10_1 from "../assets/step_10/step_10 (4).png"
import Step_10_2 from "../assets/step_10/step_10 (1).png"
import Step_10_3 from "../assets/step_10/step_10 (5).png"
import Step_10_4 from "../assets/step_10/step_10 (2).png"
import Step_10_5 from "../assets/step_10/step_10 (3).png"

const MobileQuizStep10 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Not enough income", 
      img:Step_10_1
    },
     {
      title:"Lack of time", 
      img:Step_10_2
    },
     {
      title:"No access to the right opportunities", 
      img:Step_10_3
    },
     {
      title:"I just need something that actually works", 
      img:Step_10_4
    },
     {
      title:"Fear of losing money", 
      img:Step_10_5
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
    navigate("/quiz/step=9")
  }

  

  return (
    <div className="quiz-container min-h-screen  flex flex-col items-center p-4">
      <QuizHeader currentStep={8} totalSteps={18} />
      <QuizSteps currentStep={10} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">What’s holding you back <br /> from living the life you want?</h1>
        <div className="grid grid-cols-1 max-w-[560px] mx-auto md:grid-cols-1 gap-4 mt-8">
            {options.map((option) => (
            <div
              key={option}
              style={{
                background:"rgba(245, 245, 245, 0.15)"
              }}
              className={`option-card py-4 px-6 space-x-2 flex items-center justify-between rounded-[8px] cursor-pointer ${selectedOption === option ? "selected" : ""}`}
              onClick={handleNext}
            >
              <img src={option.img} className="h-[40px]" alt="" />
              <p className="w-[88%] text-white text-start text-[16px] font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep10
