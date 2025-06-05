
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_5_1 from "../assets/step_5/step_5 (2).png"
import Step_5_2 from "../assets/step_5/step_5 (1).png"
import Step_5_3 from "../assets/step_5/step_5 (4).png"
import Step_5_4 from "../assets/step_5/step_5 (3).png"

const MobileQuizStep5 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Yes, more than once", 
      img:Step_5_1
    },
     {
      title:"No, I usually wait things out", 
      img:Step_5_2
    },
     {
      title:"Maybe, but I prefer to play it safe", 
      img:Step_5_3
    },
     {
      title:"I’m not active in crypto yet", 
      img:Step_5_4
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
    navigate("/quiz/step=6")
  }

  

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={5} totalSteps={18} />
      <QuizSteps currentStep={6} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">Have you ever missed a good crypto  opportunity and  regretted it?</h1>
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
              <p className="w-[88%] text-[16px] text-white text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep5
