import { useState, useEffect } from "react";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import { useNavigate, useLocation } from "react-router-dom";
import icons1 from "../assets/QuizStep19_28/19_28 (1).png";
import icons2 from "../assets/QuizStep19_28/19_28 (2).png";
import icons3 from "../assets/QuizStep19_28/19_28 (3).png";
import icons4 from "../assets/QuizStep19_28/19_28 (4).png";
import icons5 from "../assets/QuizStep19_28/19_28 (5).png";
import icons6 from "../assets/QuizStep19_28/19_28 (1).svg";
import icons7 from "../assets/QuizStep19_28/19_28 (2).svg";
import icons8 from "../assets/QuizStep19_28/19_28 (3).svg";
import icons9 from "../assets/QuizStep19_28/19_28 (4).svg";

const MobileQuizStep19_28 = ({ targetPercentage = 80 }) => {
  const [image, setImage] = useState(null);

  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const [readinessScore, setReadinessScore] = useState(0);

  const goalIncome = localStorage.getItem("goalIncome") || "$10,000";
  const specialWish = localStorage.getItem("specialWish") || "Buy a House";
  const mainGoal = localStorage.getItem("mainGoal") || "Financial freedom";

  useEffect(() => {
    const savedImage = localStorage.getItem("selectedImage");
    setImage(savedImage);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetPercentage / steps;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetPercentage) {
        currentProgress = targetPercentage;
        clearInterval(timer);
      }
      setProgress(currentProgress);
    }, stepDuration);

    const readinessTarget = 84;
    const readinessIncrement = readinessTarget / steps;
    let currentReadiness = 0;
    const readinessTimer = setInterval(() => {
      currentReadiness += readinessIncrement;
      if (currentReadiness >= readinessTarget) {
        currentReadiness = readinessTarget;
        clearInterval(readinessTimer);
      }
      setReadinessScore(currentReadiness);
    }, stepDuration);

    return () => {
      clearInterval(timer);
      clearInterval(readinessTimer);
    };
  }, [targetPercentage]);

  const getProgressLabel = (percentage) => {
    if (percentage <= 33) return "Low";
    if (percentage <= 66) return "Intermediate";
    return "High";
  };

  // const handleNext = () => {
  //   const currentPath = location.pathname;
  //   // navigate(`${currentPath}/quiz/step=18`);
  //   navigate(`/quiz/step=18`);
  // };
    const handleNext = () => {
    const currentPath = location.pathname;
    // navigate(`${currentPath}/quiz/step=18`);
    navigate(`/quiz/best-crypto-project`);
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
        <QuizHeader currentStep={"Results"} totalSteps={28} />
        <QuizSteps currentStep={23} totalSteps={28} />
        <div className=" w-[100%] max-w-[1240px] mx-auto">
          <h1 className="text-[28px] text-center text-[#000] font-bold mb-6 ">
            Here's your crypto profile
          </h1>
          <div>
            <div
              style={{
                background: "#D9D9D980",
              }}
              className=" max-w-[548px]  pt-6 mx-auto text-white  overflow-hidden"
            >
              {/* Header */}
              <div className="relative px-4 mb-6">
                <div className="">
                  <span
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(230, 232, 236, 0.31)",
                    }}
                    className="text-[14.1px] text-[#000] px-2 py-1 rounded  "
                  >
                    Your Results
                  </span>
                  <h2 className="text-black mt-4 font-[500] text-[18px] ">
                    Readiness Score
                  </h2>
                </div>
              </div>

              <div className="px-4 pt-6">
                <div className="mb-6">
                  <div className="relative mb-2">
                    <div className="w-full h-3 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-30"></div>

                    <div className="absolute top-0 left-0 h-3 overflow-hidden rounded-full">
                      <div
                        className="h-full transition-all duration-100 ease-out bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                        style={{ width: `${(progress / 100) * 100}%` }}
                      />
                    </div>

                    {progress > 0 && (
                      <div
                        className="absolute top-0 transition-all duration-100 ease-out transform -translate-x-1/2"
                        style={{ left: `${progress}%` }}
                      >
                        <div className="absolute transform -translate-x-1/2 -top-8 left-1/2">
                          <div className="px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
                            {/* {getProgressLabel(progress)} */}
                            High
                          </div>
                          <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-2 border-l-2 border-r-2 border-transparent top-full left-1/2 border-t-gray-800"></div>
                        </div>

                        <div className="w-4 h-4 bg-white rounded-full border-2 border-gray-600 shadow-lg transform -translate-y-0.5"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mb-2 text-xs text-gray-400">
                    <span className="text-[12.2px] font-[400] text-[#000]">
                      Low
                    </span>
                    <span className="text-[12.2px] font-[400] text-[#000]">
                      Intermediate
                    </span>
                    <span className="text-[12.2px] font-[400] text-[#000]">
                      High
                    </span>
                  </div>
                  {/* <div className="text-xs text-center text-gray-400">{Math.round(progress)}%</div> */}
                </div>

                <div
                  style={{
                    background: "#FFF",
                  }}
                  className="p-4 mb-6 rounded-lg "
                >
                  <div className="flex items-center gap-3">
                    <div className="text-sm">
                      <p className="mb-2 font-medium text-black">
                        Impressive score to succeed in crypto
                      </p>
                      <p className="leading-relaxed text-[#000]">
                        In 2024, cryptos like Bitcoin and Solana gained over
                        150%. You can benefit too by staying informed, spotting
                        undervalued projects early, and getting in before the
                        next bull run begins.
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-0.5">
                      <img src={icons5} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-[15px] pb-4">
                    <div className="flex items-center space-x-2">
                      <img src={icons9} alt="" />
                      <div>
                        <p className="text-[#8C8CA1] text-[10px] font-[400]">
                          Motivation
                        </p>
                        <h4 className="text-[12px] text-[#000] font-[500]">
                          High
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={icons8} alt="" />
                      <div>
                        <p className="text-[#8C8CA1] text-[10px] font-[400]">
                          Potential
                        </p>
                        <h4 className="text-[12px] text-[#000] font-[500]">
                          High
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={icons7} alt="" />
                      <div>
                        <p className="text-[#8C8CA1] text-[10px] font-[400]">
                          Income
                        </p>
                        <h4 className="text-[12px] text-[#000] font-[500]">
                          Fit for investing
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={icons6} alt="" />
                      <div>
                        <p className="text-[#8C8CA1] text-[10px] font-[400]">
                          Knowledge
                        </p>
                        <h4 className="text-[12px] text-[#000] font-[500]">
                          Intermediate
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    {image && (
                      <img
                        src={image}
                        alt="Selected"
                        className="flex mb-[-30px] mr-[-50px] max-w-[260px] justify-center items-center"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[548px]  pt-8 mx-auto text-black rounded-lg overflow-hidden">
              <h3 className="text-[16px] font-[700] text-black mb-3">
                Your readiness:{" "}
                <span className="text-[#3366F1]">
                  {Math.round(readinessScore)}%
                </span>
              </h3>
              <div
                className="py-[20px] rounded-[8px] mb-5 pl-[15px] pr-[1.5rem] flex justify-between items-center"
                style={{
                  border: "1px solid #C4C7CC",
                  background: "#2525251A",
                }}
              >
                <p className="text-[16px] text-[#000] font-[700] leading-relaxed ">
                  Based on your responses, your goal is to build wealth quickly
                  and generate an additional source of income.
                </p>
                <img src={icons4} alt="" />
              </div>
              <div className="flex items-center justify-between mb-6 space-x-2">
                <div
                  className="space-y-[8px] py-[15px] flex flex-col items-center max-w-[273.94px] w-[100%] rounded-[4px]"
                  style={{
                    background: "#2525251A",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <img src={icons2} alt="" />
                    <p className="text-[12px] text-[#000] font-[400]">
                      Your goal
                    </p>
                  </div>
                  <span className="text-[14px] text-black font-[700]">
                    {mainGoal}
                  </span>
                </div>
                <div
                  className="space-y-[8px] py-[15px] flex flex-col items-center max-w-[273.94px] w-[100%] rounded-[4px]"
                  style={{
                    background: "#2525251A",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <img src={icons3} alt="" />
                    <p className="text-[12px] text-[#000] font-[400]">
                      Your target
                    </p>
                  </div>
                  <span className="text-[14px] text-black font-[700]">
                    {specialWish}
                  </span>
                </div>
              </div>
              <div
                className="mb-6 flex justify-between rounded-[6px] py-[10px] px-[8px]"
                style={{
                  border: "1px solid #C9C9C9",
                }}
              >
                <h3 className="text-[13px] font-[700] text-black">
                  Your Financial Monthly Target:
                </h3>
                <span className=" text-[13px] font-[700] text-[#037FF9]">
                  {goalIncome}
                </span>
              </div>

              <button
                onClick={handleNext}
                style={{
                  borderRadius: "10px",
                  // background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
                  backgroundColor: "#037FF9",
                }}
                className={`py-[13px] w-[100%] text-[#fff] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase`}
              >
                Discover How Much you Could <br /> Earn with BFX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileQuizStep19_28;
