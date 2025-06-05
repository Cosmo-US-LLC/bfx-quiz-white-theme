
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuizHeader from "../components/QuizHeader"
import QuizSteps from "../components/QuizSteps"
import Loading from "../components/Loading"
import Step_14_1 from "../assets/step_14/step_14 (3).png"
import Step_14_2 from "../assets/step_14/step_14 (2).png"
import Step_14_3 from "../assets/step_14/step_14 (4).png"
import Step_14_4 from "../assets/step_14/step_14 (1).png"


const MobileQuizStep14 = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState()

  const options = [
    {
      title:"Save/invest for my future", 
      img:Step_14_1
    },
     {
      title:"Travel and enjoy life more", 
      img:Step_14_2
    },
     {
      title:"Quit my job or work less", 
      img:Step_14_3
    },
     {
      title:"Reinvest to make more", 
      img:Step_14_4
    },
  ]

const goalIncome = localStorage.getItem("goalIncome") || "$10,000";


  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    navigate("/quiz/step=12")
  }

  

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={11} totalSteps={18} />
      <QuizSteps currentStep={14} totalSteps={28} />

      <div className="max-w-[1000px] w-full text-center mt-6">
 <h1 className="text-[28px] font-[700] leading-[120%] mb-1  text-center">If you could earn {goalIncome} per month in <br /> additional income, what would you do first?</h1>
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
              <p className="w-[88%] text-white text-[16px] text-start font-medium">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep14
