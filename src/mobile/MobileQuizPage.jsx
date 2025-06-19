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

const MobileQuizPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const ageOptions = [
    { range: "18-24", image: card_img1 },
    { range: "25-34", image: card_img2 },
    { range: "35-44", image: card_img3 },
    { range: "45+", image: card_img4 },
  ];

  // Simulate loading
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
    <div className="flex flex-col justify-between items-center max-h-screen min-h-screen p-4 quiz-container">
      <div className="w-[100%]">
        <QuizHeader currentStep={""} totalSteps={18} />
      <QuizSteps currentStep={1} totalSteps={28} />
      <div className="w-full max-w-2xl mb-4 text-center">
        <div className="space-y-[15px]">
          <h1 className="text-[30px] uppercase font-[700] leading-[116%] text-[#000] tracking-normal ">
            What’s Your Crypto <br /> Potential in 2025?
          </h1>

          <p className="text-[15px] font-[400] leading-[150%] uppercase text-[#000]">
            {" "}
            Take <span className="font-[700]">the 1-minute quiz</span> and
            FIND OUT
          </p>
          <h2 className="text-[16px] font-[400] leading-[150%] text-[#000]">
            SELECT YOUR <span className="font-[700]">AGE:</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[3rem] max-w-[300px] mx-auto gap-x-4 mb-8 mt-[4rem]">
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

        <div className="space-y-[30px]">
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
        </div>
      </div>
      </div>
         <p className="text-[#B1B1B1] text-[12px] font-[400] leading-[133.333%]">
            BlockchainFX 2025 ©All Rights Reserved.
          </p>
    </div>
  );
};

export default MobileQuizPage;
