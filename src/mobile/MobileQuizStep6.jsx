import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_6_1 from "../assets/step_6/step_6 (10).png";
import Step_6_2 from "../assets/step_6/step_6 (9).png";
import Step_6_3 from "../assets/step_6/step_6 (8).png";
import Step_6_4 from "../assets/step_6/step_6 (7).png";
import Step_6_5 from "../assets/step_6/step_6 (6).png";
import Step_6_6 from "../assets/step_6/step_6 (5).png";
import Step_6_7 from "../assets/step_6/step_6 (4).png";
import Step_6_8 from "../assets/step_6/step_6 (3).png";
import Step_6_9 from "../assets/step_6/step_6 (2).png";
import Step_6_10 from "../assets/step_6/step_6 (1).png";

const MobileQuizStep6 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [selectedOption, setSelectedOptions] = useState([]);

  const handleSelect = (optionTitle) => {
    setSelectedOptions((prev) =>
      prev.includes(optionTitle)
        ? prev.filter((item) => item !== optionTitle)
        : [...prev, optionTitle]
    );
  };

  const isSelected = (optionTitle) => selectedOption.includes(optionTitle);

  const options = [
    { title: "Bitcoin", img: Step_6_1 },
    { title: "Ethereum", img: Step_6_6 },
    { title: "Solana", img: Step_6_7 },
    { title: "BNB", img: Step_6_9 },
    { title: "XRP", img: Step_6_5 },
    { title: "PEPE", img: Step_6_3 },
    { title: "DOGE", img: Step_6_8 },
    { title: "TON", img: Step_6_2 },
    { title: "KASPA", img: Step_6_4 },
    { title: "BGB", img: Step_6_10 },
  ];

//   const row1 = options.slice(0, 4);
//   const row2 = options.slice(4, 8);
//   const row3 = options.slice(8);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate("/quiz/fact-check-2");
  };


  const renderCard = (option) => (
    <div
      key={option.title}
      onClick={() => handleSelect(option.title)}
      className={`option-card p-3 flex w-[86%] mx-auto items-center justify-center gap-1 rounded-[33px] cursor-pointer transition-colors duration-200 ${
        isSelected(option.title) ? "!bg-[#EAC05E]" : "bg-[#252525]"
      }`}
    >
      <img src={option.img} className="h-[20px]" alt={option.title} />
      <p className="text-white text-start font-medium">{option.title}</p>
    </div>
  );

  return (
    <div className="quiz-container min-h-screen  flex flex-col items-center p-4">
      <QuizHeader currentStep={6} totalSteps={18} />
      <QuizSteps currentStep={6} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[28px] font-[700] leading-[120%] mb-1 text-center">
          Did you miss any of these projects?
        </h1>
        <p className="text-[16px] text-white font-[700]">
          Choose all that apply
        </p>

        <div className="mt-8 space-y-4">
          <div className="grid grid-cols-2 max-w-[300px] mx-auto gap-y-4">
            {options.map(renderCard)}
          </div>
          {/* <div className="grid grid-cols-4 max-w-[500px] mx-auto gap-4">
            {row2.map(renderCard)}
          </div>
          <div className="grid grid-cols-2 max-w-[300px] mx-auto gap-4">
            {row3.map(renderCard)}
          </div> */}

          <div className="text-center !mt-8">
              <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep6;
