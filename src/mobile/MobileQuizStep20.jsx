import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import { FaCheckCircle } from "react-icons/fa";
import Step_20_1 from "../assets/step_20/step_20 (5).png";
import Step_20_2 from "../assets/step_20/step_20 (4).png";
import Step_20_3 from "../assets/step_20/step_20 (2).png";
import Step_20_4 from "../assets/step_20/step_20 (3).png";
import Step_20_5 from "../assets/step_20/step_20 (1).png";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MobileQuizStep20 = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const options = [
    { title: "Real product and active users", img: Step_20_1 },
    { title: "Daily passive income potential", img: Step_20_2 },
    { title: "Audited and secure", img: Step_20_3 },
    { title: "Early access before major growth", img: Step_20_4 },
    // { title: "Huge upside potential", img: Step_20_5 },
  ];

  const toggleOption = (index) => {
    if (selectedOptions.includes(index)) {
      // remove from selected
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
    } else {
      // add to selected
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      // In the original, this would navigate to "/quiz/step=17"
      console.log("Selected options:", selectedOptions);
      navigate("/quiz/step=17");
    }
  };

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={16} totalSteps={18} />
      <QuizSteps currentStep={20} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center text-black">
          When you look at new crypto projects, what matters most to you?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-4 mt-8">
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                background: selectedOptions.includes(index)
                  ? "#fff"
                  : "#D9D9D980",
                border: selectedOptions.includes(index)
                  ? "2px solid #037FF9"
                  : "2px solid transparent",
                color: selectedOptions.includes(index) ? "#037FF9" : "#fff",
                transition: "border-color 0.3s",
              }}
              className="option-card py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer"
              onClick={() => toggleOption(index)}
            >
              <div className="flex items-center gap-4 space-x-2">
                <img
                  src={option.img || "/placeholder.svg"}
                  className="h-[40px]"
                  alt=""
                />
                <p className="text-start text-[16px] font-medium text-black">
                  {option.title}
                </p>
              </div>

              {selectedOptions.includes(index) && (
                <div className="relative w-[20px]">
                  <FaCheckCircle className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2189FF] text-lg" />
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
              // background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              backgroundColor: "#037FF9",
            }}
            className={`py-[13px] max-w-[307px] uppercase w-[100%] text-[#FFF] font-[500] ${
              selectedOptions.length === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep20;
