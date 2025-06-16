import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";

import Loading from "../components/Loading";
import step_26_1 from "../assets/step_26/g1.webp";
import step_26_2 from "../assets/step_26/g2.webp";
import step_26_3 from "../assets/step_26/g3.webp";
import step_26_4 from "../assets/step_26/g4.webp";
import CircularProgress from "../components/circular-progress";
import { setI18n } from "react-i18next";

const QuizStep26 = () => {
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
    <div className="flex flex-col items-center min-h-screen px-4 overflow-hidden quiz-container">
      <QuizHeader currentStep={"Loading"} totalSteps={28} />
      <QuizSteps currentStep={26} totalSteps={28} />

      <div className="mt-[1.5rem] pb-8 w-[100%] max-w-[1240px] mx-auto ">
        <div className="flex-col items-center justify-center bg-[#12121200] p-4">
          <CircularProgress
            percentage={100}
            size={162}
            strokeWidth={16}
            backgroundColor="#D9D9D980"
            progressColor="#2189FF"
            textColor="#000"
            label="Your crypto profile is loading "
          />
        </div>
        <div className="max-w-[1240px] mx-auto  w-full ">
          <h1 className="text-[40px] font-[700] leading-[26px] text-center text-[#000] mb-4 ">
            Analysing your results
          </h1>
          <p className="text-[16px]  text-center font-[400] text-[#000] mb-6 ">
            {" "}
            3insiders is your unfair advantage in crypto, giving you direct
            insider access, early entry <br /> into private communities, and
            insights from a full-time expert research team.
          </p>
          <p className="text-[16px] text-left font-[700] text-[#000] mt-2 mb-3">
            Some of our past results
          </p>
          <div className="flex items-center justify-between space-x-4">
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
  );
};

export default QuizStep26;
