import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import imgby from "../assets/quiz/card_quiz.png";
import madle from "../assets/BestCrypto/madle.svg";
import bfx from "../assets/BestCrypto/bfx.svg";
import bfx_img from "../assets/BestCrypto/bfx_img.webp";
import bfx_sv_1 from "../assets/BestCrypto/bfx_q (1).svg";
import bfx_sv_2 from "../assets/BestCrypto/bfx_q (2).svg";
import bfx_sv_3 from "../assets/BestCrypto/bfx_q (3).svg";
import bfx_sv_4 from "../assets/BestCrypto/bfx_q (4).svg";
import bfx_sv_5 from "../assets/BestCrypto/bfx_q (5).svg";
import bfx_sv_6 from "../assets/BestCrypto/bfx_q (6).svg";
import bfx_sv_7 from "../assets/BestCrypto/bfx_q (7).svg";
import bfx_sv_8 from "../assets/BestCrypto/bfx_q (8).svg";
import bfx_sv_9 from "../assets/BestCrypto/bfx_q (9).svg";

const ProgressBar = ({
  title,
  progress,
  level,
  description,
  color = "bg-gradient-to-r from-yellow-400 to-orange-500",
  delay = 0,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, delay + 0);

    return () => {
      clearTimeout(progressTimer);
    };
  }, [progress, delay]);

  return (
    <div
      className="rounded-lg "
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <h3 className="text-[16px] font-[700] text-[#000] mb-4">{title}</h3>

      <div className="relative mb-3">
        <div className="relative w-full h-4 overflow-hidden bg-gray-200 rounded-full">
          <div
            className={`h-5 rounded-full ${color} relative`}
            style={{
              width: `${animatedProgress}%`,
              transition: "width 3s ease-out",
            }}
          >
            <div className="absolute -right-1 -top-0 w-4 h-4 !bg-[#D99A26]  rounded-full shadow-md"></div>
          </div>
        </div>
        <div className="absolute left-0 -bottom-6">
          <span
            className="px-2 py-1 text-xs text-white transition-all duration-500 bg-gray-600 rounded hover:bg-gray-700"
            style={{
              transition: "opacity 1.2s ease-out",
            }}
          >
            {level}
          </span>
        </div>
        {/* {level === "High" && (
          <div className="absolute right-0 -bottom-6">
            <span
              className="px-2 py-1 text-xs text-white transition-all duration-500 bg-gray-600 rounded hover:bg-gray-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 1.2s ease-out",
              }}
            >
              High
            </span>
          </div>
        )} */}
      </div>

      <p
        className="text-[#9190A3] text-[12px] font-[400] mt-8 leading-relaxed"
        style={{
          transition: "opacity 1.5s ease-out",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const BestCrypto = () => {
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const navigate = useNavigate();
    const [image, setImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("selectedImage");
    setImage(savedImage);
  }, []);

  const iconData = [
    {
      img: bfx_sv_1,
    },
    {
      img: bfx_sv_2,
    },
    {
      img: bfx_sv_3,
    },
    {
      img: bfx_sv_4,
    },
    {
      img: bfx_sv_5,
    },
    {
      img: bfx_sv_6,
    },
    {
      img: bfx_sv_7,
    },
    {
      img: bfx_sv_8,
    },
    {
      img: bfx_sv_9,
    },
  ];
  const progressData = [
    {
      title: "Investing skills",
      progress: 25,
      level: "Low",
      description:
        "BFX is currently in its presale phase and available at a discounted price on the official website, with easy purchase options via crypto or credit card.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Growth Potential",
      progress: 85,
      level: "High",
      description:
        "BFX has high growth potential due to its real trading volume, revenue-sharing model, and plans to list on major exchanges after the presale.",
      color: "bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600",
    },
    {
      title: "Risk",
      progress: 30,
      level: "Low",
      description:
        "BFX offers lower risk by allowing early access during presale, with discounted prices and a clear reward structure backed by real platform activity.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Passive Income",
      progress: 90,
      level: "High",
      description:
        "BFX provides passive income through its staking system, allowing holders to earn a share of trading fees without having to trade themselves.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  const handleNext = () => {
    navigate(`/quiz/step=18`);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center overflow-hidden quiz-container "
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="px-4 w-[100%]">
          <QuizHeader currentStep={"Best Crypto Project of 2025"} totalSteps={28} />
          <QuizSteps currentStep={28} totalSteps={28} />
        </div>
        <div className="max-w-[1020px] mx-auto  w-full ">
          <h1 className="text-[40px] text-center text-[#000] font-bold mb-4 ">
            You’ve successfully passed the challenge!
          </h1>
          <p className="text-[20px]  text-center font-[700] text-[#000] mb-5 ">
            This is the best crypto project on the market that fits specifically
            your criteria
          </p>
        </div>

      
        <div className="max-w-[1076px] relative bg-[#F1F1F1] rounded-[10px] mt-4 px-[32px] pt-[61px] pb-[40px] mb-4 mx-auto  w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[90px]">
                <img src={madle} className="absolute top-[-1%]" alt="" />
              </div>
              <div className="flex items-center">
                <img src={bfx} alt="" />
                <p className="text-[#24234C] text-[20px] font-[600] leading-[120%]">
                  ($BFX)
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-4">
              <button className="text-[#24234C] text-[18px] font-[700] bg-[#E6AF03] rounded-[6px] px-[23px] py-[13px]">
                Amount Raised: $1,9 M
              </button>
              {/* <button className="text-[#ffff] text-[18px] font-[700] bg-[#2189FF] rounded-[10px] px-[23px] py-[13px]">
                Visit Site
              </button> */}
            </div>
          </div>
          <div className="flex justify-between pt-[30px] space-x-[4rem]">
            <div className="max-w-[278.474px]">
              <img src={bfx_img} alt="" />
            </div>
            <div className="">
              <p className="text-[16px] text-[#000]">
                BlockchainFX is the first crypto exchange to connect blockchain
                with global finance. Imagine Binance but with over 500 assets
                including crypo, stocks, forex, and ETFs. Earn daily USDT
                rewards with $BFX, even during the presale. Fully audited by
                Certik and recently awarded the title of fastest growing trading
                app of 2025.
              </p>
              <div className="flex justify-between pt-[20px]">
                <div
                  className="pr-[48px] "
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.20)",
                  }}
                >
                  <p
                    style={{
                      color: "rgba(36, 35, 76, 0.50)",
                    }}
                    className="text-[16px] text-[] font-[700]"
                  >
                    Project Launched
                  </p>
                  <h3 className="text-[#444366] text-[29.2px] font-[600]">
                    April 2025
                  </h3>
                </div>
                <div
                  className="pr-[48px] pl-[15px] "
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.20)",
                  }}
                >
                  <p
                    style={{
                      color: "rgba(36, 35, 76, 0.50)",
                    }}
                    className="text-[16px] text-[rgba(36, 35, 76, 0.50)] font-[700]"
                  >
                    Meta
                  </p>
                  <h3 className="text-[#444366] text-[29.2px] font-[600]">
                    Exchange/ <br /> Staking
                  </h3>
                </div>
                <div className="pl-[15px]">
                  <p
                    style={{
                      color: "rgba(36, 35, 76, 0.50)",
                    }}
                    className="text-[16px] text-[rgba(36, 35, 76, 0.50)] font-[700]"
                  >
                    Meta
                  </p>
                  <div className="grid grid-cols-4 gap-[15px] pt-[10px]">
                    {iconData.map((item) => (
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div
          className="max-w-[1076px] overflow-hidden mb-[2rem] mt-6 pb-[3rem] pt-[1rem] w-[100%] relative mx-auto border border-[#C9C9C9] rounded-[6px]"
          style={{}}
        >
          <div className="">
            <div className="absolute -bottom-[1%] -left-1  ">
              {/* <img src={imgby} className="h-[319px]" alt="" /> */}
              {image && (
                <img src={image} alt="Selected" className="flex w-[260px] h-auto " />
              )}
            </div>
            <div className="grid grid-cols-1 pl-[7rem] md:grid-cols-2 gap-x-[5rem] gap-y-[2rem] max-w-[700px] mx-auto">
              {progressData.map((item, index) => (
                <ProgressBar
                  key={index}
                  title={item.title}
                  progress={item.progress}
                  level={item.level}
                  description={item.description}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-6 w-[100%] max-w-[1076px] mx-auto mt-2">
          <button
            onClick={handleNext}
            className="text-[25px] text-[#fff] font-[700] bg-[#2189FF] rounded-[10px] py-[13px] w-[100%] "
          >
            Calculate How Much You Could Earn With $BFX
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCrypto;
