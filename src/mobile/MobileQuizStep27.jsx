import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import step_26 from "../assets/step_26/step_26.png";
import CircularProgress from "../components/circular-progress";
import { setI18n } from "react-i18next";

import step_26_1 from "../assets/step_26/g1.webp";
import step_26_2 from "../assets/step_26/g2.webp";
import step_26_3 from "../assets/step_26/g3.webp";
import step_26_4 from "../assets/step_26/g4.webp";

const MobileQuizStep27 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/quiz/step=19_28");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Loading"} totalSteps={""} />
      <QuizSteps currentStep={22} totalSteps={28} />

      <div className="w-[100%] max-w-[1240px] mx-auto ">
        <div className="flex-col items-center justify-center bg-[#12121200] p-4">
          <CircularProgress
            percentage={100}
            size={162}
            strokeWidth={16}
            backgroundColor="#353535"
            progressColor="#037FF9"
            textColor="#FFFFFF"
          />
        </div>
        <div className="max-w-[1020px] mx-auto  w-full ">
          <p className="text-[16px] text-center font-[400] mb-4 text-[#000]">
            Your crypto profile is loading
          </p>
          <h1 className="text-[28px] text-center text-[#000] font-bold mb-4 ">
            Analysing your results
          </h1>
          <p className="text-[16px]  text-center font-[400] text-[#000] mb-6 ">
            3insiders is your unfair advantage in crypto, giving you direct
            insider access, early entry into private communities, and insights
            from a full-time expert research team.
          </p>
          <p className="text-[16px]  text-center font-[400] text-[#000] mb-4 ">
            Some of our past results
          </p>
          {/* <div>
            <div className="bg-[#D9D9D980] space-y-[5px] mx-auto rounded-[4px] p-8 mt-8 max-w-[458px] w-[100%]">
              <div>
                <img src={step_26} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="text-[#000] text-[16px] font-[700] leading-[160%]">
                  Like Binance at day one
                </p>
                <p
                  style={{
                    color: "#4BB4B4B",
                  }}
                  className="text-[16px] font-[400] leading-[160%]"
                >
                  Clay
                </p>
              </div>
              <div>
                <p className="text-[#000] text-[15px] font-[400] leading-[160%]">
                  Imagine getting into Coinbase, or Binance at day one, that’s
                  exactly what BFX is offering right now in its presale.
                </p>
              </div>
            </div>
          </div> */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <div className="shadow-lg rounded-[12px] overflow-hidden">
                <img
                  className="object-cover rounded-[12px] overflow-hidden"
                  src={step_26_1}
                  alt=""
                />
              </div>
              <div className="shadow-lg rounded-[12px] overflow-hidden">
                <img
                  className="object-cover rounded-[12px] overflow-hidden"
                  src={step_26_2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="shadow-lg rounded-[12px] overflow-hidden">
                <img
                  className="object-cover rounded-[12px] overflow-hidden"
                  src={step_26_3}
                  alt=""
                />
              </div>
              <div className="shadow-lg rounded-[12px] overflow-hidden">
                <img
                  className="object-cover rounded-[12px] overflow-hidden"
                  src={step_26_4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileQuizStep27;
