import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_16 from "../assets/step_16/step_16.png";

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
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Facts"} totalSteps={28} />
      <QuizSteps currentStep={16} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[2rem] w-[100%]">
        <div className="max-w-[500px] space-y-[15px] text-center mx-auto w-full ">
          <h1 className="text-[30px] font-[800] leading-[140%] text-[#000] mb-4 ">
            It has never been easier to earn <br /> real passive income with
            crypto
          </h1>
          <p className="text-[16px] font-[400] leading-[170%] text-[black] mb-6 ">
            For example, people who buy the new $BFX token during the presale
            earn rewards every time someone trades on BlockchainFX. As $BFX
            holders, they receive a share of the trading fees without having to
            trade themselves. <br />
            <br />
            BlockchainFX is a fast-growing crypto exchange and the first to
            bridge crypto with traditional financial markets like stocks, forex,
            ETFs, and more, offering access to over 500 different assets.
          </p>
          <div className="flex justify-center pt-[20px]">
            <button
              onClick={handleNext}
              style={{
                borderRadius: "10px",
                background: "#2189FF",
              }}
              className={`py-[13px] text-[#fff] max-w-[307px] w-[100%] text-[#000] font-[500]`}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="bg-[#EDEDED]  max-w-[550px] h-[390px] w-[100%] flex justify-center items-center rounded-[8px]">
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
