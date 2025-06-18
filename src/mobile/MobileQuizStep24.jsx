import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_24 from "../assets/step_24/step_24.png";
import MobileFaqSec from "../components/IsidersOneApp/mobile/MobileFaqSec";
import MobileMultiAward from "../components/IsidersOneApp/mobile/MobileMultiAward";
import MobilePriceBySurge from "../components/IsidersOneApp/mobile/MobilePriceBySurge";
import MobileKYCVerified from "../components/IsidersOneApp/mobile/MobileKYCVerified";
import MobileFeatureSec from "../components/IsidersOneApp/mobile/MobileFeatureSec";

const MobileQuizStep24 = () => {
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
    navigate("/quiz/results");
  };

  return (
    <div className="flex flex-col relative items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"About BFX"} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />

      <div className="flex flex-col gap-6 items-center   mx-auto justify-between w-[100%]">
        <div className="flex flex-col w-full gap-2 ">
          <p className="text-[20px] w-full text-center font-[600] leading-[36px] tracking-[-1px] text-[#000]">
            Learn more about BlockchainFX
          </p>
          <h2 className="text-[30px] w-full leading-[130%] text-center font-[700]   text-[#000]">
            Binance + Robinhood <br /> in One App?
          </h2>
          <p className="text-[16px] w-full text-center font-[400] leading-[28px] text-[#000]">
            Discover how BlockchainFX is transforming crypto by connecting it to
            global finance and unlocking access to over 500+ assets.
          </p>
        </div>
        <div className="flex justify-center w-[100%] p-5 border border-[#d9d9d9] rounded-[12px]">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/w8ynmofaw4.js"
            async
            type="module"
          ></script>
          <style>
            {`
              wistia-player[media-id='w8ynmofaw4']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/w8ynmofaw4/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top:56.25%; 
              }
            `}
          </style>
          <div className="w-full max-w-[730px]  mx-auto mt-4 mb-4 ">
            <wistia-player
              media-id="w8ynmofaw4"
              aspect="1.7777777777777777"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                borderRadius: "8px",
              }}
            ></wistia-player>
          </div>
        </div>
        <div className="w-[100%]">
          <MobileFeatureSec/>
        </div>
        <div>
          <MobileKYCVerified/>
        </div>
        <div>
          <MobilePriceBySurge />
        </div>
        <div>
          <MobileMultiAward />
        </div>
        <div className="w-[100%]">
          <MobileFaqSec />
        </div>
      </div>
       <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] w-[94%] mx-auto fixed bottom-[18px] z-[99] text-[16px] font-[700] leading-[24px] tracking-[-0.01px] text-[#fff] uppercase`}
          >
            Claim your PERSONAL Bonus
          </button>

      {/* <div className=" max-w-[1240px] w-[100%]">
        <div className="space-y-[15px ] w-full ">
          <h1 className="text-[28px] text-center text-[#000] font-bold mb-4 ">
            Get In Before <br /> the 300% Surge
          </h1>
          <p className="text-[16px] max-w-[400px] w-full mx-auto text-center font-[700] text-[#000] mb-6 ">
            <span className="font-[400]">
              BlockchainFX’s $BFX token is still available in its presale phase
              for under $0.015. That’s far below its upcoming launch price of
              $0.05 on major exchanges, offering early buyers a guaranteed gain
              of more than 300% before it goes live.
            </span>
          </p>
        </div>
        <div className=" w-[100%] flex justify-center items-center rounded-[8px] animate-fade-in-up">
          <img
            src={Step_24}
            className="max-h-[580px] w-[98%] object-cover "
            alt=""
          />
        </div>
        <div className="flex justify-center pt-[20px]">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              backgroundColor: "#037FF9",
            }}
            className={`py-[13px] w-[100%] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
          >
            Unlock Special Bonus
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default MobileQuizStep24;
