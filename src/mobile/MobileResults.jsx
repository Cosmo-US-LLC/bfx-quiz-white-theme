import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import result from "../assets/result/result.png";
import result_icon_1 from "../assets/result/result_icons (1).png";
import result_icon_2 from "../assets/result/result_icons (2).png";
import result_icon_3 from "../assets/result/result_icons (3).png";
import result_icon_4 from "../assets/result/result_icons (4).png";
import result_icon_5 from "../assets/result/result_icon.png";
import copy_icon from "../assets/result/copy.png";

const MobileResults = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const [showPopup, setShowPopup] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    try {
      const textToCopy = textRef.current?.textContent || "";
      await navigator.clipboard.writeText(textToCopy);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRoute = () => {
    window.location.href =
      "https://presale.blockchainfx.com/?utm_source=quiz+page&utm_medium=landing&utm_campaign=Blockchain+FX+marketing";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <div
        className="quiz-container   min-h-screen overflow-hidden flex flex-col items-center p-4"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <QuizHeader currentStep={""} totalSteps={28} />
        <QuizSteps currentStep={28} totalSteps={28} />
        <div className="mb-4 !mt-[-22px] bg-[#D99A2633] w-[100%] flex justify-center items-center rounded-[8px]">
          <img
            src={result_icon_4}
            alt="results"
            className=" px-[10px] text-white"
          />
          <h3 className=" text-white font-[500] text-[16px] py-[5px] ">
            35% Bonus expires in
            <span className="font-[700] text-[#D99A26] text-Manrope ">
              {" "}
              {formatTime(timeLeft)} min
            </span>
          </h3>
        </div>
        <div className="mt-[1rem] w-[100%] max-w-[1240px] mx-auto">
          <div className="max-w-[1020px] mx-auto  w-full ">
            <h1 className="text-[28px] text-center text-[#fff] font-bold mb-4 ">
             Congratulations! You’ve successfully  passed <br /> the Quiz  🎉 
            </h1>
            <p className="text-[16px] px-2  text-center font-[700] text-[#fff] mb-[53px] ">
              You’ve completed the challenge and unlocked this special offer.
              <br /> <br />
              Here’s your limited one-time bonus code to buy $BFX
            </p>
            <div className="max-w-[618px] pt-5 px-4 pb-[1px] mx-auto bg-[#131313]">
              {/* <div className="flex items-center max-w-[506px] mx-auto mb-[25px]">
                <p className="w-[50%] text-[16px] flex justify-start  font-[400] text-[#fff] ">
                  Your readiness:{" "}
                  <span className="font-[700] text-[#D99A26] "> 84%</span>
                </p>
              </div> */}
              <div className="flex justify-between pl-3 items-center max-w-[506px] mx-auto w-[100%] bg-[#353535] mb-4">
                <div className="relative z-[9]">
                  <h2 className="text-white font-[500] text-[20px] mb-4">
                    Claim your personal <br />
                    <span className="font-[700] text-[#D99A26] ">35%</span> BFX
                    Bonus <br /> Code
                  </h2>
                  <div className="flex relative justify-around items-center border border-[#fff] rounded-[8px] px-2">
                    <button
                      ref={textRef}
                      className="h-[40px] px-2 text-white"
                      type="button"
                    >
                      upw8U2kbKCKzSZi
                    </button>
                    <img
                      onClick={handleCopy}
                      src={copy_icon}
                      alt="copy"
                      width={14}
                      height={16}
                      className="cursor-pointer"
                    />
                    {showPopup && (
                      <div className="fixed bottom-[8%] z-[99] shadow left-1/2 transform -translate-x-1/2 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="bg-[#353535] text-white px-4 py-4 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                          <div className="w-5 h-5  rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                                fill="#F9CC3E"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">
                            Copied Successfully
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[30%] relative min-h-[194px]">
                  <img
                    src={result}
                    className="min-w-[250px] min-h-[194px] absolute top-[0%] right-[-50%] z-[1]"
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-[506px] mx-auto">
                {/* <p className="text-[16px] text-[#fff] font-[400] leading-[250%] text-center mb-4">
                  *At 3insiders, our goal is to match you with the right project
                  for your goals and secure exclusive deals you won’t find
                  anywhere else through our industry connections. A win for
                  everyone.{" "}
                </p> */}
              
              </div>
            </div>
          </div>
            <div className="flex justify-center items-center mt-6 mb-6">
                  <img src={result_icon_3} className="h-[132px]" alt="" />
                </div>
          <div className="max-w-[578.2px] mx-auto my-6">
            <button
              onClick={handleRoute}
              style={{
                borderRadius: "10px",
                background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
              }}
              className={`py-[13px] w-[100%] text-[#000] font-[700]`}
            >
              Visit Now: BlockchainFX.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileResults;

function GradientRangeSlider({ value, onChange, gradientColors, label }) {
  // Handle the range input change
  const handleChange = (e) => {
    onChange(Number.parseInt(e.target.value));
  };

  return (
    <div className="mb-2">
      <div className="relative">
        {/* Custom range track with gradient */}
        <div
          className={`absolute top-1/2 left-0 -translate-y-1/2 h-3 w-full rounded-full bg-gradient-to-r ${gradientColors}`}
        ></div>

        {/* Actual range input (invisible but functional) */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="appearance-none bg-transparent absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
          style={{
            // Hide the default appearance but keep functionality
            WebkitAppearance: "none",
            // Custom thumb styling
            "--thumb-size": "20px",
            "--thumb-color": "#f59e0b00",
            "--thumb-border": "2px solid f59e0b00",
          }}
        />

        {/* Custom thumb/handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-white bg-yellow-500 shadow-md pointer-events-none"
          style={{
            left: `calc(${value}% - 10px)`,
          }}
        ></div>
      </div>

      {/* Label */}
      <div className="p-2">
        <span className="text-gray-400 text-sm bg-gray-800/80 px-2 py-0.5 rounded">
          {label}
        </span>
      </div>
    </div>
  );
}
