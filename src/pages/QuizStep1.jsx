import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import AgeOption from "../components/AgeOption";
import Loading from "../components/Loading";
import peopleimg from "../assets/Peoplehave/people_img.webp";
import { BiRightArrowAlt } from "react-icons/bi";

const QuizStep1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate("/quiz/step=2");
  };

  return (
    <div className="min-h-screen px-4">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={2} totalSteps={28} />
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <div className="h-[76vh] w-full flex flex-col items-start justify-center text-center  pl-16">
          <h1 className="text-[30px] text-[#000] text-center font-[800] leading-[42px] mb-5 capitalize">
            
            The 2025 crypto bull <br />  market has just started
          </h1>
          <p className="text-[16px] max-w-[350px] font-[400] text-center text-[#000] mb-6 ">
          Bitcoin recently broke past its all time high of $120,000, marking the start of a new bull run. Crypto is once again leading the charge, outperforming stocks, gold, and real estate, and capturing the attention of millions. Now is your chance to position yourself early.  <br /> <br /> 
          Tap continue to see how much you could earn.
          </p>
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 py-[13px] bg-[#2189FF] ml-4 rounded-[10px] max-w-[307px] w-full text-white text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase transition transform active:scale-95 hover:bg-[#1f76db]"
          >
            Continue
            {/* <BiRightArrowAlt size={22} /> */}
          </button>
        </div>
        <div className=" w-[100%]">
          <img
            src={peopleimg}
            className="absolute max-w-[550px] bottom-[0%] right-[0%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuizStep1;
