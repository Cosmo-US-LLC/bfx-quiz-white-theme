import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_16 from "../assets/step_16/step_16.png";

const MobileQuizStep16 = () => {
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
    <div className="quiz-container  min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={16} totalSteps={28} />

      <div className=" max-w-[1240px] mx-auto  mt-6 w-[100%]">
        <div className=" space-y-[15px] w-full ">
          <h1 className="text-[28px] text-center text-[#fff] font-bold mb-4 ">
       It has never been easier to earn real passive income with crypto
          </h1>
          <p className="text-[16px] font-[400] text-center  text-[#fff] mb-6 ">For example, people who buy the new $BFX token during the presale earn rewards every time someone trades on BlockchainFX. As $BFX holders, they receive a share of the trading fees without having to trade themselves. <br /><br />
          BlockchainFX is a fast-growing crypto exchange and the first to bridge crypto with traditional financial markets like stocks, forex, ETFs, and more, offering access to over 500 different assets. 
          </p>
        </div>
          <div className="bg-[#252525] mt-8  w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_16}
              className=" object-cover "
              alt=""
            />
        </div>
          <div className="flex justify-center mt-12">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px]  w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
         </div>
      </div>
    </div>
  );
};

export default MobileQuizStep16;
