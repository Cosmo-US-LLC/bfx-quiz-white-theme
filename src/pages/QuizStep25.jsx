import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import Step_25 from "../assets/step_25/step_25.png";

const QuizStep25 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState();

const [mainGoal, setMainGoal] = useState("perfect wedding");

useEffect(() => {
  const goal = localStorage.getItem("mainGoal");
  if (goal) setMainGoal(goal);
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
   
    navigate("/quiz/fact-check-no=7");
  };



  return (
    <div className="quiz-container  min-h-screen overflow-hidden flex flex-col items-center p-4">
      <QuizHeader currentStep={""} totalSteps={28} />
      <QuizSteps currentStep={25} totalSteps={28} />

      <div className="flex items-center max-w-[1240px] mx-auto justify-between mt-[4rem] w-[100%]">
        <div className="max-w-[600px] space-y-[15px ] w-full ">
          <h1 className="text-[40px]  text-[#fff] font-bold mb-4 ">
      Your Personal Wealth Growth <br /> Challenge
          </h1>
          <p className="text-[16px] max-w-[400px] w-full  font-[400] text-[#fff] mb-6 ">Based on Your answers, we expect you to gain <br /> necessary investing skills of
          </p>
          <div>
            <p className="text-[16px]  font-[700] text-[#fff] mb-4 pt-6 ">Confident Investor by Jul,2025</p>
            <div className="bg-[#4B4B4B] rounded-[4px] max-w-[297px] w-[100%]">
                 <p className="text-[16px] text-center font-[700] leading-[250%]">Your Goal:{mainGoal}</p>
            </div>
          </div>
         <div className="flex justify-start pt-[20px]">
             <button
            onClick={handleNext}
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #E5AE00 0%, #FFD551 100%)",
            }}
            className={`py-[13px] max-w-[307px] w-[100%] text-[#000] font-[500]`}
          >
            Continue
          </button>
         </div>
        </div>
          <div className="  max-w-[500px] w-[100%] flex justify-center items-center rounded-[8px]">
            <img
              src={Step_25}
              className="max-h-[580px] w-[98%] object-cover "
              alt=""
            />
        </div>
      </div>
    </div>
  );
};

export default QuizStep25;
