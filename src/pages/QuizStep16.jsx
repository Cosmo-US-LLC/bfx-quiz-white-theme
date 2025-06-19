import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_16 from "../assets/step_16/step_16.png";
import { BiRightArrowAlt } from "react-icons/bi";

const QuizStep16 = () => {
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
    navigate("/quiz/step=13");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={16} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[2rem] w-[100%]">
        <div className="max-w-[500px] space-y-[15px] text-center mx-auto w-full animate-fade-in-up">
          <h1 className="text-[30px] font-[800] leading-[140%] text-[#000] mb-4 ">
            It has never been easier to earn <br /> real passive income with
            crypto
          </h1>
          <p className="text-[16px] font-[400] leading-[170%] text-[black] mb-6 ">
            A notable example is BlockchainFX. People who buy the new $BFX token
            during the presale earn rewards every time someone trades on the
            platform. As $BFX holders, they receive a share of all trading fees
            in USDT without having to trade themselves.
          </p>
          <div className="flex justify-center pt-4">
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 py-[13px] w-full max-w-[307px] bg-[#2189FF] text-white text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase rounded-[10px] transition transform active:scale-95 hover:bg-[#1f76db]"
            >
              Continue
              {/* <BiRightArrowAlt size={22} /> */}
            </button>
          </div>
        </div>
        <div className="bg-[#EDEDED]  max-w-[550px] h-[390px] w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img
            src={Step_16}
            className="max-h-[580px] w-[98%] object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuizStep16;
