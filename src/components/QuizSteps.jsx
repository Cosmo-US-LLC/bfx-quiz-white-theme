const QuizSteps = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-end w-full">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex-1 relative h-[6px]">
            <div className="bg-[#434343] h-[3px] rounded-sm w-full" />
            {index < currentStep && (
              <div className="absolute top-[-1px] left-0 right-0 h-[6px] bg-[#2189FF] transition-all duration-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSteps;

// second progresss bar
// import { Link } from "react-router-dom";

// const QuizSteps = ({ currentStep, totalSteps }) => {
//   const progressPercent = (currentStep / totalSteps) * 100;

//   return (
//     <div className="w-full mb-8">
//       <div className="relative w-full h-[4px] bg-[#434343] rounded-sm overflow-visible">
//         <div
//           className="absolute left-0 bg-[#2189FF] rounded-sm transition-all duration-300"
//           style={{
//             width: `${progressPercent}%`,
//             height: "8px",
//             top: "-2px",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default QuizSteps;

// first

// import { Link } from "react-router-dom"

// const QuizSteps = ({ currentStep, totalSteps }) => {
//   return (
//     <div className="w-full mb-8">
//       <div className="flex w-full ">
//         {Array.from({ length: totalSteps }).map((_, index) => (
//           // <div key={index} className="flex-1">
//           //   <div
//           //     className={`h-1 l ${
//           //       index < currentStep ? "bg-[#2189FF]" : "bg-[#434343]"
//           //     } transition-all duration-300`}
//           //   ></div>
//           // </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default QuizSteps
