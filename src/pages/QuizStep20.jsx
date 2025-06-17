import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import QuizSteps from "../components/QuizSteps";
import Loading from "../components/Loading";
import Step_20_1 from "../assets/step_20/step_20 (5).png";
import Step_20_2 from "../assets/step_20/step_20 (4).png";
import Step_20_3 from "../assets/step_20/step_20 (2).png";
import Step_20_4 from "../assets/step_20/step_20 (3).png";
import Step_20_5 from "../assets/step_20/step_20 (1).png";
import { BiRightArrowAlt } from "react-icons/bi";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuizStep20 = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const options = [
    { title: "Real product and active users", img: Step_20_1 },
    { title: "Daily passive income potential", img: Step_20_2 },
    { title: "Audited and secure", img: Step_20_3 },
    { title: "Early access before major growth", img: Step_20_4 },
    // { title: "Huge upside potential", img: Step_20_5 },
  ];

  const toggleOption = (index) => {
    if (selectedOptions.includes(index)) {
      // remove from selected
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
    } else {
      // add to selected
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      // In the original, this would navigate to "/quiz/step=17"
      console.log("Selected options:", selectedOptions);
      navigate("/quiz/step=17");
    }
  };

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 bg-black quiz-container">
      <QuizHeader currentStep={16} totalSteps={18} />
      <QuizSteps currentStep={20} totalSteps={28} />

      <div className="max-w-[750px] w-full text-center mt-6">
        <h1 className="text-[30px] font-[700] leading-[120%] text-center text-black">
          When you look at a new crypto projects, <br /> what matters most to
          you?
        </h1>

        <div className="grid grid-cols-1 max-w-[560px] mx-auto gap-2 mt-4">
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                backgroundColor: selectedOptions.includes(index)
                  ? ""
                  : "#EDEDED",
                // background: "#EDEDED",
                border: selectedOptions.includes(index)
                  ? "2px solid #2189FF"
                  : "2px solid transparent",
                color: selectedOptions.includes(index) ? "#E5AE00" : "#fff",
                transition: "border-color 0.3s",
              }}
              className="option-card py-4 px-6 flex items-center justify-between rounded-[8px] cursor-pointer"
              onClick={() => toggleOption(index)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={option.img || "/placeholder.svg"}
                  className="h-[40px]"
                  alt=""
                />
                <p
                  className={`text-start font-medium ${
                    selectedOptions.includes(index)
                      ? "text-[#2189FF]"
                      : "text-[#000]"
                  }`}
                >
                  {option.title}
                </p>
              </div>

              {selectedOptions.includes(index) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.25 25.5703C14.9244 25.5703 16.5823 25.2405 18.1292 24.5998C19.6761 23.959 21.0817 23.0199 22.2656 21.8359C23.4496 20.652 24.3887 19.2464 25.0295 17.6995C25.6702 16.1526 26 14.4947 26 12.8203C26 11.146 25.6702 9.488 25.0295 7.9411C24.3887 6.3942 23.4496 4.98865 22.2656 3.8047C21.0817 2.62075 19.6761 1.6816 18.1292 1.04085C16.5823 0.400101 14.9244 0.0703125 13.25 0.0703125C9.86849 0.0703126 6.62548 1.41361 4.23439 3.8047C1.8433 6.19579 0.5 9.4388 0.5 12.8203C0.5 16.2018 1.8433 19.4448 4.23439 21.8359C6.62548 24.227 9.86849 25.5703 13.25 25.5703ZM12.9213 17.977L20.0047 9.47698L17.8287 7.66365L11.737 14.9722L8.58492 11.8187L6.58175 13.8219L10.8317 18.0719L11.9283 19.1684L12.9213 17.977Z"
                    fill="#2189FF"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mx-auto !mt-4 mb-3 flex items-center justify-center">
          <button
            onClick={handleContinue}
            disabled={selectedOptions.length === 0}
            style={{
              borderRadius: "10px",
              background: "#2189FF",
            }}
            className={`flex items-center justify-center gap-2 py-[13px] w-full max-w-[307px] text-white text-[16px] font-[700] leading-[24px] tracking-[-0.32px] uppercase transition transform active:scale-95 ${
              selectedOptions.length === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Continue
            {/* <BiRightArrowAlt size={22} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStep20;
