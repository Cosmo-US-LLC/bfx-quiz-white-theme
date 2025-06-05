import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_20_1 from "../assets/step_20/step_20 (5).png";
import Step_20_2 from "../assets/step_20/step_20 (4).png";
import Step_20_3 from "../assets/step_20/step_20 (2).png";
import Step_20_4 from "../assets/step_20/step_20 (3).png";
import Step_20_5 from "../assets/step_20/step_20 (1).png";


const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MobileQuizStep20 = () => {
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
   const navigate = useNavigate();

  const options = [
    { title: "Real product and active users", img: Step_20_1 },
    { title: "Daily passive income potential", img: Step_20_2 },
    { title: "Audited and secure", img: Step_20_3 },
    { title: "Early access before major growth", img: Step_20_4 },
    { title: "Huge upside potential", img: Step_20_5 },
  ];

  const toggleOption = (index) => {
    if (selectedOptions.includes(index)) {
      // remove from selected
      setSelectedOptions(selectedOptions.filter((i) => i !== index))
    } else {
      // add to selected
      setSelectedOptions([...selectedOptions, index])
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      // In the original, this would navigate to "/quiz/step=17"
      console.log("Selected options:", selectedOptions)
      navigate("/quiz/step=17");
    }
  }

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4 bg-black">
      <QuizHeader currentStep={16} totalSteps={18} />
      <QuizSteps currentStep={20} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center text-white">
          When you look at a new crypto projects, what matters most to you?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                background: "rgba(245, 245, 245, 0.15)",
                border: selectedOptions.includes(index) ? "2px solid #E5AE00" : "2px solid transparent",
                color: selectedOptions.includes(index) ? "#E5AE00" : "#fff",
                transition: "border-color 0.3s",
              }}
              className="option-card py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer"
              onClick={() => toggleOption(index)}
            >
              <div className="flex items-center space-x-2 gap-4">
                <img src={option.img || "/placeholder.svg"} className="h-[40px]" alt="" />
                <p className="text-start text-[16px] font-medium text-white">{option.title}</p>
              </div>

              {selectedOptions.includes(index) && (
                <div className="bg-[#FFD551] rounded-full p-1.5 flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-[#000]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center !mt-8">
          <button
            onClick={handleContinue}
            disabled={selectedOptions.length === 0}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] max-w-[307px] w-[100%] text-[#000] font-[500] ${
              selectedOptions.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileQuizStep20
