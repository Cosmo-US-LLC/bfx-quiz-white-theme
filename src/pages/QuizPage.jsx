import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import card_img1 from "../assets/quiz/card_image (3).webp";
import card_img2 from "../assets/quiz/card_image (1).webp";
import card_img3 from "../assets/quiz/card_image (2).webp";
import card_img4 from "../assets/quiz/card_image.webp";

const QuizPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const ageOptions = [
    { range: "18-24", image: card_img1 },
    { range: "25-34", image: card_img2 },
    { range: "35-44", image: card_img3 },
    { range: "45+", image: card_img4 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (range, image) => {
    setSelectedOption(range);
    localStorage.setItem("selectedImage", image);
    navigate("/quiz/fact-check");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 quiz-container">
      <QuizHeader currentStep={"Quiz"} totalSteps={18} />
      <QuizSteps currentStep={1} totalSteps={28} />
      <div className="w-full max-w-2xl mt-8 mb-4 text-center">
        <div className="space-y-[10px]">
          <h1 className="text-[40px] uppercase font-[700] leading-[120%] text-[#000] tracking-[-2px]">
            What’s Your Crypto <br /> Potential in 2025?
          </h1>
          <p className="text-[14px] font-[400] leading-[16px] uppercase text-[#000]">
            TAKE <span className="font-[700]">THE 1-MINUTE QUIZ</span> AND FIND
            OUT NOW
          </p>

          <h2 className="text-[16px] font-[400] leading-[24px] text-[#000]">
            SELECT YOUR <span className="font-[700]">AGE</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 mb-8 md:grid-cols-4">
          {ageOptions.map((option) => (
            <AgeOption
              key={option.range}
              ageRange={option.range}
              imageUrl={option.image}
              isSelected={selectedOption === option.range}
              onClick={() => handleSelect(option.range, option.image)}
            />
          ))}
        </div>

        {/* <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`gold-button py-3 px-8 rounded-full font-medium ${!selectedOption ? "opacity-50" : ""}`}
        >
          Continue
        </button> */}
        <div className="space-y-[15px]">
          <p className="text-[#B1B1B1] text-[12px] font-[400] leading-[133.333%]">
            By clicking on an age group, you agree with{" "}<br />
            <a
              className="underline"
              href="https://blockchainfx.io/terms-of-service"
              target="_blank"
            >
              Terms and Conditions
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://blockchainfx.io/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-[#B1B1B1] text-[12px] font-[400] leading-[133.333%]">
            3insiders 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
