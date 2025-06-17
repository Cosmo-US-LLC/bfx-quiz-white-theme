import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import result from "../assets/result/result.png";
import result_icon_3 from "../assets/result/result_blue_icons.webp";

const Results = () => {
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
        className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <QuizHeader currentStep={"Bonus"} totalSteps={28} />
        <QuizSteps currentStep={28} totalSteps={28} />
        <div className="mb-4 !mt-[-22px] bg-[#037FF933] w-[100%] flex justify-center items-center">
          {/* <img
            src={result_icon_4}
            alt="results"
            className=" px-[10px] text-[#000]"
          /> */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.90137 2.66603C7.48698 2.66603 6.13051 3.2279 5.13037 4.22803C4.13024 5.22816 3.56838 6.58463 3.56838 7.99903C3.56838 9.41343 4.13024 10.7699 5.13037 11.77C6.13051 12.7702 7.48698 13.332 8.90137 13.332C10.3158 13.332 11.6722 12.7702 12.6724 11.77C13.6725 10.7699 14.2344 9.41343 14.2344 7.99903C14.2344 6.58463 13.6725 5.22816 12.6724 4.22803C11.6722 3.2279 10.3158 2.66603 8.90137 2.66603ZM2.23438 7.99903C2.23438 6.23083 2.93679 4.53506 4.18709 3.28475C5.4374 2.03445 7.13318 1.33203 8.90137 1.33203C10.6696 1.33203 12.3654 2.03445 13.6157 3.28475C14.866 4.53506 15.5684 6.23083 15.5684 7.99903C15.5684 9.76723 14.866 11.463 13.6157 12.7133C12.3654 13.9636 10.6696 14.666 8.90137 14.666C7.13318 14.666 5.4374 13.9636 4.18709 12.7133C2.93679 11.463 2.23438 9.76723 2.23438 7.99903ZM8.90137 3.99903C9.26937 3.99903 9.56837 4.29703 9.56837 4.66603V7.72303L11.3724 9.52803C11.4396 9.58862 11.4938 9.66226 11.5317 9.74446C11.5696 9.82667 11.5904 9.91573 11.5927 10.0062C11.5951 10.0967 11.579 10.1867 11.5454 10.2708C11.5119 10.3549 11.4616 10.4312 11.3976 10.4952C11.3336 10.5592 11.2572 10.6096 11.1731 10.6431C11.0891 10.6766 10.9991 10.6927 10.9086 10.6904C10.8181 10.688 10.729 10.6673 10.6468 10.6294C10.5646 10.5915 10.491 10.5373 10.4304 10.47L8.43038 8.47003C8.30521 8.34521 8.23471 8.1758 8.23438 7.99903V4.66603C8.23438 4.29703 8.53337 3.99903 8.90137 3.99903Z"
                fill="#000"
              />
            </svg>
          </div>
          <h3 className="font-[500] text-[#000] text-[16px] py-[5px] ml-2 flex">
            35% Special Bonus expires in
            <p className="font-[700] w-[100px] text-[#037FF9] text-Manrope flex justify-center ">
              {" "}
              {formatTime(timeLeft)} min
            </p>
          </h3>
        </div>
        <div className="mt-[2rem] w-[100%] max-w-[1240px] mx-auto">
          <div className="max-w-[1020px] mx-auto  w-full ">
            <h1 className="text-[40px] text-center text-[black] font-bold mb-4 ">
              Congratulations! 🎉 <br />
              You’ve sucessfully passed the Quiz
            </h1>
            <p className="text-[20px]  text-center font-[700] text-[black] mb-[53px] ">
              You’ve completed the challenge and unlocked this special offer.
              <br />
              Here’s your limited one-time bonus code to buy $BFX*
            </p>
            <div className="max-w-[618px] pt-6 pb-[1px] mx-auto bg-[#F0F0F0]">
              <div className="flex items-center max-w-[506px] mx-auto mb-[25px]">
                <p className="w-[50%] text-[16px] flex justify-start  font-[400] text-[black] ">
                  Your readiness:{" "}
                  <span className="font-[700] text-[#037FF9] "> 84%</span>
                </p>
              </div>
              <div className="flex justify-evenly pl-2 pt-3 items-center max-w-[506px] mx-auto w-[100%] bg-[#fff] mb-4">
                <div className="relative z-[9]">
                  <h2 className="text-black font-[500] text-[24px] mb-4">
                    Claim your personal <br />
                    <span className="font-[700] text-[#037FF9] ">35%</span> BFX
                    Bonus Code
                  </h2>
                  <div className="flex relative justify-around items-center border border-[#000] rounded-[8px] px-2">
                    <button
                      ref={textRef}
                      className="h-[40px] px-2 text-black"
                      type="button"
                    >
                      upw8U2kbKCKzSZi
                    </button>
                    <button onClick={handleCopy}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_744_3014)">
                          <path
                            d="M11.6907 0C12.9248 0.170705 13.8769 1.09178 13.9963 2.29055L13.9965 11.9484C13.9154 12.7158 12.779 12.7158 12.698 11.9484L12.6988 2.41356C12.6477 1.79049 12.1535 1.31612 11.5116 1.24679L4.08254 1.23812C3.36453 1.10442 3.35968 0.178479 4.05778 3.125e-07L11.6907 0Z"
                            fill="black"
                          />
                          <path
                            d="M2.33313 2.53246L9.0429 2.52734C10.3095 2.65224 11.2998 3.62482 11.4032 4.84333L11.4014 13.6615C11.2829 14.8778 10.264 15.865 8.98338 15.9532C6.85221 16.1001 4.53918 15.8412 2.38909 15.9515C1.11223 15.8369 0.103219 14.8601 0 13.632L0.00543973 4.78623C0.132209 3.60495 1.10056 2.66072 2.33313 2.53246ZM2.43012 3.77831C1.82195 3.86266 1.36821 4.32196 1.301 4.90734L1.29931 13.5385C1.35546 14.1678 1.85811 14.6571 2.51733 14.7069H8.88585C9.54192 14.653 10.052 14.1708 10.1039 13.5385V4.93688C10.0528 4.31418 9.55886 3.83943 8.91665 3.77011L2.43012 3.77831Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_744_3014">
                            <rect width="14" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    {showPopup && (
                      <div className="fixed bottom-[8%] z-[99] shadow left-1/2 transform -translate-x-1/2 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="bg-[#353535] text-white px-4 py-4 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full">
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
                                fill="#2189FF"
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
                <div className="w-[30%] relative min-h-[225px]">
                  <img
                    src={result}
                    className="min-w-[290px] min-h-[225px] absolute top-[0%] right-[-50%] z-[1]"
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-[506px] mx-auto">
                <p className="text-[16px] text-[black] font-[500] leading-[250%] text-center mb-4">
                  *At 3insiders, our goal is to match you with the right project
                  for your goals and secure exclusive deals you won’t find
                  anywhere else through our industry connections. A win for
                  everyone.{" "}
                </p>
                <div className="flex items-center justify-center mb-6">
                  <img src={result_icon_3} className="h-[132px]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[578.2px] mx-auto my-6">
            <button
              onClick={handleRoute}
              style={{
                borderRadius: "10px",
                background: "#037FF9",
              }}
              className={`py-[13px] w-[100%] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] text-[#fff] uppercase`}
            >
              CLAIM YOUR BONUS HERE:  BlockchainFX.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
