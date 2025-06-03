import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";

const QuizStep23 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
   const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

 
    useEffect(() => {
    if (input1.trim() !== '' && input2.trim() !== '') {
      const timer = setTimeout(() => {
        navigate('/quiz/fact-check-no=5'); 
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [input1, input2, input3, input4, input5]);


  return (
    <div className="quiz-container min-h-screen flex flex-col items-center p-4">
      <QuizHeader currentStep={23} totalSteps={28} />
      <QuizSteps currentStep={23} totalSteps={28} />

     <div className="mt-12 max-w-[1024px] w-[100%]">
         <div className="space-y-[25px] w-full ">
       <div>
         <h1 className="text-[30px] text-center font-[700] leading-[120%] mb-1 ">
      ROI Calculator
        </h1>
          <p className="text-[16px] text-center font-[700] text-[#fff] leading-[150%] text-[#000]">
           Calculate your profits on coin launch
          </p>
       </div>
     
        <div className="flex justify-between items-center w-[100%] space-x-[40px]">
          <div className="w-[100%] max-w-[370px]">
            <label
              htmlFor=""
              className="block text-[16px] text-center font-[700] leading-[255%] text-[#fff]"
            >
              Based on Goal Income
            </label>
            <input
            onChange={(e) => setInput1(e.target.value)}
              type="text"
              className="max-w-[370px] w-[100%] px-2 outline-none h-[90px]"
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
                background: "#73737300",
              }}
             
            />
          </div>
          <div className="w-[100%] max-w-[370px]">
            <label
              htmlFor=""
              className="block text-[16px] text-center font-[700] leading-[255%] text-[#fff]"
            >
            How much Worth of BFX
            </label>
            <input
            onChange={(e) => setInput2(e.target.value)}
              type="text"
              className="max-w-[370px] w-[100%] px-2 outline-none h-[90px]"
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
                background: "#73737300",
              }}
            />
          </div>
           <div className="w-[100%] max-w-[370px]">
            <label
              htmlFor=""
              className="block text-[16px] text-center font-[700] leading-[255%] text-[#fff]"
            >
             BFX Price
            </label>
            <input
            onChange={(e) => setInput3(e.target.value)}
              type="text"
              className="max-w-[370px] w-[100%] px-2 outline-none h-[90px]"
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
                background: "#73737300",
              }}
              
            />
          </div>
        </div>
          <div className="flex justify-center space-x-[40px] w-[100%] items-center">
          <div className="max-w-[370px] w-[100%]">
            <label
              htmlFor=""
              className=" text-[16px] text-center block font-[700] leading-[255%] text-[#fff]"
            >
             Expected total Profit on Launch
            </label>
            <input
            onChange={(e) => setInput4(e.target.value)}
              type="text"
              className="max-w-[370px] w-[100%] px-2 outline-none h-[90px]"
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
                background: "#73737300",
              }}
            />
          </div>
          <div className="max-w-[370px] w-[100%]">
            <label
              htmlFor=""
              className=" text-[16px] text-center block font-[700] leading-[255%] text-[#fff]"
            >
           Expected Return From Staking BFX
            </label>
            <input
            onChange={(e) => setInput5(e.target.value)}
              type="text"
              className="max-w-[370px] w-[100%] px-2 outline-none h-[90px]"
              style={{
                border: "1px solid #737373",
                borderRadius: "6px",
                background: "#73737300",
              }}
              
            />
          </div>
       
        </div>
     
      </div>
    
     </div>
    </div>
  );
};

export default QuizStep23;
