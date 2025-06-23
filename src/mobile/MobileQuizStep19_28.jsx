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

    const readinessTarget = 87;
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
                <div className="flex items-center justify-between">
                  <h2 className="text-black font-[500] text-[18px] ">
                    Readiness Score
                  </h2>
                   <span
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(230, 232, 236, 0.31)",
                    }}
                    className="text-[14.1px] text-[#000]  px-2 py-1 rounded  "
                  >
                    Your Results
                  </span>
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
                <span className="text-[#037ff9]">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M8.468 2.0653L13.1347 3.8153C13.3889 3.91059 13.6079 4.08121 13.7626 4.30434C13.9172 4.52747 14 4.79249 14 5.06397V8.6393C14 9.75359 13.6898 10.8458 13.104 11.7937C12.5182 12.7416 11.68 13.5076 10.6833 14.0059L8.44733 15.1239C8.30845 15.1934 8.15529 15.2296 8 15.2296C7.84471 15.2296 7.69155 15.1934 7.55267 15.1239L5.31667 14.0059C4.32003 13.5076 3.48184 12.7416 2.89605 11.7937C2.31025 10.8458 1.99998 9.75359 2 8.6393V5.06397C1.99997 4.79249 2.0828 4.52747 2.23744 4.30434C2.39207 4.08121 2.61113 3.91059 2.86533 3.8153L7.532 2.0653C7.83375 1.95219 8.16625 1.95219 8.468 2.0653ZM8 3.31397L3.33333 5.06397V8.6393C3.33349 9.50588 3.57493 10.3553 4.03061 11.0924C4.48629 11.8295 5.13821 12.4251 5.91333 12.8126L8 13.8573L10.0867 12.8139C10.862 12.4264 11.514 11.8305 11.9697 11.0931C12.4254 10.3558 12.6668 9.50611 12.6667 8.6393V5.06397L8 3.31397Z"
                        fill="#037FF9"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1457 5.18596C11.5598 5.44952 11.6819 5.99893 11.4184 6.4131L8.30721 11.3019C8.16246 11.5294 7.92229 11.6789 7.65428 11.7083C7.38627 11.7377 7.1194 11.6439 6.92875 11.4533L5.15097 9.67553C4.80384 9.32839 4.80384 8.76558 5.15097 8.41845C5.4981 8.07132 6.06092 8.07132 6.40805 8.41845L7.40228 9.41268L9.91846 5.45865C10.1821 5.04448 10.7315 4.92239 11.1457 5.18596Z"
                        fill="#037FF9"
                      />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M6.5 0.601562C5.71207 0.601562 4.93185 0.756753 4.2039 1.05828C3.47595 1.35981 2.81451 1.80177 2.25736 2.35892C1.13214 3.48414 0.5 5.01026 0.5 6.60156C0.5 8.19286 1.13214 9.71896 2.25736 10.8442C2.81451 11.4014 3.47595 11.8433 4.2039 12.1449C4.93185 12.4464 5.71207 12.6016 6.5 12.6016C8.0913 12.6016 9.6174 11.9695 10.7426 10.8442C11.8679 9.71896 12.5 8.19286 12.5 6.60156C12.5 5.90556 12.374 5.21556 12.134 4.56756L11.174 5.52756C11.258 5.88156 11.3 6.24156 11.3 6.60156C11.3 7.8746 10.7943 9.09546 9.8941 9.99566C8.9939 10.8959 7.77304 11.4016 6.5 11.4016C5.22696 11.4016 4.00606 10.8959 3.10589 9.99566C2.20571 9.09546 1.7 7.8746 1.7 6.60156C1.7 5.32852 2.20571 4.10762 3.10589 3.20745C4.00606 2.30727 5.22696 1.80156 6.5 1.80156C6.86 1.80156 7.22 1.84356 7.574 1.92756L8.54 0.961562C7.886 0.727562 7.196 0.601562 6.5 0.601562ZM10.7 0.601562L8.3 3.00156V3.90156L6.77 5.43156C6.68 5.40156 6.59 5.40156 6.5 5.40156C6.18174 5.40156 5.87652 5.52799 5.65147 5.75303C5.42643 5.97808 5.3 6.2833 5.3 6.60156C5.3 6.91982 5.42643 7.22504 5.65147 7.45009C5.87652 7.67513 6.18174 7.80156 6.5 7.80156C6.81826 7.80156 7.12348 7.67513 7.34853 7.45009C7.57357 7.22504 7.7 6.91982 7.7 6.60156C7.7 6.51156 7.7 6.42156 7.67 6.33156L9.2 4.80156H10.1L12.5 2.40156H10.7V0.601562ZM6.5 3.00156C5.54522 3.00156 4.62955 3.38084 3.95442 4.05598C3.27928 4.73111 2.9 5.64678 2.9 6.60156C2.9 7.55634 3.27928 8.47201 3.95442 9.14716C4.62955 9.82226 5.54522 10.2016 6.5 10.2016C7.45478 10.2016 8.3705 9.82226 9.0456 9.14716C9.7207 8.47201 10.1 7.55634 10.1 6.60156H8.9C8.9 7.23808 8.6471 7.84853 8.1971 8.29862C7.74697 8.74866 7.13652 9.00156 6.5 9.00156C5.86348 9.00156 5.25303 8.74866 4.80294 8.29862C4.35286 7.84853 4.1 7.23808 4.1 6.60156C4.1 5.96504 4.35286 5.35459 4.80294 4.9045C5.25303 4.45442 5.86348 4.20156 6.5 4.20156V3.00156Z"
                        fill="#037FF9"
                      />
                    </svg>
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
                className="mb-12 flex justify-between rounded-[6px] py-[10px] px-[8px]"
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
                className={`py-[13px] w-[100%] text-[#fff] text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase w-[94%] mx-auto fixed bottom-[0px]`}
              >
                YOUR TOP CRYPTO MATCH IN 2025
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileQuizStep19_28;
