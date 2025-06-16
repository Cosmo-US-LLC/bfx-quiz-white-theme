import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import Step_24 from "../assets/step_24/step_24.png";
import FeaturedSec from "../components/IsidersOneApp/FeaturedSec";
import KYCVerified from "../components/IsidersOneApp/KYCVerified";
import MultiAward from "../components/IsidersOneApp/MultiAward";
import FaqSec from "../components/IsidersOneApp/FaqSec";
import PriceBySurge from "../components/IsidersOneApp/PriceBySurge";

const QuizStep24 = () => {
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
    <div className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"About BFX"} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />

      <div className="flex flex-col gap-6 items-center max-w-[1240px] mx-auto justify-between mt-6 w-[100%]">
        <div className="flex flex-col w-full gap-2 ">
          <p className="text-[30px] w-full text-center font-[600] leading-[36px] tracking-[-1px] text-[#000]">
            Learn more about BlockchainFX
          </p>
          <h1 className="text-[48px] w-full text-center font-[600] leading-[57px] tracking-[-3.36px] text-[#000]">
            Binance + Robinhood in One App?
          </h1>
          <p className="text-[16px] w-full text-center font-[400] leading-[28px] text-[#000]">
            Discover how BlockchainFX is transforming crypto by connecting it{" "}
            <br /> to global finance and unlocking access to over 500+ assets.
          </p>
        </div>
        <div className="flex justify-center">
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
             <div className="flex justify-center mt-4 mb-4 w-full max-w-[730px] h-[410px] mx-auto">
            <wistia-player
              media-id="w8ynmofaw4"
              aspect="1.7777777777777777"
              style={{
                width: "100%",
                maxWidth: "730px",
                height: "auto",
                maxHeight: "410px",
              }}
            ></wistia-player>
          </div>
          {/* <div className="flex justify-center mt-4 mb-4 w-full max-w-[990px] h-auto mx-auto">
            <wistia-player
              media-id="w8ynmofaw4"
              aspect="1.7777777777777777"
              style={{
                width: "100%",
                maxWidth: "990px",
                height: "auto",
               
              }}
            ></wistia-player>
          </div> */}
        </div>
        <div className="w-[80%]">
          <FeaturedSec />
        </div>
        <div className="w-[80%] mt-4">
          <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`py-[13px] w-[100%] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
          >
            Claim Exclusive PERSONAL Bonus Code
          </button>
        </div>
        <div>
          <KYCVerified />
        </div>
        <div className="w-[96%]">
          <PriceBySurge/>
        </div>
        <div>
          <MultiAward/>
        </div>
        <div className="w-[100%]">
          <FaqSec/>
        </div>
      </div>
    </div>
  );
};

export default QuizStep24;