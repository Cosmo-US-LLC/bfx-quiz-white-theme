import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/header/logo.png";

const QuizHeader = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFact = location.pathname === "/quiz/fact-check";
  const isFactStep7 = location.pathname === "/quiz/fact-check-2";
  const isFactcheck3 = location.pathname === "/quiz/fact-check-3";
  const isFactno3 = location.pathname === "/quiz/fact-check-no=3";
  const isFactno4 = location.pathname === "/quiz/fact-check-no=4";
  const isFactno5 = location.pathname === "/quiz/fact-check-no=5";
  const isFactno6 = location.pathname === "/quiz/fact-check-no=6";
  const isFactno7 = location.pathname === "/quiz/fact-check-no=7";
  const isFactno8 = location.pathname === "/quiz/fact-check-no=7_2";
  const isFactno9 = location.pathname === "/quiz/step=18";
  const isFactno10 = location.pathname === "/quiz/step=19_28";

  const isResults = location.pathname === "/quiz/results";
  const isHome = location.pathname === "/";
  const isStep1 = location.pathname === "/quiz/step=1";
  const bestCrypto = location.pathname === "/quiz/best-crypto-project";
  const isFactno7_1 = location.pathname === "/quiz/fact-check-no=7_1";

  const getPrevStepUrl = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full h-[60px] items-center justify-between">
      {/* <div
        className={`flex  items-center mb-4 pt-2 ${
          isHome ? "justify-center" : "justify-between"
        } `}
      > */}
      <div className="w-[34px]">
        {!isHome && (
          <button onClick={getPrevStepUrl} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <rect
                width="34"
                height="34"
                rx="5"
                fill="#D9D9D9"
                fill-opacity="0.5"
              />
              <path
                d="M20.0666 24.0705C19.6762 24.461 19.0431 24.4608 18.6526 24.0705L12.2883 17.7063C11.8978 17.3158 11.8978 16.6827 12.2883 16.2922L18.6526 9.92796C19.0431 9.53773 19.6762 9.53753 20.0666 9.92796C20.4571 10.3184 20.4569 10.9515 20.0666 11.342L14.4094 16.9992L20.0666 22.6565C20.4569 23.047 20.4571 23.6801 20.0666 24.0705Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex items-center mt-2">
        <img src={Logo} className="h-[100%] w-[100%] bg-cover" alt="" />
      </div>

      <div className="text-black leading-[26px] font-[400] tracking-[0.04em] text-[16px]">
        {currentStep}
        {!isFact &&
          !isFactStep7 &&
          !isResults &&
          !isFactcheck3 &&
          !isFactno3 &&
          !isFactno4 &&
          !isFactno5 &&
          !isFactno6 &&
          !isFactno7 &&
          !isFactno8 &&
          !isFactno9 &&
          !isFactno10 &&
          !isHome &&
          !isStep1 &&
          !bestCrypto &&
          !isFactno7_1 &&
          `/${totalSteps}`}
      </div>
      {/* </div> */}
    </div>
  );
};

export default QuizHeader;
