import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/header/Logo.webp";
import { BiArrowBack } from "react-icons/bi";

const QuizHeader = ({ currentStep, totalSteps }) => {
  console.log(currentStep, totalSteps);
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
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // delay scroll until after page change
};

  return (
    <div className="flex w-full h-[60px] items-center justify-between">
      <div className=" w-[10%] max-sm:w-[33%] mt-2">
        {!isHome && (
          <button
            onClick={getPrevStepUrl}
            className="text-[#000] hover:text-[#2189FF] transition duration-150 ease-in-out active:scale-95"
          >
            <BiArrowBack size={24} />
          </button>
        )}
      </div>

      <div className="flex items-center justify-center w-[80%] max-sm:w-[34%]">
        <img src={Logo} className="w-[100px] h-auto bg-cover" alt="" />
      </div>

      <div className="w-[10%] max-sm:w-[33%] text-[#000] text-end leading-[26px] font-[400] tracking-[0.04em] text-[16px]">
        {typeof currentStep === "number" ? (
          <span className="text-[#2189FF] text-[16px] pr-[2px]">{currentStep}</span>
        ) : (
          <span className="text-black text-[16px] pr-[2px]">{currentStep}</span>
        )}
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
    </div>
  );
};

export default QuizHeader;
